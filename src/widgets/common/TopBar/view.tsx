import React from "react";

export default function TopBar() {
  return (
    <div className="w-full bg-primary-600 px-[5vw] flex flex-row justify-between items-center h-[5vh]">
      <div className="flex-1">
        <h5 className="text-white uppercase text-[0.9vw] py-2">
          A CMI educational instituion
        </h5>
      </div>
      <div className="flex flex-1 flex-row items-center justify-end space-x-4">
        <h6 className="text-[0.9vw] text-white capitalize">quality assurance</h6>
        <div className="h-5 w-[.5px] bg-gray-300"></div>
        <h6 className="text-[0.9vw] text-white capitalize">Careers</h6>
        <div className="h-5 w-[.5px] bg-gray-300"></div>
        <h6 className="text-[0.9vw] text-white capitalize">Contact</h6>
        <div className="h-5 w-[.5px] bg-gray-300"></div>
        <h6 className="text-[0.9vw] text-white capitalize">College Code: CMA</h6>
        <div className="h-5 w-[.5px] bg-gray-300"></div>
        <h6 className="text-[0.9vw] text-white capitalize">Login</h6>
      </div>
    </div>
  );
}
