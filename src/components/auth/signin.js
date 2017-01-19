import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import {compose} from 'redux'
import {connect} from 'react-redux'
import * as actions from '../../actions'

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
    const { fields: { email, password }, handleSubmit } = this.props

    return (
      <form onSubmit={ handleSubmit(this.handleFormSubmit.bind(this)) }>
        <fieldset className="form-group">
          <label>Email:</label>
          <Field name="email" component="input" className="form-control" />
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <Field name="password" component="input" type="password" className="form-control" />
        </fieldset>
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
  fields: ['email', 'password'] //matching the server
  })
)(SignIn)
