import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Todo from '../todo/todo'
import About from '../about/about'

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/todos" componet={Todo} />
          <Route exact path="/about" componet={About} />
          {/* Rota padrão */}
          <Route componet={Todo} />
        </Switch>
      </div>
    )
  }
}
