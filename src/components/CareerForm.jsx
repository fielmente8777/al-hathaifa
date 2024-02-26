import React from 'react'

const CareerForm = () => {
    return (
        <div className='flex justify-center'>
            <div className='py-10  max-w-[1224px]'>
                <div className="flex flex-col text-base ">
                    <div className="flex gap-3 self-start text-4xl text-justify text-red-800 uppercase whitespace-nowrap leading-[60px]">
                        <div className='p-2' style={{ borderLeft: "6px solid #A52323" }}>
                            <h1 className="text-5xl font-bold uppercase text-[#363636]" style={{ fontWeight: "400" }}>
                                LOREM <span style={{ color: "#A52323" }}>IPSUM </span></h1>

                        </div>
                    </div>
                    <div className="mt-6 w-full font-medium leading-6 text-justify text-neutral-500 max-md:max-w-full">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                        mollit anim id est laborum.
                    </div>
                    <div className="flex flex-col px-11 py-8 mt-14 w-full bg-neutral-800 leading-[150%] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                        <div className="text-4xl text-red-800 uppercase leading-[60px] max-md:max-w-full">
                            join our <span className="text-red-800">team</span>
                        </div>
                        <div className="flex gap-2.5 justify-between mt-6 font-medium whitespace-nowrap text-neutral-400 max-md:flex-wrap max-md:max-w-full">
                            <div className="flex flex-col flex-1 justify-center max-md:max-w-full">
                                <input type='text' className="justify-center items-start py-4 pr-16 pl-7 bg-white max-md:px-5 max-md:max-w-full"
                                    placeholder='Your Name'
                                    value=""
                                />
                            </div>
                            <div className="flex flex-col flex-1 justify-center max-md:max-w-full">
                                <input type='text' className="justify-center items-start py-4 pr-16 pl-7 bg-white max-md:px-5 max-md:max-w-full"
                                    placeholder=' Your Phone Number'
                                />
                            </div>
                        </div>
                        <div className="flex gap-2.5 justify-between mt-2.5 font-medium text-neutral-400 max-md:flex-wrap max-md:max-w-full">
                            <div className="flex flex-col flex-1 justify-center whitespace-nowrap max-md:max-w-full">
                                <input className="justify-center items-start py-4 pr-16 pl-7 bg-white max-md:px-5 max-md:max-w-full"
                                    placeholder=' Your Email'
                                />
                            </div>
                            <div className="flex flex-col flex-1 justify-center max-md:max-w-full">
                                <div className="flex flex-col justify-center bg-white max-md:px-5 max-md:max-w-full">
                                    <div className="flex gap-5 justify-start max-md:flex-wrap max-md:max-w-full">
                                        <input type='text' placeholder='Job Title' className="flex flex-col justify-center px-7 py-4 w-[90%] bg-white max-md:px-5 max-md:max-w-full" />
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6bf8c1dc75d7e53c632bfcfda399f512fccd4d89b4d80872fc80955f6bec32e9?"
                                            className="my-auto w-7 aspect-[1.75] fill-red-800"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2.5 justify-between mt-2.5 max-md:flex-wrap max-md:max-w-full">
                            <div className="flex flex-col flex-1 justify-center font-medium whitespace-nowrap text-neutral-400 max-md:max-w-full">
                                <input type='text' placeholder='Linkdin' className="justify-center items-start py-4 pr-16 pl-7 bg-white max-md:px-5 max-md:max-w-full"

                                />
                            </div>
                            <div className="flex flex-col flex-1 justify-center max-md:max-w-full">
                                <div className="flex flex-col justify-center px-7 py-2.5 bg-white max-md:px-5 max-md:max-w-full">
                                    <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
                                        <div className="flex-auto my-auto font-medium text-neutral-400">
                                            Upload Resume
                                        </div>
                                        <div className="justify-center px-4 py-1.5 font-bold tracking-normal text-right text-white uppercase whitespace-nowrap bg-red-800">
                                            choose file
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="justify-center self-center px-8 py-4 mt-10 font-bold tracking-normal text-right text-white uppercase whitespace-nowrap bg-red-800 max-md:px-5">
                            post your resume
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CareerForm