import React from 'react'
import "../style/Management.css"
const Management = () => {
    return (
        <div className="management" style={{ padding: "3rem 8rem" }}>
            <div className=" flex flex-col justify-center border-3">
                <div className='p-2 ' style={{ borderLeft: "6px solid #A52323" }}>
                    <h1 className="text-5xl text-white uppercase" style={{ fontWeight: "600" }}>Message from  <stronge style={{ color: "#A52323" }}>management</stronge></h1>

                </div>

                <p className=" mt-6 text-white ">Al Hathaifa Group believes in critical brainstorming before taking any action. We believe in people's power who strengthen our work and play a key role in success. We share a mindset that foresees an objective of becoming our stakeholder's most desired partner with consistency, determination, and hard work. We pursue excellence by inducing empowering and sustainable growth to enrich the Oman economy.</p>

                <h1 className='mt-6 text-white text-2xl font-bold'>MS WARD ALMAN JI</h1>
                <p className='mt-2 text-white text-md'>Chairman, Al Hathaifa Group.</p>


            </div>
        </div>
    )
}

export default Management