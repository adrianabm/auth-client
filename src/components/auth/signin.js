import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import {compose} from 'redux'
import {connect} from 'react-redux'
import * as actions from '../../actions'

const validate = formProps => {
  const errors = {}

  if (!formProps.email) {
    errors.email = 'Please enter an email'
  }

  if (!formProps.password) {
    errors.password = 'Please enter a password'
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

class SignIn extends Component {

  handleFormSubmit({ email, password }) {
    // Need to do something to log user in
    this.props.signinUser({ email, password })
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops! { this.props.errorMessage }</strong>
        </div>
      )
    }
  }

  render() {
    // handleSubmit is coming from the reduxForm library
    const { handleSubmit } = this.props

    return (
      <form onSubmit={ handleSubmit(this.handleFormSubmit.bind(this)) }>
          <Field name="email"
            component={renderField}
            label="Email:" />
          <Field name="password"
            component={renderField}
            type="password"
            label="Password:" />
        { this.renderAlert() }
        <button action="submit" className="btn btn-primary">Sign In</button>
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
  form: 'signin',
  validate
  })
)(SignIn)
