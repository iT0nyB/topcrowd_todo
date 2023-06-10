import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import todo from "./slices/todoSlice";
import dialog from "./slices/dialogSlice";


const rootReducer = combineReducers({
    todo,
    dialog,
})


export default configureStore({
    reducer: rootReducer,
})
