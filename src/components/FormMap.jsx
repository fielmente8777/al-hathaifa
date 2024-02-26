import * as React from "react";
const FormMap = () => {
    return (
        <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-12 min-h-[718px] max-md:px-5">
            <div className="relative mt-2.5 w-full max-w-[1224px] max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                    <div className="flex flex-col w-[61%] max-md:ml-0 max-md:w-full">
                        <div className="flex relative flex-col self-stretch my-auto text-justify max-md:mt-10 max-md:max-w-full">
                            <div className="flex gap-3 self-start text-red-800 uppercase whitespace-nowrap leading-[60px]">
                                <div className='' style={{ borderLeft: "6px solid #A52323" }}>
                                    <div className="pl-2 grow text-5xl text-[#363636] font-bold max-md:text-4xl">
                                        <h1>WHERE TO FIND <span className="text-red-800">US</span></h1>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 text-base font-medium leading-6 text-neutral-500 max-md:max-w-full">
                                Always happy to help! We are building our goodwill around just
                                one word in Oman, &quot;Trust&quot;. We offer competitive talent
                                solutions in the business, technology, and staffing sectors. We
                                are a dynamic team, always ready to help our clients with all
                                their queries.
                            </div>

                            <iframe className="mt-20 w-full max-md:hidden aspect-[2.7] max-md:mt-10 max-md:max-w-full" src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d7312.364105690263!2d58.446202!3d23.597803!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1707988951047!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[39%] max-md:ml-0 max-md:w-full">
                        <div className="flex relative flex-col grow justify-center text-base max-md:mt-10 max-md:max-w-full">
                            <div className="flex flex-col px-10 py-8 bg-[#202020] border-solid shadow-sm border-[0.5px] border-[color:var(--Secondary,#A52323)] max-md:px-5 max-md:max-w-full" style={{ boxShadow: "12px 12px 1px #A52323" }}>
                                <div className="text-4xl uppercase leading-[60px] text-neutral-800 font-bold text-[#363636]">
                                    <h1 className="text-white">Get <span className="text-[#A52323]"> in touch</span></h1>
                                </div>
                                <div className="flex flex-col justify-center items-start py-3 pr-16 pl-6 mt-6 w-full bg-white border-solid border-[0.5px] border-[color:var(--Secondary,#A52323)] max-md:px-5">
                                    <div className="flex gap-3">
                                        <div className="my-auto font-black leading-[175%] text-neutral-700">
                                            
                                        </div>
                                        <div className="font-medium text-neutral-400">
                                            Your Name
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center items-start py-3 pr-16 pl-6 mt-3 w-full bg-white border-solid border-[0.5px] border-[color:var(--Secondary,#A52323)] max-md:px-5">
                                    <div className="flex gap-3">
                                        <div className="font-black leading-[175%] text-neutral-600">
                                            
                                        </div>
                                        <div className="font-medium text-neutral-400">
                                            Phone
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center items-start py-3 pr-16 pl-6 mt-3 w-full bg-white border-solid border-[0.5px] border-[color:var(--Secondary,#A52323)] max-md:px-5">
                                    <div className="flex gap-3">
                                        <div className="font-black leading-[175%] text-neutral-600">
                                            
                                        </div>
                                        <div className="font-medium text-neutral-400">
                                            Your Email
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-start pt-5 pr-16 pb-12 pl-6 mt-3 w-full whitespace-nowrap bg-white border-solid border-[0.5px] border-[color:var(--Secondary,#A52323)] max-md:px-5">
                                    <div className="flex gap-3 mb-16 max-md:mb-10">
                                        <div className="font-black leading-[179.2%] text-neutral-600">
                                            
                                        </div>
                                        <div className="font-medium text-neutral-400">Message</div>
                                    </div>
                                </div>
                                <div className="justify-center self-start px-8 py-3 mt-6 font-bold tracking-normal text-right text-white uppercase whitespace-nowrap bg-red-800 leading-[150%] max-md:px-5">
                                    submit
                                </div>
                            </div>
                        </div>

                        <iframe className="mt-20 w-full aspect-[2.7] max-md:mt-10 max-md:max-w-full" src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d7312.364105690263!2d58.446202!3d23.597803!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1707988951047!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                    </div>
                </div>
            </div>
        </div>
    );
}


export default FormMap