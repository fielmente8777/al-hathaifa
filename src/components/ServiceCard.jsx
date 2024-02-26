import React from "react";

const ServiceCard = ({ title, imgUrl, desc, btnName }) => {
  return (
    <div className="flex flex-col justify-center items-center px-8 py-8 text-base bg-white border-solid shadow-2xl border-[0.5px] border-[color:var(--Secondary,#A52323)] h-full">
      <div>
        <img src={imgUrl} className="" alt="service-img" loading="lazy" />
      </div>
      <div className="mt-4 text-2xl leading-9 text-center uppercase text-neutral-700 lg:min-h-[7rem] min-h-[6rem]:">
        {title}
      </div>
      <div className="mt-2 font-medium leading-6 text-justify text-neutral-400 min-h-[13rem]">
        {desc}
      </div>
      <div className="justify-center self-center px-8 py-4 mt-4 font-bold tracking-normal text-right text-white uppercase whitespace-nowrap bg-red-800 leading-[150%]">
        {btnName}
      </div>
    </div>
  );
};

export default ServiceCard;
