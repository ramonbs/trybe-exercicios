import { combineReducers } from 'redux';

const initialState = {
    counterReducer: {
        count: 0,
    },
    reducerInput: {
        name: '',
    },
};

const counterReducer = (state = initialState.counterReducer, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + action.payload,
            };
        case 'DECREMENT':
            return {
                ...state,
                count: state.count -  action.payload,
            };
        case 'RESET':
            return {
                ...state,
                count: state.count = action.payload,
            };
        default:
            return state;
    }
}

const reducerInput = (state = initialState.reducerInput, action) => {
    switch (action.type) {
        case 'INPUT':
            return {
                ...state,
                name: action.payload,
            };
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    counterReducer,
    reducerInput,
});

export default rootReducer;
