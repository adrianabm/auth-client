import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import * as actions from '../../actions'

const validate = formProps => {
  const errors = {}
  if (formProps.password !== formProps.passwordConfirm) {
    errors.password = 'Passwords must match'
  }

  return errors
}

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <input {...input} type={type} className="form-control"/>
    {touched && error && <span className="error">{error}</span>}
  </div>
)

class Signup extends Component {

  render() {
    const { handleSubmit } = this.props

    return (
      <form>
        <fieldset className="form-group">
          <label>Email:</label>
          <Field name="email"
            component={renderField} />
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <Field name="password"
            component={renderField}
            type="password" />
        </fieldset>
        <fieldset className="form-group">
          <label>Password Confirmation:</label>
          <Field name="passwordConfirm"
            component={renderField}
            type="password" />
        </fieldset>
        <button action="submit" className="btn btn-primary">Sign Up!</button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'signup',
  validate
})(Signup)
