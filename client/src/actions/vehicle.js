
import { FETCH_VEHICLES, FETCH_VEHICLE_BY_ID } from '../constants/actionTypes';
import * as api from '../api';

//Fetch cars 
export const getCars = (options) => async (dispatch) => {
    try {

        let query = ""
        if(!options) query = "?populate=medias";
        else {
            options[0][0] = options[0][0].substring(1);
            options.map((option) =>  query = `?filters[${option[0]}][$eq]=${option[1]}&populate=medias`) 
        }

        const { data } = await api.fetchVehicles(query);
        dispatch({ type: FETCH_VEHICLES, payload: data })
        
    } catch (error) {
        console.log(error)
    }
}

//Fetch car by id
export const getCar = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchVehicleById(id);
        dispatch({ type: FETCH_VEHICLE_BY_ID, payload: data })
    } catch (error) {
        console.log(error)
    }
}