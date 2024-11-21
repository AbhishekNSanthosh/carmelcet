import React from "react";

interface TitleBarProps {
  title: string;
  secondTitle?:string;
  className?: string;
  subTile?: string;
}

const Titlebar: React.FC<TitleBarProps> = ({ title, className, subTile,secondTitle }) => {
  return (
    <div
      className={`title-bar ${className} flex flex-row items-center`}
    >
        <div className="w-[2.5rem] h-[2px] rounded-lg bg-primary-600"></div>
      <div className="flex items-center flex-row ml-4 space-x-2">
        <h5 className="text-2xl font-semibold text-azure-600 capitalize">
          {title}
        </h5>
        {secondTitle &&
        <h5 className="text-2xl font-semibold text-primary-600 capitalize">
        {secondTitle}
      </h5>
        }
      </div>
    </div>
  );
};

export default Titlebar;
