import React, { Component, useState, useEffect } from "react";
import {
  Button,
  Form,
  Container,
  Card,
  Col,
  Image,
  Row,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const FileUpload = ({ uploadFileRequest }) => {
  const [selectedImage, setSelectedImage] = useState();
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  useEffect(() => {
    if (!selectedImage) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedImage);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedImage]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedImage(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedImage(e.target.files[0]);
  };

  return (
    <div className="fileMain">
      <div className="container">
        <Form>
          <Row>
            <Col sm={6}>
              <Form.Group controlId="formBasicEmail">
                <Form.File
                  id="exampleFormControlFile1"
                  accept="image/*"
                  onChange={onSelectFile}
                  label="Select Image"
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.File
                  id="exampleFormControlFile1"
                  onChange={(evt) => setSelectedFile(evt.target.files[0])}
                  label="Select File"
                />
              </Form.Group>

              <Button
                variant="primary"
                type="button"
                onClick={() => {
                  // uploadFileRequest({ selectedImage, selectedFile });
                }}
              >
                Submit
              </Button>
            </Col>

            <Col sm={6}>
              <div className="imagePreview">
                <Image src={preview} rounded />
              </div>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default FileUpload;
