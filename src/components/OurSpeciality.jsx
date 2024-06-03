import React from 'react'
import "../style/Special.css"

const OurSpeciality = () => {
    return (
        <div className="flex justify-center special bg-cover bg-center bg-no-repeat  overflow-hidden flex-col px-24 py-11 max-md:py-5 min-h-[429px] max-md:px-5">
            <div className="flex gap-3 self-center max-md:self-start text-4xl text-justify text-red-800 whitespace-nowrap leading-[60px]">
                <div className='' style={{ borderLeft: "6px solid #A52323" }}>
                    <div className="pl-2 grow text-[#fff]   max-md:text-4xl">
                        <h1 className='font-medium'>Our <span className="font-medium text-red-800">Speciality</span></h1>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center  mx-5 mt-10 max-md:mx-0 max-md:mt-2 max-md:mr-0 max-md:max-w-full">
                <div className="flex justify-center items-center gap-5 w-full max-w-[1224px] max-md:flex-col max-md:gap-0 max-md:">
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow text-base font-semibold leading-6 text-justify text-white max-md:mt-5 max-md:max-w-full">
                            <div className="flex gap-3 self-start whitespace-nowrap">
                                <img
                                    loading="lazy" alt="icon"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d705407f0be3bbd6fc12e47deb5722856d449d74194f14ba1f2656bce0846e0?"
                                    className="w-7 aspect-square"
                                />
                                <div className="grow my-auto"><p>Commitment to Local Roots</p></div>
                            </div>
                            <div className="mt-4 flex font-medium leading-6 max-md:max-w-full">
                                <li></li>
                                <p>  We are 100%Omani-owned SME with more than a decade experience of
                                    Sales (Direct & Indirect) with national and International
                                    Brands.</p>
                            </div>
                            <div className="flex gap-3 self-start mt-6 whitespace-nowrap">
                                <img
                                    loading="lazy" alt="icon"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d705407f0be3bbd6fc12e47deb5722856d449d74194f14ba1f2656bce0846e0?"
                                    className="w-7 aspect-square"
                                />
                                <div className="grow my-auto"><p>Expert Omani Supervision</p></div>
                            </div>
                            <div className="mt-4 flex font-medium leading-6 max-md:max-w-full">
                                <li></li>
                                <p> We have expert Omani supervisors focused on high-quality
                                    promotions and maximizing staff productivity.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow text-base font-semibold leading-6 text-justify text-white max-md:mt-5 max-md:max-w-full">
                            <div className="flex gap-3 self-start whitespace-nowrap">
                                <img
                                    loading="lazy" alt="icon"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d705407f0be3bbd6fc12e47deb5722856d449d74194f14ba1f2656bce0846e0?"
                                    className="w-7 aspect-square"
                                />
                                <div className="grow my-auto"><p>100% Omani Sales Team</p></div>
                            </div>
                            <div className="mt-4  flex font-medium leading-6 max-md:max-w-full">
                                <li></li>
                                <p>We can provide 100% Omani Sales Team across Oman, ensuring a
                                    deep understanding of local markets and customer needs.</p>
                            </div>
                            <div className="flex gap-3 self-start mt-6 whitespace-nowrap">
                                <img
                                    loading="lazy" alt="icon"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d705407f0be3bbd6fc12e47deb5722856d449d74194f14ba1f2656bce0846e0?"
                                    className="w-7 aspect-square"
                                />
                                <div className="grow my-auto"><p>Strategic Local Staffing</p></div>
                            </div>
                            <div className="mt-4 flex font-medium leading-6 max-md:max-w-full">
                                <li></li>
                                <p>Employing staff residing near their operational stores,
                                    fostering an intimate knowledge of the local community and
                                    customer base.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default OurSpeciality