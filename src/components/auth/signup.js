import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { compose } from 'redux'
import { connect } from 'react-redux'

import * as actions from '../../actions'


const validate = formProps => {
  const errors = {}

  if (!formProps.email) {
    errors.email = 'Please enter an email'
  }

  if (!formProps.password) {
    errors.password = 'Please enter a password'
  }

  if (!formProps.passwordConfirm) {
    errors.passwordConfirm = 'Please enter a password confirmation'
  }

  if (formProps.passwordConfirm !== formProps.password) {
    errors.passwordConfirm = 'Passwords must match'
  }

  return errors
}

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <fieldset className="form-group">
    <label>{ label }</label>
    <input {...input} type={type} className="form-control"/>
    {touched && error && <span className="error">{error}</span>}
  </fieldset>
)

class Signup extends Component {

  handleFormSubmit(formProps) {
    // Call action creator to sign up the user
    this.props.signupUser(formProps)
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> { this.props.errorMessage }
        </div>
      )
    }
  }

  render() {
    const { handleSubmit } = this.props

    return (
      <form onSubmit={ handleSubmit(this.handleFormSubmit.bind(this)) }>
          <Field name="email"
            component={renderField}
            label="Email:" />
          <Field name="password"
            component={renderField}
            type="password"
            label="Password:"/>
          <Field name="passwordConfirm"
            component={renderField}
            type="password"
            label="Password Confirmation:"/>
          { this.renderAlert() }
        <button action="submit" className="btn btn-primary">Sign Up!</button>
      </form>
    )
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error }
}

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({
  form: 'signup',
  validate
  })
)(Signup)
