import axios from 'axios'
import { browserHistory } from 'react-router'
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER, FETCH_MESSAGE } from './types'

const API_URL = 'http://localhost:3090'

export function signinUser({ email, password }) {
  // reduxThunk allows to dispatch multiple different actions inside of an action creator
  return function(dispatch) {
  // Submit email and password to the server (API)
  axios.post(`${API_URL}/signin`, { email, password })
    .then( response => {
      // If request is good...
      // - Update state to indicate user is authenticated
      dispatch({ type: AUTH_USER })
      // - Save the JWT token
      localStorage.setItem('token', response.data.token)
      // - Redirect to the route '/feature'
      browserHistory.push('/feature')
    })
    .catch(() => {
      // If request is bad...
      // - Show an error to the user
      dispatch(authError('Bad Login Info.'))
    })
  }
}

export function signupUser({ email, password }) {

  return function(dispatch) {
    axios.post(`${API_URL}/signup`, { email, password })
      .then( response => {
        dispatch({ type: AUTH_USER })
        localStorage.setItem('token', response.data.token)
        browserHistory.push('/feature')
      })
      .catch(error => {
        dispatch(authError(error.response.data.error))
    })
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

export function signoutUser() {
  localStorage.removeItem('token')
  browserHistory.push('/')

  return {
    type: UNAUTH_USER
  }
}

export function fetchMessage() {
  return function(dispatch) {
    axios.get(API_URL, {
      headers: { authorization: localStorage.getItem('token') }
    })
      .then(response => {
        dispatch({
          type: FETCH_MESSAGE,
          payload: response.data.message
        })
      })
  }
}
