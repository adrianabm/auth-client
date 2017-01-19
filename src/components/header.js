import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import * as actions from '../actions'

class Header extends Component {
  handleSignout() {
    this.props.signoutUser().push('/')
  }

  renderLinks() {

    if (this.props.authenticated) {
      return (
        <li className="nav-item">
          <Link className="nav-link" to={ this.handleSignout.bind(this) } className="nav-link">Sign Out</Link>
        </li>
      )
    } else {
      return [
        <li className="nav-item" key={1}>
          <Link to="/signin" className="nav-link">Sign In</Link>
        </li>,
        <li className="nav-item" key={2}>
          <Link to="/signup" className="nav-link">Sign Up</Link>
        </li>
      ]
    }
  }

  render() {
    return (
      <div className="navbar navbar-light">
        <Link to="/" className="navbar-brand">Home</Link>
        <ul className="nav navbar-nav">
          { this.renderLinks() }
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps, actions)(Header)
