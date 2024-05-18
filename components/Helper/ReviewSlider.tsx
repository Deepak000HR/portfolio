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
        feedback="Good Services, Hardworking Person"
      />
      <ClientReviewCard
        image="https://scontent.fixc8-3.fna.fbcdn.net/v/t1.6435-9/119526191_189149019376225_3116269047404077355_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=RLTucYDS-I4Q7kNvgEE7CF-&_nc_ht=scontent.fixc8-3.fna&oh=00_AYCOiY83S3QA5tduHkPSWFO-E3S9D-lz8Qu9vWPQms6JsA&oe=666FE5D4"
        user="Jagdish Sangwan"
        role="stone crushing plant owner."
        feedback="Efficient and reliable service. Deepak is very professional."
      />
       <ClientReviewCard
        image="https://scontent.fixc8-1.fna.fbcdn.net/v/t1.6435-1/152336866_504688190925714_6054430601837434540_n.jpg?stp=dst-jpg_p100x100&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=uGbdY7_7z0UQ7kNvgFq1SmT&_nc_ht=scontent.fixc8-1.fna&oh=00_AYDnCWGC196f4Y82Rn5Bb7Yg7sG0pl6lCsmzxY4YHrb28Q&oe=666FBE71"
        user="Vijender"
        role="stone crushing plant owner."
        feedback="Excellent accounting and bookkeeping skills. Highly recommend!"
      />
    </Carousel>
  );
};

export default ReviewSlider;
