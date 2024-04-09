import React from "react"
import { Link } from "react-router-dom"

const SingleEstateCard = () => {
    const id = 5
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure>
                    <img
                        src="https://img.freepik.com/premium-photo/design-business-building-nature-background_87720-29576.jpg?w=826"
                        alt="Shoes"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Modern Single-family Home</h2>
                    <p> Type: Single-family homes</p>
                    <div>
                        <p className={`px-4 py-2 rounded-2xl bg-warning w-16 font-semibold `}>sale</p>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to={`/viewDetails/${id}`} className="btn btn-info text-white">
                            View Property
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleEstateCard
