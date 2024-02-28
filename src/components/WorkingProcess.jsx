import React from 'react'
import WorkingCard from './WorkingCard'

const WorkingProcess = () => {

    const WorkingCardData = [
        {
            heading: "Customised Approach",
            description: "Our approach is designed exclusively for your needs. Through examination and collaboration, we create tailor-made solutions for resounding success."
        },
        {
            heading: "Effective & innovative",
            description: "By utilizing cutting-edge techniques, we blend efficiency and creativity to fulfill your needs and propel your company towards success."
        },
        {
            heading: "result oriented",
            description: "Our tailored solutions are laser-focused on achieving tangible outcomes that make a real impact on your bottom line."
        }
    ]
    return (
        <div className='py-[3rem] '>
            <div className='flex justify-center mb-5 pb-5 max-md:px-5'>
                <div className='' style={{ borderLeft: "6px solid #A52323" }}>
                    <div className="pl-2 grow uppercase max-md:text-4xl">
                        <h1><span className="text-[#363636] ">OUR Working  </span>
                            <span className="text-red-800">process</span>
                        </h1>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center mt-5'>

                <div className='flex  max-w-[1224px] justify-center items-center w-3/4 max-md:w-full max-md:flex-wrap gap-10 max-md:px-5'>
                    {WorkingCardData.map((workingcarddata, index) => (
                        <WorkingCard
                            key={index}
                            WorkingCardData={workingcarddata}
                        />
                    ))}

                </div>
            </div>

        </div >
    )
}

export default WorkingProcess