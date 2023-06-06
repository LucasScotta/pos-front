import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { Admin, Dashboard, Login } from "../Pages"
import { Provider } from "react-redux"
import store from '../Provider/store'
import { AdminGuard, AuthGuard } from "../Guards"
export const Router = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>

                    <Route
                        path="/"
                        element={<Login />} />
                    <Route
                        path="/login"
                        element={<Login />} />
                    <Route element={<AuthGuard />}>
                        <Route
                            path="/dashboard"
                            element={<Dashboard />} />

                        <Route element={<AdminGuard />}>
                            <Route
                                path="/admin"
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
