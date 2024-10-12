import React from 'react';
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { FaGripLines } from "react-icons/fa6";
import { FaPenToSquare } from "react-icons/fa6";

import { FaQuestion } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { HiHome } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { FaRegClock } from "react-icons/fa";

const Navbar: React.FC = () => {
  return (
    <div className="fixed bottom-[3rem] left-1/2 transform -translate-x-1/2 w-11/12 md:left-[3.5rem] md:my-3 md:transform md:translate-y-[-3rem] md:w-16 bg-[#2c1e36] text-white rounded-[2rem] shadow-lg">
      <div className="flex md:flex-col md:items-center h-auto gap-0.5 md:my-3">
        <NavItem to="/" icon={<HiHome />} label="Home" />
        <NavItem to="/about" icon={<FaGripLines />} label="About" />
        <NavItem to="/timeline" icon={<FaRegClock />} label="TimeLine" />
        <NavItem to="/problems" icon={<FaPenToSquare />} label="Problems" />
        <NavItem to="/prizes" icon={<RiMoneyRupeeCircleFill />} label="Prizes" />
        <NavItem to="/dontknow" icon={<FaQuestion />} label="DontKnow" />
        <NavItem to="/team" icon={<RiTeamFill />} label="Team" />
      </div>
    </div>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  to: string;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, to }) => {
  return (
    <div className="flex-1 md:flex-none">
      <Link to={to} aria-label={label}>
        <button className="w-full md:w-16 py-2 h-[4rem] flex items-center justify-center rounded-full hover:bg-[#3a2c4e] transition-colors">
          <span className="text-[#FF32F4]  font-bold">{icon}</span>
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
