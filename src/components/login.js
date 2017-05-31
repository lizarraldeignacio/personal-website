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
    this.state = {error : null};
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
        inputClass={"input-field col s4 offset-s4"}
      />
    );
  }

  handleFormSubmit(values) {
    if (!this.props.login.recaptcha) {
      this.setState({ error: "Invalid captcha." });
      return;
    }
    this.props.firebase.login({ email: values.email, password: values.password })
      .then((authData) => {
        this.props.history.push('/');
      }).catch((error) => {
        const searchPattern = new RegExp('^' + 'auth/', 'i');
        if (searchPattern.test(error.code)) {
          this.setState({ error: "User or password is invalid." });
        }
        else {
          this.setState({ error: "Try again later." });
        }
      });
  }

  renderAlert() {
    console.log("Devuelvo mensaje");
  }

  render() {
    return (
      <div className="materialize-iso">
        <div className="valign-wrapper">

            <div className="container">
                <form onSubmit={this.props.handleSubmit(this.handleFormSubmit.bind(this))}>
                  {_.map(FIELDS, (this.renderField.bind(this)))}
                  <div className="row">
                    <div className="col s4 offset-s4">
                      {this.state.error &&
                        <div className="red-text">
                          <strong>Oops!</strong> { this.state.error }
                        </div>
                      }
                      <Recaptcha
                        render="explicit"
                        onloadCallback={() => {}}
                        sitekey="6LeffSMUAAAAAFxpA7nvHyhRMrr3iKvBoAyolC7u"
                        verifyCallback={recaptchaCallback.bind(this)}
                      />
                      <br/>
                    </div>
                  </div>
                  <div className="row">
                    <div className="center-btn">
                      {!this.props.auth &&
                        <button
                          className="waves-effect waves-light btn blue darken-1"
                          type="submit"
                          name="action"
                          disabled={!this.props.login.recaptcha}>
                          Login
                      </button>}
                    </div>
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
  return {
           login: state.login,
           auth: pathToJS(state.firebase, 'auth')
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
