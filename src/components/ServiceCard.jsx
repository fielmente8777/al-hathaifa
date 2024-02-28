import React, { useState } from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ title, imgUrl, desc, btnName }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const descriptionClass = showFullDescription ? '' : 'truncate';
  return (
    <div className="flex flex-col justify-center items-center px-8 py-8 text-base bg-white border-solid shadow-2xl border-[0.5px] border-[color:var(--Secondary,#A52323)] h-full">
      <div>
        <img src={imgUrl} className="" alt="service-img" loading="lazy" />
      </div>
      <div className="mt-4 text-2xl leading-9 text-center uppercase text-neutral-700 lg:min-h-[7rem] min-h-[6rem]:">
        <h style={{ fontSize: '24px' }}>{title}</h>
      </div>
      <div className="mt-2 max-md:mt-6 font-medium leading-6 text-justify text-neutral-400 min-h-[13rem]">
        <p>{showFullDescription ? (
          <>
            {desc}
          </>
        ) : (
          <>
            {desc.slice(0, 200)}
            <h className=" cursor-pointer" onClick={toggleDescription}>...more</h>
          </>
        )}</p>
      </div>
      <div className="justify-center self-center px-8 py-4 mt-4   tracking-normal text-right text-white uppercase whitespace-nowrap bg-red-800 leading-[150%]">
        <Link to="/service"><p className="btn">{btnName}</p> </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
