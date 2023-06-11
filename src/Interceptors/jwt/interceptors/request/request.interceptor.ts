import axios, { InternalAxiosRequestConfig } from "axios"
import { getSession, hasToRefresh, isExpired, isLogin, isRefresh, hasSession, removeSession, refreshPath } from "../../../utils"


export const requestInterceptor = async (request: InternalAxiosRequestConfig) => {
    const url = request.url
    if (isRefresh(url)) return request
    if (isLogin(url)) {
        removeSession()
        return request
    }

    //TODO: Manage this rejection to show Session error on login form
    if (!hasSession()) return Promise.reject({ status: 400, message: 'Log in before procced', redirect: true })
    const { token, exp } = getSession()
    if (isExpired(exp)) {
        return Promise.reject({ status: 400, message: 'Token expired', redirect: true })
    }
    const tokenHeader = `Bearer ${token}`
    request.headers.Authorization = tokenHeader
    if (hasToRefresh(exp)) {
        const headers = { Authorization: tokenHeader }
        axios.get(refreshPath(), { headers })
    }
    return request
}
