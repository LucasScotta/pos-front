import { Navigate, Outlet } from "react-router-dom"
import { path, roles } from "../../helper"
import { useSelector } from "react-redux"
import { AppStore } from "../../Models"

export const AdminGuard = () => {
    const { user } = useSelector((store: AppStore) => store)
    if (!user) return <Navigate to={path.HOME} />
    const { rol } = user
    return rol === roles.ADMIN ? <Outlet /> : <Navigate to={path.DASHBOARD} />
}
