import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import FieldGroup from './fieldgroup';
import _ from 'lodash';
import {
  firebaseConnect,
  pathToJS
} from 'react-redux-firebase';

/**
  ModalDialog component
  TODO Fix form validation

  This dialog renders the fileds that are necessary
  to add elements to each section

  fields: The fields that the dialog will contain

**/

class ModalDialog extends Component {

  constructor(props) {
    super(props);
  }

  renderField(fieldConfig) {
    return (
      <FieldGroup
        type={fieldConfig.type}
        key={fieldConfig.name}
        name={fieldConfig.name}
        label={fieldConfig.label}
        placeholder={fieldConfig.placeholder}
        inputClass={"input-field col m12"}
      />
    );
  }

  handleFormSubmit(values) {
    console.log("Submit");
    console.log(values);
    this.props.handleFormSubmit(values);
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> { this.props.errorMessage }
        </div>
      );
    }
  }

  render() {
    return (
      <div className="materialize-iso modal-overlay">
        <form onSubmit={this.props.handleSubmit(this.handleFormSubmit.bind(this))}>
          {_.map(this.props.fields, (this.renderField.bind(this)))}
          {this.renderAlert.bind(this)()}
          <input className="btn btn-primary center-block blue darken-1" type="submit" value="Acept"/>
        </form>
      </div>
    );
  }
}

/**
  Validiation function, it validates each field on the form
**/
function validate(values) {
  const errors = {};
  /*console.log("Validate");
  console.log(values);
  console.log(props.fields);
  _.each(props.fields, (type, field) => {
    if (!values[field]) {
      errors[field] = `Please Enter a ${type['label']}`;
    }
  });*/

  return errors;
}

/**
  Redux form decorator

  params:
    form: The name of the form
    fields: The fields of the form
    validate: the validation function
**/
export default compose(
  firebaseConnect(), reduxForm({
  validate: validate.bind(this),
  form: 'ModalDialogForm'
}))(ModalDialog);
