import React, { useContext } from "react"
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner"
import { AuthContext } from "../AuthInject/AuthInject"
import { Navigate, useLocation } from "react-router-dom"
import PropTypes from "prop-types"

const SecretRoute = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    if (!user) {
        return <Navigate to="/login" state={location.pathname}></Navigate>
    }
    return <div>{children}</div>
}

export default SecretRoute
SecretRoute.propTypes = {
    children: PropTypes.node,
}
