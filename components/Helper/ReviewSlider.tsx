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
        image="https://scontent.fixc8-3.fna.fbcdn.net/v/t1.6435-9/119526191_189149019376225_3116269047404077355_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=RLTucYDS-I4Q7kNvgEE7CF-&_nc_ht=scontent.fixc8-3.fna&oh=00_AYCOiY83S3QA5tduHkPSWFO-E3S9D-lz8Qu9vWPQms6JsA&oe=666FE5D4"
        user="Nandu"
        role="stone crushing plant owner."
      />
    </Carousel>
  );
};

export default ReviewSlider;
