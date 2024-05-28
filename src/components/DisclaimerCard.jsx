import React from 'react'

const DisclaimerCard = ({ pageData }) => {
    console.log(pageData)
    return (
        <div className='flex justify-center my-5 max-md:px-5'>

            <div className='flex justify-start'>
                <div className='flex flex-col text-left items-start max-w-[1224px]'>
                    <div className='' style={{ borderLeft: "6px solid #A52323" }}>
                        <div className="pl-2 grow ">
                            <h1> <span className="text-[40px] leading-8 max-md:leading-0 max-md:text-4xl capitalize text-[#363636]">
                                {pageData.heading}
                            </span></h1>

                        </div>
                    </div>
                    <div>
                        <span className="text-[24px] leading-[40px] max-md:text-4xl capitalize text-[#363636]">
                            {pageData.subheading}
                        </span>
                    </div>
                    <div className='max-md:mt-0 grow text-base font-medium leading-6 text-justify w-[1224px] max-md:w-full  text-black'>
                        <p className='my-6'>{pageData.description1}</p>
                        <p className='my-6'>{pageData.description2}</p>
                        <p className='my-6'>{pageData.description3}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default DisclaimerCard