import React from 'react'
import "../style/Management.css"
const Management = () => {
    return (
        <div className="management bg-cover bg-center bg-no-repeat">
            <div className=" flex flex-col justify-center border-3 w-full max-w-[1224px] py-14 max-md:px-5 max-md:py-8">
                <div className='' style={{ borderLeft: "6px solid #A52323" }}>
                    <div className="pl-2 grow text-[40px] uppercase max-md:text-4xl">
                        <h1><span className="text-white    ">Message from </span>
                            <span className="text-red-800">management</span>
                        </h1>
                    </div>
                </div>

                <p className=" mt-6 text-white max-md:text-justify ">AL Hathaifa Group believes in critical brainstorming before taking any action. We believe in people's power who strengthen our work and play a key role in success. We share a mindset that foresees an objective of becoming our stakeholder's most desired partner with consistency, determination, and hard work. We pursue excellence by inducing empowering and sustainable growth to enrich the Oman economy.</p>

                <h1 className='mt-6 text-white text-2xl  '>MS WARD ALMAN JI</h1>
                <p className='mt-2 text-white text-md'>Chairman, Al Hathaifa Group.</p>


            </div>

        </div >
    )
}

export default Management