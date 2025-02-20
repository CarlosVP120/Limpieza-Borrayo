import React from "react";
import BlogAreaTwoItem from "./BlogAreaTwoItem";
import { BlogItemsArray } from "./BlogItemsArray";

const BlogAreaFour = () => {
  return (
    <section className="blog-area-four pt-130 pb-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="section-title-three text-center mb-60">
              <span className="sub-title">Our News</span>
              <h2 className="title">News & Articles</h2>
              <p>
                Commodo dictum iaculis eget mas phasellus ultrices nunc
                dignissim. Id nulla amet tincidunt urna sed massa
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {BlogItemsArray.slice(0, 2).map((x, index) => (
            <div key={index} className="col-lg-6 col-md-8">
              <BlogAreaTwoItem item={x} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogAreaFour;
