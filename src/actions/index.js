import axios from 'axios'

const API_URL = 'http://localhost:3090'

export function signinUser({ email, password }) {
  // reduxThunk allows to dispatch multiple different actions inside of an action creator
  return function(dispatch) {
  // Submit email and password to the server (API)
  axios.post(`${API_URL}/signin`, { email, password })
  // If request is good...
  // - Update state to indicate user is authenticated
  // - Save the JWT token
  // - Redirect to the route '/feature'

  // If request is bad...
  // - Show an error to the user
  }
}
