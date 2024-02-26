import React from 'react'
import MissonImage from "../assets/mage.png"
import "../style/Mission.css"
import { useLocation } from 'react-router-dom'
const Mission = () => {

    const location = useLocation()
    return (
        <div className='mission flex justify-center max-md:px-5 '>
            <div className="py-10 grid grid-cols-2 gap-5 max-w-[1224px] max-md:grid-cols-1">
                <div className={`flex flex-col justify-center border-3 max-md:order-1 ${location.pathname === "/about" ? "order-2" : ""}`}>
                    <div className='pl-2' style={{ borderLeft: "6px solid #A52323" }}>
                        <h1 className="text-5xl text-white uppercase font-bold max-md:text-4xl">OUR MISSION &    <span style={{ color: "#A52323" }}>VISION</span></h1>

                    </div>

                    <div className='mt-2 text-justify text-lg'>
                        <p className=" mt-2 text-white ">Our mission is to empower our stakeholders by uniting the platform of Technology Advancements, Talent & Business Solutions, to provide innovative and cost-effective business solutions that can meet and exceed client expectations and craft future capabilities to develop the Oman economy.</p>
                        <p className='mt-2 text-white'>We want to be known as one of the best Talent Solutions Company in Oman, create a reputation as the most trusted, preferred and valued business partner for our clients and to be amongst the most desired companies for our internal and external partners.</p>

                    </div>

                </div>
                <div className=" flex justify-start ">
                    <img className='w-auto h-full object-cover  ' src={MissonImage} alt="Image" style={{ height: "100%" }} />
                </div>
            </div>
        </div>
    )
}

export default Mission