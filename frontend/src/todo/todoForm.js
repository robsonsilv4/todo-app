import React from 'react'

import Grid from '../template/grid'
import Button from '../template/button'

export default props => (
  <div className="todo-form">
    <Grid cols="12 9 10">
      <input
        id="description"
        className="form-control"
        placeholder="Nome da tarefa..."
        onChange={props.handleChange}
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
