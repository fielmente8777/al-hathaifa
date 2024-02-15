import React from 'react'
import light from "../assets/Vector (1).png"
const WorkingCard = ({ WorkingCardData }) => {
    console.log(WorkingCardData)
    return (
        <div className='flex flex-col justify-center items-center py-8 px-2 border-2 border-[#A52323]' style={{ width: "26rem", maxWidth: "300px" }} >
            <div className='bg-red-700 p-4'>
                <img src={light} alt='light image' className='h-14 w-14' />
            </div>
            <div className='py-4 text-1xl font-bold uppercase text-[#363636]'>
                <h1>{WorkingCardData.heading}</h1>
            </div>
            <div className='text-md text-center text-[#969698] '>
                <p>{WorkingCardData.description}</p>
            </div>
        </div>
    )
}

export default WorkingCard