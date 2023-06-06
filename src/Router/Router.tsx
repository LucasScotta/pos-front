import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { Admin, Dashboard, Login } from "../Pages"
import { Provider } from "react-redux"
import store from '../Provider/store'
import { AdminGuard, AuthGuard } from "../Guards"
import { path } from "../helper"
export const Router = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>

                    <Route
                        path={path.HOME}
                        element={<Login />} />
                    <Route
                        path={path.LOGIN}
                        element={<Login />} />
                    <Route element={<AuthGuard />}>
                        <Route
                            path={path.DASHBOARD}
                            element={<Dashboard />} />

                        <Route element={<AdminGuard />}>
                            <Route
                                path={path.ADMIN}
                                element={<Admin />} />
                        </Route>
                    </Route>

                    <Route path="/*"
                        element={<Navigate to="/" />} />

                </Routes>
            </BrowserRouter>
        </Provider>
    )
}
