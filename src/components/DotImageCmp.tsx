"use client";
import React from "react";

interface IDotImageComponent {
  src: string;
  choose: Function;
  itemIndex: number;
  currentIndex: number;
}

const DotImageCmp: React.FC<IDotImageComponent> = ({
  src,
  choose,
  itemIndex,
  currentIndex,
}) => {
  return (
    <div
      className={`w-[10px] h-[10px] hover:bg-green-200 rounded-full ${
        itemIndex === currentIndex ? "bg-green-500" : "bg-slate-500"
      } shadow-xl cursor-pointer`}
      onClick={() => choose(src)}></div>
  );
};

export default DotImageCmp;
