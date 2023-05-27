import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { Dashboard, Login } from "../Pages"
import { Provider } from "react-redux"
import store from '../Provider/store'
export const Router = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<Login />} />

                    <Route
                        path="/dashboard"
                        element={<Dashboard />} />

                    <Route path="/*"
                        element={<Navigate to="/" />} />

                </Routes>
            </BrowserRouter>
        </Provider>
    )
}
