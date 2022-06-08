import * as React from "react";
import { fetchUserListActions } from "../../actions/userActions";
import { fetchUserList, fetchUserListFailed } from "../userActionCreator";

describe("User list action creators", () => {
  it("Fetch user list action creator", () => {
    expect(fetchUserList()).toEqual({
      type: fetchUserListActions.initiate,
    });
  });

  it("Fetch user list failed action creator", () => {
    let payload = { error: "Something went wrong" };
    expect(fetchUserListFailed(payload)).toEqual({
      type: fetchUserListActions.failure,
      payload,
    });
  });
});
