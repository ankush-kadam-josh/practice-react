import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserList } from "../../action-creators/userActionCreator";

const UserList = () => {
  const dispatch = useDispatch();
  let { isFetchUserLoading, userList } = useSelector(
    (state) => state.userListReducer
  );
  React.useEffect(() => {
    dispatch(fetchUserList());
  }, [dispatch]);

  const showUser = React.useCallback((user) => {
    return (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.gender}</td>
      </tr>
    );
  }, []);

  const showTableHeadings = React.useCallback(() => {
    return (
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Gender</th>
      </tr>
    );
  }, []);

  const showUserList = React.useCallback(() => {
    return (
      <table>
        {showTableHeadings()}
        {userList.map((user) => showUser(user))}
      </table>
    );
  }, [userList]);

  const showNoUserFoundMessage = React.useCallback(() => {
    return <div>No users found</div>;
  }, []);

  return (
    <div>
      {isFetchUserLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h3>User List</h3>
          {userList.length > 0 ? showUserList() : showNoUserFoundMessage()}
        </div>
      )}
    </div>
  );
};

export default UserList;
