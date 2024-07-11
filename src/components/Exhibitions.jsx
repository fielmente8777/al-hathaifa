import React from 'react'

const Exhibitions = () => {

    const data = [
        {
            "head": "Exhibition Stalls / Booth Stalls:",
            "para": "Custom-designed stalls that reflect your brand identity and attract visitors."
        },
        {
            "head": "Printing of Brochures & Leaflets / Promotion Items:",
            "para": "Professional printing services for all your promotional materials."
        },
        {
            "head": "LED Digital Board / Sign Boards:",
            "para": "High-quality digital displays and signage for clear and impactful communication."
        },
        {
            "head": "Designing Flange / Banner / Poster / Back Drops:",
            "para": "Creative and effective designs to highlight your brand and messages."
        },
        {
            "head": "Rollup / 3D Signage / Canopy:",
            "para": "Versatile and eye-catching signage solutions to enhance your event presence."
        },
        {
            "head": "Acrylic Display Stand / LED Display Panel:",
            "para": "Durable and attractive display stands and panels for product showcasing."
        },
        {
            "head": "LED Displays & Conferences:",
            "para": "State-of-the-art LED displays for conferences, presentations, and promotional activities."
        },
        {
            "head": "3D Acrylic LED Letter:",
            "para": "Innovative 3D acrylic LED letters to make your brand name stand out."
        },
    ]
    return (
        <div className="bg-[#EFF1ED]  ">
            <div className='max-w-[1224px] mx-auto flex flex-col items-center gap-3 md:gap-6 py-10 max-md:px-5'>


                <div className="flex gap-3 self-center max-md:self-start text-4xl  text-red-800 uppercase  leading-[60px]">
                    <div className='' style={{ borderLeft: "6px solid #A52323" }}>
                        <div className="pl-2 grow text-[#363636]   max-md:text-4xl">
                            <h1>Exhibitions & <span className="text-red-800">Events</span></h1>
                        </div>
                    </div>
                </div>
                <p className=" w-full text-base font-medium leading-6 text-center text-[#363636] max-md:mt-10 max-md:max-w-full">
                    At Al Hathaifa Group, we pride ourselves on providing comprehensive and
                    tailored solutions for exhibitions and events. Our extensive range of
                    services is designed to meet the unique needs of our clients, ensuring
                    their events stand out and leave a lasting impression.
                </p>
                <p className="w-full text-base font-medium leading-6 text-center text-[#363636] max-md:mt-10 max-md:max-w-full">
                    We offer end-to-end services for exhibition booth stalls, handling every
                    detail from concept to execution. Our services include all below:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
                    {data.map((data, i) => (
                        <div key={i} className='text-2xl'>
                            <div className="flex gap-3 uppercase items-start flex-nowrap">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d705407f0be3bbd6fc12e47deb5722856d449d74194f14ba1f2656bce0846e0?"
                                    className="shrink-0 max-md:mt-1 w-7 aspect-square "
                                />
                                <div className="max-md:max-w-full">
                                    {data.head}
                                </div>
                            </div>
                            <div className="mt-4 ml-3 flex">
                                <li></li>
                                <p className=' text-base font-medium leading-6 text-[#363636] max-md:mt-1 max-md:text-justify'>
                                    {data.para}
                                </p>

                            </div>
                        </div>
                    ))}

                    {/* <div className="flex flex-col  max-md:w-full">




                    <div className="flex flex-col grow text-2xl leading-9  text-neutral-700 max-md:mt-5 max-md:max-w-full">
                        <div className="flex gap-3 uppercase max-md:flex-wrap">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d705407f0be3bbd6fc12e47deb5722856d449d74194f14ba1f2656bce0846e0?"
                                className="shrink-0 my-auto w-7 aspect-square"
                            />
                            <div className="max-md:max-w-full">
                                Exhibition Stalls / Booth Stalls:
                            </div>
                        </div>
                        <div className="mt-4 ml-3 flex text-base font-medium max-md:max-w-full">
                            <li></li>
                            <p>
                                Custom-designed stalls that reflect your brand identity and
                                attract visitors.
                            </p>

                        </div>
                        <div className="flex gap-3 self-start mt-5 uppercase">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d705407f0be3bbd6fc12e47deb5722856d449d74194f14ba1f2656bce0846e0?"
                                className="shrink-0 my-auto w-7 aspect-square"
                            />
                            <div>LED Digital Board / Sign Boards:</div>
                        </div>
                        <div className="mt-4 text-base font-medium leading-6 max-md:max-w-full">
                            High-quality digital displays and signage for clear and
                            impactful communication.
                        </div>
                        <div className="flex gap-3 self-start mt-5 uppercase">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d705407f0be3bbd6fc12e47deb5722856d449d74194f14ba1f2656bce0846e0?"
                                className="shrink-0 my-auto w-7 aspect-square"
                            />
                            <div>Rollup / 3D Signage / Canopy:</div>
                        </div>
                        <div className="mt-4 text-base font-medium max-md:max-w-full">
                            Versatile and eye-catching signage solutions to enhance your
                            event presence.
                        </div>
                        <div className="flex gap-3 self-start mt-5 uppercase">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d705407f0be3bbd6fc12e47deb5722856d449d74194f14ba1f2656bce0846e0?"
                                className="shrink-0 my-auto w-7 aspect-square"
                            />
                            <div>LED Displays & Conferences:</div>
                        </div>
                        <div className="mt-4 text-base font-medium leading-6 max-md:max-w-full">
                            State-of-the-art LED displays for conferences, presentations,
                            and promotional activities.
                        </div>
                    </div>
                </div>
                <div className="flex flex-col max-md:w-full">
                    <div className="flex flex-col text-2xl leading-9 text-justify text-neutral-700 max-md:mt-5 max-md:max-w-full">
                        <div className="flex gap-3 leading-9 uppercase max-md:flex-wrap">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d705407f0be3bbd6fc12e47deb5722856d449d74194f14ba1f2656bce0846e0?"
                                className="shrink-0 self-start w-7 aspect-square"
                            />
                            <div className="max-md:max-w-full">
                                Printing of Brochures & Leaflets / Promotion Items:
                            </div>
                        </div>
                        <div className="mt-4 text-base font-medium max-md:max-w-full">
                            Professional printing services for all your promotional
                            materials.
                        </div>
                        <div className="flex gap-3 mt-5 uppercase max-md:flex-wrap">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d705407f0be3bbd6fc12e47deb5722856d449d74194f14ba1f2656bce0846e0?"
                                className="shrink-0 my-auto w-7 aspect-square"
                            />
                            <div className="max-md:max-w-full">
                                Designing Flange / Banner / Poster / Back Drops:
                            </div>
                        </div>
                        <div className="mt-4 text-base font-medium max-md:max-w-full">
                            Creative and effective designs to highlight your brand and
                            messages.
                        </div>
                        <div className="flex gap-3 mt-5 uppercase max-md:flex-wrap">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d705407f0be3bbd6fc12e47deb5722856d449d74194f14ba1f2656bce0846e0?"
                                className="shrink-0 my-auto w-7 aspect-square"
                            />
                            <div className="max-md:max-w-full">
                                Acrylic Display Stand / LED Display Panel:
                            </div>
                        </div>
                        <div className="mt-4 text-base font-medium max-md:max-w-full">
                            Durable and attractive display stands and panels for product
                            showcasing.
                        </div>
                        <div className="flex gap-3 self-start mt-5 uppercase">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d705407f0be3bbd6fc12e47deb5722856d449d74194f14ba1f2656bce0846e0?"
                                className="shrink-0 my-auto w-7 aspect-square"
                            />
                            <div>3D Acrylic LED Letter:</div>
                        </div>
                        <div className="mt-4 text-base font-medium max-md:max-w-full">
                            Innovative 3D acrylic LED letters to make your brand name stand
                            out.
                        </div>
                    </div>
                </div> */}
                </div>
            </div>
        </div>
    )
}

export default Exhibitions