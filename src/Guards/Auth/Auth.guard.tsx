import { Navigate, Outlet } from "react-router-dom"
import { path } from "../../helper"
import { useSelector } from "react-redux"
import { AppStore } from "../../Models"

export const AuthGuard = () => {
    const { user } = useSelector((store: AppStore) => store)
    return !!user && !!user.username && <Outlet /> || <Navigate to={path.HOME} />
}
