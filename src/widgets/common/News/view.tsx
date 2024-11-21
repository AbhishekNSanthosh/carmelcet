import React from "react";

export default function News() {
  return (
    <div className="w-full bg-primary-100 h-[5vh] px-[5vw] flex items-center space-x-3 overflow-hidden">
      <div className="font-medium whitespace-nowrap">
        <span>Latest News:</span>
      </div>
      <div className="marquee">
        <div className="marquee-content md:text-xl lg:text-xl text-sm">
          <span className="mr-10 text-sm text-primary-800">
            🚀 Hackathon 2024 is live! Participate and win exciting prizes!
          </span>
          <span className="mr-10 text-sm text-primary-800">
            🎉 Congratulations to the winners of the Tech Quiz!
          </span>
          <span className="mr-10 text-sm text-primary-800">
            📢 Attend Ease 2.0 is launching next week!
          </span>
          <span className="mr-10 text-sm text-primary-800">
            🚀 Hackathon 2024 is live! Participate and win exciting prizes!
          </span>
          <span className="mr-10 text-sm text-primary-800">
            🎉 Congratulations to the winners of the Tech Quiz!
          </span>
          <span className="mr-10 text-sm text-primary-800">
            📢 Attend Ease 2.0 is launching next week!
          </span>
        </div>
      </div>
    </div>
  );
}
