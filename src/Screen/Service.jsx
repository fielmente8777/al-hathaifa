import React from 'react'
import ServicePageCard from '../components/ServicePageCard'
import Banner from "../components/Banner"
import Footer from '../components/Footer'

const Service = () => {
    const data = [
        {
            "heading": "Sales and Marketing",
            "description1": "Al HATHAIFA offers Sales and Marketing services that are customized to boost growth and maximize market potential for your business.- We utilize our extensive industry knowledge and strategic insights to develop effective sales strategies that connect with your target audience and advance your brand.",
            "description2": " Whether you are introducing a new product, entering new markets, or aiming to enhance sales performance, our team is prepared to deliver exceptional results.- Our marketing philosophy emphasizes the importance of building meaningful relationships with your audience, going beyond traditional methods to incorporate innovative digital strategies and experiential campaigns.",
            "point1": "From managing social media to creating content, forming influencer partnerships to creating immersive brand experiences, we employ a variety of tactics to engage customers and foster brand loyalty.",
            "point2": "With Al HATHAIFA as your partner, you can anticipate a proactive, data-driven approach that enables your business to succeed in today's competitive environment."

        },

        {
            "heading": "Operations Management",
            "description1": "At Al HATHAIFA, we recognize that operational efficiency is the foundation of a thriving business. That's why our team of experienced professionals works tirelessly to identify inefficiencies, streamline workflows, and implement industry best practices that optimize your operations from start to finish.",
            "point1": "From managing inventory to optimizing logistics, we utilize cutting-edge technology and proven methodologies to deliver exceptional results that surpass expectations.",
            "point2": "Whether you're a small startup or a large enterprise, our expertise and resources are at your disposal to help you achieve operational excellence and drive long-term success."

        },
        {
            "heading": "Logistics Services",
            "description1": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "point1": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
            "point2": "Lorem ipsum dolor sit amet, consectetur adipiscing elit,"

        },
        {
            "heading": "DELIVERY Services",
            "description1": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "point1": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
            "point2": "Lorem ipsum dolor sit amet, consectetur adipiscing elit,"

        },
        {
            "heading": "Recruitment Services",
            "description1": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "point1": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
            "point2": "Lorem ipsum dolor sit amet, consectetur adipiscing elit,"

        },
        {
            "heading": "F&B Support Services",
            "description1": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "point1": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
            "point2": "Lorem ipsum dolor sit amet, consectetur adipiscing elit,"

        },
        {
            "heading": "Industrial Technical Services",
            "description1": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "point1": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
            "point2": "Lorem ipsum dolor sit amet, consectetur adipiscing elit,"

        },
        {
            "heading": "Facility Management Services",
            "description1": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "point1": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
            "point2": "Lorem ipsum dolor sit amet, consectetur adipiscing elit,"

        },
        {
            "heading": "Field Force Management",
            "description1": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "point1": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
            "point2": "Lorem ipsum dolor sit amet, consectetur adipiscing elit,"

        },
        {
            "heading": "corporate event Management",
            "description1": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "point1": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
            "point2": "Lorem ipsum dolor sit amet, consectetur adipiscing elit,"

        },

    ]
    return (
        <div>
            <Banner />

            {
                data.map((card, index) => (
                    <ServicePageCard
                        key={index}
                        serviceData={card}
                        imageOrder={index % 2 === 0 ? 2 : 1}
                    />
                ))
            }

            <Footer />
        </div>
    )
}

export default Service