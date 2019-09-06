import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  todo: () => ({
    description: 'Ler livro',
    list: [
      {
        _id: 1,
        description: 'Pagar fatura do cartão',
        done: false,
      },
      {
        _id: 2,
        description: 'Devolver livros',
        done: false,
      },
      {
        _id: 3,
        description: 'Concluir curso',
        done: true,
      },
    ],
  }),
})

export default rootReducer
