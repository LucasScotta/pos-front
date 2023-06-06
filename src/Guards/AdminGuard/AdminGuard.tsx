import { Navigate, Outlet } from "react-router-dom"
import { path, roles } from "../../helper"
import { useUser } from "../../Hooks"

export const AdminGuard = () => {
    const { user } = useUser()
    if (!user) return <Navigate to={path.HOME} />
    const { rol } = user
    return rol === roles.ADMIN ? <Outlet /> : <Navigate to={path.DASHBOARD} />
}
