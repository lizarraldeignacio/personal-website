import React, { Component } from 'react';
import { Field } from 'redux-form';

/**
  FormGroup basic component to create forms

  Params:
    brandName: The name of the brand
    validationState: The state of the control ('success', 'warning', 'error', null)
    key: Unique identifier
    label: FormControl label
    help: FormControl help text
    inputIcon: The icon that will appear on the left to the input box
**/

function renderField({ input, label, type, icon, meta: { touched, error, warning } }) {
  return (
    <div className="form-group row">
      <label className="form-control-label">{label}</label>
      <div className="form-group input-group">
        <span className="input-group-addon">
          <i className={icon}></i>
        </span>
        <input {...input} className="form-control" placeholder={label} type={type}/>
      </div>
      {touched && <small className="form-text text-muted">{error}</small>}
    </div>
  );
}

const FieldGroup = ({ type, name, label, state, inputIconClass, ...props }) =>  {
  return (
    <Field
      name={name}
      label={label}
      icon={inputIconClass}
      component={renderField}
      type={type}/>
  );
}

export default FieldGroup;
