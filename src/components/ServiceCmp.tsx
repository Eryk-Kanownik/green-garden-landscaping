import React from "react";

interface IServiceCmp {
  title: String;
  description: String;
}

const ServiceCmp: React.FC<IServiceCmp> = ({ title, description }) => {
  return (
    <div className="shadow-md rounded-md">
      <img
        src="https://picsum.photos/200/300"
        className="w-[100%] object-cover max-h-[400px] mb-4"
      />
      <h3 className="mb-2 px-4">
        <span className="text-green-500">{title}</span>
      </h3>
      <p className="px-4 pb-4 text-sm">{description}</p>
    </div>
  );
};

export default ServiceCmp;
