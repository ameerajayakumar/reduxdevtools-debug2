import {preferencesReducer} from "./preferencesReducer"
import {todoReducer} from "./todoReducer"
// import { combineReducers } from 'redux';

export const reducersMapping = {
  "preferencesReducer": preferencesReducer,
  "todoReducer": todoReducer
}

// export const rootReducer = combineReducers(reducersMapping)