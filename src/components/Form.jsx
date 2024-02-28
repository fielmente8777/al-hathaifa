import React from 'react'

const Form = () => {
    return (
        <div className="flex flex-col ml-5 w-[39%] max-md:ml-0 max-md:w-full">
            <div className="flex relative flex-col grow justify-center text-base max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col px-10 py-8 bg-[#202020] border-solid shadow-sm border-[0.5px] border-[color:var(--Secondary,#A52323)] max-md:px-5 max-md:max-w-full" style={{ boxShadow: "12px 12px 1px #A52323" }}>
                    <div className="text-4xl uppercase leading-[60px]   text-black">
                        <h1 className="text-white">Get <span className="text-[#A52323]"> in touch</span></h1>
                    </div>
                    <input className="flex flex-col justify-center items-start py-3 pr-6 pl-6 mt-6 w-full bg-white border-solid border-[0.5px] border-[color:var(--Secondary,#A52323)] max-md:px-5"
                        type='text'
                        placeholder='Your name'
                    />
                    <input className="flex flex-col justify-center items-start py-3 pr-6 pl-6 mt-6 w-full bg-white border-solid border-[0.5px] border-[color:var(--Secondary,#A52323)] max-md:px-5"
                        type='text'
                        placeholder='Your Phone Number'
                    />
                    <input className="flex flex-col justify-center items-start py-3 pr-6 pl-6 mt-6 w-full bg-white border-solid border-[0.5px] border-[color:var(--Secondary,#A52323)] max-md:px-5"
                        type='email'
                        placeholder='Your Email'
                    />
                    <textarea className="flex flex-col h-[180px] justify-center items-start py-3 pr-6 pl-6 mt-6 w-full bg-white border-solid border-[0.5px] border-[color:var(--Secondary,#A52323)] max-md:px-5"
                        type='text'
                        row={10}
                        placeholder='Your Message'
                    />
                    <button className="justify-center self-start px-8 py-3 mt-6   tracking-normal text-right text-white uppercase whitespace-nowrap bg-red-800 leading-[150%] max-md:px-5">
                        <p>submit</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Form