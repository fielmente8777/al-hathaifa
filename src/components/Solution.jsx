import React from "react";
import SolutionImage from "../assets/client-img/sales_2_11zon.jpg";
const Solution = () => {
  return (
    <div className="flex flex-col justify-center  pt-10 pb-0 items-center px-24 max-md:px-5">
      <div className="flex gap-3 px-5 max-md:px-0 self-center text-red-800 uppercase leading-[60px] max-md:flex-wrap max-md:max-w-full">
        <div className="" style={{ borderLeft: "6px solid #A52323" }}>
          <div className="pl-2 grow text-[#363636]   max-md:text-4xl">
            <h1>
              {" "}
              omani sales force <span className="text-red-800">solutions</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center py-10 max-md:flex-col max-md:gap-0 max-md:px-0 max-md:py-0 max-md:mb-5">
        <div className=" grid grid-cols-2 max-md:grid-cols-1 justify-center w-full max-w-[1224px]">
          <div className="flex flex-col max-md:ml-0 max-md:w-full max-md:order-2">
            <div className="flex flex-col self-stretch my-auto text-base font-medium leading-6 text-black max-md:mt-0 max-md:max-w-full">
              <div className="flex gap-3 self-start text-4xl text-red-800 uppercase leading-[60px] max-md:mt-5">
                <div className="" style={{ borderLeft: "6px solid #A52323" }}>
                  <div className="pl-2 grow text-[#363636] max-md:text-2xl">
                    <h1 className=" ">
                      <span className="text-neutral-700">WHAT we </span>
                      <span className="text-red-800">offer</span>
                    </h1>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 mt-6 max-md:max-w-full ">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d705407f0be3bbd6fc12e47deb5722856d449d74194f14ba1f2656bce0846e0?"
                  className="w-7 aspect-square"
                />
                <div className="grow max-md:max-w-full">
                  <p>
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
                  <p>
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
                  <p> Flexible Timings for our services across Oman</p>
                </div>
              </div>
              <div className="flex gap-3 mt-4  max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d705407f0be3bbd6fc12e47deb5722856d449d74194f14ba1f2656bce0846e0?"
                  className="w-7 aspect-square"
                />
                <div className="grow max-md:max-w-full">
                  <p> Solutions with Targets Based Payment(TBP) Models</p>
                </div>
              </div>
              <div className="flex gap-3 mt-4 leading-6  max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d705407f0be3bbd6fc12e47deb5722856d449d74194f14ba1f2656bce0846e0?"
                  className="self-start w-7 aspect-square"
                />
                <div className="max-md:max-w-full">
                  <p>
                    {" "}
                    Supervision to achieve Targets with Daily/Monthly reports as
                    per Client’s Requirements
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 max-ml:ml-0 max-md:ml-0 max-md:w-full md:h-[50%] ">
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
