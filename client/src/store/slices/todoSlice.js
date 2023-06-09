import {createSlice} from '@reduxjs/toolkit';
import {getter} from "../../helpers/_client";

const initialState = {
    loading: true,
    hasErrors: false,
    savedSuccessfully: null,
    todos: [],
    todo: null,
    paginationObj: {currentPage: 1, totalPages:1, pageSize:5, total:0}
}

// Slice
const slice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        _get: state => {
            state.loading = true
            state.hasErrors = false
        },
        _getToDosSuccess: (state, { payload }) => {
            state.todos = payload.data
            state.paginationObj = {...state.paginationObj, ...payload.pagination}
            state.loading = false
            state.hasErrors = false
        },
        _getToDosFailure: state => {
            state.loading = false
            state.hasErrors = true
        },
        _save: state => {
            state.loading = true
            state.hasErrors = false
        },
        _saveToDoSuccess: (state, { payload }) => {
            state.loading = false
            state.hasErrors = false
            state.savedSuccessfully = true
            state.todo = {...state.todo, ...payload}
        },
        _saveToDoFailure: state => {
            state.loading = false
            state.hasErrors = true
            state.savedSuccessfully = false
        },
        _getToDo: (state, { payload }) => {
            state.todo = state.todos.filter(d => d.id === payload)[0]
        },
        _updateToDo: (state, { payload }) => {
            state.todo = payload
        }
    }
});

export const {
    _get,
    _getToDosSuccess,
    _getToDosFailure,
    _getToDo,
    _updateToDo,
    _save,
    _saveToDoSuccess,
    _saveToDoFailure,
} = slice.actions

export const todoSelector = state => state.todo

export default slice.reducer

export function getToDos(currentPage) {
    return async (dispatch) => {

        dispatch(_get())

        try {
            const todos = await getter(`?page=${currentPage}&pageSize=5`);
            dispatch(_getToDosSuccess(todos))
        }
        catch(e) {
            dispatch(_getToDosFailure())
        }

    }
}

export function getToDo (id) {
    return async (dispatch) => {
        dispatch(_getToDo(id))
    }
}

export function saveToDo (_todo, token) {
    return async (dispatch) => {

        dispatch(_save())

        try {
            const res = await client.put(`todos/${_todo.id}`, _todo,
                {
                    headers: {
                        Authorization:
                            `Bearer ${token}`,
                    },
                })

            if(res.data)
                dispatch(_saveToDoSuccess(res.data))
            else
                dispatch(_saveToDoFailure())

        }
        catch(e) {
            dispatch(_saveToDoFailure())
            console.log(e)
        }
    }
}

export function updateToDo (todo) {
    return async (dispatch) => {
        dispatch(_updateToDo(todo))
    }
}

