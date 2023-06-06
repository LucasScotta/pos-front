import { useEffect } from "react"
import { Navigate } from "react-router-dom"
import { useUser } from "../../Hooks"
import { resetUser } from "../../Provider/states/user"
import { path } from "../../helper"

export const Logout = () => {
    const { dispatch } = useUser()

    useEffect(() => {
        dispatch(resetUser())
    }, [])
    return <Navigate to={path.LOGIN} replace={true} />
}