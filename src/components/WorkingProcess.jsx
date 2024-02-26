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
<<<<<<< HEAD
        <div style={{ padding: "3rem 0" }}>
            <div className=' text-center text-5xl p-5 mb-5'>
                <h1 className="text-5xl font-bold uppercase text-[#363636]">OUR Working <span className='text-[#A52323]'>process</span></h1>
            </div>
            <div className='flex justify-center items-center mt-5'>

                <div className='flex justify-center items-center w-3/4' style={{ gap: "1rem" }}>
=======
        <div className='py-[3rem] '>
            <div className='flex justify-center mb-5 pb-5 max-md:px-5'>
                <div className='' style={{ borderLeft: "6px solid #A52323" }}>
                    <div className="pl-2 grow ">
                        <h1 className="text-5xl font-bold uppercase max-md:text-4xl text-[#363636]">OUR Working <span className='text-[#A52323]'>process</span></h1>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center mt-5'>

                <div className='flex justify-center items-center w-3/4 max-md:w-full max-md:flex-wrap gap-10 max-md:px-5'>
>>>>>>> origin/abhi2
                    {WorkingCardData.map((workingcarddata, index) => (
                        <WorkingCard
                            key={index}
                            WorkingCardData={workingcarddata}
                        />
                    ))}

                </div>
            </div>

<<<<<<< HEAD
        </div>
=======
        </div >
>>>>>>> origin/abhi2
    )
}

export default WorkingProcess