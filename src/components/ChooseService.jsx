import React from 'react'
import "../style/ChooseService.css"
import ChooseServiceImage from "../assets/ChooseService.png"
import "../style/Mission.css"


const ChooseService = () => {
    return (

        <div className="mission bg-cover bg-center bg-no-repeat chooseService py-12  gap-4 max-md:px-5 max-md:py-5">
            <div className='max-w-[1224px] grid grid-cols-2 max-md:grid-cols-1'>

                <div className='max-md:order-2 max-md:mt-24'>
                    <div className=" flex flex-col justify-center border-3 ">
                        <div className='border-[#A52323] max-md:border-l-[6px] lg:border-r-[6px]'>
                            <h1 className=" max-md:pl-2 max-md:text-4xl text-white uppercase  ">why you should choose our  <span style={{ color: "#A52323" }}> services? </span></h1>
                        </div>

                        <div className='mt-2 text-justify text-lg'>
                            <p className=" mt-2 text-white ">At AL HATHAIFA, we take pride in our exceptional team of experts who
                                possess the best skills, unwavering determination, and a forward-thinking mindset. Our primary goal is to provide customized, impact, and outcome-oriented business solutions that are perfectly tailored to suit your unique business needs.</p>
                        </div>
                        <div className="flex gap-5 mt-12 font-semibold text-justify  leading-[150%] max-md:flex-col max-md:mt-10 max-md:max-w-full">
                            <div className="flex gap-3 justify-between w-[250px] max-md:w-full">
                                <img
                                    alt="Customer"
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e5b5fc3fb77e0f3e80d88bf8b1b440d6770994dd058682b693bc65e95727944?apiKey=c81aa461ed88497c9715fa37b92c8996&"
                                    className="w-6 aspect-square fill-red-800"
                                />
                                <div className=" grow text-white text-md ">
                                    <p>100% Customer Retention</p>

                                </div>
                            </div>
                            <div className="flex gap-3 justify-between">
                                <img alt="icon"
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e5b5fc3fb77e0f3e80d88bf8b1b440d6770994dd058682b693bc65e95727944?apiKey=c81aa461ed88497c9715fa37b92c8996&"
                                    className="w-6 aspect-square fill-red-800"
                                />
                                <div className=" grow text-white text-md"><p>Promote local businesses during COVID</p></div>
                            </div>
                        </div>
                        <div className="flex gap-5   mt-4 w-full font-semibold text-justify leading-[150%] max-md:flex-col max-md:pr-5 max-md:max-w-full">
                            <div className="flex gap-3 justify-between w-[250px] max-md:w-full">
                                <img alt="ISO"
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e5b5fc3fb77e0f3e80d88bf8b1b440d6770994dd058682b693bc65e95727944?apiKey=c81aa461ed88497c9715fa37b92c8996&"
                                    className="w-6 aspect-square fill-red-800"
                                />
                                <div className=" grow text-white text-md"><p>ISO Certified</p></div>
                            </div>
                            <div className="flex gap-3 justify-between" >
                                <img alt="Diversity"
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e5b5fc3fb77e0f3e80d88bf8b1b440d6770994dd058682b693bc65e95727944?apiKey=c81aa461ed88497c9715fa37b92c8996&"
                                    className="w-6 aspect-square fill-red-800"
                                />
                                <div className="grow text-white text-start"><p>Diversity and inclusion</p></div>
                            </div>
                        </div>
                        <div className="flex gap-5 justify-between mt-12 w-full text-2xl leading-7 uppercase max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                            <div className="flex gap-5 items-center justify-between">
                                <img alt="Best"
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b30a1196f6ff009953adcf757795840287fbb59dd2184c6dd4e1a4b70597057a?apiKey=c81aa461ed88497c9715fa37b92c8996&"
                                    className="self-start aspect-square w-[54px]"
                                />
                                <div className="w-1 h-14 bg-red-800" />
                                <div className='text-white text-2xl  '>
                                    <p> TOP - quality</p>
                                </div>
                            </div>
                            <div className="flex gap-5 items-center justify-between">
                                <img alt="Lorem"
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b30a1196f6ff009953adcf757795840287fbb59dd2184c6dd4e1a4b70597057a?apiKey=c81aa461ed88497c9715fa37b92c8996&"
                                    className="self-start aspect-square w-[54px]"
                                />
                                <div className="w-1 h-14 bg-red-800" />
                                <div className='text-white text-2xl uppercase  '>
                                    <p>
                                        tailored solutions
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='max-md:mb-5 lg:flex relative justify-end'>
                    <div className="absolute flex z-10 flex-col lg:left-[5%] lg:top-[0%] bottom-[-15%] left-[20%] self-stretch h-max px-7 py-9 my-auto uppercase bg-white rounded-3xl max-md:px-5">
                        <div className=" text-red-800   leading-[59.92px] max-md:text-4xl">
                            <p className='text-6xl'>8+</p>
                        </div>
                        <div className="mt-2 text-2xl   leading-7 text-black">
                            <p>Years of  <br /> experience</p>
                        </div>
                    </div>
                    <div className=" flex justify-end items-center max-md:mb-5 h-full">
                        <img className=" object-cover overflow-hidden	w-[460px] max-md:w-full max-md:h-full " src={ChooseServiceImage} alt="About" />
                    </div>
                </div>

            </div>


        </div>

    )
}

export default ChooseService