import React from "react";

const AboutUs: React.FC = () => {
  return (
    <div className="p-4 md:pl-24">
      <h1 className="md:text-[12rem] font-bebas text-6xl text-pink font-bold mb-[4rem] md:mb-[6rem] text-center">About Us</h1>
      <p className="font-bold text-white text-xl leading-relaxed">
        Code Kshetra 2.0, a 36-hour hackathon in February 2025, invites tech enhusisasts to a reviting experience of innovation. Dive into coding challenges, showcase your skills, and seize the chance to win exciting swags and prizes. Elevate your coding game, connect with industry experts, and leave your mark on the future of tech.
      </p>
      {/* <div className="w-full h-full flex">
        <div className="w-1/2 flex">
          <div className="w-1/3 h-16 bg-primary"></div>
          <div className="w-1/6 h-16 bg-primary"></div>
        </div>
        <div className="w-1/2 flex"></div>
      </div> */}
    </div>
  );
};

export default AboutUs;
