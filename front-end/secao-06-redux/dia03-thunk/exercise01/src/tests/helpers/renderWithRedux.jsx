import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import characterReducer from '../../redux/reducers/characterReducer';

const renderWithRedux = (
    component,
    {
        initialState,
        store = createStore(characterReducer, initialState),
    } = {}, 
) => {
    return {
        ...render(<Provider store={store}>{component}</Provider>),
        store,
    };
};

export default renderWithRedux;
