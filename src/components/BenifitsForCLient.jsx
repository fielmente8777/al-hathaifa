import React from 'react'
import Benifits from "../assets/professional-business-team-workplace 1.png"

const BenifitsForCLient = () => {
    return (
        <div className='flex justify-center items-center py-10 mt-10 px-24 max-md:px-5 max-md:mt-0  max-md:py-0'>
            <div className="flex gap-5 w-full max-w-[1224px] max-md:flex-col max-md:gap-0 max-md:">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <img
                        loading="lazy"
                        src={Benifits}
                        className="grow w-full aspect-[0.88] max-md:mt-5 max-md:max-w-full object-cover"
                    />
                </div>
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow pl-2 max-md:pl-0 text-base font-medium leading-6 text-neutral-400 max-md:mt-5 max-md:max-w-full">
                        <div className="flex text-4xl text-red-800 uppercase leading-[60px] max-md:flex-wrap max-md:max-w-full">
                            <div className='' style={{ borderLeft: "6px solid #A52323" }}>
                                <div className="pl-2 grow text-[#363636] uppercase  max-md:text-4xl">
                                    <h1> Benefits for Our <span className="text-red-800">Clients</span></h1>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-3 self-start mt-6 font-bold text-justify whitespace-nowrap text-black">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e5b5fc3fb77e0f3e80d88bf8b1b440d6770994dd058682b693bc65e95727944?"
                                className="w-6 aspect-square fill-red-800"
                            />
                            <div className="grow ">
                                <p>Ensuring Sellout and Productivity</p>
                            </div>
                        </div>
                        <div className="flex pl-2  text-black mt-4 max-md:max-w-full">
                            <li></li>
                            <p>We work with Daily/Weekly/Monthly Targets.</p>
                        </div>
                        <div className="flex pl-2  text-black  mt-2 max-md:max-w-full">
                            {" "}
                            <li></li>
                            <p> Discuss, Agree and Work with Customer defined KPIs.</p>
                        </div>
                        <div className=" flex pl-2   text-black   mt-2 max-md:max-w-full">
                            <li></li>
                            <p> Complete Management of SalesForce by Al-Hathaifa.</p>
                        </div>
                        <div className="flex gap-3 self-start mt-4 font-semibold text-justify whitespace-nowrap  text-black">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e5b5fc3fb77e0f3e80d88bf8b1b440d6770994dd058682b693bc65e95727944?"
                                className="w-6 aspect-square fill-red-800"
                            />
                            <div className="grow"><p>Target-Based Payment (TBP)</p></div>
                        </div>
                        <div className="flex pl-2   text-black  mt-4 leading-6 max-md:max-w-full">
                            <li> </li>
                            <p> Compensation directly tied to targets, ensuring a clear and fair
                                link between results and pay.</p>
                        </div>
                        <div className="flex pl-2   text-black  mt-2 max-md:max-w-full">
                            <li> </li>
                            <p>  Simplified Payment Structures</p>
                        </div>
                        <div className="flex gap-3 self-start mt-4 font-semibold text-justify whitespace-nowrap  text-black">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e5b5fc3fb77e0f3e80d88bf8b1b440d6770994dd058682b693bc65e95727944?"
                                className="w-6 aspect-square fill-red-800"
                            />
                            <div className="grow"><p>Comprehensive Retail Network</p></div>
                        </div>
                        <div className="flex pl-2  text-black  mt-4 leading-6 max-md:max-w-full">
                            {" "}
                            <li> </li>
                            <p> Strong Retail Partnerships: Effective product placement in major
                                hypermarkets and malls.</p>
                        </div>
                        <div className="flex pl-2  text-black  mt-2 max-md:max-w-full">
                            <li></li>
                            <p> Efficient Documentation Management: Handling all necessary
                                paperwork.</p>
                        </div>
                        <div className="flex gap-3 self-start mt-4 font-semibold text-justify whitespace-nowrap  text-black">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e5b5fc3fb77e0f3e80d88bf8b1b440d6770994dd058682b693bc65e95727944?"
                                className="w-6 aspect-square fill-red-800"
                            />
                            <div className="grow"> <p>FlexiblePromoter Scheduling</p></div>
                        </div>
                        <div className="flex pl-2   text-black  mt-4 leading-6 max-md:max-w-full">
                            <li></li>
                            <p> Customizable Hours: Availability for 9-hour shifts, weekends, peak
                                hours, or as required.</p>
                        </div>
                        <div className="flex gap-3 self-start mt-4 font-semibold text-justify whitespace-nowrap  text-black">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e5b5fc3fb77e0f3e80d88bf8b1b440d6770994dd058682b693bc65e95727944?"
                                className="w-6 aspect-square fill-red-800"
                            />
                            <div className="grow"><p>Contract Flexibility</p></div>
                        </div>
                        <div className="flex pl-2   text-black  mt-4 leading-6 max-md:max-w-full">
                            {" "}
                            <li></li>
                            <p> Fixed and On-Demand Basis: Catering to ongoing or specific
                                promotional needs.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BenifitsForCLient