import { Navigate, Outlet } from "react-router-dom"
import { path } from "../../helper"
import { useUser } from "../../Hooks"

export const AuthGuard = () => {
    const { user } = useUser()
    return !!user && !!user.username && <Outlet /> || <Navigate to={path.HOME} />
}
