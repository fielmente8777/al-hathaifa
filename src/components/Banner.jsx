import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../style/Banner.css";
import Logo from "../assets/svg/Final-logo 1.svg";

const Banner = ({ banner, heading, description }) => {

  const location = useLocation()
  return (
    <div className=" flex overflow-hidden w-full relative flex-col md:h-[90vh] justify-center text-lg font-semibold leading-7 text-white mt-0">
      <img
        loading="lazy"
        src={banner}
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex md:h-[90vh] flex-col justify-center relative  max-md:pb-16 max-md:py-0 w-full bg-black bg-opacity-40 max-md:px-5 max-md:max-w-full">
        <Link
          to="/"
          aria-label="facebook"
          className="absolute top-5 left-0  lg:left-40 flex justify-start items-start  w-full max-lg:px-5"
        >

          <img src={Logo} alt="Al Hathboor Group" class="" />

        </Link>

        <div className="flex flex-col justify-center items-center max-md:mt-20">
          <div className="text-[18px] max-md:mt-20 text-center uppercase tracking-[4px]">
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
        </div>

      </div>


      {/* <Link
        to="/"
        aria-label="facebook"
        className="absolute top-0 flex justify-start items-start lg:ml-[155px] mt-5 w-full max-lg:px-5"
      >

        <img src={Logo} alt="Al Hathboor Group" class="z-[9999]" />

      </Link> */}
    </div>
  );
}
export default Banner