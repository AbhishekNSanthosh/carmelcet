import Titlebar from "@components/Titlebar";
import { believes } from "@utils/constants";
import React from "react";
import { TiPointOfInterest } from "react-icons/ti";

export default function Philosophy() {
  return (
    <div className="py-[8vh] mb-[5vh] bg-primary-600 px-[5vw] flex flex-col space-y-8 text-white">
      <div className="">
        <Titlebar
          title="Our Philosophy"
          color="bg-white"
          className="text-white"
        />
      </div>
      <div className="flex flex-col items-start justify-center space-y-10 px-[5vw]">
        <div className="">
          <span className="text-3xl font-semibold">What CCET believes in</span>
        </div>
        <div className="flex flex-col items-start space-y-8">
          <div className="flex flex-row">
            <div className="w-[20vw]">
              <span className="uppercase">Our Vision</span>
            </div>
            <div className="flex flex-row items-center gap-4">
              <TiPointOfInterest />
              <span className="">{believes?.vision[0]}</span>
            </div>
          </div>

          <div className="flex flex-row">
            <div className="w-[20vw]">
              <span className="uppercase">Our Mision</span>
            </div>
            <div className="">
              {believes?.mission?.map((misson, index) => (
                <div className="flex flex-row items-center gap-4" key={index}>
                  <TiPointOfInterest />
                  <span className="">{misson}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
  <div className="">
    <span className="text-xl">Core Values</span>
    <div className="w-[7rem] h-[2px] bg-white ml-4"></div>
  </div>
  <div className="flex flex-wrap gap-4 text-base font-medium w-full items-center justify-center">
    <span className="bg-gray-200 text-primary-600 px-3 py-1 rounded-lg">
      Faith in God
    </span>
    <span className="bg-gray-200 text-primary-600 px-3 py-1 rounded-lg">
      Commitment to excellence
    </span>
    <span className="bg-gray-200 text-primary-600 px-3 py-1 rounded-lg">
      Respect for diversity
    </span>
    <span className="bg-gray-200 text-primary-600 px-3 py-1 rounded-lg">
      Integrity in actions
    </span>
    <span className="bg-gray-200 text-primary-600 px-3 py-1 rounded-lg">
      Accountability for outcomes
    </span>
    <span className="bg-gray-200 text-primary-600 px-3 py-1 rounded-lg">
      Compassion for others
    </span>
    <span className="bg-gray-200 text-primary-600 px-3 py-1 rounded-lg">
      Dedication to service
    </span>
    <span className="bg-gray-200 text-primary-600 px-3 py-1 rounded-lg">
      Excellence in innovation
    </span>
    <span className="bg-gray-200 text-primary-600 px-3 py-1 rounded-lg">
      Collaboration and teamwork
    </span>
    <span className="bg-gray-200 text-primary-600 px-3 py-1 rounded-lg">
      Respect for integrity
    </span>
  </div>
</div>

      </div>
    </div>
  );
}
