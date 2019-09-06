import React from 'react'

import Button from '../template/button'
import './todo.css'

export default props => {
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
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  )
}
