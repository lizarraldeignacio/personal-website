import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import FieldGroup from './fieldgroup';
import Recaptcha from 'react-recaptcha';
import { verifyReCaptcha } from '../actions/index';
import _ from 'lodash';
import {
  firebaseConnect,
  pathToJS
} from 'react-redux-firebase';

/**
  Login component

  --TODO: Refactoring
**/

/**
  Form Fields
**/
const FIELDS = {
  email: {
    type: 'email',
    label: 'Email address',
    name: "email",
    placeholder: 'Enter email',
    inputIconClass: 'glyphicon glyphicon-user'
  },
  password: {
    type: 'password',
    label: 'Password',
    name: "password",
    placeholder: '',
    inputIconClass: 'glyphicon glyphicon-lock'
  }
}

class Login extends Component {

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
        inputIconClass={fieldConfig.inputIconClass}
      />
    );
  }

  handleFormSubmit(values) {
    this.props.firebase.login({ email: values.email, password: values.password })
      .then((authData) => {
        this.props.history.push('/');
      });
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
      <div className="bootstrap-iso">
        <div className="Absolute-Center is-Responsive">
          <div className="col-sm-12 col-md-10 col-md-offset-1">
            <form onSubmit={this.props.handleSubmit(this.handleFormSubmit.bind(this))}>
              {_.map(FIELDS, (this.renderField.bind(this)))}
              {this.renderAlert.bind(this)()}
              <div className="form-group">
                <Recaptcha
                  render="explicit"
                  onloadCallback={() => {}}
                  sitekey="6LeDvh8UAAAAAPwLCjhOdf89JtvUJoDw_nBUD2Fl"
                  verifyCallback={recaptchaCallback.bind(this)}
                />
                <br/>
                {!this.props.auth && <input className="btn btn-primary center-block" disabled={!this.props.login.recaptcha} type="submit" value="Login"/>}
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function recaptchaCallback(response) {
  this.props.verifyReCaptcha(response);
}

function mapStateToProps(state) {
  return { errorMessage: "",
           login: state.login,
           //Patch, orderByChild is not working properly
           authError: pathToJS(state.firebase, 'authError'),
           auth: pathToJS(state.firebase, 'auth'),
           profile: pathToJS(state.firebase, 'profile')
         };
}

/**
  Validiation function, it validates each field on the form
**/
function validate(values) {
  const errors = {};
  _.each(FIELDS, (type, field) => {
    if (!values[field]) {
      errors[field] = `Please Enter a ${type['label']}`;
    }
  });

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
  connect(mapStateToProps, { verifyReCaptcha }), firebaseConnect(), reduxForm({
  validate,
  form: 'LoginForm'
}))(Login);
