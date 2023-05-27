import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { Login } from "../Pages"

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<Login />} />

                <Route
                    path="/dashboard"
                    element={<>Dashboard</>} />

                <Route path="/*"
                    element={<Navigate to="/" />} />

            </Routes>
        </BrowserRouter>
    )
}
