import axios from 'axios'
import { browserHistory } from 'react-router'
import { AUTH_USER } from './types'

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
      // - Redirect to the route '/feature'
      browserHistory.push('/feature')


    })
    .catch(() => {
      // If request is bad...
      // - Show an error to the user

    })
  }
}
