import { getLocalData, localDataTokens, removeLocalData } from "../../helper"

export const isExpired = () => {
    return false
}
export const isSession = () => {
    const { JWT_TOKEN, exp } = localStorage
    return !!JWT_TOKEN && !!exp
}
export const getSession = () => {
    const token = getJwtToken()
    const exp = getExpirationTime()
    return { token, exp }
}
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
