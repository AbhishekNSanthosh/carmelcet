import CarmelButton from "@components/CarmelButton";
import { navItems } from "@utils/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import News from "@widgets/common/News/view";

export default function Header() {
  return (
    <>
    <div className="flex flex-row items-center justify-between px-[5vw] h-[13vh]">
      <div className="flex flex-1 flex-row items-center justify-start">
        <Image
          src={"/logo/brand.png"}
          alt="Carmel logo"
          width={1000}
          height={1000}
          className="w-[300px]"
        />
        {/* <Image
          src={"/logo/nba.png"}
          alt="Carmel logo"
          width={1000}
          height={1000}
          className="w-[80px]"
        /> */}
      </div>
      <div className="flex-[2] flex items-center justify-end space-x-4">
        <div className="flex flex-row items-center space-x-4">
          {navItems?.map((item, index) => (
            <div className="flex flex-row space-x-1 items-center justify-center" key={`${item?.title}_${index}`}>
              <Link href={item?.link} className="capitalize">{item?.title}</Link>
              <MdKeyboardArrowDown/>
            </div>
          ))}
        </div>
        <div className="">
          <CarmelButton text="Login" className=""/>
        </div>
      </div>
    </div>
    <News/>
    </>
  );
}
