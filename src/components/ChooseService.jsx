import React from 'react'
import "../style/ChooseService.css"
import AboutImage from "../assets/mage.png"
import "../style/Mission.css"


const ChooseService = () => {
    return (

        <div className="mission chooseService px-24 py-12 grid grid-cols-2 max-md:grid-cols-1 gap-4 max-md-px-5 max-md:py-5">
            <div className='max-w-[1224px]'>

            </div>
            <div className=" flex flex-col justify-center border-3" style={{ width: "600px" }}>
                <div style={{ borderRight: "6px solid #A52323", width: '550px' }}>
                    <h1 className="text-5xl max-md:text-4xl text-white uppercase" style={{ fontWeight: "600" }}>why you should choose our  <span style={{ color: "#A52323" }}> services? </span></h1>
                </div>

                <div className='mt-2 text-justify text-lg'>
                    <p className=" mt-2 text-white ">At AL HATHAIFA, we take pride in our exceptional team of experts who
                        possess the best skills, unwavering determination, and a forward-thinking mindset. Our primary goal is to provide customized, impact, and outcome-oriented business solutions that are perfectly tailored to suit your unique business needs.</p>
                </div>
                <div className="flex gap-5 justify-between mt-12 font-semibold text-justify whitespace-nowrap leading-[150%] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                    <div className="flex gap-3 justify-between">
                        <img
                            alt="Customer"
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e5b5fc3fb77e0f3e80d88bf8b1b440d6770994dd058682b693bc65e95727944?apiKey=c81aa461ed88497c9715fa37b92c8996&"
                            className="w-6 aspect-square fill-red-800"
                        />
                        <div className=" grow text-white text-md">100% Customer Retention</div>
                    </div>
                    <div className="flex gap-3 justify-between">
                        <img alt="icon"
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e5b5fc3fb77e0f3e80d88bf8b1b440d6770994dd058682b693bc65e95727944?apiKey=c81aa461ed88497c9715fa37b92c8996&"
                            className="w-6 aspect-square fill-red-800"
                        />
                        <div className=" grow text-white text-md">Promote local businesses during COVID</div>
                    </div>
                </div>
                <div className="flex gap-5 justify-between pr-20 mt-4 w-full font-semibold text-justify whitespace-nowrap leading-[150%] max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                    <div className="flex gap-3 justify-between">
                        <img alt="ISO"
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e5b5fc3fb77e0f3e80d88bf8b1b440d6770994dd058682b693bc65e95727944?apiKey=c81aa461ed88497c9715fa37b92c8996&"
                            className="w-6 aspect-square fill-red-800"
                        />
                        <div className="grow grow text-white text-md">ISO Certified</div>
                    </div>
                    <div className="flex gap-3 justify-between">
                        <img alt="Diversity"
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e5b5fc3fb77e0f3e80d88bf8b1b440d6770994dd058682b693bc65e95727944?apiKey=c81aa461ed88497c9715fa37b92c8996&"
                            className="w-6 aspect-square fill-red-800"
                        />
                        <div className="grow text-white text-md">Diversity and inclusion</div>
                    </div>
                </div>
                <div className="flex gap-5 justify-between mt-12 w-full text-2xl leading-7 uppercase max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                    <div className="flex gap-5 justify-between">
                        <img alt="Best"
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b30a1196f6ff009953adcf757795840287fbb59dd2184c6dd4e1a4b70597057a?apiKey=c81aa461ed88497c9715fa37b92c8996&"
                            className="self-start aspect-square w-[54px]"
                        />
                        <div className="w-1 h-14 bg-red-800" />
                        <div className='text-white text-2xl font-bold'>Best Lorem ipsum</div>
                    </div>
                    <div className="flex gap-5 justify-between">
                        <img alt="Lorem"
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b30a1196f6ff009953adcf757795840287fbb59dd2184c6dd4e1a4b70597057a?apiKey=c81aa461ed88497c9715fa37b92c8996&"
                            className="self-start aspect-square w-[54px]"
                        />
                        <div className="w-1 h-14 bg-red-800" />
                        <div className='text-white text-2xl font-bold'>Lorem ipsum dolor</div>
                    </div>
                </div>

            </div>
            <div className=" experiencecard flex z-10 flex-col left-[52%] self-stretch px-7 py-9 my-auto uppercase bg-white rounded-3xl h-[187px] w-[187px] max-md:px-5">
                <div className="text-6xl text-red-800 leading-[59.92px] max-md:text-4xl">
                    8+
                </div>
                <div className="mt-2 text-2xl leading-7 text-black">
                    Years of experience
                </div>
            </div>
            <div className=" flex justify-end" style={{ width: "600px" }}>
                <img className=" w-auto h-full object-cover overflow-hidden	 " src={AboutImage} alt="About" style={{ height: "550px", width: "460px" }} />
            </div>

        </div>

    )
}

export default ChooseService