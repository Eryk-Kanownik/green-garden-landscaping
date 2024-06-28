import React from "react";

const AboutUs = () => {
  return (
    <div className="section sm:px-6 md:px-20 lg:px-72" id="aboutus">
      <h2 className="mb-2">
        About <span className="text-green-500">Us</span>
      </h2>
      <div className="sm:flex sm:flex-col sm:gap-4 md:grid md:grid-cols-2 md:gap-4 md:h-[300px] ">
        <p>
          Welcome to Green Garden Landscaping! We specialize in creating
          beautiful, sustainable gardens that enhance the beauty and
          functionality of your outdoor spaces. With years of experience and a
          passion for nature, our team is dedicated to providing top-notch
          garden design, construction, and maintenance services. Whether you're
          looking to transform your backyard into a tranquil oasis or need
          regular maintenance to keep your garden looking its best, we've got
          you covered. Explore our website to learn more about our services,
          view our gallery of stunning projects, and read testimonials from our
          satisfied clients. Let us help you create the garden of your dreams!
        </p>
        <div className="h-[100%]">
          <img
            src="https://picsum.photos/500/250"
            className="objcet-cover  rounded-md w-[100%]"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
