import React from "react";

export default function Banner() {
  return (
    <div className="h-[90vh]">
      <video
        src="https://firebasestorage.googleapis.com/v0/b/informatyka-4b6e6.appspot.com/o/Timeline%201.mov?alt=media&token=1c3dde5a-5480-44df-b85a-1ed9d765b8c3"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      ></video>
    </div>
  );
}
