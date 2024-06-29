import React from "react";
import Image from "next/image";
interface IServiceCmp {
  title: String;
  description: String;
}

const ServiceCmp: React.FC<IServiceCmp> = ({ title, description }) => {
  return (
    <div className="shadow-md rounded-md overflow-hidden">
      <Image
        alt="image"
        src="https://picsum.photos/200/300"
        className="w-[100%] object-cover max-h-[400px] mb-4"
        width={500}
        height={500}
      />
      <h3 className=" px-4">
        <span className="text-green-500">{title}</span>
      </h3>
      <p className="px-4 pb-4 text-sm">{description}</p>
    </div>
  );
};

export default ServiceCmp;
