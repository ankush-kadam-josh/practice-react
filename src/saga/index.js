import { all } from "redux-saga/effects";

//import all sagas
import { numberSaga } from "./numberSaga";

const allSagas = [
  numberSaga(),
  //call all sagas here
];

//initialize root saga
export default function* rootSaga() {
  yield all(allSagas);
}
