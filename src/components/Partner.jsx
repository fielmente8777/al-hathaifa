import React from "react";
import hpimg1 from "../assets/client-img/640_hp.jpg";
import thesultancenter from "../assets/client-img/the-sultan-center.png";
import mcdonalds from "../assets/client-img/mcdonalds.png";
import ms from "../assets/client-img/microsoft.png";
import azadea from "../assets/client-img/azadea.png";
import xgenetco from "../assets/client-img/x-genetco.png";
import sbgroup from "../assets/client-img/suhail-bahwnm-group.png";
import omantel from "../assets/client-img/omantel.png";
import otegroup from "../assets/client-img/ote-group.png";
import moulinex from "../assets/client-img/moulimex.png";
import aramex from "../assets/client-img/omanoil.png";
import jashanmal from "../assets/client-img/jashanmal.png";
import kr from "../assets/client-img/khimjiramdas.png";
import sharafdg from "../assets/client-img/sharagdg.png";
import lulu from "../assets/client-img/llulu.png";
import almeera from "../assets/client-img/almeera.png";
import spar from "../assets/client-img/spar.png";
import nesto from "../assets/client-img/nesto.png";
import lextra from "../assets/client-img/l-extra.png";
import emax from "../assets/client-img/emax.png";
import carrefour from "../assets/client-img/carrefour.png";
import techmart from "../assets/client-img/techmart.png";
import samsung from "../assets/client-img/samsung-logo-1993.jpg";
import Riverbed from "../assets/client-img/riverbed.png";
import Goodyear from "../assets/client-img/goodyearpng.png";
import Bridgestone from "../assets/client-img/New-Bridgestone-Logo-Design-2011-BPO.jpg";
import Karchar from "../assets/client-img/Karcher-Logo.png"
import Roche from "../assets/client-img/rochepng.png"
import Hisense from "../assets/client-img/hisense-600.png"
import Kenwood from "../assets/client-img/kenwood.png"
import Tafal from "../assets/client-img/tafal.png"
import APHL from "../assets/client-img/aphl.png"

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Partner = () => {
  const clints = [
    { img: samsung },
    { img: Riverbed },
    { img: Goodyear },
    { img: Bridgestone },
    { img: Karchar },
    { img: Roche },
    { img: Hisense },
    { img: Kenwood },
    { img: Tafal },
    { img: APHL },
    { img: hpimg1 },
    { img: thesultancenter },
    { img: mcdonalds },
    { img: ms },
    { img: azadea },
    { img: xgenetco },
    { img: sbgroup },
    { img: omantel },
    { img: otegroup },
    { img: moulinex },
    { img: aramex },
    { img: jashanmal },
    { img: kr },
    { img: sharafdg },
    { img: lulu },
    { img: almeera },
    { img: spar },
    { img: nesto },
    { img: lextra },
    { img: emax },
    { img: carrefour },

  ];
  return (
    <section>
      <div className="flex flex-col justify-center items-center w-100 py-10 max-md:px-5 max-md:py-0 max-md:mt-10">
        <div className="" style={{ borderLeft: "6px solid #A52323" }}>
          <div className="pl-2 grow text-[40px] text-[#363636]   max-md:text-4xl">
            <h1 className="font-medium">
              Our Business
              <span className="text-red-800 font-medium"> Partners </span>
            </h1>
          </div>
        </div>
        {/* <div
          className="h-100 w-full lg:flex hidden justify-center items-center mt-16 "
          style={{ gap: "4rem" }}
        >
          <div style={{ padding: "2px", border: "1px solid #A52323" }}>
            <img src={PartnerImage} alt="partner" className="overflow-hidden" />
          </div>
        </div> */}
      </div>
      <div className="max-w-[1224px] mx-auto px-4 py-4">
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
          slidesPerView={3}
          spaceBetween={5}
          breakpoints={{

            1024: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },

            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },


          }}
          modules={[Autoplay, Navigation]}
          // className="border border-[#A52323] justify-center items-center"
          className=" justify-center items-center"
        >
          {clints.map((clint, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center">
              <div className="flex justify-center items-center h-[4rem]">
                <img src={clint.img} className="h-[100%]" alt="clint-img" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-center items-center gap-3 mt-6">
          <button className="prev bg-transparent border-none active:scale-95">
            <svg
              width="40"
              height="40"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M34 17C34 20.3623 33.003 23.6491 31.135 26.4447C29.267 29.2403 26.612 31.4193 23.5056 32.7059C20.3993 33.9926 16.9811 34.3293 13.6835 33.6733C10.3858 33.0174 7.35668 31.3983 4.97919 29.0208C2.6017 26.6433 0.982605 23.6142 0.326656 20.3165C-0.329292 17.0189 0.00736618 13.6007 1.29406 10.4944C2.58074 7.38804 4.75968 4.733 7.55531 2.86502C10.3509 0.997033 13.6377 0 17 0C21.5087 0 25.8327 1.79107 29.0208 4.97918C32.2089 8.1673 34 12.4913 34 17ZM26.7143 15.7857H11.9607L18.7364 8.97721L17 7.28571L7.28572 17L17 26.7143L18.7364 24.9815L11.9607 18.2143H26.7143V15.7857Z"
                fill="#A52323"
              />
            </svg>
          </button>
          <button className="next bg-transparent border-none active:scale-95">
            <svg
              width="40"
              height="40"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 17C0 20.3623 0.997033 23.6491 2.86502 26.4447C4.733 29.2403 7.38804 31.4193 10.4944 32.7059C13.6007 33.9926 17.0189 34.3293 20.3165 33.6733C23.6142 33.0174 26.6433 31.3983 29.0208 29.0208C31.3983 26.6433 33.0174 23.6142 33.6733 20.3165C34.3293 17.0189 33.9926 13.6007 32.7059 10.4944C31.4193 7.38804 29.2403 4.733 26.4447 2.86502C23.6491 0.997033 20.3623 0 17 0C12.4913 0 8.1673 1.79107 4.97918 4.97918C1.79107 8.1673 0 12.4913 0 17ZM7.28571 15.7857H22.0393L15.2636 8.97721L17 7.28571L26.7143 17L17 26.7143L15.2636 24.9815L22.0393 18.2143H7.28571V15.7857Z"
                fill="#A52323"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Partner;
