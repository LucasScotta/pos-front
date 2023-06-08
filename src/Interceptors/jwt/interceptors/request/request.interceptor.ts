import axios, { InternalAxiosRequestConfig } from "axios"
import { getSession, hasToRefresh, isExpired, isLogin, isRefresh, isSession, removeSession, refreshPath } from "../../../utils"


export const requestInterceptor = async (request: InternalAxiosRequestConfig) => {
    const url = request.url
    if (isRefresh(url)) return request
    if (isLogin(url)) {
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
        axios.get(refreshPath(), { headers })
    }
    return request
}
