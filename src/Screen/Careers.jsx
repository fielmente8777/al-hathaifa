import React, { useEffect, useState } from 'react'
import Banner from "../components/Banner"
import CareerForm from '../components/CareerForm'
import Footer from "../components/Footer"
import img2 from "../assets/BannerImage/0ba264069b_11zon.jpeg"
import { Helmet } from 'react-helmet'
const Careers = () => {


    const [loader, setLoader] = useState(true);

    useEffect(() => {
        // Set a timeout to delay stopping the loader
        const timer = setTimeout(() => {
            setLoader(false);
        }, 500); // 2000 milliseconds = 2 seconds

        // Cleanup the timeout if the component unmounts before the delay is over
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll the window to the top
    }, []);
    return (
        <div>

            <Helmet>
                <title>Careers at Al-Hathaifa - Join Our Expert Manpower and Sales Force Team in Muscat, Oman</title>
                <meta name="description" content="Explore exciting career opportunities at Al-Hathaifa in Muscat, Oman. Join our expert team in providing top-tier manpower and sales force solutions. Discover your potential and grow your career with us in a dynamic and rewarding environment." />
            </Helmet>
            {loader && <div className="fixed w-[100vw] top-0 h-screen z-30 flex items-center justify-center bg-black bg-opacity-100" role="status">
                <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span className="sr-only">Loading...</span>
            </div>}
            <Banner
                banner={img2}
                heading="EVOLVE YOUR CAREER"
                description="We look forward to welcoming you aboard and working together to achieve great things."
            />

            <CareerForm />

            <Footer />
        </div>
    )
}

export default Careers
