import React, { useEffect } from 'react'
import Banner from "../components/Banner"
import CareerForm from '../components/CareerForm'
import Footer from "../components/Footer"
export const Careers = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll the window to the top
    }, []);
    return (
        <div>
            <Banner
                heading="EVOLVE YOUR CAREER"
                description="We look forward to welcoming you aboard and working together to achieve great things."
            />

            <CareerForm />

            <Footer />
        </div>
    )
}

