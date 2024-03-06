import React from 'react'
import BussinessImg from "../assets/disabled-girl-muslims-informal-office-meeting 1.png"
import BussinessImage from "../assets/happy-young-male-female-economists-discussing-financial-documents 1.png"

const Bussiness = () => {
    return (
        <div className='px-24 flex justify-center py-10 max-md:px-5'>
            <div className="flex flex-col max-w-[1224px]">
                <div className="flex justify-between text-red-800 uppercase leading-[60px] max-md:flex-wrap max-md:max-w-full">

                    <div className='' style={{ borderLeft: "6px solid #A52323" }}>
                        <div className="pl-2 grow text-[40px] text-[#363636] uppercase   max-md:text-4xl">
                            <h1>
                                <span> A new era of business standards shaped by the fusion of
                                    passion and purpose</span>

                                <span style={{ color: "#A52323" }}></span></h1>

                        </div>
                    </div>


                </div>
                <div className="mt-12 w-full text-base font-medium leading-6 text-justify text-black max-md:mt-10 max-md:max-w-full">
                    <p>Al HATHAIFA is a trusted brand in Oman with a decade-plus of competitive
                        business solutions providers in the Technology, Staffing, and Talent
                        Management Sectors. Established in 2009, AL HATHAIFA has built strong
                        and trusted partnerships and feels proud to say that{" "}
                        <strong className="font-semibold text-neutral-900">
                            &quot;Our clients are more than just customers, they are our business
                            partners.&quot;
                        </strong>
                    </p>
                    <p className='mt-4 '>
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
                <div className="mt-12 w-full text-base font-medium leading-6 text-justify text-black max-md:mt-10 max-md:max-w-full">
                    <p> With a commitment to excellence, integrity, and professionalism, our vision is to set new standards for growth and honesty in the industry. At Al Hathaifa, our customers always come first, and we continuously strive to exceed their expectations, ensuring 100% satisfaction with every interaction.</p>
                </div>
            </div>
        </div>
    )
}

export default Bussiness