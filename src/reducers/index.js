import {preferencesReducer} from "./preferencesReducer"
import {todoReducer} from "./todoReducer"
import { combineReducers } from 'redux';

const reducerMappings = {
  "preferencesReducer": preferencesReducer,
  "todoReducer": todoReducer
}

export const rootReducer = combineReducers(reducerMappings)