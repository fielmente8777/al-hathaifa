import React from 'react'
import Form from './Form'

import { Link } from "react-router-dom"
const ContactForm = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className="flex gap-5 py-20 max-md:py-10 max-md:px-5 max-w-[1224px] max-md:flex-col max-md:gap-0 max-md:">
                <div className="flex flex-col w-[61%]  max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col items-start leading-[60px]  max-md:mt-10 max-md:max-w-full">
                        <div className='' style={{ borderLeft: "6px solid #A52323" }}>
                            <div className="pl-2 !font-medium text-[40px] text-[#363636] capitalize  max-md:text-4xl">
                                <h1 className='!font-medium  '>
                                    Where to Find <span className='!font-medium' style={{ color: "#A52323" }}>US </span></h1>

                            </div>
                        </div>
                        <div className="self-stretch text mt-6 leading-6 text-justify max-md:max-w-full">
                            <p className='text text-black'> Always happy to help! We are building our goodwill around just one
                                word in Oman, &quot;Trust&quot;. We offer competitive talent
                                solutions in the business, technology, and staffing sectors. We
                                are a dynamic team, always ready to help our clients with all
                                their queries.</p>
                        </div>
                        <div className="mt-12 text-4xl max-md:text-3xl   text-justify capitalize max-md:mt-10">
                            <span className="font-medium   text-[#363636]">Contact</span>{" "}
                            <span className="font-medium  text-red-800">US</span>
                        </div>
                        <div className="flex gap-3 mt-6 leading-6 text-black">
                            <img
                                loading="lazy" alt="icon"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ee66c3ec2f864c6bff3c1548e3963684af70d7a3c428538c7b92441e7a8d570?"
                                className="self-start aspect-[0.71] fill-red-800 w-[17px]"
                            />
                            <div className="flex-auto max-md:text-justify">
                                <p> Al Hathaifa Group
                                    Office No. 31,
                                    Majan Tower, Building No. 2522,
                                    Al Ghubrah,  Muscat,
                                    Sultanate of Oman</p>
                            </div>
                        </div>
                        <Link to="tel:+96822700070" className="flex gap-3 mt-4 leading-[150%] text-black">
                            <img
                                loading="lazy" alt="icon"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/917a940c774083ca1863be5bf8c351bfdf74ed2192ab7fc726cfb9f17b0481ef?"
                                className="my-auto aspect-[0.71] fill-red-800 w-[15px]"
                            />
                            <div className="flex-auto"><p>+968 22 7000 70</p></div>
                        </Link>
                        <div className="flex gap-3 mt-4 whitespace-nowrap leading-[150%] text-black">
                            <img
                                loading="lazy" alt="icon"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f0c7acea966ab8cde2b011bc9748c4e06f1cfbbd8e2300ba55195759e08c7eae?"
                                className="my-auto w-5 aspect-[1.25] fill-red-800"
                            />
                            <div className="flex-auto"><p>hr@al-hathaifa.com</p></div>
                        </div>
                    </div>
                </div>
                <Form />
            </div>
            <iframe className=" w-full max-w-[1224px] h-[458px] max-md:h-[229px] aspect-[2.7] max-md:mt-5 max-md:max-w-full max-md:px-5" src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d7312.364105690263!2d58.446202!3d23.597803!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1707988951047!5m2!1sen!2sin" allowfullscreen="" loading="lazy" alt="icon" referrerpolicy="no-referrer-when-downgrade"></iframe>

        </div>
    )
}

export default ContactForm