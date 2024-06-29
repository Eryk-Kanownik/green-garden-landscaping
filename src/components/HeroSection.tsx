import Link from "next/link";
import React from "react";
import Image from "next/image";
import heroSectionPicture from "../../public/hero-section-img.jpg";

const HeroSection = () => {
  return (
    <div
      className="h-[100dvh] md:h-[85dvh] flex justify-center items-center relative overflow-hidden bg-black/30"
      id="home">
      <div className="w-[800px] text-center mx-10">
        <h1 className="mb-2 text-white">
          Creating Your Dream <span className="text-green-500">Garden</span>
        </h1>
        <p className="mb-6 text-white">
          Welcome to{" "}
          <span className="font-bold">
            Green <span className="text-green-500">Garden </span> Landscaping!{" "}
          </span>
          We specialize in creating beautiful, sustainable gardens that enhance
          the beauty and functionality of your outdoor spaces.
        </p>
        <Link href="#contact">
          <button className="text-white hover:text-black">Contact Us!</button>
        </Link>
      </div>
      <Image
        alt="image"
        className="absolute top-0 left-0 -z-10 object-cover h-[100%] w-[100%] object-top"
        src={heroSectionPicture}
        width={1000}
        height={500}
      />
    </div>
  );
};
export default HeroSection;
