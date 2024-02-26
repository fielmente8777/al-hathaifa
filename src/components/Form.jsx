import React from 'react'

const Form = () => {
    return (
        <div className="flex flex-col ml-5 w-[39%] max-md:ml-0 max-md:w-full">
            <div className="flex relative flex-col grow justify-center text-base max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col px-10 py-8 bg-[#202020] border-solid shadow-sm border-[0.5px] border-[color:var(--Secondary,#A52323)] max-md:px-5 max-md:max-w-full" style={{ boxShadow: "12px 12px 1px #A52323" }}>
                    <div className="text-4xl uppercase leading-[60px] font-bold text-[#363636]">
                        <h1 className="text-white">Get <span className="text-[#A52323]"> in touch</span></h1>
                    </div>
                    <div className="flex flex-col justify-center items-start py-3 pr-16 pl-6 mt-6 w-full bg-white border-solid border-[0.5px] border-[color:var(--Secondary,#A52323)] max-md:px-5">
                        <div className="flex gap-3">
                            <div className="my-auto font-black leading-[175%] text-neutral-700">
                                
                            </div>
                            <div className="font-medium text-neutral-400">
                                Your Name
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-start py-3 pr-16 pl-6 mt-3 w-full bg-white border-solid border-[0.5px] border-[color:var(--Secondary,#A52323)] max-md:px-5">
                        <div className="flex gap-3">
                            <div className="font-black leading-[175%] text-neutral-600">
                                
                            </div>
                            <div className="font-medium text-neutral-400">
                                Phone
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-start py-3 pr-16 pl-6 mt-3 w-full bg-white border-solid border-[0.5px] border-[color:var(--Secondary,#A52323)] max-md:px-5">
                        <div className="flex gap-3">
                            <div className="font-black leading-[175%] text-neutral-600">
                                
                            </div>
                            <div className="font-medium text-neutral-400">
                                Your Email
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-start pt-5 pr-16 pb-12 pl-6 mt-3 w-full whitespace-nowrap bg-white border-solid border-[0.5px] border-[color:var(--Secondary,#A52323)] max-md:px-5">
                        <div className="flex gap-3 mb-16 max-md:mb-10">
                            <div className="font-black leading-[179.2%] text-neutral-600">
                                
                            </div>
                            <div className="font-medium text-neutral-400">Message</div>
                        </div>
                    </div>
                    <div className="justify-center self-start px-8 py-3 mt-6 font-bold tracking-normal text-right text-white uppercase whitespace-nowrap bg-red-800 leading-[150%] max-md:px-5">
                        submit
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form