import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaRetweet } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="section sm:px-6 md:px-20 lg:px-72 border-t-2">
      <div className="grid grid-cols-2 gap-4">
        <ul>
          <h3 className="mb-2">Quick Links</h3>
          <li>
            <Link href="#home" className="">
              Home
            </Link>
          </li>
          <li>
            <Link href="#aboutus" className="">
              About Us
            </Link>
          </li>
          <li>
            <Link href="#services" className="">
              Services
            </Link>
          </li>
          <li>
            <Link href="#testimonials" className="">
              Testimonials
            </Link>
          </li>
          <li>
            <Link href="#contact" className="">
              Contact
            </Link>
          </li>
        </ul>
        <ul>
          <h3 className="mb-2">Social Media</h3>
          <li>
            <FaInstagram size={40} />
            <FaFacebook size={40} />
            <FaLinkedin size={40} />
          </li>
        </ul>
      </div>
      <p className="mt-8 text-gray-600">
        © 2024 Green Garden Landscaping. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
