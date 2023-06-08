/**
 * Searches user records from local storage
 * @param token LocalStorage identifier
 * @param defaultValue Generic
 * @returns {UserInfo || string}
 */
export function getLocalData<T>(token: string, defaultValue: T): T {
    const user = localStorage.getItem(token)
    return !!user ? JSON.parse(user) : defaultValue
}
/**
 * Updates user record from local storage
 * @param token
 * @param data generic {string | UserInfo}
 */
export function setAndPersistData<T>(token: string, data: T): void {
    const parsed = JSON.stringify(data)
    localStorage.setItem(token, parsed)
}
/**
 * Removes user record from local storage
 * @param token LocalStorage identifier
 * @returns {UserInfo}
 */

export const removeLocalData = (token: string) => {
    localStorage.removeItem(token)

}

export const localDataTokens = {
    jwt: 'JWT_TOKEN',
    user: 'user',
    exp: 'exp'
}
