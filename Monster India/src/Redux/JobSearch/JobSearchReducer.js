import { GET_JOB_SUCCESS } from "./actionType"

const initState = {
    jobs: []
}

export const JobSearchReducer = ( state = initState, { type, payload } ) => {
    switch ( type ) {
        case GET_JOB_SUCCESS:
            return {
                ...state,
                jobs: payload
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