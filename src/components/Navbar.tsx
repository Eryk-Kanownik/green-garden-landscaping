"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaHamburger } from "react-icons/fa";

const Navbar = () => {
  const [unfolded, setUnfolded] = useState(false);
  const [windowWidth, setWindowWidth] = useState<Number>(0);
  const unfoldLinkList = () => {
    setUnfolded((prev) => !prev);
  };

  const closeListAfterChoice = () => {
    setUnfolded((prev) => false);
  };

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  useEffect(() => {
    if (window.innerWidth >= 900) {
      setUnfolded(false);
    }
  }, [windowWidth]);

  return (
    <div
      className={` justify-between px-8 py-6 fixed top-0 left-0 right-0 z-10 flex ${
        unfolded ? "bg-white" : ""
      } flex-col gap-6 md:flex md:flex-row`}>
      <div className="font-bold">
        Green <span className="text-green-500">Garden</span> Landscaping
      </div>
      <ul
        className={`flex gap-4 scale-y-0 flex-col origin-top md:scale-y-100 md:flex md:flex-row  ${
          unfolded ? "scale-y-100" : "scale-y-0"
        }`}>
        <li>
          <Link
            href="#home"
            className="font-semibold"
            onClick={() => closeListAfterChoice()}>
            Home
          </Link>
        </li>
        <li>
          <Link
            href="#aboutus"
            className="font-semibold"
            onClick={() => closeListAfterChoice()}>
            About Us
          </Link>
        </li>
        <li>
          <Link
            href="#services"
            className="font-semibold"
            onClick={() => closeListAfterChoice()}>
            Services
          </Link>
        </li>
        <li>
          <Link
            href="#testimonials"
            className="font-semibold"
            onClick={() => closeListAfterChoice()}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            href="#contact"
            className="font-semibold"
            onClick={() => closeListAfterChoice()}>
            Contact
          </Link>
        </li>
      </ul>
      <div
        className="block md:hidden absolute top-7 right-8 cursor-pointer"
        onClick={() => unfoldLinkList()}>
        <FaHamburger />
      </div>
    </div>
  );
};

export default Navbar;
