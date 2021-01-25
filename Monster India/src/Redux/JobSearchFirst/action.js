import { SEND_DATA } from "./actionType"


export const sendData = ( keyword, experience, location, industry, functions, role) => {
    return{
        type: SEND_DATA,
        payload: {
            keyword, experience, location, industry, functions, role
        }
    }
}