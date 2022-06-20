import { combineReducers } from "redux"; 
import vehicle from "./vehicle";
import auth from "./auth";

export default combineReducers({
    vehicle,
    auth
});