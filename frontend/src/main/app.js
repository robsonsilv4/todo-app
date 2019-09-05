import React from 'react'
// import { Route } from 'react-router-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import './app.css'
import Menu from '../template/menu'
// import Routes from '../main/routes'
import Todo from '../todo/todo'

export default props => {
  return (
    <div className="container">
      <Menu />
      {/* <Routes /> */}
      {/* <Route component={Routes} /> */}
      <Todo />
    </div>
  )
}
