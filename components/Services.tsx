import React from "react";
import ServiceCard from "./Helper/ServiceCard";

interface Props {
  id: string;
}
const Services = ({ id }:Props) => {
  return (
    <div id={id} className="pt-[5rem] pb-[3rem] bg-[#0b0c13]">
      <div className="text-center">
        <p className="heading__mini">Popular Services</p>
        <h1 className="heading__primary">
          My Special <span className="text-yellow-300">Services</span> For You
        </h1>
      </div>
      <div className="pt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center">
        <div>
          <ServiceCard
            title="Clerk"
            num="01"
            subTitle="Efficient administrative support for smooth operations."
          />
        </div>
        <div>
          <ServiceCard
            title="Data Entry Operator"
            num="02"
            subTitle="Accurate and timely data management solutions."
          />
        </div>
        <div>
          <ServiceCard
            title="Accountant"
            num="03"
            subTitle="Comprehensive financial management and reporting."
          />
        </div>
        <div>
          <ServiceCard
            title="Inventory Manager"
            num="04"
            subTitle="Expert inventory control and logistics coordination."
          />
        </div>
        <div>
          <ServiceCard
            title="Cook"
            num="05"
            subTitle="Delicious meals prepared with care and expertise."
          />
        </div>
        <div>
          <ServiceCard
            title="MTS"
            num="06"
            subTitle="Versatile support for various operational tasks."
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
