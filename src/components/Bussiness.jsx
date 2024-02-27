import React from 'react'
import BussinessImg from "../assets/professional-business-team-workplace 1.png"
import BussinessImage from "../assets/medium-shot-people-working-desk 1.png"

const Bussiness = () => {
    return (
        <div className='px-24 flex justify-center py-10 max-md:px-5'>
            <div className="flex flex-col max-w-[1224px]">
                <div className="flex justify-between text-red-800 uppercase leading-[60px] max-md:flex-wrap max-md:max-w-full">

                    <div className='' style={{ borderLeft: "6px solid #A52323" }}>
                        <h1 className="pl-2 text-5xl max-md:text-4xl font-bold uppercase text-[#363636]" >
                            LOREM IPSUM DOLOR CONSECTETUR ABOUT US LOREM <span style={{ color: "#A52323" }}>ADIPISCING ELIT </span></h1>

                    </div>


                </div>
                <div className="mt-12 w-full text-base font-medium leading-6 text-justify text-neutral-400 max-md:mt-10 max-md:max-w-full">
                    <p>Al HATHAIFA is a trusted brand in Oman with a decade-plus of competitive
                        business solutions providers in the Technology, Staffing, and Talent
                        Management Sectors. Established in 2009, AL HATHAIFA has built strong
                        and trusted partnerships and feels proud to say that{" "}
                        <span className="font-semibold text-neutral-700">
                            &quot;Our clients are more than just customers, they are our business
                            partners.&quot;
                        </span>
                        <br />
                        AL HATHAIFA comprises the best, skilled, determined, innovative, and
                        focused mindsets offering customized, effective, and result-oriented
                        business solutions designed to fit your business needs.
                    </p>
                </div>
                <div className="mt-11 w-full max-md:mt-5 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                            <img
                                loading="lazy"
                                src={BussinessImg}
                                className="grow w-full aspect-[1.11] max-md:mt-5 max-md:max-w-full"
                            />
                        </div>
                        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                            <img
                                loading="lazy"
                                src={BussinessImage}
                                className="grow w-full aspect-[1.11] max-md:mt-5 max-md:max-w-full"
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-12 w-full text-base font-medium leading-6 text-justify text-neutral-400 max-md:mt-10 max-md:max-w-full">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.
                </div>
            </div>
        </div>
    )
}

export default Bussiness