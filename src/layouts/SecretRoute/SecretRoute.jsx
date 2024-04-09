/* eslint-disable react/prop-types */
import React from "react"
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner"

const SecretRoute = ({ children }) => {
    const loading = true
    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    return <div>{children}</div>
}

export default SecretRoute
