import { useSelector } from "react-redux"
import { AppStore } from "../../Models"
import { Navigate, Outlet } from "react-router-dom"
import { path } from "../../helper"

export const AuthGuard = () => {
    const user = useSelector((store: AppStore) => store.user)
    return !!user.username && <Outlet /> || <Navigate to={path.HOME} />
}
