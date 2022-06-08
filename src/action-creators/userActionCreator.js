import { fetchUserListActions } from "../actions/userActions";

//initiate fetch user list
export const fetchUserList = () => ({
  type: fetchUserListActions.initiate,
});

//failed fetching user list
export const fetchUserListFailed = (payload) => ({
  type: fetchUserListActions.failure,
  payload,
});
