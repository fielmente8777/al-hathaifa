import React from 'react'

const MarketAnalysis = () => {
    return (
        <div className="flex justify-center py-10 max-md:px-5">
            <div className='max-w-[1224px] flex flex-col'>
                <div className="flex gap-3 self-center pr-5 max-md:pr-0 text-4xl text-justify text-red-800  leading-[60px]">
                    <div className='' style={{ borderLeft: "6px solid #A52323" }}>
                        <div className="pl-2 grow text-[#363636]   max-md:text-4xl">
                            <h1><span className="font-medium  ">Market </span>
                                <span className="text-red-800 font-medium">Analysis</span>
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="mt-10 w-full font-medium leading-6 text-center max-md:text-justify  text-black max-md:max-w-full">
                    <p>Oman's economy is expanding at a rapid pace & each new enterprise has its own set of professional challenges. Al Hathaifa provides comprehensive business solutions to ensure that we can participate and propel Oman's market to new heights of growth.
                    </p>
                    <p className='mt-5'>  We are motivated by a long-term goal of becoming worldwide industry leaders and improving our business' accuracy, profitability, and brand assurance. We have all of the key clients in our field and are on our way to exploring new territory.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MarketAnalysis