import React from "react";
import Banner from "./components/Banner";
import AboutCCET from "@widgets/common/About";

export default function LandingPageView() {
  return (
    <div>
      <Banner />
      <div className="py-[6vh]">
        <AboutCCET />
      </div>
    </div>
  );
}
