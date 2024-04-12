/* eslint-disable react/prop-types */
import React from "react"
import { Link } from "react-router-dom"
import { MdSell } from "react-icons/md"
import { TiLocation } from "react-icons/ti"
import { AiOutlineAreaChart } from "react-icons/ai"

const SingleEstateCard = ({ d }) => {
    const { id, estate_title, segment_name, price, status, area, location, image } = d || {}
    return (
        <div>
            <div className="card h-full bg-base-100 shadow-xl">
                <figure>
                    <img src={image} alt="" />
                </figure>
                <div className="px-6 py-6 flex flex-col justify-between">
                    <h2 className="text-xl font-bold text-nowrap overflow-hidden text-ellipsis">{estate_title}</h2>
                    <div className="flex justify-between items-center">
                        <p className="font-medium">
                            <span className="">Type:</span> {segment_name}
                        </p>
                        <div className="">
                            {status == "sale" ? (
                                <p className={`//px-4 py-2 text-success font-semibold flex items-center gap-2`}>
                                    <MdSell />
                                    <span>sale</span>
                                </p>
                            ) : (
                                <p className={`//px-4 py-2 text-warning font-semibold flex items-center gap-2`}>
                                    <MdSell />
                                    <span>rent</span>
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="text-gray-500 my-2 flex items-center gap-2">
                        <AiOutlineAreaChart />
                        {area} <span>square ft</span>
                    </div>
                    <div className="text-gray-500 text-sm flex items-center gap-2">
                        <TiLocation />
                        {location}
                    </div>
                    <hr className="my-4" />
                    <div className="flex items-center justify-between">
                        <div>{status == "rent" ? <p>Price: ${price}/month</p> : <p>Price: ${price}</p>}</div>
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
