import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import './app.css'
import Menu from '../template/menu'
import Routes from '../main/routes'

export default props => (
  <div className="container">
    <Menu />
    <Routes />
  </div>
)
