import axios, { InternalAxiosRequestConfig } from "axios"
import { serviceUrls } from "../../../../Services"
import { getSession, hasToRefresh, isExpired, isSession, removeSession } from "../../../utils"


export const requestInterceptor = async (request: InternalAxiosRequestConfig) => {
    const url = request.url
    const urlIsLogin = url?.toString().includes(serviceUrls.LOGIN)
    const urlIsRefreshing = url?.toString().includes(serviceUrls.REFRESH)
    if (!!urlIsRefreshing) return request
    if (!!urlIsLogin) {
        removeSession()
        return request
    }

    //TODO: Manage this rejection to show Session error on login form
    if (!isSession()) return Promise.reject({ status: 400, message: 'Token must be provided' })
    const { token, exp } = getSession()
    if (isExpired()) return Promise.reject({ status: 400, message: 'Token expired' })
    const tokenStr = `Bearer ${token}`
    request.headers.Authorization = tokenStr
    if (hasToRefresh(exp)) {
        const headers = { Authorization: tokenStr }
        axios.get('http://localhost:8080/auth/refresh', { headers })
    }
    return request
}
