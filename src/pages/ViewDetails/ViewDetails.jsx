import React from "react"
import { Helmet } from "react-helmet"
import { useParams } from "react-router-dom"
import useDataLoad from "../../hooks/useDataLoad"
import { MdSell } from "react-icons/md"
import { AiOutlineAreaChart } from "react-icons/ai"
import { TiLocation } from "react-icons/ti"
import { FcOk } from "react-icons/fc"

const ViewDetails = () => {
    const params = useParams()
    // console.log(params)

    const data = useDataLoad()
    // console.log(data)

    const findEd = data?.find((da) => da.id == params.id)
    // console.log(findEd)
    const { estate_title, segment_name, description, price, status, area, location, facilities, image } = findEd || {}

    return (
        <div className="pt-48 w-[83%] mx-auto">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Details</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div>
                <div className="h-full bg-base-100 flex flex-col md:flex-row ">
                    <figure className="flex-1">
                        <img className="mx-auto rounded-lg" src={image} alt="Shoes" />
                    </figure>
                    <div className="flex-1 px-6 flex flex-col justify-between flex-grow">
                        <h2 className="text-2xl font-bold">{estate_title}</h2>
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
                        <hr className="my-3" />
                        <div className="">{description}</div>
                        <div className="my-4">
                            <h3 className="underline font-semibold mb-3">Facilities:</h3>
                            {facilities?.map((f, idx) => (
                                <p key={idx} className="flex items-center gap-3">
                                    <FcOk />
                                    {f.slice(0, 1).toUpperCase() + f.slice(1)}
                                </p>
                            ))}
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
                            {/* <Link to={`/viewDetails/${id}`} className="btn btn-info text-white">
                                View Property
                            </Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewDetails
