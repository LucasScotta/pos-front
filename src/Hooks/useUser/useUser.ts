import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { AppStore, UserInfo } from "../../Models"

export const useUser = () => {
    const userState = useSelector((store: AppStore) => store.user)
    const [user, setUser] = useState<UserInfo>()
    useEffect(() => {
        const { username } = userState
        if (!username) return

        setUser(userState)
    }, [userState])

    return { user }
}
