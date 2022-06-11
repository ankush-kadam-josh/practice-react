import { all } from "redux-saga/effects";

//import all sagas
import { numberSaga } from "./numberSaga";
import { userListSaga } from "./userListSaga";
export const allSagas = [
  numberSaga(),
  userListSaga(),
  //call all sagas here
];

//initialize root saga
export default function* rootSaga() {
  yield all(allSagas);
}
