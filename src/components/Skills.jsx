import React from "react";
import SkillsImage from "../assets/client-img/skills.jpg";
import "../style/skills.css";

const Skills = () => {
  const businessSuccessRate = 95;
  const technologySuccessRate = 80;
  const talentSuccessRate = 90;

  const getProgressBarColor = (successRate) => {
    return successRate >= 90
      ? "bg-[#A52323]    "
      : successRate >= 70
        ? "bg-[#A52323]"
        : "bg-[#A52323]";
  };

  return (
    <div className="skill bg-cover bg-center bg-no-repeat py-14 max-md:py-5">
      <div className=" grid grid-cols-2 gap-4 max-w-[1224px] max-md:grid-cols-1 max-md:w-full max-md:px-5 ">
        <div className=" flex justify-end ">
          <img
            className=" w-auto h-full object-cover "
            src={SkillsImage}
            alt="Image"
            style={{ height: "100%" }}
          />
        </div>
        <div className=" flex flex-col justify-center item-center ">
          <div className="" style={{ borderLeft: "6px solid #A52323" }}>
            <div className="pl-2 grow ">
              <h1 className="   uppercase text-[#363636] max-md:text-4xl">
                OUR <span style={{ color: "#A52323" }}>SKills </span>
              </h1>
            </div>
          </div>

          <div className="mt-3 text-justify text-lg">
            <p className=" mt-3  text-neutral-400 ">
              AL HATHAIFA is a trusted name in Oman with over a decade of
              offering competitive Business solutions in Technology, Staffing
              and Talent Sectors. Established in 2009, we at AL HATHAIFA believe
              in maintaining strong trusted partnerships within and outside our
              organisation and hence we proudly say that ‘Our Clients are our
              Partners’.
            </p>
          </div>

          <div className="mt-5">
            <div className="flex flex-col">
              <div className="flex flex-col justify-center mt-2">
                <div className="flex justify-between">
                  <p className="text-md">Business Solution</p>
                  <p className="ml-2">{businessSuccessRate}% </p>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-lg overflow-hidden">
                  <div
                    className={`${getProgressBarColor(
                      businessSuccessRate
                    )} h-full`}
                    style={{ width: `${businessSuccessRate}%` }}
                  ></div>
                </div>
              </div>
              <div className="flex flex-col justify-center mt-2">
                <div className="flex justify-between">
                  <p className="text-md">Technology Solutions</p>
                  <p className="ml-2">{technologySuccessRate}% </p>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-lg overflow-hidden">
                  <div
                    className={`${getProgressBarColor(
                      technologySuccessRate
                    )} h-full`}
                    style={{ width: `${technologySuccessRate}%` }}
                  ></div>
                </div>
              </div>
              <div className="flex flex-col justify-center mt-2">
                <div className="flex justify-between">
                  <p className="text-md">Talent Solutions</p>
                  <p className="ml-2">{talentSuccessRate}% </p>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-lg overflow-hidden">
                  <div
                    className={`${getProgressBarColor(
                      talentSuccessRate
                    )} h-full`}
                    style={{ width: `${talentSuccessRate}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
