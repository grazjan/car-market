import axios from 'axios'

const baseURL = "http://localhost:1337/api"


//Vehicle
export const fetchVehicles = (filters) =>  axios.get(`${baseURL}/cars${filters}`)
export const fetchVehicleById = (id) =>  axios.get(`${baseURL}/cars/${id}?populate=medias`)


//Auth
export const authRegister = (user) => axios.post(`${baseURL}/auth/local/register`, {
    username: user.username,
    password: user.password,
    email: user.email
});
export const authLogin = (user) => axios.post(`${baseURL}/auth/local`, {
    identifier: user.username,
    password: user.password,
});
 