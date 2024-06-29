import React from "react";
import RatingCmp from "./RatingCmp";
import Image from "next/image";
interface ITestimonialCmp {
  personName: String;
  opinion: String;
  rating: 1 | 2 | 3 | 4 | 5;
}

const TestimonialCmp: React.FC<ITestimonialCmp> = ({
  personName,
  opinion,
  rating,
}) => {
  return (
    <div className="shadow-md p-4 relative rounded-md">
      <div className="flex items-center gap-2 mb-2">
        <Image
          alt="image"
          className=" w-[40px] h-[40px] object-cover rounded-full shadow-sm"
          src="https://picsum.photos/200/300"
          width={500}
          height={500}
        />
        <p className="text-sm">{personName}</p>
      </div>
      <RatingCmp rate={rating} />
      <p className="font-light text-sm mb-6">{opinion}</p>
    </div>
  );
};

export default TestimonialCmp;
