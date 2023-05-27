import { createSlice } from "@reduxjs/toolkit"
import { UserInfo } from "../../Models"
import { getInitialState } from "./helpers"
import { removeState } from "./helpers"

const localStorageKey = {
    user: 'user'
}

export const userSlice = createSlice({
    name: localStorageKey.user,
    initialState: getInitialState(localStorageKey.user),
    reducers: {
        /**
         * Init user state on Login
         * @param {_state}: UserInfo actual empty state
         * @param {action}: Object with UserInfo created
         * @returns {UserInfo}
         */
        createUser: (_state, action): UserInfo => {
            return action.payload
        },
        /**
         * reset state to default user
         * @returns {UserInfo}
         */
        resetUser: (): UserInfo => {
            return removeState(localStorageKey.user)
        },
    },
})

export const { createUser, resetUser } = userSlice.actions

// UserSliceReducer
export default userSlice.reducer
