import React, { useState } from 'react'

const CareerForm = () => {

    const [selectedFile, setSelectedFile] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        jobTitle: '',
        linkedin: '',
        resume: '',
    });


    const handleChnage = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,

        })
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);

        setFormData({
            ...formData,
            resume: file
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData(formData)


        console.log("form Data saved", formData)

        setFormData({
            name: '',
            phone: '',
            email: '',
            jobTitle: '',
            linkedin: '',
            resume: '',
        })

        setSelectedFile(null);
    }
    console.log(formData)
    return (
        <div className='flex justify-center'>
            <div className='pt-10 pb-10 max-md:pb-0  max-w-[1224px] max-md:w-full max-md:px-5'>
                <div className="flex flex-col text-base ">
                    <div className="flex gap-3 self-start text-4xl text-red-800 uppercase leading-[60px]">
                        <div className='pl-2' style={{ borderLeft: "6px solid #A52323" }}>
                            <h1 className=" text-[#363636]  capitalize font-medium   max-md:text-4xl ">Unlock your potential  with  Al HATHAIFA    <span style={{ color: "#A52323" }}></span></h1>
                        </div>
                    </div>
                    <div className="mt-6 w-full font-medium leading-6 text-justify text-black max-md:max-w-full">
                        <p>If you are seeking a fulfilling career opportunity with a prominent business solutions provider in Oman, we encourage you to take a look at the job positions available at Al HATHAIFA and submit your application today.
                        </p>
                    </div>
                    <form onSubmit={handleSubmit} className="flex flex-col px-11 py-8 mt-14  w-full bg-neutral-800 leading-[150%] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                        <div className=" text-white  font-medium    capitalize leading-[60px] max-md:max-w-full">
                            <h1><span>join our </span><span className="text-red-800 font-medium  ">team</span></h1>
                        </div>
                        <div className="flex gap-2.5 justify-between mt-6 font-medium whitespace-nowrap text-black max-md:flex-wrap max-md:max-w-full">
                            <div className="flex flex-col flex-1 justify-center max-md:max-w-full">
                                <input
                                    type='text'
                                    name="name"
                                    value={formData.name}
                                    className="justify-center items-start py-4 pr-16 pl-7 bg-white max-md:px-5 max-md:max-w-full"
                                    placeholder='Your Name'
                                    onChange={handleChnage}
                                />
                            </div>
                            <div className="flex flex-col flex-1 justify-center max-md:max-w-full">
                                <input
                                    type='text'
                                    name="phone"
                                    value={formData.phone}
                                    className="justify-center items-start py-4 pr-16 pl-7 bg-white max-md:px-5 max-md:max-w-full"
                                    placeholder='Your Phone Number'
                                    onChange={handleChnage}
                                />
                            </div>
                        </div>
                        <div className="flex gap-2.5 justify-between max-md:flex-col mt-2.5 font-medium text-black max-md:max-w-full">
                            <div className="flex flex-col flex-1 justify-center whitespace-nowrap max-md:max-w-full">
                                <input
                                    type='email'
                                    name="email"
                                    value={formData.email}
                                    className="justify-center items-start py-4 pr-16 pl-7 bg-white max-md:px-5 max-md:max-w-full"
                                    placeholder='Your Email'
                                    onChange={handleChnage}
                                />
                            </div>
                            <div className="flex flex-col flex-1 justify-center max-md:max-w-full">
                                <div className="flex flex-col justify-center bg-white max-md:pr-3 max-md:max-w-full">
                                    <div className="flex gap-5 justify-start max-md:max-w-full">
                                        <input
                                            type='text'
                                            name="jobTitle"
                                            placeholder='Job Title'
                                            value={formData.jobTitle}
                                            onChange={handleChnage}
                                            className="flex flex-col justify-center px-7 py-4 w-[90%] bg-white max-md:px-5 max-md:max-w-full" />
                                        <img
                                            loading="lazy" alt="icon"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6bf8c1dc75d7e53c632bfcfda399f512fccd4d89b4d80872fc80955f6bec32e9?"
                                            className="my-auto w-7 aspect-[1.75] fill-red-800"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2.5 justify-between mt-2.5 max-md:flex-wrap max-md:max-w-full">
                            <div className="flex flex-col flex-1 justify-center font-medium whitespace-nowrap text-black max-md:max-w-full">
                                <input
                                    type='text'
                                    name="linkedin"
                                    placeholder='Linkdin'
                                    value={formData.linkedin}
                                    onChange={handleChnage}
                                    className="justify-center items-start py-4 pr-16 pl-7 bg-white max-md:px-5 max-md:max-w-full"

                                />
                            </div>
                            <div className="flex flex-col flex-1 justify-center max-md:max-w-full">
                                <div className="flex flex-col justify-center px-7 py-2.5 bg-white max-md:px-5 max-md:max-w-full">
                                    <div className="flex gap-5 justify-end max-md:flex-wrap max-md:max-w-full">
                                        <div type='file' className="flex-auto my-auto font-medium text-black" >
                                            <span className='text-[16px] text-black font-semibold'>{selectedFile ? selectedFile.name : "Upload Resume"}</span>
                                        </div>

                                        <label className="flex justify-end items-center px-4 py-1.5 bg-red-800 text-white uppercase cursor-pointer max-md:px-5 max-md:max-w-full">
                                            <input
                                                type="file"
                                                name="resume"
                                                className="hidden"
                                                onChange={handleFileChange}

                                            />
                                            <span className="ml-auto text-[16px] capitalize">{selectedFile ? "Choose another file" : "No file selected"}</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type='submit' className="justify-center self-center max-md:self-start px-8 py-4 mt-10   tracking-normal text-right text-white uppercase whitespace-nowrap bg-red-800 max-md:px-5">
                            <p>post your resume</p>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CareerForm