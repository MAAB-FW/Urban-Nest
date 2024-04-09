import React from "react"
import { Link } from "react-router-dom"
import { MdSell } from "react-icons/md"

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
                    <h2 className="card-title font-bold">Modern Single-family Home</h2>
                    <p> Type: Single-family homes</p>
                    <div>
                        <p className={`px-4 py-2 text-success font-semibold flex items-center gap-2`}>
                            <MdSell />
                            <span>sale</span>
                        </p>
                        {/* <p className={`px-4 py-2 rounded-2xl text-warning font-semibold flex items-center gap-2`}>
                            <MdSell />
                            <span>rent</span>
                        </p> */}
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
