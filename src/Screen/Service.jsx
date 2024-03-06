import React, { useEffect } from 'react'
import ServicePageCard from '../components/ServicePageCard'
import Banner from "../components/Banner"
import Footer from '../components/Footer'
import Sales from "../assets/svg/SalesAnd Marketing.svg"
import Operation from "../assets/svg/opration.svg"
import logis from "../assets/logisticsService.png"
import Delivery from "../assets/Delivery.png"
import recruit from "../assets/svg/R.svg"
import support from "../assets/Support.png"
import indus from "../assets/svg/indust.svg"
import facility from "../assets/svg/hdjhfdjf.svg"
import filed from "../assets/svg/force.svg"
import corpo from "../assets/svg/handShake.svg"
const Service = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll the window to the top
    }, []);
    const data = [
        {
            "image": Sales,
            "heading": "Sales and Marketing",
            "description1": "AL HATHAIFA offers Sales and Marketing services that are customized to boost growth and maximize market potential for your business.- We utilize our extensive industry knowledge and strategic insights to develop effective sales strategies that connect with your target audience and advance your brand.",
            "description2": " Whether you are introducing a new product, entering new markets, or aiming to enhance sales performance, our team is prepared to deliver exceptional results.- Our marketing philosophy emphasizes the importance of building meaningful relationships with your audience, going beyond traditional methods to incorporate innovative digital strategies and experiential campaigns.",
            "point1": "From managing social media to creating content, forming influencer partnerships to creating immersive brand experiences, we employ a variety of tactics to engage customers and foster brand loyalty.",
            "point2": "With AL HATHAIFA as your partner, you can anticipate a proactive, data-driven approach that enables your business to succeed in today's competitive environment."

        },

        {
            "image": Operation,
            "heading": "Operations Management",
            "description1": "At AL HATHAIFA, we recognize that operational efficiency is the foundation of a thriving business. That's why our team of experienced professionals works tirelessly to identify inefficiencies, streamline workflows, and implement industry best practices that optimize your operations from start to finish.",
            "point1": "From managing inventory to optimizing logistics, we utilize cutting-edge technology and proven methodologies to deliver exceptional results that surpass expectations.",
            "point2": "Whether you're a small startup or a large enterprise, our expertise and resources are at your disposal to help you achieve operational excellence and drive long-term success."

        },
        // {
        //     "image": logis,
        //     "heading": "Logistics Services",
        //     "description1": "Our team at AL HATHAIFA utilizes advanced technology and top-notch strategies to guarantee the efficient and affordable transportation of your goods. Whether you are sending items domestically or internationally, you can trust us to manage all your logistics requirements with accuracy and expertise. With us supporting you, you can concentrate on your main operations while we manage the rest, giving you peace of mind and the assurance to expand your business effortlessly.            ",
        //     "point1": "From warehousing and distribution to transportation and inventory management, our comprehensive suite of services is designed to streamline your operations and improve your bottom line.",
        //     "point2": "Our goal is to optimize your supply chain and drive efficiency through end-to-end solutions."

        // },
        // {
        //     "image": Delivery,
        //     "heading": "DELIVERY Services",
        //     "description1": "Designed to cater to the diverse needs of businesses operating in different sectors, our comprehensive delivery solutions are equipped to handle a wide range of shipment sizes and types. Whether it's small parcels or heavy freight, our team is committed to delivering with precision and attention to detail. Stay updated throughout the entire process with our advanced tracking technology and instant updates.",
        //     "point1": "Experience the convenience and reliability of AL HATHAIFA Delivery Services as we simplify the shipping process for you.",
        //     "point2": " Experience the convenience and reliability of AL HATHAIFA Delivery Services today."

        // },
        {
            "image": recruit,
            "heading": "Recruitment Services",
            "description1": "AL HATHAIFA's Recruitment Services provide customized solutions to fulfill your staffing requirements with accuracy and effectiveness. With over ten years of expertise in talent acquisition, we have established a strong reputation for connecting organizations with exceptional candidates from diverse industries. Our team of recruitment specialists employs a strategic methodology to identify and attract individuals who not only possess the necessary skills and qualifications but also align with your company's values, culture, and specific needs.",
            "point1": "Our thorough vetting process ensures that only the most qualified candidates are presented to you for consideration.",
            "point2": "From executive-level positions to entry-level roles, we provide end-to-end recruitment services, including candidate sourcing, screening, and selection"

        },
        {
            "image": support,
            "heading": "F&B Support Services",
            "description1": "With our team of seasoned professionals in the F&B industry, you can rely on us to offer invaluable guidance and assistance, enabling you to optimize your operations and deliver exceptional dining experiences that will leave a lasting impression on your customers. Whether you're in the restaurant, hotel, catering, or food service sector, we understand the importance of tailoring our services to suit your specific needs and goals.",
            "point1": "Our expertise lies in streamlining processes, ensuring top-notch quality control, and maximizing profitability.",
            "point2": "With our dedicated team by your side, you can trust us to drive excellence in your food and beverage operations, giving you a competitive edge in the market."

        },
        {
            "image": indus,
            "heading": "Industrial Technical Services",
            "description1": "At AL HATHAIFA, we understand the diverse demands of industrial clients in Oman, and our Industrial Technical Services are tailored precisely to meet these needs. With a team of skilled technicians and engineers, we are committed to delivering a broad spectrum of technical solutions that enhance operational efficiency, productivity, and safety within industrial settings. From the installation and maintenance of equipment to troubleshooting and repairs, we provide comprehensive technical support to ensure the uninterrupted operation of your industrial facilities.",
            "point1": "At AL HATHAIFA, we understand the critical importance of reliable and efficient technical support in sustaining the smooth operation of industrial operations.",
            "point2": "With an unwavering focus on quality, reliability, and customer satisfaction, AL HATHAIFA is dedicated to surpassing our clients' expectations."

        },
        {
            "image": facility,
            "heading": "Facility Management Services",
            "description1": "Our facility management approach is centered around efficiency, sustainability, and cost-effectiveness. By leveraging cutting-edge technology and implementing industry best practices, we are able to optimize operations and minimize operational expenses. Through our proactive maintenance strategies and responsive support, we guarantee that your facilities will always be in excellent condition.",
            "point1": "At AL HATHAIFA, we understand that every client has unique facility management needs.",
            "point2": " Our commitment to efficiency and sustainability sets us apart in the field of facility management."

        },
        {
            "image": filed,
            "heading": "Field Force Management",
            "description1": "AL HATHAIFA is dedicated to offering businesses advanced Field Force Management solutions that revolutionize their field operations and drive productivity to new heights. Our extensive range of services covers all aspects of field management, including workforce scheduling, route optimization, task assignment, performance tracking, and beyond.",
            "point1": "By leveraging our cutting-edge technology platforms and adopting a data-driven approach, organizations can optimize their field operations, allocate resources more effectively, and enhance overall customer satisfaction.",
            "point2": "Our team works closely with clients to develop customized solutions that align with their objectives."

        },
        {
            "image": corpo,
            "heading": "corporate event Management",
            "description1": "AL HATHAIFA is a leading provider of corporate event management services that are customized to suit the specific requirements and goals of each client. Our team is dedicated to delivering exceptional events that are meticulously planned and executed, leaving a lasting impact on attendees. With our innovative and detail-oriented approach, we transform your vision into a reality, creating seamless and unforgettable experiences.",
            "point1": "Whether it's organizing conferences, seminars, product launches, or gala dinners, our experienced team takes care of every aspect of event planning and execution with utmost precision and professionalism.",
            "point2": "Our commitment to excellence and attention to detail sets us apart, making us the preferred choice for corporate event management services."

        },

    ]
    return (
        <div>
            <Banner
                heading="services"
                description="Shaping success stories through unique and personalized services."
            />

            {
                data.map((card, index) => (
                    <ServicePageCard
                        key={index}
                        serviceData={card}
                        imageOrder={index % 2 === 0 ? 1 : 2}
                    />
                ))
            }

            <Footer />
        </div>
    )
}

export default Service