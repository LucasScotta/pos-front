import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { Dashboard, Login } from "../Pages"
import { Provider } from "react-redux"
import store from '../Provider/store'
import { AuthGuard, NoAuthGuard } from "../Guards"
export const Router = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>

                    <Route element={<NoAuthGuard />}>
                        <Route
                            path="/"
                            element={<Login />} />
                    </Route>

                    <Route element={<AuthGuard />}>
                        <Route
                            path="/dashboard"
                            element={<Dashboard />} />
                    </Route>

                    <Route path="/*"
                        element={<Navigate to="/" />} />

                </Routes>
            </BrowserRouter>
        </Provider>
    )
}
