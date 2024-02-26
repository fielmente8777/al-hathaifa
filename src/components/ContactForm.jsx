import React from 'react'
import Form from './Form'

const ContactForm = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className="flex gap-5 py-20 max-md:py-10 max-md:px-5 max-w-[1224px] max-md:flex-col max-md:gap-0 max-md:">
                <div className="flex flex-col w-[61%]  max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col items-start text-base font-medium leading-[60px] text-neutral-400 max-md:mt-10 max-md:max-w-full">
                        <div className='' style={{ borderLeft: "6px solid #A52323" }}>
                            <h1 className="pl-2 text-5xl font-bold uppercase text-[#363636] max-md:text-4xl">Where to Find <stronge style={{ color: "#A52323" }}>US </stronge></h1>

                        </div>
                        <div className="self-stretch text mt-6 leading-6 text-justify max-md:max-w-full">
                            <p className='text'> Always happy to help! We are building our goodwill around just one
                                word in Oman, &quot;Trust&quot;. We offer competitive talent
                                solutions in the business, technology, and staffing sectors. We
                                are a dynamic team, always ready to help our clients with all
                                their queries.</p>
                        </div>
                        <div className="mt-12 text-4xl max-md:text-3xl text-justify text-red-800 uppercase max-md:mt-10">
                            <span className="text-[#363636]">CONTACT</span>{" "}
                            <span className="text-red-800">US</span>
                        </div>
                        <div className="flex gap-3 mt-6 leading-6">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ee66c3ec2f864c6bff3c1548e3963684af70d7a3c428538c7b92441e7a8d570?"
                                className="self-start aspect-[0.71] fill-red-800 w-[17px]"
                            />
                            <div className="flex-auto">
                                AL HATHAIFA GROUP , 3rd floor, Majan Tower, Goubra, Near Spar
                                Hyper Market, Muscat, Oman
                            </div>
                        </div>
                        <div className="flex gap-3 mt-4 leading-[150%]">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/917a940c774083ca1863be5bf8c351bfdf74ed2192ab7fc726cfb9f17b0481ef?"
                                className="my-auto aspect-[0.71] fill-red-800 w-[15px]"
                            />
                            <div className="flex-auto">+968 2460 0572</div>
                        </div>
                        <div className="flex gap-3 mt-4 whitespace-nowrap leading-[150%]">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f0c7acea966ab8cde2b011bc9748c4e06f1cfbbd8e2300ba55195759e08c7eae?"
                                className="my-auto w-5 aspect-[1.25] fill-red-800"
                            />
                            <div className="flex-auto">hr@al-hathaifa.com</div>
                        </div>
                    </div>
                </div>
                <Form />
            </div>
            <iframe className=" w-full max-w-[1224px] h-[458px] max-md:h-[229px] aspect-[2.7] max-md:mt-5 max-md:max-w-full max-md:px-5" src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d7312.364105690263!2d58.446202!3d23.597803!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1707988951047!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        </div>
    )
}

export default ContactForm