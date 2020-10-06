import { UPLOAD_FILE_REQUEST } from "../actions/fileupload";

const fileUpload = (
  state = {
    files: [],
  },
  action
) => {
  switch (action.type) {
    // case FETCH_FILES_SUCCESS:
    //   return {
    //     ...state,
    //     files: action.payload,
    //   };
    default:
      return state;
  }
};

export default fileUpload;
// export const getGlobalConfigs = (state) => state.globals;
