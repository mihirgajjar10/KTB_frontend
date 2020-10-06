import { connect } from "react-redux"

import { uploadFileRequest } from "../actions/fileupload"
import FileUpload from "./FileUpload"

const mapStateToProps = state => ({
})

const FileUploadContainer = connect(mapStateToProps, {
  uploadFileRequest
})(FileUpload)

export default FileUploadContainer
