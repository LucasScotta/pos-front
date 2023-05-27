import { UserInfo } from "../../Models"


/**
 * Searches user records from local storage
 * @param token LocalStorage identifier
 * @param defaultValue Generic {String | UserInfo}
 * @returns {UserInfo || string}
 */
export function getLocalData(token: string, defaultValue: string): string
export function getLocalData(token: string, defaultValue: UserInfo): UserInfo
export function getLocalData(token: string, defaultValue: any) {
    const user = localStorage.getItem(token)
    return !!user ? JSON.parse(user) : defaultValue
}
/**
 * Updates user record from local storage
 * @param token
 * @param data generic {string | UserInfo}
 */
export function setAndPersistData(token: string, data: string): void
export function setAndPersistData(token: string, data: UserInfo): void
export function setAndPersistData(token: string, data: any): void {
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
