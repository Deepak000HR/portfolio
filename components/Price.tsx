import React from "react";
import PriceCard from "./Helper/PriceCard";
interface Props {
  id: string;
}

const Price = ({ id }: Props) => {
  return (
    <div id={id} className="pt-[5rem] pb-[3rem] bg-black">
      <div className="text-center">
        <p className="heading__mini">Popular Services</p>
        <h1 className="heading__primary">
          Best <span className="text-yellow-300">Pricing</span> For Your Project
        </h1>
      </div>
      <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-center pt-[4rem] md:pt-[7rem]">
        <PriceCard
          plan="Basic"
          save="10%"
          price="10$"
          bg="bg-red-900"
          features={[
            "Data Entry",
            "Document Filing",
            "Client Communication",
            "Basic Bookkeeping",
            "Expense Tracking",
          ]}
        />
        <PriceCard
          plan="Popular"
          save="30%"
          price="25$"
          bg="bg-green-900"
          features={[
            "Invoice Management",
            "Payroll Processing",
            "Financial Reporting",
            "Tax Preparation",
            "Intermediate Bookkeeping",
          ]}
        />
        <PriceCard
          plan="Premium"
          save="60%"
          price="100$"
          bg="bg-blue-900"
          features={[
            "Advanced Bookkeeping",
            "Comprehensive Financial Reporting",
            "Tax Planning & Preparation",
            "Regulatory Compliance",
            "Client Account Management",
            "Advanced Data Analysis",
          ]}
        />
      </div>
    </div>
  );
};

export default Price;
// todo change Project with Buisness
