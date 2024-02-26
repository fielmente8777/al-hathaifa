import React from 'react'
import Banner from "../components/Banner"
import Bussiness from '../components/Bussiness'
import Mission from '../components/Mission'
import OurGoals from '../components/OurGoals'
import Partner from '../components/Partner'
import Footer from "../components/Footer"
const About = () => {

    return (
        <div>
            <Banner />

            <Bussiness />

            <Mission />

            <OurGoals />

            <div className='flex justify-center mb-10 '>
                <div className="justify-center mt-3 hidden max-md:block">
                    <button className="flex items-center px-6 py-3 bg-[#a52323] hover:bg-red-700 transition-colors">
                        <span className="text-white text-sm font-bold uppercase tracking-[0.16] leading-[24px]">
                            Contact Us
                        </span>
                    </button>
                </div>
            </div>

            <Partner />

            <Footer />
        </div>
    )
}

export default About