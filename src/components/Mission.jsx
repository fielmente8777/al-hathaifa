import React from 'react'
import MissonImage from "../assets/svg/mission.svg"
import MissionVision from "../assets/svg/business-colleagues-watching-discussing-content 1.svg"
import "../style/Mission.css"
import { useLocation } from 'react-router-dom'
const Mission = () => {

    const location = useLocation()


    let image;
    if (location.pathname === '/') {
        image = MissonImage;
    } else {
        image = MissionVision;
    }
    return (
        <div className='mission bg-cover bg-center bg-no-repeat flex justify-center max-md:px-5 '>
            <div className="py-10 lg:grid lg:grid-cols-2 gap-5 max-w-[1224px]">
                <div className={`flex flex-col justify-center border-3 max-md:order-1 ${location.pathname === "/about" ? "order-2" : ""}`}>
                    <div className='' style={{ borderLeft: "6px solid #A52323" }}>
                        <div className="pl-2 text-[40px] grow uppercase max-md:text-4xl">
                            <h1><span className="text-white ">OUR MISSION &  </span>
                                <span className="text-red-800">VISION</span>
                            </h1>
                        </div>
                    </div>

                    <div className='mt-2 text-justify'>
                        <p className=" mt-2 text-white ">Our mission is to become a global service provider and Talent Solutions Organization offering improved efficiency, scalability, and reliability. We strive to bridge the gaps
                            of miscommunication, understanding our customers' needs to provide 100% satisfaction.</p>
                        <p className='mt-2 text-white'>Our vison is that we want our services to define new benchmarks for growth, honesty, and professionalism. We are consistent in our efforts to keep our customers first and always.</p>

                    </div>

                </div>
                <div className=" flex justify-start ">
                    <img className='w-auto h-full object-cover' src={image} alt="Image" style={{ height: "100%" }} />
                </div>
            </div>
        </div>
    )
}

export default Mission