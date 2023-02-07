import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import characterReducer from './reducers/characterReducer';

const store = createStore(characterReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;