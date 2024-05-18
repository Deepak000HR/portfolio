import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClientReviewCard from "./ClientReviewCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1300 },
    items: 3,
    partialVisibilityGutter: 40, // this is needed to tell the amount of px that should be visible.
  },
  tablet: {
    breakpoint: { max: 1300, min: 764 },
    items: 2,
    partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
  },
};

const ReviewSlider = () => {
  return (
    <Carousel
      partialVisible={true}
      responsive={responsive}
      additionalTransfrom={0}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      centerMode={false}
      infinite
      itemClass="item"
    >
      <ClientReviewCard
        image="https://avatars.githubusercontent.com/u/87695786?v=4"
        user="Manish Gautam"
        role="Flutter Dev."
      />
      <ClientReviewCard
        image="https://avatars.githubusercontent.com/u/87695786?v=4"
        user="Manish Gautam"
        role="Flutter Dev."
      />
    </Carousel>
  );
};

export default ReviewSlider;
