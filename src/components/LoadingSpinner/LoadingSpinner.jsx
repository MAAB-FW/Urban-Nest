import React from "react"
import { HashLoader } from "react-spinners"

const LoadingSpinner = () => {
    return (
        <div className="pt-24 flex justify-center h-full">
            <HashLoader className="my-28" color="#06b6d4" size={100} />
        </div>
    )
}

export default LoadingSpinner
