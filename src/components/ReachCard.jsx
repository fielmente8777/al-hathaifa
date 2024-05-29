import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ReachCard = () => {

    const data = [
        {
            "count": "8000",
            "para": "Jobs Created since Inception"
        },
        {
            "count": "120",
            "para": "Satisfied Clients"
        },
        {
            "count": "10",
            "para": "Years in Industry"
        },
        {
            "count": "18",
            "para": "Industry Awards"
        },
    ]
    return (
        <div className='max-w-[1224px] mx-auto mt-10 max-md:px-5'>
            <Swiper
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={{
                    nextEl: ".next",
                    prevEl: ".prev",
                }}
                slidesPerView={1}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                }}
                modules={[Autoplay, Navigation]}
                className=""
            >

                {data.map((dat, index) => (
                    <SwiperSlide>
                        <div className="">

                            {index % 2 === 0 ? <div key={index} className="flex flex-col  max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow justify-center text-center text-white">
                                    <div className="flex flex-col px-10 py-10 bg-[#A52323] border-[#D1D0A3] border-solid border-t-[6px] max-md:px-5">
                                        <div className="self-center text-4xl font-semibold leading-10 uppercase">
                                            {dat.count}+
                                        </div>
                                        <div className="mt-2.5 text-base font-medium leading-6">
                                            {dat.para}
                                        </div>
                                    </div>
                                </div>
                            </div>
                                :
                                <div key={index} className="flex flex-col  max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col grow justify-center text-center text-white">
                                        <div className="flex flex-col px-10 py-10 border-[#D1D0A3] border-solid bg-[#202020] border-b-[6px] max-md:px-5">
                                            <div className="self-center text-4xl font-semibold leading-10 uppercase">
                                                {dat.count}+
                                            </div>
                                            <div className="mt-2.5 text-base font-medium leading-6">
                                                {dat.para}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>

                    </SwiperSlide>
                ))}


            </Swiper>





            {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">

                <Swiper
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={{
                        nextEl: ".next",
                        prevEl: ".prev",
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                    }}
                    modules={[Autoplay, Navigation]}
                    className=""
                >

                    <SwiperSlide>
                        <div className="flex flex-col  max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow justify-center text-center text-white">
                                <div className="flex flex-col px-10 py-10 bg-[#A52323] border-[#D1D0A3] border-solid border-t-[6px] max-md:px-5">
                                    <div className="self-center text-4xl font-semibold leading-10 uppercase">
                                        8000
                                    </div>
                                    <div className="mt-2.5 text-base font-medium leading-6">
                                        Jobs Created since Inception
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col  max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow justify-center text-center text-white">
                                <div className="flex flex-col px-10 py-10 border-[#D1D0A3] border-solid bg-[#202020] border-b-[6px] max-md:px-5">
                                    <div className="self-center text-4xl font-semibold leading-10 uppercase">
                                        120+
                                    </div>
                                    <div className="mt-2.5 text-base font-medium leading-6">
                                        Satisfied Clients
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow justify-center text-center text-white">
                                <div className="flex flex-col px-10 py-10 bg-[#A52323] border-[#D1D0A3] border-solid border-t-[6px] max-md:px-5">
                                    <div className="self-center text-4xl font-semibold leading-10 uppercase">
                                        10+
                                    </div>
                                    <div className="mt-2.5 text-base font-medium leading-6">
                                        Years in Industry
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow justify-center text-center text-white">
                                <div className="flex flex-col px-10 py-10 border-[#D1D0A3] border-solid bg-[#202020] border-b-[6px] max-md:px-5">
                                    <div className="self-center text-4xl font-semibold leading-10 uppercase">
                                        18+
                                    </div>
                                    <div className="mt-2.5 text-base font-medium leading-6">
                                        Industry Awards
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>


            </div> */}
        </div>
    )
}

export default ReachCard