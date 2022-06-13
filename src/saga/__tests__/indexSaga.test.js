import { all } from "redux-saga/effects";
import rootSaga, { allSagas } from "..";
import { numberSaga } from "../numberSaga";
import { userListSaga } from "../userListSaga";

describe("Tests for index saga", () => {
  it("Must combine all sagas into one", () => {
    let rootSagaToTest = rootSaga();
    const allSagasDescriptor = rootSagaToTest.next().value;
    expect(allSagasDescriptor.payload).toEqual([
      numberSaga(),
      userListSaga(), //call all sagas here
    ]);
  });
});
