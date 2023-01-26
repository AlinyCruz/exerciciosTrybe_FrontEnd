// ./src/redux/index.js
import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

// Definir o estado inicial: 
const INITIAL_STATE = { count: 0 };

// Contruir o redux com o estado inicial e a action:
const reducer = (state = INITIAL_STATE, action) => state;

// Construir o store com o redux e a extenção DevTools:
const store = createStore(reducer, composeWithDevTools());
 
export default store;