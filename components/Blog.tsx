import React from "react";
import BlogCard from "./Helper/BlogCard";
interface Props {
  id: string;
}
const Blog = ({ id }: Props) => {
  return (
    <div id={id} className="pt-[5rem] pb-[3rem] bg-black">
      <div className="text-center">
        <p className="heading__mini">My Blog</p>
        <h1 className="heading__primary">
          My Latest <span className="text-yellow-300">Blog</span> and news
        </h1>
      </div>
      <div className="w-[80%] mx-auto pt-[3rem] md:pt-[5rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-[2rem]">
        <div>
          <BlogCard
            title={"आकाश की लत 😂[ haryanvi chacha ]l funny video 📸 🤪 #comedy #akash #mostpopular #shortsfeed@TEENCHAPRI"}
            comment={"33"}
            date={"10/May/2024"}
            image={"https://i2.ytimg.com/vi/-taAlsYkTsc/hqdefault.jpg"}
            link={"https://www.youtube.com/v/-taAlsYkTsc?version=3"}
          />
        </div>
        <div>
          <BlogCard
            title={"Learn MD APP Preview"}
            comment={"5"}
            date={"10/May/2024"}
            image={"https://i2.ytimg.com/vi/mmSYOmrWeGY/hqdefault.jpg"}
            link={"https://www.youtube.com/v/mmSYOmrWeGY?version=3"}
          />
        </div>
       
      </div>
    </div>
  );
};

export default Blog;
