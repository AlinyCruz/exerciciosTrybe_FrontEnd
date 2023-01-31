// ./src/redux/index.js
import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
// import counterReducer from './reducers/counterReducer'; // <--- essa função que contem o novo state e action
import rootReducer from './reducers/index'; // <--- essa função que contem o novo state e action

// Definir o estado inicial: 
// const INITIAL_STATE = { count: 0 };

// Contruir o redux com o estado inicial e a action:
// const reducer = (state = INITIAL_STATE, action) => state;

// Construir o store com o redux e a extenção DevTools:
const store = createStore(rootReducer, composeWithDevTools());
 
export default store;