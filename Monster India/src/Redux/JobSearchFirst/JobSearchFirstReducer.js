import { loadData, saveData } from "../../Utils/LocalStorage/LocalStorage"
import { SEND_DATA } from "./actionType"


const initState = {
    keyword: loadData('keyword') || '',
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
            const keyWord = payload.keyword
            saveData('keyword', keyWord)
            return{
                ...state,
                keyword: keyWord,
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