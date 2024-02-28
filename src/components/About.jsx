import React from 'react'
import "../style/About.css"
import AboutImage from "../assets/image.png"
import { Link } from "react-router-dom"
const About = () => {
    return (
        <div className='about'>
            <div className=" grid grid-cols-2 max-md:grid-cols-1 max-w-[1224px] max-md:px-5 gap-4">
                <div className="  flex justify-end ">
                    <img className=" w-auto h-full object-cover " src={AboutImage} alt="Image" style={{ height: "100%" }} />
                </div>
                <div className=" flex flex-col justify-start ">
                    <div className='' style={{ borderLeft: "6px solid #A52323" }}>
                        <div className="pl-2 grow ">
                            <h1> <span className="text-[40px] max-md:text-4xl uppercase text-[#363636]">Where vision meets reality, we are at your service!</span></h1>

                        </div>
                    </div>


                    <div className='mt-3 text-justify'>
                        <p className=" mt-3  text-black">AL HATHAIFA is a trusted brand in Oman with a decade-plus of competitive business solutions providers in the Technology, Staffing, and Talent Management Sectors. Established in 2009, AL HATHAIFA has built strong and trusted partnerships and feels proud to say that "Our clients are more than just customers, they are our business partners."</p>
                        <p className=" mt-3  text-black">AL HATHAIFA comprises the best, skilled, determined, innovative, and focused mindsets offering customized, effective, and result-oriented business solutions designed to fit your business needs.</p>

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

    )
}

export default About





