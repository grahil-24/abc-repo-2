import {configureStore} from '@reduxjs/toolkit'
import inputReducer from './inputSlice';

//stores applications global state
const store = configureStore({
    //function which takes action and current state as input, and returns new state.
    reducer: {
        input: inputReducer
    }
});

export default store;
