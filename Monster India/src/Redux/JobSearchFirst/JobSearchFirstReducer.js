import { SEND_DATA } from "./actionType"


const initState = {
    keyword: "",
    experience: "",
    location: "",
    industry: "",
    functions: "",
    role: ""
}

export const JobSearchPageFirstReducer = (state = initState, {type, payload}) => {
    switch(type){
        case SEND_DATA:
            console.log(payload.keyword)
            return{
                ...state,
                keyword: payload.keyword,
                experience: payload.experience,
                location: payload.location,
                industry: payload.industry,
                functions: payload.functions,
                role: payload.role
            }
        default:
            return state
    }
}