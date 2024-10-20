import React from "react";
import '../../App.css'
const AboutUs = () => {
  return (
    <div className="p-4 md:pl-24 h-full w-full">
      <h1 className="md:text-[12rem] font-bebas text-6xl text-pink font-bold mb-[4rem] md:mb-[6rem] text-center">About Us</h1>
      <p className="font-bold text-white text-xl leading-relaxed">
        Code Kshetra 2.0, a 36-hour hackathon in February 2025, invites tech enhusisasts to a reviting experience of innovation. Dive into coding challenges, showcase your skills, and seize the chance to win exciting swags and prizes. Elevate your coding game, connect with industry experts, and leave your mark on the future of tech.
      </p>
      <div className="container relative w-full flex mt-[22px]">
        <div className="grid grid-cols-3 auto-rows-fr w-1/2 h-full ml-3 gap-2 mt-3">
          <div className="col-span-2 border-2 rounded border-white"><img src="./assets/logo.png" alt="" /></div>
          <div className="border-2 rounded border-white"><img src="./assets/homeBg.jpeg" alt="" /></div>
          <div className="row-span-2 border-2 rounded border-white"><img src="./assets/logo.png" alt="" /></div>
          <div className="row-span-2 col-span-2 border-2 rounded border-white"><img src="./assets/homeBg.jpeg" alt="" /></div>
        </div>
        <div className="w-1/2 grid grid-cols-4 auto-rows-fr h-full ml-3 gap-2 mt-3">
          <div className="row-span-3 xl:row-span-2 border-2 rounded border-white"><img src="./assets/homeBg.jpeg" alt="" /></div>
          <div className="row-span-3 xl:row-span-2 col-span-3 border-2 rounded border-white"><img src="./assets/logo.png" alt="" /></div>
          <div className="border-2 rounded border-white"><img src="./assets/logo.png" alt="" /></div>
          <div className="border-2 col-span-2 rounded border-white"><img src="./assets/logo.png" alt="" /></div>
          <div className="border-2 rounded border-white"><img src="./assets/homeBg.jpeg" alt="" /></div>
        </div>
      </div>
    </div>

  );
};
export default AboutUs;
