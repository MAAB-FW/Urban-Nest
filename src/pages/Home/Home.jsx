import React from "react"
import Banner from "../../components/Banner/Banner"
import Estate from "../../components/Estate/Estate"
import { Helmet } from "react-helmet"

const Home = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Banner></Banner>
            <Estate></Estate>
        </div>
    )
}

export default Home
