import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { AppStore, UserInfo } from "../../Models"
import { useDispatch } from "react-redux"
import { EmptyUserState } from "../../Provider/states/user"

export const useUser = () => {
    const userState = useSelector((store: AppStore) => store.user)
    const dispatch = useDispatch()

    const [user, setUser] = useState<UserInfo>(EmptyUserState)
    const updatedUser = () => setUser(userState)
    useEffect(updatedUser, [userState])

    return { user, dispatch }
}
