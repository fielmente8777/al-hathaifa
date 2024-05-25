import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import bannerImg from "../assets/client-img/banner1.jpeg";
import "../style/Banner.css";

const Banner = ({ heading, description }) => {

  const location = useLocation()
  return (
    <div className=" flex overflow-hidden w-full relative flex-col justify-center text-lg font-semibold leading-7 text-white mt-0">
      <img
        loading="lazy"
        src={bannerImg}
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative flex-col items-center  py-24 max-md:py-0 w-full bg-black bg-opacity-40 max-md:px-5 max-md:max-w-full">
        <div className="mt-40 text-[18px] max-md:mt-20 text-center uppercase tracking-[4px]">
          <p>Welcome to al HATHAIFA</p>
        </div>
        <div
          className={`mt-3 max-w-[1224px]  font-outline-2 ${location.pathname === "/"
            ? "text-[#f8f8f8] stroke stroke-zinc-100"
            : "text-white"
            } text-center uppercase leading-[60px]  max-md:max-w-full max-md:text-4xl max-md:leading-10`}
        >
          <h1>{heading}</h1>
        </div>
        <div className="mt-3 text-[18px] text-center leading-[167%] max-md:max-w-full">
          <p>{description}</p>
        </div>
        <Link to="/contact">
          <div className="justify-center px-8 py-4 mt-8 mb-32 text-base   tracking-normal text-right uppercase whitespace-nowrap bg-[#a52323] max-md:px-5 max-md:mb-10">
            <p>contact us</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
export default Banner