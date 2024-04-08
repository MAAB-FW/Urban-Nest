import React from "react"
import SingleEstateCard from "./SingleEstateCard"

const Estate = () => {
    return (
        <div>
            <div>
                <h2>Estate Heading</h2>
                <p>paragraph</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <SingleEstateCard></SingleEstateCard>
                <SingleEstateCard></SingleEstateCard>
                <SingleEstateCard></SingleEstateCard>
                <SingleEstateCard></SingleEstateCard>
                <SingleEstateCard></SingleEstateCard>
            </div>
        </div>
    )
}

export default Estate
