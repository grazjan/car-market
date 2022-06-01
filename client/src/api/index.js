import axios from 'axios'

const baseURL = "http://localhost:1337/api"


//Fetch cars
export const fetchVehicles = (filters) =>  axios.get(`${baseURL}/cars${filters}`)
 
//Fetch single car by id
export const fetchVehicleById = (id) =>  axios.get(`${baseURL}/cars/${id}?populate=medias`)
 