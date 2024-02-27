import React from 'react'
import PartnerImage from "../assets/Partner.png"
const Partner = () => {
    return (
        <div className="flex flex-col justify-center items-center w-100 py-10 max-md:px-5 max-md:py-0 max-md:mt-10">
            <div className='' style={{ borderLeft: "6px solid #A52323" }}>
                <h1 className="pl-2 text-5xl text-[#363636] uppercase max-md:text-4xl" style={{ fontWeight: "600" }}>OUR partners &    <stronge style={{ color: "#A52323" }}>clients</stronge></h1>
            </div>
            <div className='h-100 w-full flex justify-center items-center mt-16' style={{ gap: "4rem", }}>
                <div style={{ padding: '2px', border: "1px solid #A52323" }}>
                    <img src={PartnerImage} alt='partner' className='overflow-hidden' />
                </div>
                {/* <div>
                    <img src={Hp} alt="hp" className='h-100 ' />
                </div>
                <div><img src={SultanCenter} alt="hp" /></div>
                <div><img src={MCD} alt="hp" /></div>
                <div><img src={Microsoft} alt="hp" /></div>
                <div><img src={ZADEA} alt="hp" /></div>
                <div><img src={GenetCo} alt="hp" /></div> */}
            </div>
        </div>
    )
}

export default Partner