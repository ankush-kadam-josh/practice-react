import { takeEvery } from "redux-saga/effects";
import { fetchUserListActions } from "../../actions/userActions";
import { fetchUserList, userListSaga } from "../userListSaga";

describe("user list saga tests", () => {
  //link our saga to a field to use further before all tests
  let userListSagaToTest;
  beforeAll(() => {
    userListSagaToTest = userListSaga();
  });

  it("It should wait for initiate fetch user list action and call fetchUserList method", () => {
    const takeEveryDescriptor = userListSagaToTest.next().value;
    expect(takeEveryDescriptor).toEqual(
      takeEvery(fetchUserListActions.initiate, fetchUserList)
    );
  });

  it("It should be done on next iteration", () => {
    expect(userListSagaToTest.next().done).toBeTruthy();
  });
});
