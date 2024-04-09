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
            <img className="absolute z-20 h-full md:h-auto " src="/svg.png" alt="" />
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
                    <img
                        className="w-full object-cover md:h-[539px] //rounded-lg mix-blend-overlay"
                        src="https://img.freepik.com/premium-photo/modern-condo-apartment-building_87720-96520.jpg?w=826"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide className="md:h-[539px]">
                    <img
                        className="w-full object-cover md:h-[539px] //rounded-lg mix-blend-overlay"
                        src="https://img.freepik.com/premium-photo/high-city-apartment-building_87720-67282.jpg?w=826"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide className="md:h-[539px]">
                    <img
                        className="w-full object-cover md:h-[539px] //rounded-lg mix-blend-overlay"
                        src="https://img.freepik.com/premium-photo/design-business-building-nature-background_87720-29576.jpg?w=826"
                        alt=""
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Banner
