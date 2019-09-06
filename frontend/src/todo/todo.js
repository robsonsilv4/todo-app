import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {
  constructor(props) {
    super(props)

    this.state = { description: '', list: [] }
    this.refresh()

    this.handleAdd = this.handleAdd.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleClear = this.handleClear.bind(this)
    this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
    this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
  }

  handleAdd() {
    const description = this.state.description
    axios.post(URL, { description }).then(res => this.refresh())
  }

  refresh(description = '') {
    const search = description ? `&description__regex=/${description}` : ''
    axios
      .get(`${URL}?sort=-createdAt${search}`)
      .then(res =>
        this.setState({ ...this.state, description, list: res.data }),
      )
  }

  handleSearch() {
    this.refresh(this.state.description)
  }

  handleClear() {
    this.resfresh(this.refresh())
  }

  handleChange(e) {
    this.setState({ ...this.state, description: e.target.value })
  }

  handleMarkAsDone(todo) {
    axios
      .put(`${URL}/${todo._id}`, { ...todo, done: true })
      .then(res => this.refresh(this.state.description))
  }

  handleMarkAsPending(todo) {
    axios
      .put(`${URL}/${todo._id}`, { ...todo, done: false })
      .then(res => this.refresh(this.state.description))
  }

  handleRemove(todo) {
    axios
      .delete(`${URL}/${todo._id}`)
      .then(res => this.refresh(this.state.description))
  }

  render() {
    return (
      <div>
        <PageHeader name="Tarefas" small="Cadastro" />
        <TodoForm
          description={this.state.description}
          handleAdd={this.handleAdd}
          handleSearch={this.handleSearch}
          handleClear={this.handleClear}
          handleChange={this.handleChange}
        />
        <TodoList
          list={this.state.list}
          handleMarkAsDone={this.handleMarkAsDone}
          handleMarkAsPending={this.handleMarkAsPending}
          handleRemove={this.handleRemove}
        />
      </div>
    )
  }
}
