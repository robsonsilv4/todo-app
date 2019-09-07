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

// export const add = description => {
//   const request = axios.post(URL, { description })
//   return [
//     {
//       type: 'TODO_ADDED',
//       payload: request,
//     },
//     search(),
//   ]
// }

export const add = description => {
  return dispatch => {
    axios
      .post(URL, { description })
      .then(res => dispatch({ type: 'TODO_ADDED', payload: res.data }))
      .then(res => dispatch(search()))
  }
}
