import React from "react"
import { Helmet } from "react-helmet"

const ViewDetails = () => {
    return (
        <div className="pt-24">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Details</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <p>view details</p>
        </div>
    )
}

export default ViewDetails
