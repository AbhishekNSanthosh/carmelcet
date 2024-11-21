import {
  courses,
  facilities,
  helpAndSupport,
  usefulLinks,
} from "@utils/constants";
import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { ImYoutube2 } from "react-icons/im";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="w-full mt-1 bg-primary-600 text-white px-[5vw] py-[2rem] flex flex-col space-y-8">
      <div className="flex flex-row items-start justify-between h-auto space-x-8">
        {/* <div className="flex flex-1 flex-col items-start justify-start space-y-4">
          <div className="flex items-center justify-start">
            <span className="font-semibold text-white">Courses</span>
          </div>
          <div className="">
            {courses?.map((course, index) => (
              <div className="" key={`${course.title}_${index}`}>
                <span className="font-light text-sm">{course?.title}</span>
              </div>
            ))}
          </div>
        </div> */}


        <div className="flex flex-1 flex-col items-start justify-start space-y-4">
          <div className="flex items-center justify-start">
            <span className="font-semibold">Our Facilities</span>
          </div>
          <div className="">
            {facilities?.map((item, index) => (
              <div className="" key={`${item.title}_${index}`}>
                <span className="font-light text-sm">{item?.title}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 flex-col items-start justify-start space-y-4">
          <div className="flex items-center justify-start">
            <span className="font-semibold">Help & Support</span>
          </div>
          <div className="">
            {helpAndSupport?.map((item, index) => (
              <div className="" key={`${item.title}_${index}`}>
                <span className="font-light text-sm">{item?.title}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 flex-col items-start justify-start space-y-4">
          <div className="flex items-center justify-start">
            <span className="font-semibold">Useful links</span>
          </div>
          <div className="">
            {usefulLinks?.map((item, index) => (
              <div className="" key={`${item.title}_${index}`}>
                <span className="font-light text-sm">{item?.title}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 flex-col items-start justify-start space-y-4">
          <div className="flex items-center justify-start">
            <span className="font-semibold">Get in Touch</span>
          </div>
          <div className="flex flex-col items-start justify-start space-y-4 w-full">
            <div className="flex flex-col items-start justify-start space-y-3">
              <div className="">
                <span className="font-light text-sm">
                  Address: Carmel College of Engineering & Technology Punnapra |
                  Alappuzha-688004, Kerala.
                </span>
              </div>
              <div className="">
                <span className="font-light text-sm">
                  Phone: 0477 2287248, 2287240, 8330807240
                </span>
              </div>
              <div className="">
                <span className="font-light text-sm">
                  Email: office@carmelcet.in | www.carmelcet.in
                </span>
              </div>
            </div>
            <div className="flex flex-row justify-start space-x-4 items-center w-full">
              <div className="p-1 bg-white text-primary-600 rounded-[5px] w-[40px] h-[40px] flex items-center justify-center text-xl">
                <FaFacebookF />
              </div>
              <div className="p-1 bg-white text-primary-600 rounded-[5px] w-[40px] h-[40px] flex items-center justify-center text-xl">
                <FaXTwitter />
              </div>
              <div className="p-1 bg-white text-primary-600 rounded-[5px] w-[40px] h-[40px] flex items-center justify-center text-xl">
                <FaInstagram />
              </div>
              <div className="p-1 bg-white text-primary-600 rounded-[5px] w-[40px] h-[40px] flex items-center justify-center text-xl">
                <FaLinkedinIn />
              </div>
              <div className="p-1 bg-white text-primary-600 rounded-[5px] w-[40px] h-[40px] flex items-center justify-center text-xl">
                <ImYoutube2 className="text-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[.5px] bg-gray-100 bg-opacity-70"></div>
      <div className="text-sm w-full items-center justify-between flex flex-row">
        <div className="flex flex-row space-x-5">
          <span className="">Privacy Policy</span>
          <span className="">Terms & Conditions</span>
        </div>
        <div className="">© Copyright 2024 | Crafted by CCET Tech Team</div>
      </div>
    </div>
  );
}
