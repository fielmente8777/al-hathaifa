import React from "react";
import ServiceCard from "./ServiceCard";
import "../style/Service.css";
import img1 from "../assets/svg/sales.svg";
import img2 from "../assets/svg/management.svg";
import img3 from "../assets/svg/logistics.svg";
import img4 from "../assets/svg/delivery.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Service = () => {
  const serviceData = [
    {
      url: img1,
      heading: "Sales And Marketing",
      description: `Discover our wide range of sales and marketing strategies to elevate your brand, increase sales, and engage customers. Our innovative approach, combined with proven methods, delivers tangible results to drive your business success.`,
    },
    {
      url: img2,
      heading: "Operations Management",
      description: `Al Hathaifa offers comprehensive operations management solutions tailored to your business needs. Our seasoned professionals fine-tune processes and enhance productivity for seamless operations.`,
    },
    {
      url: img3,
      heading: "Logistics Services",
      description: `At Al Hathaifa, we provide customized solutions to meet the unique needs of each business, optimizing transportation routes, managing inventory, and enhancing distribution channels. Our focus on adaptability and innovation empowers businesses to thrive in today's competitive marketplace.`,
    },
    {
      url: img4,
      heading: "DELIVERY Services",
      description: `Our comprehensive delivery services ensure timely arrivals without compromising safety. Whether you're sending small parcels or large cargo, rely on Al Hathaifa for secure and efficient delivery. Focus on what matters to you while we handle your shipments with dedication and professionalism.`,
    },
    {
      url: img1,
      heading: "Recruitment Services",
      description: `Discover our wide range of sales and marketing strategies to elevate your brand, increase sales, and engage customers. Our innovative approach, combined with proven methods, delivers tangible results to drive your business success.`,
    },
    {
      url: img2,
      heading: "F&B Support Services",
      description: `Whether you need to fill short-term or executive positions, we provide customized recruitment services to meet your needs. We focus on recommending candidates with the right skills, experience, and fit for your company.`,
    },
    {
      url: img3,
      heading: "Industrial Technical Services",
      description: `Count on Al Hathaifa for reliable and cost-effective technical support, as our expertise and commitment to excellence will drive success in your industrial endeavors`,
    },
    {
      url: img4,
      heading: "Facility Management Services",
      description: `With our proactive approach and attention to detail, Al Hathaifa creates a secure, pleasant, and efficient environment for your staff and clients. We go above and beyond to align with your business objectives and manage your facility with professionalism and expertise.`,
    },
    {
      url: img2,
      heading: "Field Force Management",
      description: `At Al Hathaifa, we specialize in innovative field force management solutions that simplify operations, increase efficiency, and enhance performance. Our comprehensive approach covers scheduling, task assignment, tracking, and reporting, empowering organizations to effectively oversee their field teams and foster business growth.`,
    },
    {
      url: img3,
      heading: "corporate event Management",
      description: `Al Hathaifa excels in managing corporate events and provides tailored solutions from start to finish. Our dedicated team guarantees flawless organization and execution for conferences, seminars, product launches, and gala dinners. We turn your vision into impactful experiences that leave a lasting impression. Rely on us for seamless events that exceed your expectations.`,
    },
  ];
  return (
    <div className="service bg-no-repeat bg-cover pt-10 lg:pb-16 flex flex-col justify-center items-center">
      <div className="" style={{ borderLeft: "6px solid #A52323" }}>
        <h1
          className="pl-2 text-5xl font-bold uppercase text-[#fff] max-md:text-4xl"
          style={{ fontWeight: "400" }}
        >
          OUR <stronge style={{ color: "#A52323" }}>Service </stronge>
        </h1>
      </div>

      <div className="mt-5 mb-5 lg:max-w-[1224px] md:max-w[720px] max-w-[100%]">
        <div className="lg:grid lg:grid-cols-4 hidden justify-center  gap-[1rem] max-md:gap-5 max-md:px-5">
          {serviceData.map((serviceCardData, index) => (
            <div key={index}>
              <ServiceCard
                imgUrl={serviceCardData.url}
                title={serviceCardData.heading}
                desc={serviceCardData.description}
                btnName={"learn more"}
              />
            </div>
          ))}
        </div>
        <div className="lg:hidden md:block px-3">
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
            {serviceData.map((serviceCardData, index) => (
              <SwiperSlide key={index}>
                <ServiceCard
                  imgUrl={serviceCardData.url}
                  title={serviceCardData.heading}
                  desc={serviceCardData.description}
                  btnName={"learn more"}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex justify-center items-center gap-3 mt-6">
            <button className="next bg-transparent border-none active:scale-95">
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
            <button className="prev bg-transparent border-none active:scale-95">
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
      </div>
    </div>
  );
};

export default Service;
