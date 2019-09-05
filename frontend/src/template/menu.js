import React from 'react'

export default props => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-inverse">
    <div className="container">
      <a className="navbar-brand" href="/#">
        TodoApp
      </a>

      <div id="navbar" className="navbar-collapse collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="/#/todos">
              Tarefas
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#/sobre">
              Sobre
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)
