import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { useServerProvidersContext } from "../../context/ServerProvider";

function Testimonial() {
  const data = [
    {
      rating: [
        { icon: "⭐" },
        { icon: "⭐" },
        { icon: "⭐" },
        { icon: "⭐" },
        { icon: "⭐" },
      ],
    },
  ];
  const { reviewsArr } = useServerProvidersContext();

  console.log(reviewsArr);

  return (
    <section className="py-6">
      <div className="max-w-[1320px] m-auto px-3">
        <h2 className="text-2xl text-center">Testimonials</h2>
        <div className="flex items-center justify-center gap-3">
          <div>
            <button className="next-slide border rounded-full w-[2rem] h-[2rem] flex items-center justify-center active:scale-90">
              <FaArrowLeftLong />
            </button>
          </div>
          <div className="w-[84%]">
            <Swiper
              loop={true}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: ".next-slide",
                prevEl: ".prev-slide",
              }}
              modules={[Autoplay, Navigation]}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
              className="mySwiper"
            >
              {reviewsArr.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="flex flex-col gap-4 items-center justify-center p-3">
                    <ul className="flex items-center justify-center">
                      <li>⭐</li>
                      <li>⭐</li>
                      <li>⭐</li>
                      <li>⭐</li>
                      <li>⭐</li>
                    </ul>
                    <p className="text-justify">{item.text}</p>
                    <h3 className="text-center text-[2rem] text-amber-900 font-semibold">
                      {item.author_name}
                    </h3>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div>
            <button className="prev-slide border rounded-full w-[2rem] h-[2rem] flex items-center justify-center active:scale-90">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
       
    </section>
  );
}

export default Testimonial;
