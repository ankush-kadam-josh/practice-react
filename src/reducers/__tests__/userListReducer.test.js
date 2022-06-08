import {
  fetchUserList,
  fetchUserListFailed,
  fetchUserListReset,
  fetchUserListSuccess,
} from "../../action-creators/userActionCreator";
import { userListReducer, initialState } from "../userListReducer";

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
    const payload = {
      error: false,
      response: [
        {
          email: "vinay_ms_nambeesan@herman.io",
          gender: "male",
          id: 2,
          name: "Ms. Vinay Nambeesan",
          status: "active",
        },
        {
          email: "anil_joshi@jerde.info",
          gender: "male",
          id: 2269,
          name: "Anil Joshi",
          status: "active",
        },
      ],
    };
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
