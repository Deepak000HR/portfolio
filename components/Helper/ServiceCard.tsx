import React from "react";
import {
  CommandLineIcon,
  ServerIcon,
  CodeBracketIcon,
  CursorArrowRaysIcon,
  RocketLaunchIcon,
  BugAntIcon,
} from "@heroicons/react/16/solid";
interface Props {
  title: string;
  num: string;
}

const iconMapping = {
  "01": CommandLineIcon,
  "02": ServerIcon,
  "03": CodeBracketIcon,
  "04": CursorArrowRaysIcon,
  "05": RocketLaunchIcon,
  "06": BugAntIcon,
};
const ServiceCard = ({ title, num }: Props) => {
  const IconComponent =
    (iconMapping as Record<string, React.ElementType>)[num] || CommandLineIcon;
  return (
    <div className="bg-black custom__service z-[100] relative transform rounded-2x1 text-center p-6 shadow-md">
      ServiceCard
    </div>
  );
};

export default ServiceCard;
