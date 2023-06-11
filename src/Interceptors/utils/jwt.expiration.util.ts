import { serviceUrls } from "../../Services"
import { getLocalData, localDataTokens, removeLocalData } from "../../helper"

export const isExpired = (exp: number) => exp < Date.now()
export const hasSession = () => {
    const { JWT_TOKEN, exp } = localStorage
    return !!JWT_TOKEN && !!exp
}
export const getSession = () => {
    const token = getJwtToken()
    const exp = getExpirationTime()
    return { token, exp }
}
const { LOGIN, REFRESH } = serviceUrls

export const { refreshPath } = serviceUrls
export const isLogin = (url: string | undefined) => url?.toString().includes(LOGIN)
export const isRefresh = (url: string | undefined) => url?.toString().includes(REFRESH)
export const removeSession = () => {
    removeLocalData(localDataTokens.jwt)
    removeLocalData(localDataTokens.user)
}
export const hasToRefresh = (exp: number) => {
    const refreshTime = exp - 15 * 60 * 1000
    return refreshTime <= Date.now()
}
export const getJwtToken = () => getLocalData(localDataTokens.jwt, '')
export const getExpirationTime = () => getLocalData(localDataTokens.exp, 0)
