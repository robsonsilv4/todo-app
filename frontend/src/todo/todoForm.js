import React from 'react'
import { connect } from 'react-redux'

import Grid from '../template/grid'
import Button from '../template/button'

const TodoForm = props => {
  const keyHandler = e => {
    if (e.key === 'Enter') {
      e.shiftKey ? props.handleSearch() : props.handleAdd()
    } else if (e.key === 'Escape') {
      props.handleClear()
    }
  }

  return (
    <div className="todo-form">
      <Grid cols="12 9 10">
        <input
          id="description"
          className="form-control"
          placeholder="Nome da tarefa..."
          onChange={props.handleChange}
          onKeyUp={keyHandler}
          value={props.description}
        />
      </Grid>

      <Grid cols="12 3 2">
        <Button
          style="primary"
          text="Adicionar"
          onClick={props.handleAdd}
        ></Button>
        <Button
          style="info"
          text="Pesquisar"
          onClick={props.handleSearch}
        ></Button>
        <Button text="Limpar" onClick={props.handleClear}></Button>
      </Grid>
    </div>
  )
}

const mapStateToProps = state => ({ description: state.todo.description })
export default connect(mapStateToProps)(TodoForm)
