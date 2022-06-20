import { AUTH_REGISTER, AUTH_LOGIN, AUTH_LOGOUT } from '../constants/actionTypes';

export default (state = [], action) => {
    switch(action.type) {
        case AUTH_REGISTER:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}