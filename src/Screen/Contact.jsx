import React, { useEffect } from 'react'
import Banner from "../components/Banner"
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll the window to the top
    }, []);
    return (
        <div>
            <Banner
                heading='contact us'
                description="Don't hesitate to reach out. We're here to help."
            />
            <ContactForm />

            <Footer />
        </div>
    )
}

export default Contact