import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

export const changeDescription = e => ({
  type: 'DESCRIPTION_CHANGED',
  payload: e.target.value,
})

export const search = () => {
  const request = axios.get(`${URL}?sort=-createdAt`)
  return {
    type: 'TODO_SEARCHED',
    payload: request,
  }
}

export const add = description => {
  return dispatch => {
    axios
      .post(URL, { description })
      .then(res => dispatch({ type: 'TODO_ADDED', payload: res.data }))
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
