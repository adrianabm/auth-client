import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import * as actions from '../../actions'

class Signup extends Component {
  render() {
    const { handleSubmit } = this.props

    return (
      <form>
        <fieldset className="form-group">
          <label>Email:</label>
          <Field name="email"
            component="input"
             className="form-control" />
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <Field name="password"
            component="input"
            type="password"
            className="form-control" />
        </fieldset>
        <fieldset className="form-group">
          <label>Password Confirmation:</label>
          <Field name="passwordConfirm"
            component="input"
            type="password"
            className="form-control" />
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
