import { call, put, takeEvery } from "redux-saga/effects";
import { fetchUserListFailed } from "../action-creators/userActionCreator";
import { fetchUserListActions } from "../actions/userActions";
import { callApi } from "../apiHelper/apiHelper";

export function* fetchUserList() {
  const { success, failure } = fetchUserListActions;
  try {
    yield call(callApi, {
      payload: {
        body: null,
        reqPath: "https://gorest.co.in/public/v2/users",
        successAction: success,
        failureAction: failure,
      },
    });
  } catch (error) {
    console.error("error while fetching user list", error);
    yield put(fetchUserListFailed(error));
  }
}

export function* userListSaga() {
  yield takeEvery(fetchUserListActions.initiate, fetchUserList);
}
