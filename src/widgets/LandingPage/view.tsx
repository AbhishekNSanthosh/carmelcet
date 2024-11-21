import React from "react";
import Banner from "./components/Banner";
import AboutCCET from "@widgets/common/About";
import Philosophy from "./components/Philosophy";
import Recruiters from "@widgets/common/Recruiters";

export default function LandingPageView() {
  return (
    <div>
      <Banner />
      <div className="py-[6vh]">
        <AboutCCET />
      </div>
      <Philosophy/>
      <div className="py-[6vh]">
        <Recruiters />
      </div>
    </div>
  );
}
