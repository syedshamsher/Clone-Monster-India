import { loadData, saveData } from "../../Utils/LocalStorage/LocalStorage"
import { SEND_DATA } from "./actionType"


const initState = {
    keyword: loadData('keyword') || '',
    experience: loadData('experience') || "",
    location: loadData('location') || "",
    industry: loadData('industry') || "",
    functions: loadData('functions') || "",
    role: loadData('role') || ""
}

export const JobSearchPageFirstReducer = (state = initState, {type, payload}) => {
    switch(type){
        case SEND_DATA:
            console.log(payload.keyword)
            const keyWord = payload.keyword
            const exp = payload.experience
            const loc = payload.location
            const ind = payload.industry
            const func = payload.functions
            const rol = payload.role
            saveData('keyword', keyWord)
            saveData('experience', exp)
            saveData('location', loc)
            saveData('industry', ind)
            saveData('functions', func)
            saveData('role', rol)
            return{
                ...state,
                keyword: keyWord,
                experience: exp,
                location: loc,
                industry: ind,
                functions: func,
                role: rol
            }
        default:
            return state
    }
}