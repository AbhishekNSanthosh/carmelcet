import Titlebar from "@components/Titlebar";
import { recuitersImages } from "@utils/constants";
import Image from "next/image";
import React from "react";

export default function Recruiters() {
  return (
    <div className="px-[5vw] pb-[5vh]">
      <div className="">
        <Titlebar title="Our" secondTitle="Recruiters" />
      </div>
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {recuitersImages?.map((recruiter, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            <Image
              src={recruiter}
              alt={`Recruiter ${index + 1}`}
              width={1000}
              height={1000}
              className="object-contain w-[200px] h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
