import { createSlice } from "@reduxjs/toolkit"
import { UserInfo } from "../../Models"
import { getLocalData, setAndPersistData, removeLocalData, localDataTokens } from "../../helper"

// default user State
export const EmptyUserState: UserInfo = { id: -1, username: '', rol: 'waiter' }

export const userSlice = createSlice({
    name: localDataTokens.user,
    initialState: getLocalData(localDataTokens.user, EmptyUserState),
    reducers: {
        /**
         * Init user state on Login
         * @param {_state}: UserInfo actual empty state
         * @param {action}: Object with UserInfo created
         * @returns {UserInfo}
         */
        createUser: (_state, action): UserInfo => {
            setAndPersistData(localDataTokens.user, action.payload)
            return action.payload
        },
        /**
         * reset state to default user
         * @returns {UserInfo}
         */
        resetUser: (): UserInfo => {
            removeLocalData(localDataTokens.user)
            removeLocalData(localDataTokens.jwt)
            return EmptyUserState
        },
    },
})

export const { createUser, resetUser } = userSlice.actions

// UserSliceReducer
export default userSlice.reducer
