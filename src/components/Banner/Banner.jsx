import React from "react"
// import Swiper from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

// import './styles.css';

// import required modules
import { Autoplay, Pagination } from "swiper/modules"

const Banner = () => {
    return (
        <div className="md:h-[539px] relative">
            {/* <img className="absolute z-20 h-full md:h-auto " src="/svg.png" alt="" /> */}
            <div className="w-full h-24"> </div>
            <div data-aos="zoom-out" className="absolute *:w-2/3 mt-20 md:mt-40 lg:mt-56 md:ml-16 z-50 text-white text-center flex flex-col items-center justify-center">
                <h1 className="text-xl md:text-4xl font-bold ">
                    Discover Your Perfect Urban Nest: Where Comfort Meets City Living
                </h1>
                <p className="text-sm md:text-base mt-3 md:mt-6 text-slate-300">
                    Experience urban living at its finest, where every corner is designed to inspire and every moment is filled
                    with possibility.
                </p>
            </div>
            <Swiper
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper //rounded-lg">
                <SwiperSlide className="md:h-[539px]">
                    <div className="h-[300px] md:h-[539px] bg-[url('https://img.freepik.com/premium-photo/modern-condo-apartment-building_87720-96520.jpg?w=826')] bg-no-repeat bg-center bg-cover">
                        <div className="w-full h-full bg-[#242c36] opacity-50"></div>
                    </div>
                    {/* <img
                        className="w-full object-cover md:h-[539px] //rounded-lg mix-blend-overlay"
                        src="https://img.freepik.com/premium-photo/modern-condo-apartment-building_87720-96520.jpg?w=826"
                        alt=""
                    /> */}
                </SwiperSlide>
                <SwiperSlide className="md:h-[539px]">
                    <div className="h-[300px] md:h-[539px] bg-[url('https://img.freepik.com/premium-photo/high-city-apartment-building_87720-67282.jpg?w=826')] bg-no-repeat bg-center bg-cover">
                        <div className="w-full h-full bg-[#242c36] opacity-50"></div>
                    </div>
                    {/* <img
                        className="w-full object-cover md:h-[539px] //rounded-lg mix-blend-overlay"
                        src="https://img.freepik.com/premium-photo/high-city-apartment-building_87720-67282.jpg?w=826"
                        alt=""
                    /> */}
                </SwiperSlide>
                <SwiperSlide className="md:h-[539px]">
                    <div className="h-[300px] md:h-[539px] bg-[url('https://img.freepik.com/premium-photo/design-business-building-nature-background_87720-29576.jpg?w=826')] bg-no-repeat bg-center bg-cover">
                        <div className="w-full h-full bg-[#242c36] opacity-50"></div>
                    </div>
                    {/* <img
                        className="w-full object-cover md:h-[539px] //rounded-lg mix-blend-overlay"
                        src="https://img.freepik.com/premium-photo/design-business-building-nature-background_87720-29576.jpg?w=826"
                        alt=""
                    /> */}
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Banner
