import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<>Login</>} />

                <Route
                    path="/dashboard"
                    element={<>Dashboard</>} />

                <Route path="/*"
                    element={<Navigate to="/" />} />

            </Routes>
        </BrowserRouter>
    )
}
