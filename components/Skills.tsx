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
                image="https://cdn-icons-png.flaticon.com/128/732/732220.png"
                percent="40%"
              />
            </div>
            <div>
              <SkillCard
                title="Tally"
                image="https://5.imimg.com/data5/SELLER/Default/2021/4/WV/MU/BB/127445480/tally-prime-logo-png-500x500.png"
                percent="50%"
              />
            </div>
            <div>
              <SkillCard
                title="Markdown"
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/208px-Markdown-mark.svg.png"
                percent="30%"
              />
            </div>
            <div>
              <SkillCard
                title="Online Communication"
                image="https://img.icons8.com/?size=48&id=82ewLsKHYlLc&format=png"
                percent="80%"
              />
            </div>
            <div>
              <SkillCard
                title="Time Management"
                image="https://img.icons8.com/?size=48&id=GtBUD8iQjfHT&format=png"
                percent="60%"
              />
            </div>
            <div>
              <SkillCard
                title="Customer Service"
                image="https://img.icons8.com/?size=67&id=t0Ue6D8TLQf0&format=png"
                percent="70%"
              />
            </div>
            <div>
              <SkillCard
                title="Photo Editing"
                image="https://img.icons8.com/?size=50&id=11113&format=png"
                percent="50%"
              />
            </div>
            <div>
              <SkillCard
                title="Cooking"
                image="https://img.icons8.com/?size=48&id=wC52pYWiR2Ub&format=png"
                percent="30%"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
