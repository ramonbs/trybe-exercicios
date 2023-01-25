import './style.css'
import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

document.querySelector('#app').innerHTML = `
  <div>
    <h1>
      Redux Counter
    </h1>
    <div id="counter">
      <h2>Counter</h2>
      <div class="counter">
        <button class="decrement">-</button>
        <span class="count">0</span>
        <button class="increment">+</button>
      </div>
    </div>
  </div>
`

// declarando o estado inicial
const INITIAL_STATE = { count: 0 }

// criando o reducer que vai receber o estado inicial e a ação que será executada no estado
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return { count: state.count + 1 };
    case 'DECREMENT_COUNTER':
      return { count: state.count - 1 };  
    default:
      return state;
  }
};

// criando a store que vai receber o reducer
const store = createStore(reducer, composeWithDevTools());

// criando as ações que serão executadas
const actionToIncrement = { type: 'INCREMENT_COUNTER' }
const actionToDecrement = { type: 'DECREMENT_COUNTER' }

// capturando os botões que vão disparar as ações
const INCREMENT_BUTTON = document.querySelector('.increment')
const DECREMENT_BUTTON = document.querySelector('.decrement')

// adicionando os listeners nos botões
INCREMENT_BUTTON.addEventListener('click', () => {
  store.dispatch(actionToIncrement)
});

DECREMENT_BUTTON.addEventListener('click', () => {
  store.dispatch(actionToDecrement)
});

// adicionando o listener na store para atualizar o estado
store.subscribe(() => {
  const counter = document.querySelector('.count')
  counter.innerHTML = store.getState().count
});
