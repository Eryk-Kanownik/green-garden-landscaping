import React from "react";
import CarouselCmp from "./CarouselCmp";

const Gallery = () => {
  return (
    <div className="section sm:px-6 md:px-20 lg:px-72">
      <h2>
        Our <span className="text-green-500">Work</span>
      </h2>
      <CarouselCmp />
    </div>
  );
};

export default Gallery;
