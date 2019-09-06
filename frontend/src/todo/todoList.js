import React from 'react'
import { connect } from 'react-redux'

import Button from '../template/button'
import './todo.css'

const TodoList = props => {
  const renderRows = () => {
    const list = props.list || []
    return list.map(todo => (
      <tr key={todo._id}>
        <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
        <td>
          <Button
            style="success"
            text="Concluir"
            hide={todo.done}
            onClick={() => props.handleMarkAsDone(todo)}
          />
          <Button
            style="warning"
            text="Desfazer"
            hide={!todo.done}
            onClick={() => props.handleMarkAsPending(todo)}
          />
          <Button
            style="danger"
            text="Remover"
            hide={!todo.done}
            onClick={() => props.handleRemove(todo)}
          />
        </td>
      </tr>
    ))
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Descrição</th>
          <th className="tableActions">Ações</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  )
}

const mapStateToProps = state => ({ list: state.todo.list })
export default connect(mapStateToProps)(TodoList)
