import { fetchUserListActions } from "../actions/userActions";

//initiate fetch user list
export const fetchUserList = () => ({
  type: fetchUserListActions.initiate,
});

//success fetching user list
export const fetchUserListSuccess = (payload) => ({
  type: fetchUserListActions.success,
  payload,
});

//failed fetching user list
export const fetchUserListFailed = (payload) => ({
  type: fetchUserListActions.failure,
  payload,
});

//success fetching user list
export const fetchUserListReset = () => ({
  type: fetchUserListActions.reset,
});
