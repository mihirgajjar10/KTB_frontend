import { all } from "redux-saga/effects"

import fileupload from "./fileupload"

function* rootSaga() {
  yield all([
    fileupload(),
  ])
}

export default rootSaga
