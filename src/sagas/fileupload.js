import { takeEvery, call, put } from "redux-saga/effects";
import axios from "axios";

// import * as appActions from "../actions/app";
import * as actions from "../actions/fileupload";

function* uploadFileSaga(action) {
  console.log("action", action);
  try {
  } catch (error) {}
}

function* watchFileSaga() {
  yield takeEvery(actions.uploadFileRequest, uploadFileSaga);
}

export default watchFileSaga;
