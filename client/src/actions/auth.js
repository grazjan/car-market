
import { AUTH_REGISTER, AUTH_LOGIN, AUTH_LOGOUT } from '../constants/actionTypes';
import * as api from '../api';

//Register user
export const registerUser = (user) => async (dispatch) => {
    try {

        await api.authRegister(user);
        dispatch({ type: FETCH_VEHICLES, payload: data })
        
    } catch (error) {
        console.log(error)
    }
}

