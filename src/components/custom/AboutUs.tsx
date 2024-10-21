import React from "react";
import '../../App.css'
const AboutUs:React.FC = () => {
  return (
    <div className="p-4 md:pl-24 h-full w-full">
      <h1 className="md:text-[12rem] font-bebas text-6xl text-pink font-bold mb-[4rem] md:mb-[6rem] text-center">About Us</h1>
      <p className="font-bold text-white text-xl leading-relaxed">
        Code Kshetra 2.0, a 36-hour hackathon in February 2025, invites tech enhusisasts to a reviting experience of innovation. Dive into coding challenges, showcase your skills, and seize the chance to win exciting swags and prizes. Elevate your coding game, connect with industry experts, and leave your mark on the future of tech.
      </p>
      <div className="container relative w-full flex mt-[22px]">
        <div className="grid grid-cols-3 auto-rows-fr w-1/2 h-full ml-2 duration-500 sm:gap-4 mt-5 " id="grid1">
          <div className="col-span-2 "><img src="./assets/ab5.jpg" alt="" className="rounded-2xl "/></div>
          <div className="content-center"><img src="./assets/ab7.jpg" alt="" className="rounded-2xl"/></div>
          <div className="row-span-2"><img src="./assets/ab3.jpg" alt="" className="rounded-2xl"/></div>
          <div className="row-span-2 col-span-2 "><img src="./assets/ab4.jpg" alt="" className="rounded-2xl "/></div>
        </div>
        <div className="w-1/2 grid grid-cols-4 auto-rows-fr h-full ml-4 duration-500 sm:gap-4" id="grid2">
          <div className="row-span-3 xl:row-span-2 content-center"><img src="./assets/ab2.jpg" alt="" className="rounded-2xl " /></div>
          <div className="row-span-3 xl:row-span-2 col-span-3"><img src="./assets/homeBg.jpeg" alt="" className="rounded-2xl"/></div>
          <div className="row-span-2 content-center"><img src="./assets/ab2.jpg" alt="" className="rounded-2xl  "/></div>
          <div className="row-span-2 col-span-2 content-center"><img src="./assets/ab1.jpg" alt="" className="rounded-2xl "/></div>
          <div className="row-span-2 content-center"><img src="./assets/ab7.jpg" alt="" className="rounded-2xl"/></div>
        </div>
      </div>
    </div>

  );
};
export default AboutUs;
