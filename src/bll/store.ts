import {counterReducer} from "./counterReducer";
import {combineReducers, legacy_createStore as createStore } from 'redux';
import {loadState, saveState} from "../utils/localstorage-utils";


export const rootReducer = combineReducers({
    counter: counterReducer
})

export const store = createStore(rootReducer, loadState())
store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    });
});

export type AppStateType = ReturnType<typeof rootReducer>
