import { legacy_createStore as createStore } from 'redux';

document.querySelector("#app").innerHTML = `
  <div class="container">
    <h1>Minha Aplicação</h1>
    <p>Status: Você está <span id="status">Offline</span></p>
    <button id="toggle-theme">Light Mode</button>
    <button id="toggle-status">Ficar Online</button>
  </div>
`;

const INITIAL_STATE = {
  status: 'offline',
  theme: 'dark',
}

const reduce = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_STATUS':
      return { ...state, status: state.status === 'online' ? 'offline' : 'online' };
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'dark' ? 'light' : 'dark' };
    default:
      return state;
  }
};

const store = createStore(reduce);

const toggleStatus = () => {
  store.dispatch({ type: 'TOGGLE_STATUS' });
};

const toggleTheme = () => {
  store.dispatch({ type: 'TOGGLE_THEME' });
}

store.subscribe(() => {
  const { status, theme } = store.getState();
  document.querySelector("#status").innerHTML = status;
  document.querySelector("#app").className = theme;

  if (status === 'online') {
    document.querySelector("#toggle-status").innerHTML = 'Ficar Offline';
  }

  if (status === 'offline') {
    document.querySelector("#toggle-status").innerHTML = 'Ficar Online';
  }

  if (theme === 'light') {
    document.querySelector("#toggle-theme").innerHTML = 'Dark Mode';
    body.style.backgroundColor = '#fff';
    body.style.color = '#333';
  }

  if (theme === 'dark') {
    document.querySelector("#toggle-theme").innerHTML = 'Light Mode';
    body.style.backgroundColor = '#333';
    body.style.color = '#fff';
  }
});

document.querySelector("#toggle-status").addEventListener("click", toggleStatus);
document.querySelector("#toggle-theme").addEventListener("click", toggleTheme);


