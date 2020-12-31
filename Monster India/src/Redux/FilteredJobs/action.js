import axios from 'axios';
import { GET_FILTERED_JOB_FAILURE, GET_FILTERED_JOB_REQUEST, GET_FILTERED_JOB_SUCCESS } from './actionType';
// import qs from 'qs';

export const getFilteredJobRequest = ( payload ) => {
    return {
        type: GET_FILTERED_JOB_REQUEST,
        payload
    }
}
export const getFilteredJobSuccess = ( payload ) => {
    return {
        type: GET_FILTERED_JOB_SUCCESS,
        payload
    }
}
export const getFilteredJobFailure = ( payload ) => {
    return {
        type: GET_FILTERED_JOB_FAILURE,
        payload
    }
}

 const locationParams = (params) => {
        var locationArr = []
        var l = params.map((item) => item.key === "location" && locationArr.push(item.value))
        return locationArr
    }
    
const experienceParams = (params) => {
        var expArr = []
        var ex = params.map((item) => item.key === "experience" && expArr.push(item.value))
        return expArr
    }

const salaryParams = (params) => {
        var salaryArr = []
        var s = params.map((item) => item.key === "salary" && salaryArr.push(item.value))
        return salaryArr
    }

const functionParams = (params) => {
        var functionArr = []
        var s = params.map((item) => item.key === "function" && functionArr.push(item.value))
        return functionArr
    }

const roleParams = (params) => {
        var roleArr = []
        var s = params.map((item) => item.key === "role" && roleArr.push(item.value))
        return roleArr
    }

const qualificationsParams = (params) => {
        var qualificationsArr = []
        var s = params.map((item) => item.key === "qualifications" && qualificationsArr.push(item.value))
        return qualificationsArr
    }

const industryParams = (params) => {
        var industryArr = []
        var s = params.map((item) => item.key === "industry" && industryArr.push(item.value))
        return industryArr
    }

const jobTypeParams = (params) => {
        var jobTypeArr = []
        var s = params.map((item) => item.key === "jobType" && jobTypeArr.push(item.value))
        return jobTypeArr
    }

export const getFilteredJobData = (params) => dispatch => {

    console.log(params)
    let loc = locationParams(params)
    let exp = experienceParams(params)
    let sal = salaryParams(params)
    let type = jobTypeParams(params)
    let func = functionParams(params)
    let qua = qualificationsParams(params)
    let ind = industryParams(params)
    let rol = roleParams(params)

    dispatch( getFilteredJobRequest() )
    let config = {
        method: 'GET',
        url: 'http://localhost:3004/data',
        params: {
            location: loc,
            experience: exp,
            salary: sal,
            job_type: type,
            function: func,
            qualifications: qua,
            industry: ind,
            role: rol,
        },
        // paramsSerializer: params => {
        //     return qs.stringify(params)
        //   }
    }
    
    return axios( config )
    .then( res => {
        dispatch( getFilteredJobSuccess( res.data ) )
    })
    .catch( err => {
            console.log( "fetch")
            dispatch( getFilteredJobFailure( err) )
        })

}