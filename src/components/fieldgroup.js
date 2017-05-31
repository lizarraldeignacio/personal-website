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

function renderField({ input, label, type, icon, inputClass, meta: { touched, error, warning } }) {
  return (
    <div className="row">
      <div className={inputClass}>
        <label forHtml={label}>{label}</label>
        <input {...input} className="validate" id={label} type={type}/>
        {touched && <small className="form-text text-muted">{error}</small>}
      </div>
    </div>
  );
}

const FieldGroup = (
  { type, name, label, state, inputIconClass, inputClass, ...props }) =>  {
  return (
    <Field
      name={name}
      label={label}
      icon={inputIconClass}
      component={renderField}
      type={type}
      inputClass={inputClass}/>
  );
}

export default FieldGroup;
