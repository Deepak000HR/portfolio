import React from "react";
import SkillCard from "./Helper/SkillCard";

interface Props {
  id: string;
}
const Skills = ({ id }: Props) => {
  return (
    <div id={id} className="pt-[5rem] pb-[3rem] bg-black ">
      <div className="grid w-[80%] mx-auto grid-cols-1 lg:grid-cols-7 gp-[2rem] items-center">
        <div className="col-span-3">
          <p className="heading__mini">My Skills</p>
          <h1 className="heading__primary">
            Let's Explore Popular{" "}
            <span className="text-yellow-300">Skills</span> & Experience
          </h1>
          <p className="text-[15px] mb-[1.5rem] text-white opacity-70 mt-[1.5rem]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
            repellendus amet exercitationem inventore quae, debitis ea tenetur
            labore quam tempora.
          </p>
          <button className="relative flex h-[50px] w-40 items-center justify-center font-semibold overflow-hidden bg-red-500 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-600 before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56">
            <span className="relative z-10">Learn More</span>
          </button>
        </div>
        <div className="col-span-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-[1rem] items-center p-4">
            <div>
              <SkillCard
                title="Excel"
                image="https://excel.com"
                percent="90%"
              />
            </div>
            <div>
              <SkillCard
                title="Excel"
                image="https://excel.com"
                percent="90%"
              />
            </div>
            <div>
              <SkillCard
                title="Excel"
                image="https://excel.com"
                percent="90%"
              />
            </div>
            <div>
              <SkillCard
                title="Excel"
                image="https://excel.com"
                percent="90%"
              />
            </div>
            <div>
              <SkillCard
                title="Excel"
                image="https://excel.com"
                percent="90%"
              />
            </div>
            <div>
              <SkillCard
                title="Excel"
                image="https://excel.com"
                percent="90%"
              />
            </div>
            <div>
              <SkillCard
                title="Excel"
                image="https://excel.com"
                percent="90%"
              />
            </div>
            <div>
              <SkillCard
                title="Excel"
                image="https://excel.com"
                percent="90%"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
