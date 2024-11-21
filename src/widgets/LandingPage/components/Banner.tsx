import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <div className="h-[91vh] relative">
      <video
        src="https://firebasestorage.googleapis.com/v0/b/informatyka-4b6e6.appspot.com/o/Timeline%201.mov?alt=media&token=1c3dde5a-5480-44df-b85a-1ed9d765b8c3"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      ></video>
      <Image src={'/logo/nba.png'} alt="Carmel Cet nba" width={1000} height={1000} className="absolute w-[8rem] right-5 top-5"/>
    </div>
  );
}
