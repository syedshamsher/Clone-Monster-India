import { GET_FILTERED_JOB_SUCCESS } from "./actionType"

const initState = {
    jobs: []
}

export const FilteredJobsReducer = ( state = initState, { type, payload } ) => {
    switch ( type ) {
        case GET_FILTERED_JOB_SUCCESS:
            return {
                ...state,
                jobs: [...payload]
            }
        // case actionConstants.POST_TODO_SUCCESS:
        //     return {
        //         ...state,
        //         todo: [...state.todo, payload]
        //     }
        default:
            return state
    }
}