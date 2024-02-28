import React, { useEffect } from 'react'
import Banner from '../components/Banner'
import About from '../components/About'
import Mission from '../components/Mission'
import WorkingProcess from '../components/WorkingProcess'
import Service from '../components/Service'
import ChooseService from '../components/ChooseService'
import Skills from '../components/Skills'
import Management from '../components/Management'
import Partner from '../components/Partner'
import Footer from '../components/Footer'
import FormMap from '../components/FormMap'
import OurGoals from '../components/OurGoals'
import Solution from '../components/Solution'
import OurSpeciality from '../components/OurSpeciality'
import BenifitsForCLient from '../components/BenifitsForCLient'
import MarketAnalysis from '../components/MarketAnalysis'

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll the window to the top
    }, []);
    return (
        <div>
            <Banner
                heading="Where expertise meets opportunity"
                description="Innovation, integrity, impact – discover the AL HATHAIFA difference."
            />

            <About />

            <Mission />

            <WorkingProcess />

            <ChooseService />

            <MarketAnalysis />

            <Skills />

            <Service />

            <OurGoals />

            <Management />

            <div className='w-full h-[3rem] bg-[#A52323]' >
            </div>

            <Solution />

            <OurSpeciality />

            <BenifitsForCLient />

            <Partner />

            <FormMap />

            <Footer />
        </div>
    )
}

export default Home