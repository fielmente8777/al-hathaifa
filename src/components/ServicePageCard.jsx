import React from 'react'
import Service from "../assets/mage.png"
const ServicePageCard = ({ serviceData, imageOrder }) => {

    console.log(imageOrder)
    return (
        <div className='flex justify-center items-center py-10'>
            <div className="max-w-[1224px]  flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                <div className={`flex flex-col w-6/12  max-md:ml-0 max-md:w-full ${imageOrder === 1 ? 'order-2' : ''}`}>
                    <div className="flex  uppercase leading-[60px] max-md:flex-wrap max-md:max-w-full">
                        <div className='pl-2' style={{ borderLeft: "6px solid #A52323" }}>
                            <h1 className="text-4xl uppercase text-[#363636]" style={{ fontWeight: "500" }}>{serviceData.heading}    <span style={{ color: "#A52323" }}></span></h1>

                        </div>
                    </div>
                    <div className="flex flex-col justify-start grow text-base font-medium leading-6 text-justify text-neutral-400 max-md:mt-5 max-md:max-w-full">

                        <div className="mt-6 max-md:max-w-full">
                            {serviceData.description1}
                            <br />
                            {serviceData.description2}
                        </div>
                        <div className="flex gap-3 justify-between mt-6 max-md:flex-wrap max-md:max-w-full">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d705407f0be3bbd6fc12e47deb5722856d449d74194f14ba1f2656bce0846e0?"
                                className="self-start w-7 aspect-square"
                            />
                            <div className="flex-auto max-md:max-w-full">
                                {serviceData.point1}
                            </div>
                        </div>
                        <div className="flex gap-3 justify-between mt-3 max-md:flex-wrap max-md:max-w-full">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d705407f0be3bbd6fc12e47deb5722856d449d74194f14ba1f2656bce0846e0?"
                                className="self-start w-7 aspect-square"
                            />
                            <div className="flex-auto max-md:max-w-full">
                                {serviceData.point2}
                            </div>
                        </div>
                        <div className="justify-center self-start px-8 py-4 mt-6 font-bold tracking-normal text-right text-white uppercase whitespace-nowrap bg-red-800 leading-[150%] max-md:px-5">
                            contact us
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <img
                        loading="lazy"
                        src={Service}
                        className="self-stretch my-auto overflow-hidden object-cover h-[100%] w-full  max-md:mt-9 max-md:max-w-full"
                    />
                </div>

            </div>
        </div>
    )
}

export default ServicePageCard