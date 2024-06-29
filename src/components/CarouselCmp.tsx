"use client";

import React, { useEffect, useRef, useState } from "react";
import DotImageCmp from "./DotImageCmp";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Image from "next/image";

const CarouselCmp = () => {
  const ref = useRef<null | any>();
  const [images, setImages] = useState<Array<string>>([
    "https://picsum.photos/1100/700",
    "https://picsum.photos/1101/701",
    "https://picsum.photos/1102/702",
    "https://picsum.photos/1103/703",
  ]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const choose = (src: string) => {
    let index = images.indexOf(src);
    setCurrentIndex(index);
  };

  const nextImage = () => {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else if (currentIndex < images.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevImage = () => {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="mt-4 relative rounded-md overflow-hidden ">
      <Image
        alt="image"
        className="object-cover h-[500px] w-[100%] bg-black"
        src={images[currentIndex]}
        width={500}
        height={500}
      />
      <div className="absolute top-[50%] bottom-[50%] left-4">
        <FaAngleLeft
          onClick={() => prevImage()}
          className="hover:text-green-500 text-slate-800 cursor-pointer duration-200"
          size={40}
        />
      </div>
      <div className="absolute bottom-4 w-[100%] flex justify-center gap-1">
        {images.map((img, key, index) => (
          <DotImageCmp
            key={key}
            src={img}
            itemIndex={key}
            currentIndex={currentIndex}
            choose={choose}
          />
        ))}
      </div>
      <div className="absolute top-[50%] bottom-[50%] right-4">
        <FaAngleRight
          onClick={() => nextImage()}
          className="hover:text-green-500 text-slate-800 cursor-pointer duration-200"
          size={40}
        />
      </div>
    </div>
  );
};

export default CarouselCmp;
