import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class SignIn extends Component {
  handleFormSubmit({ email, password }) {
    console.log(email, password)
    // Need to do something to log user in
  }

  render() {
    // handleSubmit is coming from the reduxForm library
    const { fields: { email, password }, handleSubmit } = this.props

    return (
      <form onSubmit={ handleSubmit(this.handleFormSubmit.bind(this)) }>
        <fieldset className="form-group">
          <label>Email:</label>
          <Field name="email" component="input" className="form-control" />
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <Field name="password" component="input" className="form-control" />
        </fieldset>
        <button action="submit" className="btn btn-primary">Sign In</button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password'] //matching the server
})(SignIn)
