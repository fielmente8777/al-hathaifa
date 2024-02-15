import React from 'react'
import WorkingCard from './WorkingCard'

const Service = () => {

    const WorkingCardData = [
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
        <div className='mb-16'>
            <h1 className='py-4  text-5xl text-center font-bold uppercase text-[#363636] '>our <span className='uppercase text-[#A52323]'>Service</span></h1>

            <div className='flex justify-center items-center mt-5'>

                <div className='grid grid-cols-4' style={{ padding: "0 3rem", gap: "1rem" }}>
                    {WorkingCardData.map((workingcarddata, index) => (
                        <WorkingCard
                            key={index}
                            WorkingCardData={workingcarddata}
                        />
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Service