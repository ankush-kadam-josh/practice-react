import { fetchUserListActions } from "../actions/userActions";

export const initialState = {
  isFetchUserLoading: false,
  userList: [],
};

export const userListReducer = (state = initialState, action) => {
  switch (action.type) {
    case fetchUserListActions.initiate:
      return {
        ...state,
        isFetchUserLoading: true,
      };
    case fetchUserListActions.success:
      return {
        ...state,
        isFetchUserLoading: false,
        userList: action.payload.response,
      };
    case fetchUserListActions.failure:
      return {
        ...state,
        isFetchUserLoading: false,
      };
    case fetchUserListActions.reset:
      return initialState;
    default:
      return state;
  }
};
