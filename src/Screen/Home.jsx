import React from 'react'
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

const Home = () => {
    return (
        <div>
            <Banner />

            <About />

            <Mission />

            <WorkingProcess />

            <ChooseService />

            <Skills />

            <Service />

            <Management />

            <Partner />

            <FormMap />

            <Footer />
        </div>
    )
}

export default Home