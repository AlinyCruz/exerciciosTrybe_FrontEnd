const CHANGE_COLOR = 'CHANGE_COLOR';

// Criação da Action e do Dispatchs
const actionChangeBtn = () => {
  store.dispatch({ type: CHANGE_COLOR}) // <-- action
}

// Captura dos botões
const btnProx = document.querySelector('#previous');
// const btnAnt = document.querySelector('#next');

// Evento nos botões
btnProx.addEventListener('click', actionChangeBtn);
// btnAnt.addEventListener('click', actionChange);

// Estado inicial
const INITIAL_STATE = {
  colors: 'white',
  // index: 0,
};

// Criação do redux
const reducer = (state = INITIAL_STATE, action) => {
  
  switch (action.type) {
    case CHANGE_COLOR:
      const newColor = state.colors === 'white' ? 'black' : 'white';
      return { colors: newColor }
    default:
      return state;
    }
  };

// Criação do Store --- Não precisa mexer
const store = Redux.createStore(reducer); // <-- recebe o reducer como parâmentro

// Criação do Subscribe
store.subscribe(() => {
  const { colors } = store.getState();
  document.querySelector('#value').innerHTML = colors;
})




