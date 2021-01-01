import { LOGIN_SUCCESS, LOGIN_FAILURE } from "./actionType";

const initState = {
    isAuth: false,
    error: null
};

export const authReducer = (state = initState, { type }) => {
    switch (type) {
        case LOGIN_SUCCESS: {
            return {
                ...state,
                isAuth: true,
                error: null
            };
        }
        case LOGIN_FAILURE: {
            return {
                ...state,
                isAuth: false,
                error: true
            };
        }
        default:
            return state;
    }
};
