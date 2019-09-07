import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { add, changeDescription, search, clear } from './todoActions'

import Grid from '../template/grid'
import Button from '../template/button'

class TodoForm extends Component {
  constructor(props) {
    super(props)
    this.keyHandler = this.keyHandler.bind(this)
  }

  componentWillMount() {
    this.props.search()
  }

  keyHandler(e) {
    const { add, clear, search, description } = this.props
    if (e.key === 'Enter') {
      e.shiftKey ? search() : add(description)
    } else if (e.key === 'Escape') {
      clear()
    }
  }

  render() {
    const { add, search, description } = this.props
    return (
      <div className="todo-form">
        <Grid cols="12 9 10">
          <input
            id="description"
            className="form-control"
            placeholder="Nome da tarefa..."
            onChange={this.props.changeDescription}
            onKeyUp={this.keyHandler}
            value={this.props.description}
          />
        </Grid>

        <Grid cols="12 3 2">
          <Button
            style="primary"
            text="Adicionar"
            onClick={() => add(description)}
          ></Button>
          <Button style="info" text="Pesquisar" onClick={search}></Button>
          <Button text="Limpar" onClick={this.props.clear}></Button>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => ({ description: state.todo.description })
const mapDispatchToProps = dispatch =>
  bindActionCreators({ add, changeDescription, search, clear }, dispatch)
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoForm)
