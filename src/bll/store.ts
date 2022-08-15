import {counterReducer} from "./counterReducer";
import {combineReducers, legacy_createStore as createStore } from 'redux';


export const rootReducer = combineReducers({
    counter: counterReducer
})

export const store = createStore(rootReducer, )

export type AppStateType = ReturnType<typeof rootReducer>
