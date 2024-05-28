import React from "react";
import "../style/About.css";
import AboutImage from "../assets/client-img/meeting_6_11zon.jpg";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="about">
      <div className=" grid grid-cols-2 max-md:grid-cols-1 max-w-[1224px] max-md:px-5 gap-4">
        <div className="  flex justify-end ">
          <img
            className=" w-auto h-full object-cover "
            src={AboutImage}
            alt="Image"
            style={{ height: "100%" }}
          />
        </div>
        <div className=" flex flex-col justify-start ">
          <div className="" style={{ borderLeft: "6px solid #A52323" }}>
            <div className="pl-2 grow ">
              <h1 className=" max-md:text-4xl uppercase text-[#363636]">
                Where Vision Meets Reality, Working for Your TOMORROW
                <span style={{ color: "#A52323" }}></span>
              </h1>
            </div>
          </div>

          <div className="mt-3 text-justify">
            <p className=" mt-3  text-black">
              AL HATHAIFA is a decade-plus experienced company in Oman providing competitive business solutions in the technology, staffing, and talent management sectors. AL HATHAIFA expertise in building strong and trusted partnerships & its commitment to client satisfaction and fostering long-term relationships.
            </p>
            <p className=" mt-3  text-black">
              The emphasis is on having the best, skilled, determined, innovative, and focused mindsets within our which is always dedicated to excellence and delivering top-notch services. The focus is always on customization & delivering result-oriented solutions tailored to individual business needs further underscoring the company’s commitment to client success
            </p>
            <p className=" mt-3  text-black">
              We believe Our clients are more than JUST customers, they are our “BUSINESS PARTNERS"
            </p>
          </div>
          <Link to="/about" className="mt-3">
            <button className="flex items-center px-8 py-4 bg-[#a52323] hover:bg-red-700 transition-colors">
              <div className="text-white text-base   uppercase tracking-[0.16] leading-[24px]">
                <p>About Us</p>
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
