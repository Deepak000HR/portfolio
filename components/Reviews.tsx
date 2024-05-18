import React from "react";
import ReviewSlider from "./Helper/ReviewSlider";
interface Props {
  id: string;
}
const Reviews = ({ id }: Props) => {
  return (
    <div id={id} className="pt-[5rem] pb-[3rem] bg-gray-900">
      <div className="text-center">
        <p className="heading__mini">Client Reviews</p>
        <h1 className="heading__primary">
          I've <span className="text-yellow-300">5+</span> Clients Feedback
        </h1>
      </div>
      <div className="w-[80%] pt-[3rem] md:pt-[5rem] mx-auto">
        {/* ReviewSlider */}
        <ReviewSlider />
      </div>
    </div>
  );
};

export default Reviews;
