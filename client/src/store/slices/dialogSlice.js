import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    createTaskOpen: false,
    editTaskOpen: false,
    deleteTaskOpen: false
};

const slice = createSlice({
    name:'dialogs',
    initialState,
    reducers: {
        _setCreateTaskOpen: state => {
            state.createTaskOpen = true;
        },
        _setCreateTaskClosed: state =>{
            state.createTaskOpen = false;
        },
        _setEditTaskOpen: state => {
            state.editTaskOpen = true;
        },
        _setEditTaskClosed: state => {
            state.editTaskOpen = true;
        },
        _setDeleteTaskOpen: state => {
            state.deleteTaskOpen = true;
        },
        _setDeleteTaskClosed: state => {
            state.deleteTaskOpen = true;
        }
    }
});

export const {
    _setCreateTaskOpen,
    _setCreateTaskClosed,
    _setEditTaskOpen,
    _setEditTaskClosed,
    _setDeleteTaskOpen,
    _setDeleteTaskClosed,
} = slice.actions;

export const dialogSelector = state => state.dialogs;

export default slice.reducer;

