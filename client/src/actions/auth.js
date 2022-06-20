
import { AUTH_REGISTER, AUTH_LOGIN, AUTH_LOGOUT } from '../constants/actionTypes';
import * as api from '../api';

//Register user
export const registerUser = (user) => async (dispatch) => {
    try {
        const { data } = await api.authRegister(user);
        dispatch({ type: AUTH_REGISTER, payload: data })
        
    } catch (error) {
        console.log(error)
    }
}

//Register user
export const loginUser = (user) => async (dispatch) => {
    try {
        const { data } = await api.authLogin(user);
        dispatch({ type: AUTH_LOGIN, payload: data })
        
    } catch (error) {
        console.log(error)
    }
}

