import React from 'react'
import ServiceCard from './ServiceCard'
import "../style/Service.css"
const Service = () => {

    const serviceData = [
        {
            heading: "Sales And Marketing",
            description: "Lorem ipsum dolor sit amet consectetur adipiscing."
        },
        {
            heading: "Sales And Marketing",
            description: "Lorem ipsum dolor sit amet consectetur adipiscing."
        },
        {
            heading: "Sales And Marketing",
            description: "Lorem ipsum dolor sit amet consectetur adipiscing."
        },
        {
            heading: "Sales And Marketing",
            description: "Lorem ipsum dolor sit amet consectetur adipiscing."
        },
        {
            heading: "Sales And Marketing",
            description: "Lorem ipsum dolor sit amet consectetur adipiscing."
        },
        {
            heading: "Sales And Marketing",
            description: "Lorem ipsum dolor sit amet consectetur adipiscing."
        },
        {
            heading: "Sales And Marketing",
            description: "Lorem ipsum dolor sit amet consectetur adipiscing."
        },
        {
            heading: "Sales And Marketing",
            description: "Lorem ipsum dolor sit amet consectetur adipiscing."
        },
        {
            heading: "Sales And Marketing",
            description: "Lorem ipsum dolor sit amet consectetur adipiscing."
        },
        {
            heading: "Sales And Marketing",
            description: "Lorem ipsum dolor sit amet consectetur adipiscing."
        },
    ]
    return (
        <div className='service pt-10 pb-16 flex flex-col justify-center items-center'>

            <div className='' style={{ borderLeft: "6px solid #A52323" }}>
                <h1 className="pl-2 text-5xl font-bold uppercase text-[#fff]" style={{ fontWeight: "400" }}>OUR <stronge style={{ color: "#A52323" }}>Service </stronge></h1>

            </div>

            <div className='flex justify-center items-center mt-5 mb-5'>

                <div className='grid grid-cols-4 place-content-center' style={{ padding: "0 3rem", gap: "1rem" }}>
                    {serviceData.map((serviceCardData, index) => (
                        <ServiceCard
                            key={index}
                        />
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Service