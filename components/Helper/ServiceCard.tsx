import React from "react";
import { CommandLineIcon,
  ServerIcon,
  CodeBracketIcon,
  CursorArrowRaysIcon,
  RocketLaunchIcon,
  BugAntIcon
   } from "@heroicons/react/16/solid";
interface Props {
  title: string;
  num: string;
}

const iconMapping ={
  "01": CommandLineIcon,
  "02": ServerIcon,
  "03": CodeBracketIcon,
  "04": CursorArrowRaysIcon,
  "05": RocketLaunchIcon,
  "06": BugAntIcon
}
const ServiceCard = ({ title, num }: Props) => {
  return <div>ServiceCard</div>;
};

export default ServiceCard;
