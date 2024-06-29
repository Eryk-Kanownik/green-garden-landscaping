import React from "react";
import Image from "next/image";
const AboutUs = () => {
  return (
    <div className="section " id="aboutus">
      <h2 className="mb-2">
        About <span className="text-green-500">Us</span>
      </h2>
      <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-4 md:h-[300px] ">
        <p>
          Welcome to Green Garden Landscaping! We specialize in creating
          beautiful, sustainable gardens that enhance the beauty and
          functionality of your outdoor spaces. With years of experience and a
          passion for nature, our team is dedicated to providing top-notch
          garden design, construction, and maintenance services. Whether
          you&apos;re looking to transform your backyard into a tranquil oasis
          or need regular maintenance to keep your garden looking its best,
          we&apos;ve got you covered.
        </p>
        <div className="h-[100%]">
          <Image
            src="https://picsum.photos/500/300"
            width={500}
            height={300}
            alt="image"
            className="objcet-cover rounded-md w-[100%]"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
