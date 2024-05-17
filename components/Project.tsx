import React from "react";
import ProjectCard from "./Helper/ProjectCard";

interface Props {
  id: string;
}
const Project = ({ id }: Props) => {
  return (
    <div id={id} className="pt-[5rem] pb-[3rem] bg-gray-900">
      <div className="text-center">
        <p className="heading__mini">Recent Works</p>
        <h1 className="heading__primary">
          My Best <span className="text-yellow-300">Projects</span>
        </h1>
      </div>
      {/* TODO Dynamic by gihub actions */}
      <ProjectCard
        title="Learn MD"
        subtitle='A Mobile App Developement Learning App , Also Public and Open Source
        ,Available at Google Play Store with Name "Learn MD"'
        tech1="Flutter"
        tech2="Dart"
        tech3="Markdown"
        tech4="Git"
        image="./learn_md.png"
      />
    </div>
  );
};

export default Project;
