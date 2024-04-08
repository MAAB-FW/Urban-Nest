import React from "react"
import { Link } from "react-router-dom"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"

const ErrorPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="text-center flex flex-col items-center justify-center font-semibold gap-8 h-screen">
                <h2 className="text-4xl text-error">404 Page Not Found</h2>
                <Link to={-1} className="btn btn-accent font-bold">
                    Go Back
                </Link>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default ErrorPage
