import React from 'react'
import "../style/About.css"
import AboutImage from "../assets/Figure → Link → choose1-1.jpg.png"
const About = () => {
    return (
        <div className='about'>
            <div className=" grid grid-cols-2 gap-4">
                <div className=" flex justify-end " style={{ height: "550px " }}>
                    <img className=" w-auto h-full object-cover " src={AboutImage} alt="Image" style={{ height: "100%" }} />
                </div>
                <div className=" flex flex-col justify-start " style={{ width: "600px" }}>
                    <div className='p-2 ' style={{ borderLeft: "6px solid #A52323" }}>
                        <h1 className="text-5xl" style={{ fontWeight: "600" }}>Lorem ipsum dolor consectetur ABOUT US LOREM <stronge style={{ color: "#A52323" }}>adipiscing elit</stronge></h1>

                    </div>

                    <div className='mt-3 text-justify text-lg'>
                        <p className=" mt-3 ">AL HATHAIFA is a trusted name in Oman with over a decade of offering competitive Business solutions in Technology, Staffing and Talent Sectors. Established in 2009, we at AL HATHAIFA believe in maintaining strong trusted partnerships within and outside our organisation and hence we proudly say that ‘Our Clients are our Partners’.</p>
                        <p className='mt-3'>AL HATHAIFA are a team of the best, innovative, skilled and passionate mindsets who offer customized, effective and result oriented business solutions designed to fit your business needs. Our innovative and proactive response services help promote customer satisfaction thereby increasing productivity of our clients.</p>

                    </div>
                    <div className="mt-3 hidden md:block">
                        <button className="flex items-center px-6 py-3 bg-[#a52323] hover:bg-red-700 transition-colors">
                            <span className="text-white text-sm font-bold uppercase tracking-[0.16] leading-[24px]">
                                About
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About





