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
      />
    </Grid>

    <Grid cols="12 3 2">
      <Button style="primary" text="Adicionar" />
    </Grid>
  </div>
)
