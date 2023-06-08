import axios from "axios"
import { requestInterceptor, responseInterceptor } from "./interceptors"

export const jwtInterceptor = async () => {
    axios.interceptors.response.use(responseInterceptor, err => Promise.reject(err))
    axios.interceptors.request.use(requestInterceptor, err => Promise.reject(err))
}
