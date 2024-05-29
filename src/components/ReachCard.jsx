import React from 'react'

const ReachCard = () => {
    return (
        <div className='max-w-[1224px] mx-auto mt-10 max-md:px-5'>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
                <div className="flex flex-col  max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow justify-center text-center text-white">
                        <div className="flex flex-col px-10 py-10 bg-[#A52323] border-[#D1D0A3] border-solid border-t-[6px] max-md:px-5">
                            <div className="self-center text-4xl font-semibold leading-10 uppercase">
                                8000
                            </div>
                            <div className="mt-2.5 text-base font-medium leading-6">
                                Jobs Created since Inception
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col  max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow justify-center text-center text-white">
                        <div className="flex flex-col px-10 py-10 border-[#D1D0A3] border-solid bg-[#202020] border-b-[6px] max-md:px-5">
                            <div className="self-center text-4xl font-semibold leading-10 uppercase">
                                120+
                            </div>
                            <div className="mt-2.5 text-base font-medium leading-6">
                                Satisfied Clients
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow justify-center text-center text-white">
                        <div className="flex flex-col px-10 py-10 bg-[#A52323] border-[#D1D0A3] border-solid border-t-[6px] max-md:px-5">
                            <div className="self-center text-4xl font-semibold leading-10 uppercase">
                                10+
                            </div>
                            <div className="mt-2.5 text-base font-medium leading-6">
                                Years in Industry
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow justify-center text-center text-white">
                        <div className="flex flex-col px-10 py-10 border-[#D1D0A3] border-solid bg-[#202020] border-b-[6px] max-md:px-5">
                            <div className="self-center text-4xl font-semibold leading-10 uppercase">
                                18+
                            </div>
                            <div className="mt-2.5 text-base font-medium leading-6">
                                Industry Awards
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReachCard