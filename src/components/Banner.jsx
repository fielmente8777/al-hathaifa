import React from 'react';
import imageBanner from "../assets/dubai-skyline-sunset-time-united-arab-emirates 1.png"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "../style/Slider.css"
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import BannerCard from './BannerCard';

export default function App() {
    return (
        <>
            <Swiper
                // pagination={{
                //     type: 'fraction',
                // }}
                // navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <BannerCard />
                </SwiperSlide>

            </Swiper>
        </>
    );
}
