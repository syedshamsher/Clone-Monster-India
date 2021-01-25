import { LOGIN_FAILURE, LOGIN_SUCCESS } from "./actionType";

export const loginSuccess = () => {
    return {
        type: LOGIN_SUCCESS,
    };
};

export const loginFailure = () => {
    return {
        type: LOGIN_FAILURE,
    };
};
