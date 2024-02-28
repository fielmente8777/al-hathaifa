import React from 'react'
import light from "../assets/Vector (1).png"
const WorkingCard = ({ WorkingCardData }) => {
    console.log(WorkingCardData)
    return (
        <div className='flex flex-col justify-center items-center py-8 px-2 border-2 border-[#A52323] w-[26rem] h-[300px]' >
            <div className='bg-red-700 p-4'>
                <img src={light} alt='light image' className='h-14 w-14' />
            </div>
            <div className='py-4 text-2xl   uppercase text-[#363636]'>
                <h2 >{WorkingCardData.heading}</h2>
            </div>
            <div className='text-md text-center  text-black '>
                <p>{WorkingCardData.description}</p>
            </div>
        </div>
    )
}

export default WorkingCard