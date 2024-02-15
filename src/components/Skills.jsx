import React from 'react'
import MissonImage from "../assets/Figure → faq1-1.jpg.png"

const Skills = () => {

    const businessSuccessRate = 95;
    const technologySuccessRate = 80;
    const talentSuccessRate = 90;

    const getProgressBarColor = (successRate) => {
        return successRate >= 90 ? 'bg-[#A52323]    ' : successRate >= 70 ? 'bg-yellow-500' : 'bg-[#A52323]';
    };

    return (
        <div className='about'>
            <div className=" grid grid-cols-2 gap-4">
                <div className=" flex justify-end " style={{ height: "550px ", width: "600px" }}>
                    <img className=" w-auto h-full object-cover " src={MissonImage} alt="Image" style={{ height: "100%" }} />
                </div>
                <div className=" flex flex-col justify-center item-center " style={{ width: "600px" }}>
                    <div className='p-2 ' style={{ borderLeft: "6px solid #A52323" }}>
                        <h1 className="text-5xl" style={{ fontWeight: "600" }}>OUR <stronge style={{ color: "#A52323" }}>Skills </stronge></h1>

                    </div>

                    <div className='mt-3 text-justify text-lg'>
                        <p className=" mt-3 ">AL HATHAIFA is a trusted name in Oman with over a decade of offering competitive Business solutions in Technology, Staffing and Talent Sectors. Established in 2009, we at AL HATHAIFA believe in maintaining strong trusted partnerships within and outside our organisation and hence we proudly say that ‘Our Clients are our Partners’.</p>
                    </div>

                    <div className='mt-5'>
                        <div className="flex flex-col">
                            <div className="flex flex-col justify-center mt-2">
                                <div className='flex justify-between'>
                                    <p className='text-md'>Business Solution</p>
                                    <span className="ml-2">{businessSuccessRate}% </span>
                                </div>
                                <div className="w-full h-2 bg-gray-200 rounded-lg overflow-hidden">
                                    <div className={`${getProgressBarColor(businessSuccessRate)} h-full`} style={{ width: `${businessSuccessRate}%` }}></div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center mt-2">
                                <div className='flex justify-between'>
                                    <p className='text-md'>Technology Solutions</p>
                                    <span className="ml-2">{technologySuccessRate}% </span>
                                </div>
                                <div className="w-full h-2 bg-gray-200 rounded-lg overflow-hidden">
                                    <div className={`${getProgressBarColor(technologySuccessRate)} h-full`} style={{ width: `${technologySuccessRate}%` }}></div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center mt-2">
                                <div className='flex justify-between'>
                                    <p className='text-md'>Talent Solutions</p>
                                    <span className="ml-2">{talentSuccessRate}% </span>
                                </div>
                                <div className="w-full h-2 bg-gray-200 rounded-lg overflow-hidden">
                                    <div className={`${getProgressBarColor(talentSuccessRate)} h-full`} style={{ width: `${talentSuccessRate}%` }}></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>

    )
}

export default Skills