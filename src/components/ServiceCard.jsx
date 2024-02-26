import React from 'react'

const ServiceCard = () => {
    return (
        <div className="flex flex-col px-8 py-8 text-base bg-white border-solid shadow-2xl border-[0.5px] border-[color:var(--Secondary,#A52323)] max-w-[295px] max-wd:w-full">
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e6c6be5f268db06380b77da5802866019f752c156cd7fe4fee821ba7824dec7?"
                className="self-center max-w-full aspect-[0.84] w-[109px]"
            />
            <div className="mt-4 text-2xl leading-9 text-center uppercase text-neutral-700">
                Sales and Marketing
            </div>
            <div className="mt-2 font-medium leading-6 text-justify text-neutral-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation
            </div>
            <div className="justify-center self-center px-8 py-4 mt-4 font-bold tracking-normal text-right text-white uppercase whitespace-nowrap bg-red-800 leading-[150%]">
                learn more
            </div>
        </div>
    )
}

export default ServiceCard