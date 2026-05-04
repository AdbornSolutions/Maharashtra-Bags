import React, { useEffect, useState } from "react";
import Mahabag from "../Home/Maharashtrabag";
import Topproducts from "../Home/Topproducts";
import Homebottom from "../Home/Homebottom";
import slide1 from "../../assets/Crousel/maharashtrabags.mp4";

const VideoCarousel = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowContent(true), 300);
  }, []);

  return (
    <>
      {/* BACKGROUND VIDEO */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <video
          src={slide1}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full h-[100vh] flex items-center justify-center text-center text-white relative z-0">
        <div
          className={`${showContent ? "opacity-100" : "opacity-0"} 
      transition-all duration-1000 flex flex-col items-center justify-center`}
        >
          <h1 className="text-4xl md:text-6xl font-bold drop-shadow-xl">
            Maharashtra Bags
          </h1>

          <p className="mt-4 text-lg md:text-2xl opacity-90">
            Premium Quality • Eco Friendly • Custom Design Bags
          </p>
        </div>
      </div>

      <div className="relative z-10 bg-white">
        <Mahabag />
        <Topproducts />
        <Homebottom />
      </div>
    </>
  );
};

export default VideoCarousel;
