import React from "react";
import {
  CommandLineIcon,
  ServerIcon,
  CodeBracketIcon,
  CursorArrowRippleIcon,
  CalculatorIcon,
  LanguageIcon,
  TableCellsIcon,
  CursorArrowRaysIcon,
  VariableIcon,
  RocketLaunchIcon,
  AcademicCapIcon,
  CircleStackIcon,
  BugAntIcon,
  PrinterIcon,
} from "@heroicons/react/16/solid";
interface Props {
  title: string;
  num: string;
  subTitle: string;
}

const iconMapping = {
  "01": PrinterIcon,
  "02": TableCellsIcon,
  "03": CalculatorIcon,
  "04": LanguageIcon,
  "05": CircleStackIcon,
  "06": AcademicCapIcon,
};
const ServiceCard = ({ title, num, subTitle }: Props) => {
  const IconComponent =
    (iconMapping as Record<string, React.ElementType>)[num] || CommandLineIcon;
  return (
    <div className="bg-black custom__service z-[100] relative transform rounded-2x1 text-center p-6 shadow-md">
      <IconComponent className="w-[5rem] relative z-[1] mx-auto h-[5rem] text-yellow-400" />
      <h1 className="text-[25px] relative z-[1] text-white mt-[1rem] ">
        {title}
      </h1>
      <p className="text-white text-[15px] opacity-60 mt-[0.rem] ">
        {subTitle}
      </p>
      <p className="text-white text-[1.6rem] font-bold absolute top-3 right-4">
        {num}
      </p>
    </div>
  );
};

export default ServiceCard;
