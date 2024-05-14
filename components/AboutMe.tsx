import { CheckIcon } from "@heroicons/react/16/solid";
import React from "react";

interface Props {
  id: string;
}
const AboutMe = ({ id }:Props) => {
  return (
    <div id={id} className="mt-[-4rem] bg-black pb-[3rem]">
      <div className="w-[80%] pt-[5rem] sm:pt-[7rem] md:pt-[10rem] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-[2rem]">
        <div>
          <p className="heading__mini">About Me</p>
          <h1 className="heading__primary">
            Professional <span className="text-yellow-400">Clerk</span> for your
            Bussiness
          </h1>
          <p className="text-[15px] mt-[1.3rem] text-white opacity-75">
            As a professional clerk, I streamline your business operations with
            precision and dedication. From meticulous data entry to adept
            accounting, I ensure your business functions seamlessly.
          </p>
          <div className="mt-[2rem] space-y-3">
            <div className="flex items-center space-x-4">
              <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
              <p className="text-[18px] text-white">Clerk</p>
            </div>
            <div className="flex items-center space-x-4">
              <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
              <p className="text-[18px] text-white">Data Entry Operator</p>
            </div>
            <div className="flex items-center space-x-4">
              <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
              <p className="text-[18px] text-white">Accountant</p>
            </div>
            <div className="flex items-center space-x-4">
              <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
              <p className="text-[18px] text-white">Inventory Manager</p>
            </div>
            <div className="flex items-center space-x-4">
              <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
              <p className="text-[18px] text-white">Cook</p>
            </div>
          </div>
        </div>
        <div className="lg:ml-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-[2rem]">
            <div className="p-6 text-center bg-yellow-500">
              <p className="text-[50px] text-black font-bold">4+</p>
              <p className="text-[20px] text-black font-600">
                Years of Experience
              </p>
            </div>
            <div className="p-6 text-center bg-yellow-500">
              <p className="text-[50px] text-black font-bold">5+</p>
              <p className="text-[20px] text-black font-600">Happy Clients</p>
            </div>
            <div className="p-6 text-center bg-yellow-500">
              <p className="text-[50px] text-black font-bold">3+</p>
              <p className="text-[20px] text-black font-600">
                Open Source Projects
              </p>
            </div>
            <div className="p-6 text-center bg-yellow-500">
              <p className="text-[50px] text-black font-bold">1</p>
              <p className="text-[20px] text-black font-600">Bounty Won</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
