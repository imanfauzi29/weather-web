import Axios from "axios";

const BASE_URL = "https://api.weatherapi.com/v1"
const API_KEY = import.meta.env.VITE_API_KEY

export const AxiosConfig = Axios.create({
    baseURL: BASE_URL,
    params: {
        'key': API_KEY
    }
})