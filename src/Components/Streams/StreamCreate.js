import React from "react";

import { Field, reduxForm } from "redux-form";

import { connect } from "react-redux";

import { createStream } from "../../store/streams/actions";

import { Row, Col, Form, Container, Button } from "react-bootstrap";

class StreamCreate extends React.Component {
  // rendering input
  renderInput = ({ input, label, meta }) => {
    return (
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="w-100 text-start">{label}</Form.Label>
        <Form.Control {...input} />
        {meta.error && meta.touched && (
          <Form.Text className="w-100 text-start d-block text-danger">
            {meta.error}
          </Form.Text>
        )}
      </Form.Group>
    );
  };

  onFormSubmit = (formValues) => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <Container>
        <Form
          className="mt-5"
          onSubmit={this.props.handleSubmit(this.onFormSubmit)}
        >
          <Row>
            <Col sm={6} md={8}>
              <Field
                name="title"
                component={this.renderInput}
                label="Enter Title"
              ></Field>
            </Col>
            <Col sm={6} md={8}>
              <Field
                name="description"
                component={this.renderInput}
                label="Enter Description"
              ></Field>
            </Col>
          </Row>
          <Row>
            <Col sm={6} md={8} className="text-end">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}

// validation for our formValues
const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must enter a title";
  }
  if (!formValues.description) {
    errors.description = "You must enter a description";
  }
  return errors;
};

const formWrapped = reduxForm({
  form: "streamCreate",
  validate,
})(StreamCreate);

export default connect(null, { createStream })(formWrapped);
