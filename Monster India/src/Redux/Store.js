import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {JobSearchReducer} from './JobSearch/JobSearchReducer'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({jobs: JobSearchReducer})

export const store = createStore( rootReducer, composeEnhancer(applyMiddleware(thunk)))