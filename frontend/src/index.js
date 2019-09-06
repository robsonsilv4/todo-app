import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { HashRouter as Router } from 'react-router-dom'

import App from './main/app'
import reducers from './main/reducers'

const store = createStore(reducers)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
)
