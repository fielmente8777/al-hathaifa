import axios from 'axios';
import React, { useState } from 'react'

const Form = () => {

    const [formData, setFormData] = useState({
        username: '',
        phone: '',
        email: '',
        message: '',
    });

    const handleChnage = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,

        })
    }

    const url = "https://nexon.eazotel.com/eazotel/addcontacts"

    const handleSubmit = async (e) => {

        e.preventDefault();
        try {

            const preparedData = {
                Domain: "al-hataifa",
                email: formData.email,
                Name: formData.username,
                Contact: formData.phone,
                Description: formData.message,
            }
            const response = await axios.post(url, preparedData);

            console.log(response.data);

        } catch (error) {
            console.log("Error: ", error);
        }
        setFormData(formData);




        console.log("form Data saved", formData)
        setFormData({
            username: '',
            phone: '',
            email: '',
            message: '',
        })


    }

    return (
        <div className="flex flex-col ml-5 w-[39%] max-md:ml-0 max-md:w-full">
            <div className="flex relative flex-col grow justify-center text-base max-md:mt-10 max-md:max-w-full">
                <form onSubmit={handleSubmit} className="flex flex-col px-10 py-8 bg-[#202020] border-solid shadow-sm border-[0.5px] border-[color:var(--Secondary,#A52323)] max-md:px-5 max-md:max-w-full" style={{ boxShadow: "12px 12px 1px #A52323" }}>
                    <div className="text-4xl uppercase leading-[60px]   text-black">
                        <h1 className="text-white">Get <span className="text-[#A52323]"> in touch</span></h1>
                    </div>
                    <input className="flex flex-col justify-center items-start py-3 pr-6 pl-6 mt-6 w-full bg-white border-solid border-[0.5px] border-[color:var(--Secondary,#A52323)] max-md:px-5"
                        type='text'
                        name='username'
                        placeholder='Your name'
                        value={formData.username}
                        onChange={handleChnage}
                    />
                    <input className="flex flex-col justify-center items-start py-3 pr-6 pl-6 mt-6 w-full bg-white border-solid border-[0.5px] border-[color:var(--Secondary,#A52323)] max-md:px-5"
                        type='text'
                        name='phone'
                        placeholder='Your Phone Number'
                        value={formData.phone}
                        onChange={handleChnage}
                    />
                    <input className="flex flex-col justify-center items-start py-3 pr-6 pl-6 mt-6 w-full bg-white border-solid border-[0.5px] border-[color:var(--Secondary,#A52323)] max-md:px-5"
                        type='email'
                        name='email'
                        placeholder='Your Email'
                        value={formData.email}
                        onChange={handleChnage}
                    />
                    <textarea className="flex flex-col h-[180px] justify-center items-start py-3 pr-6 pl-6 mt-6 w-full bg-white border-solid border-[0.5px] border-[color:var(--Secondary,#A52323)] max-md:px-5"
                        type='text'
                        row={10}
                        name='message'
                        placeholder='Your Message'
                        value={formData.message}
                        onChange={handleChnage}
                    />
                    <button type='submit' className="flex justify-center self-start px-8 py-3 mt-6   tracking-normal text-right text-white uppercase whitespace-nowrap bg-red-800 leading-[150%] max-md:px-5">
                        <p>submit</p>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Form