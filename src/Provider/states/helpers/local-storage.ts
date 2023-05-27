import { UserInfo } from "../../../Models"

// default user State
const EmptyUserState: UserInfo = { name: '' }

/**
 * Searches user records on local storage
 * @param token LocalStorage identifier
 * @returns {UserInfo}
 */
export const getInitialState = (token: string): UserInfo => {
    const user = localStorage.getItem(token)
    if (!!user) {
        return JSON.parse(user)
    }
    return EmptyUserState
}

/**
 * Removes user records on local storage
 * @param token LocalStorage identifier
 * @returns {UserInfo}
 */
export const removeState = (token: string): UserInfo => {
    localStorage.removeItem(token)
    return EmptyUserState
}
