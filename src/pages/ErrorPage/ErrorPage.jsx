import React from "react"
import { Link } from "react-router-dom"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import { Helmet } from "react-helmet"

const ErrorPage = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Error </title>
                {/* <link rel="canonical" href="http://mysite.com/example" /> */}
            </Helmet>
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
