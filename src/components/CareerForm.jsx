import React from 'react'

const CareerForm = () => {
    return (
        <div className='flex justify-center'>
            <div className='pt-10 pb-10 max-md:pb-0  max-w-[1224px] max-md:w-full max-md:px-5'>
                <div className="flex flex-col text-base ">
                    <div className="flex gap-3 self-start text-4xl text-red-800 uppercase leading-[60px]">
                        <div className='pl-2' style={{ borderLeft: "6px solid #A52323" }}>
                            <h1 className="text-5xl text-[#363636]  uppercase font-bold max-md:text-4xl ">Unlock your potential  with  Al HATHAIFA    <span style={{ color: "#A52323" }}></span></h1>


                        </div>
                    </div>
                    <div className="mt-6 w-full font-medium leading-6 text-justify text-neutral-500 max-md:max-w-full">
                        If you are seeking a fulfilling career opportunity with a prominent business solutions provider in Oman, we encourage you to take a look at the job positions available at Al HATHAIFA and submit your application today.
                    </div>
                    <div className="flex flex-col px-11 py-8 mt-14  w-full bg-neutral-800 leading-[150%] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                        <div className="text-4xl text-white font-bold uppercase leading-[60px] max-md:max-w-full">
                            <h1>join our <span className="text-red-800">team</span></h1>
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
                        <div className="flex gap-2.5 justify-between max-md:flex-col mt-2.5 font-medium text-neutral-400 max-md:max-w-full">
                            <div className="flex flex-col flex-1 justify-center whitespace-nowrap max-md:max-w-full">
                                <input className="justify-center items-start py-4 pr-16 pl-7 bg-white max-md:px-5 max-md:max-w-full"
                                    placeholder=' Your Email'
                                />
                            </div>
                            <div className="flex flex-col flex-1 justify-center max-md:max-w-full">
                                <div className="flex flex-col justify-center bg-white max-md:pr-3 max-md:max-w-full">
                                    <div className="flex gap-5 justify-start max-md:max-w-full">
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
                        <div className="justify-center self-center max-md:self-start px-8 py-4 mt-10 font-bold tracking-normal text-right text-white uppercase whitespace-nowrap bg-red-800 max-md:px-5">
                            post your resume
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CareerForm