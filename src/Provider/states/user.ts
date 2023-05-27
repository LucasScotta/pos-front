import { createSlice } from "@reduxjs/toolkit"
import { UserInfo } from "../../Models"
import { getLocalData, setAndPersistData, removeLocalData } from "../../helper"
import { EmptyUserState, localStorageKey } from "./state.helper"



export const userSlice = createSlice({
    name: localStorageKey.user,
    initialState: getLocalData(localStorageKey.user, EmptyUserState),
    reducers: {
        /**
         * Init user state on Login
         * @param {_state}: UserInfo actual empty state
         * @param {action}: Object with UserInfo created
         * @returns {UserInfo}
         */
        createUser: (_state, action): UserInfo => {
            setAndPersistData(localStorageKey.user, action.payload)
            return action.payload
        },
        /**
         * reset state to default user
         * @returns {UserInfo}
         */
        resetUser: (): UserInfo => {
            removeLocalData(localStorageKey.user)
            return EmptyUserState
        },
    },
})

export const { createUser, resetUser } = userSlice.actions

// UserSliceReducer
export default userSlice.reducer
