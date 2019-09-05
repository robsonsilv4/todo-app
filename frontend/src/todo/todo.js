import React, { Component } from 'react'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default class Todo extends Component {
  constructor(props) {
    super(props)
    this.handleAdd = this.handleAdd.bind(this)
  }

  handleAdd() {
    console.log(this)
    console.log('Adicionado.')
  }

  render() {
    return (
      <div>
        <PageHeader name="Tarefas" small="Cadastro" />
        <TodoForm handleAdd={this.handleAdd} />
        <TodoList />
      </div>
    )
  }
}
