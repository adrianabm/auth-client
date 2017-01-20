import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import reduxThunk from 'redux-thunk'

import App from './components/app'
import SignIn from './components/auth/signin'
import SignUp from './components/auth/signup'
import RequireAuth from './components/auth/require_auth'
import Welcome from './components/welcome'
import Feature from './components/feature'
import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ Welcome } />
        <Route path="/signin" component={ SignIn } />
        <Route path="/signup" component={ SignUp } />
        <Route path="/feature" component={ RequireAuth(Feature) } />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'))
