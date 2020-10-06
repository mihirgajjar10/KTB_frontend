import { createAction } from "redux-actions";

export const UPLOAD_FILE_REQUEST = "UPLOAD_FILE_REQUEST";
export const uploadFileRequest = createAction(UPLOAD_FILE_REQUEST);

export const GET_FILE_REQUEST = "GET_FILE_REQUEST";
export const getFileRequest = createAction(GET_FILE_REQUEST);

export const GET_FILE_SUCCESS = "GET_FILE_SUCCESS";
export const getFileSuccess = createAction(GET_FILE_SUCCESS);

