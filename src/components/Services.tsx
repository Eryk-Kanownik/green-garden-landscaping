import React from "react";
import ServiceCmp from "./ServiceCmp";

const Services = () => {
  return (
    <div className="section " id="services">
      <h2 className="mb-4">
        <span className="text-green-500">Our</span> Services
      </h2>
      <div className="sm:flex sm:flex-col sm:gap-4 md:grid md:grid-cols-3 md:gap-4">
        <ServiceCmp
          title="Design"
          description="At Green Garden Landscaping, our garden design service is tailored to create outdoor spaces that reflect your personal style and meet your specific needs."
        />
        <ServiceCmp
          title="Construction"
          description="Our garden construction service ensures that the beautiful designs we create are brought to life with the highest standards of quality and craftsmanship."
        />
        <ServiceCmp
          title="Maintenance"
          description="Keep your garden looking its best year-round with our comprehensive garden maintenance service."
        />
      </div>
    </div>
  );
};

export default Services;
