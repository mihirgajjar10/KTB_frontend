import { combineReducers } from "redux";

import fileupload, * as fromFileUpload from "./fileupload";

const rootReducer = combineReducers({
  fileupload,
});

export default rootReducer;

//app

// export const getPromos = (state) => fromPromos.getPromos(state.promos);
