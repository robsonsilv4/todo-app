import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import './app.css'
import Menu from '../template/menu'
import Todo from '../todo/todo'
import About from '../about/about'

export default props => (
  <div className="container">
    <Menu />
    <Todo />
    <About />
  </div>
)
