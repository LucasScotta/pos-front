import axios from "axios"
import { serviceUrls } from "../../Services"
import { getLocalData, setAndPersistData, removeLocalData, localDataTokens } from "../../helper"

export const jwtInterceptor = () => {
    axios.interceptors.response.use(response => {
        const token: string = response.data.token
        if (token) {
            setAndPersistData(localDataTokens.jwt, token)
        }
        return response
    },
        err => Promise.reject(err))

    axios.interceptors.request.use(request => {
        const token = getLocalData(localDataTokens.jwt, '')
        const url = request.url
        const urlIsLogin = url?.toString().includes(serviceUrls.login)
        if (!!token) {
            if (!urlIsLogin) {
                request.headers.Authorization = `Bearer ${token}`
                return request
            }
            removeLocalData(localDataTokens.jwt)
        }
        return request
    },
        err => Promise.reject(err))
}
