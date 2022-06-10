import {
  fetchUserList,
  fetchUserListFailed,
  fetchUserListReset,
  fetchUserListSuccess,
} from "../../action-creators/userActionCreator";
import { userListReducer, initialState } from "../userListReducer";
import FetchUserListMock from "./FetchUserListSuccess.mock.json";

describe("User list reducer tests", () => {
  //store initial state before running each test case
  let state;
  beforeEach(() => {
    state = initialState;
  });

  it("Initiate fetching user list", () => {
    const updatedState = { ...state, isFetchUserLoading: true };
    expect(userListReducer(state, fetchUserList())).toEqual(updatedState);
  });

  it("On fetch user list success", () => {
    const payload = FetchUserListMock;
    const updatedState = {
      ...state,
      userList: payload.response,
      isFetchUserLoading: false,
    };
    expect(userListReducer(state, fetchUserListSuccess(payload))).toEqual(
      updatedState
    );
  });

  it("On fetch user list failure", () => {
    let payload = { error: true, serverErrors: "Not Found" };
    let updatedState = {
      ...state,
      isFetchUserLoading: false,
    };
    expect(userListReducer(state, fetchUserListFailed(payload))).toEqual(
      updatedState
    );
  });

  it("On fetch user list reset", () => {
    expect(userListReducer(state, fetchUserListReset())).toEqual(state);
  });
});
