import React from 'react';
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { CiHome } from "react-icons/ci";
import { FaGripLines } from "react-icons/fa6";
import { FaPenToSquare } from "react-icons/fa6";
import { BsClockHistory } from "react-icons/bs";
import { FaQuestion } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-11/12 md:left-[3.5rem] md:my-3 md:transform md:-translate-y-1/2 md:w-16 bg-[#2c1e36] text-white rounded-3xl shadow-lg">
      <div className="flex md:flex-col md:items-center h-auto gap-4 md:my-3">
        <NavItem to="/" icon={<CiHome />} label="Home" />
        <NavItem to="/about" icon={<FaGripLines />} label="About" />
        <NavItem to="/timeline" icon={<BsClockHistory />} label="TimeLine" />
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
  to: string; // Add 'to' prop for the link
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, to }) => {
  return (
    <div className="flex-1 md:flex-none">
      <Link to={to} aria-label={label}> {/* Use Link to create navigation */}
        <button
          className="w-full md:w-16 py-2 flex items-center justify-center rounded-full hover:bg-[#3a2c4e] transition-colors"
        >
          <span className="text-[#FF32F4]">{icon}</span>
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
