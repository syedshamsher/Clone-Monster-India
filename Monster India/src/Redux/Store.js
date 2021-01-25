import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { FilteredJobsReducer } from './FilteredJobs/JobSearchReducer';
import {JobSearchReducer} from './JobSearch/JobSearchReducer'
import { JobSearchPageFirstReducer } from './JobSearchFirst/JobSearchFirstReducer';
import { authReducer } from './Login/loginReducer'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    jobs: JobSearchReducer, 
    jobsFirst: JobSearchPageFirstReducer,
    filteredJobs: FilteredJobsReducer,
    auth: authReducer
})

export const store = createStore( rootReducer, composeEnhancer(applyMiddleware(thunk)))