import React from 'react'
import { HashRouter, Route } from 'react-router-dom'

import Todo from '../todo/todo'
import About from '../about/about'

export default props => (
  <HashRouter>
    <Route path="/todos" componet={Todo} />
    <Route path="/about" componet={About} />
    <Route componet={Todo} />
  </HashRouter>
)
