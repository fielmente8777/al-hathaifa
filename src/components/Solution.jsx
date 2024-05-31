import React from "react";
import SolutionImage from "../assets/client-img/sales_2_11zon.jpg";
const Solution = () => {
  return (
    <div className="flex flex-col justify-center  pt-10 pb-0 items-center px-24 max-md:px-5">
      <div className="flex gap-3 px-5 max-md:px-0 self-center text-red-800  leading-[60px] max-md:flex-wrap max-md:max-w-full">
        <div className="" style={{ borderLeft: "6px solid #A52323" }}>
          <div className="pl-2 grow text-[#363636]   max-md:text-4xl">
            <h1 className="font-medium">
              {" "}
              Omani Sales Force <span className="text-red-800 font-medium">Solutions</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="max-w-[1224px] mx-auto w-full flex justify-center items-center py-10 max-md:flex-col max-md:gap-0 max-md:px-0 max-md:py-0 max-md:mb-5">
        <div className="flex md:flex-row flex-col w-full">
          <div className="flex flex-col md:w-[55%] max-md:ml-0 w-full max-md:order-2">
            <div className="flex flex-col self-stretch my-auto text-base font-medium leading-6 text-black max-md:mt-0 max-md:max-w-full">
              <div className="flex gap-3 self-start text-4xl text-red-800  leading-[60px] max-md:mt-5">
                <div className="" style={{ borderLeft: "6px solid #A52323" }}>
                  <div className="pl-2 grow text-[#363636] max-md:text-2xl">
                    <h1 className=" ">
                      <span className="text-neutral-700 font-medium">What We </span>
                      <span className="text-red-800 font-medium">Offer:</span>
                    </h1>
                  </div>
                </div>
              </div>
              <div className="flex flex-grow flex-1 gap-3 mt-6 max-md:max-w-full ">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d705407f0be3bbd6fc12e47deb5722856d449d74194f14ba1f2656bce0846e0?"
                  className="w-7 aspect-square"
                />
                <div className="grow max-md:max-w-full">
                  <p className="max-md:text-justify">
                    {" "}
                    Omani Sales Promoters for Business To Customers (B2C)
                    Models.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 mt-4 leading-6 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d705407f0be3bbd6fc12e47deb5722856d449d74194f14ba1f2656bce0846e0?"
                  className="self-start w-7 aspect-square"
                />
                <div className="max-md:max-w-full">
                  <p className="max-md:text-justify">
                    {" "}
                    Omani Business Development Executives for Business to
                    Business (B2B) Model.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 mt-4  max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d705407f0be3bbd6fc12e47deb5722856d449d74194f14ba1f2656bce0846e0?"
                  className="w-7 aspect-square"
                />
                <div className="grow max-md:max-w-full">
                  <p className="max-md:text-justify"> Flexible Timings for our services across Oman</p>
                </div>
              </div>
              <div className="flex gap-3 mt-4  max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d705407f0be3bbd6fc12e47deb5722856d449d74194f14ba1f2656bce0846e0?"
                  className="w-7 aspect-square"
                />
                <div className="grow max-md:max-w-full">
                  <p className="max-md:text-justify"> Solutions with Targets Based Payment(TBP) Models</p>
                </div>
              </div>
              <div className="flex gap-3 mt-4 leading-6  max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d705407f0be3bbd6fc12e47deb5722856d449d74194f14ba1f2656bce0846e0?"
                  className="self-start w-7 aspect-square"
                />
                <div className="max-md:max-w-full flex items-center flex-grow">
                  <p className="max-md:text-justify">
                    {" "}
                    Supervision to achieve Targets with Daily/Monthly reports as
                    per Client’s Requirements
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex flex-col md:w-[45%] max-ml:ml-0 max-md:ml-0 w-full md:h-[50%] ">
            <img
              loading="lazy"
              src={SolutionImage}
              className="grow w-full h-[400px] aspect-[0.91] max-md:mt-10 max-md:max-w-full overflow:hidden object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
