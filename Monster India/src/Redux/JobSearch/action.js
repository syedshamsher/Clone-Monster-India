
import axios from 'axios';
import { GET_JOB_FAILURE, GET_JOB_REQUEST, GET_JOB_SUCCESS } from './actionType';

export const getJobRequest = ( payload ) => {
    return {
        type: GET_JOB_REQUEST,
        payload
    }
}
export const getJobSuccess = ( payload ) => {
    return {
        type: GET_JOB_SUCCESS,
        payload
    }
}
export const getJobFailure = ( payload ) => {
    return {
        type: GET_JOB_FAILURE,
        payload
    }
}

export const getJobData = () => dispatch => {
    dispatch( getJobRequest() )
    let config = {
        method: 'GET',
        url: 'http://localhost:3004/data',
    }
    return axios( config )
    .then( res => {
        dispatch( getJobSuccess( res.data ) )
    })
    .catch( err => {
            console.log( "fetch")
            dispatch( getJobFailure( err) )
        })

}