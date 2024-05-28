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
                    <p>Oman’s economy is growing exponentially, and with each business comes a
                        professional problem. AL HATHAIFA offers complete business solutions to
                        ensure that we can contribute and boost Oman’s market to new heights of
                        growth.
                    </p>
                    <p className='mt-5'>   We are driven by a long-term ambition of becoming global leaders in our
                        industry and taking our business to higher accuracy, profitability and
                        brand assurance. We hold all the major clients in our sector and are on
                        our road to exploring new territories
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MarketAnalysis