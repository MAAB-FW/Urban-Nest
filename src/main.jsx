import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home/Home.jsx"
import Login from "./pages/Login/Login.jsx"
import Register from "./pages/Register/Register.jsx"
import UpdateProfile from "./pages/UpdateProfile/UpdateProfile.jsx"
import AuthInject from "./layouts/AuthInject/AuthInject.jsx"
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx"
import ViewDetails from "./pages/ViewDetails/ViewDetails.jsx"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/updateProfile",
                element: <UpdateProfile></UpdateProfile>,
            },
            {
                path: "/viewDetails/:id",
                element: <ViewDetails></ViewDetails>
            },
        ],
    },
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthInject>
            <RouterProvider router={router} />
        </AuthInject>
    </React.StrictMode>
)
