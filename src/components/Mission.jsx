import React from 'react'
import MissonImage from "../assets/Figure → faq1-1.jpg.png"
import "../style/Mission.css"
const Mission = () => {
    return (
        <div className="mission grid grid-cols-2 gap-4">
            <div className=" flex flex-col justify-center border-3" style={{ width: "600px" }}>
                <div className='p-2 ' style={{ borderLeft: "6px solid #A52323" }}>
                    <h1 className="text-5xl text-white uppercase" style={{ fontWeight: "600" }}>OUR MISSION &    <stronge style={{ color: "#A52323" }}>VISION</stronge></h1>

                </div>

                <div className='mt-2 text-justify text-lg'>
                    <p className=" mt-2 text-white ">Our mission is to empower our stakeholders by uniting the platform of Technology Advancements, Talent & Business Solutions, to provide innovative and cost-effective business solutions that can meet and exceed client expectations and craft future capabilities to develop the Oman economy.</p>
                    <p className='mt-2 text-white'>We want to be known as one of the best Talent Solutions Company in Oman, create a reputation as the most trusted, preferred and valued business partner for our clients and to be amongst the most desired companies for our internal and external partners.</p>

                </div>

            </div>
            <div className=" flex justify-start " style={{ width: "600px" }}>
                <img className=" w-auto h-full object-cover " src={MissonImage} alt="Image" style={{ height: "100%" }} />
            </div>

        </div >
    )
}

export default Mission