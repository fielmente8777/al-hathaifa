import React from 'react'
import WorkingCard from './WorkingCard'

const WorkingProcess = () => {

    const WorkingCardData = [
        {
            heading: "Customised",
            description: "Lorem ipsum dolor sit amet consectetur adipiscing."
        },
        {
            heading: "Effective & innovative",
            description: "Lorem ipsum dolor sit amet consectetur adipiscing."
        },
        {
            heading: "result oriented",
            description: "Lorem ipsum dolor sit amet consectetur adipiscing."
        }
    ]
    return (
        <div style={{ padding: "3rem 0" }}>
            <div className=' text-center text-5xl p-5 mb-5'>
                <h1 className="text-5xl font-bold uppercase text-[#363636]">OUR Working <span className='text-[#A52323]'>process</span></h1>
            </div>
            <div className='flex justify-center items-center mt-5'>

                <div className='flex justify-center items-center w-3/4' style={{ gap: "1rem" }}>
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

export default WorkingProcess