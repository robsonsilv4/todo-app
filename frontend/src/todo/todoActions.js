import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

// TODO: Criar constantes com os tipos

export const changeDescription = e => ({
  type: 'DESCRIPTION_CHANGED',
  payload: e.target.value,
})

export const search = () => {
  return (dispatch, getState) => {
    const description = getState().todo.description
    const search = description ? `&description__regex=/${description}` : ''
    const request = axios.get(`${URL}?sort=-createdAt${search}`).then(res =>
      dispatch({
        type: 'TODO_SEARCHED',
        payload: res.data,
      }),
    )
  }
}

export const add = description => {
  return dispatch => {
    axios
      .post(URL, { description })
      .then(res => dispatch({ type: 'TODO_ADDED' }))
      .then(res => dispatch(clear()))
      .then(res => dispatch(search()))
  }
}

export const markAsDone = todo => {
  return dispatch => {
    axios
      .put(`${URL}/${todo._id}`, { ...todo, done: true })
      .then(res => dispatch({ type: 'TODO_MARKED_AS_DONE', payload: res.data }))
      .then(res => dispatch(search()))
  }
}

export const markAsPending = todo => {
  return dispatch => {
    axios
      .put(`${URL}/${todo._id}`, { ...todo, done: false })
      .then(res =>
        dispatch({ type: 'TODO_MARKED_AS_PENDING', payload: res.data }),
      )
      .then(res => dispatch(search()))
  }
}

export const remove = todo => {
  return dispatch => {
    axios
      .delete(`${URL}/${todo._id}`)
      .then(res => dispatch({ type: 'TODO_REMOVED' }))
      .then(res => dispatch(search()))
  }
}

export const clear = () => {
  return [{ type: 'TODO_CLEAR' }, search()]
}
