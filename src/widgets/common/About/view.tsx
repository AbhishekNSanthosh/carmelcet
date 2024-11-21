import Titlebar from "@components/Titlebar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AboutCCET() {
  return (
    <div className="px-[5vw] py-[5vh] text-gray-700 flex flex-col space-y-10">
      <div className="">
        <Titlebar title="About" secondTitle="CCET" />
      </div>
      <div className="flex flex-row space-x-5">
        <div className="flex-1 flex items-start justify-center flex-col gap-4 pr-32">
          <h2 className="text-2xl font-semibold text-gray-800">
            CCET at a glance
          </h2>
          <p className="text-gray-700 text-justify">
            Carmel College of Engineering & Technology (CCET) is owned and
            managed by St. Joseph’s Carmel Educational & Charitable Trust of
            CMI, registered on 13-09-2012.
          </p>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="h-[24vw] w-[40vw] bg-primary-300 relative">
            <Image
              alt="Carmel CET"
              src={"/carmel/carmel.jpg"}
              width={1000}
              height={1000}
              className="w-[40vw] h-[24vw] absolute mr-5 transform -translate-x-5 -translate-y-5"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-8 items-center justify-center space-x-8 py-12">
        <div className="flex-1 flex flex-col items-start justify-center gap-3">
          <h2 className="text-2xl font-semibold">Overview</h2>
          <p className="text-[1vw]">
            Established by St. Joseph’s Carmel Educational & Charitable Trust in
            2014-15, offers AICTE-approved, KTU-affiliated B.Tech courses in
            Civil, Mechanical, Electrical, and Computer Science.
          </p>
          <Link
            href="#"
            className="text-primary-600 font-medium hover:underline mt-[-15px]"
          >
            Read more
          </Link>
        </div>

        <div className="h-[20vh] w-[1px] bg-gray-500"></div>

        <div className="flex-1 flex flex-col items-start justify-center gap-3">
          <h2 className="text-2xl font-semibold">Evolution</h2>
          <p className="text-[1vw]">
            The Congregation of the Carmelites of Mary Immaculate was founded by
            Rev. Fathers Thomas Palackal, Thomas Porukara, and St Kuriakose
            Elias Chavara, with the foundation stone laid at Mannanam on 11th
            May 1831.
          </p>
          <Link
            href="#"
            className="text-primary-600 font-medium hover:underline mt-[-15px]"
          >
            Read more
          </Link>
        </div>

        <div className="h-[20vh] w-[1px] bg-gray-500"></div>

        <div className="flex-1 flex flex-col items-start justify-center gap-3">
          <h2 className="text-2xl font-semibold">Vision & Mission</h2>
          <p className="text-[1vw]">
            To mould engineers with integrity and social commitment through
            holistic development, career guidance, and social outreach programs,
            meeting global standards and contributing to society's sustainable
            development.
          </p>
          <Link
            href="#"
            className="text-primary-600 font-medium hover:underline mt-[-15px]"
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
}
