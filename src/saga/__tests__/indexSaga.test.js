import { all } from "redux-saga/effects";
import rootSaga, { allSagas } from "..";

describe("Tests for index saga", () => {
    //link root saga to a field to use further before each test cases
    let rootSagaToTest;
    beforeAll(() => {
        rootSagaToTest = rootSaga();
    });

    it("Should yield all requests from all sagas", () => {
        const allSagasDescriptor = rootSagaToTest.next().value;
        expect(allSagasDescriptor).toEqual(all(allSagas));
    });
});
