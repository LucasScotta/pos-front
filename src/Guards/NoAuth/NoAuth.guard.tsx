import { useSelector } from "react-redux"
import { AppStore } from "../../Models"
import { Navigate, Outlet } from "react-router-dom"
import { path } from "../../helper"

export const NoAuthGuard = () => {
    const user = useSelector((store: AppStore) => store.user)
    return !!user.name && <Navigate to={path.DASHBOARD} /> || <Outlet />
}
