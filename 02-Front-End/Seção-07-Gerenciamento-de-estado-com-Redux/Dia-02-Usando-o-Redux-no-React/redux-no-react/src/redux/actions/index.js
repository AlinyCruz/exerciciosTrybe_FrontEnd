// ./src/redux/actions/index.js
export const actionCreator = (increment = 1) => ({  // <--- Caso não receba nenhum parâmentro ele tera o valor padrão de 1
  type: 'INCREMENT_COUNTER',
  payload: increment,
});