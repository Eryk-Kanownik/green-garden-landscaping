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
      className={`flex justify-between px-8 py-6 fixed top-0 left-0 right-0 z-10 sm:flex ${
        unfolded ? "bg-white" : ""
      } sm:flex-col sm:gap-6 md:flex md:flex-row`}>
      <div className="font-bold">
        Green <span className="text-green-500">Garden</span> Landscaping
      </div>
      <ul
        className={`flex gap-4 sm:scale-y-0 sm:flex sm:flex-col sm:origin-top  md:scale-y-100 md:flex md:flex-row  ${
          unfolded ? "sm:scale-y-100" : "sm:scale-y-0"
        }`}>
        <li>
          <Link
            href="#home"
            className="font-bold"
            onClick={() => closeListAfterChoice()}>
            Home
          </Link>
        </li>
        <li>
          <Link
            href="#aboutus"
            className="font-bold"
            onClick={() => closeListAfterChoice()}>
            About Us
          </Link>
        </li>
        <li>
          <Link
            href="#services"
            className="font-bold"
            onClick={() => closeListAfterChoice()}>
            Services
          </Link>
        </li>
        <li>
          <Link
            href="#testimonials"
            className="font-bold"
            onClick={() => closeListAfterChoice()}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            href="#contact"
            className="font-bold"
            onClick={() => closeListAfterChoice()}>
            Contact
          </Link>
        </li>
      </ul>
      <div
        className="sm:block md:hidden absolute top-6 right-8 cursor-pointer"
        onClick={() => unfoldLinkList()}>
        <FaHamburger />
      </div>
    </div>
  );
};

export default Navbar;
