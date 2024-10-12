import React, { useState, useEffect } from 'react';
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { FaGripLines, FaPenToSquare, FaQuestion, FaRegClock } from "react-icons/fa6";
import { RiTeamFill } from "react-icons/ri";
import { HiHome } from "react-icons/hi";
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  scrollRefs: {
    home: React.RefObject<HTMLDivElement>;
    about: React.RefObject<HTMLDivElement>;
    timeline: React.RefObject<HTMLDivElement>;
    problems: React.RefObject<HTMLDivElement>;
    prizes: React.RefObject<HTMLDivElement>;
    faq: React.RefObject<HTMLDivElement>;
    team: React.RefObject<HTMLDivElement>;
  };
}

const Navbar: React.FC<NavbarProps> = ({ scrollRefs }) => {
  const [selectedSection, setSelectedSection] = useState<string>('');
  const location = useLocation();

  useEffect(() => {
    setSelectedSection(location.pathname);
  }, [location]);

  return (
    <div className="fixed md:left-[1rem] top-[93vh] md:top-1/2 transform -translate-y-1/2 w-11/12 md:left-[3.5rem] md:w-16 bg-[#2c1e36] text-white rounded-full shadow-lg">
      <div className="flex md:flex-col md:items-center h-auto gap-0.5">
        <NavItem to="/" icon={<HiHome />} label="Home" isFirst selected={selectedSection === '/'} scrollTo={scrollRefs.home} />
        <NavItem to="/about" icon={<FaGripLines />} label="About" selected={selectedSection === '/about'} scrollTo={scrollRefs.about} />
        <NavItem to="/timeline" icon={<FaRegClock />} label="TimeLine" selected={selectedSection === '/timeline'} scrollTo={scrollRefs.timeline} />
        <NavItem to="/problems" icon={<FaPenToSquare />} label="Problems" selected={selectedSection === '/problems'} scrollTo={scrollRefs.problems} />
        <NavItem to="/prizes" icon={<RiMoneyRupeeCircleFill />} label="Prizes" selected={selectedSection === '/prizes'} scrollTo={scrollRefs.prizes} />
        <NavItem to="/dontknow" icon={<FaQuestion />} label="DontKnow" selected={selectedSection === '/dontknow'} scrollTo={scrollRefs.faq} />
        <NavItem to="/team" icon={<RiTeamFill />} label="Team" isLast selected={selectedSection === '/team'} scrollTo={scrollRefs.team} />
      </div>
    </div>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  to: string;
  isFirst?: boolean;
  isLast?: boolean;
  selected: boolean;
  scrollTo: React.RefObject<HTMLDivElement>; // New prop for the ref
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, to, isFirst, isLast, selected, scrollTo }) => {
  return (
    <div className="flex-1 md:flex-none">
      <Link to={to} aria-label={label} onClick={() => scrollTo.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
        <button
          className={`w-full md:w-16 py-2 h-[4rem] flex items-center justify-center transition-colors 
          ${selected ? 'bg-[#3a2c4e]' : ''}
          ${isFirst ? 'rounded-l-full md:rounded-t-full md:rounded-b-none' : isLast ? 'rounded-r-full md:rounded-b-full md:rounded-t-none' : ''} 
          hover:bg-[#3a2c4e]`}
        >
          <span className="text-[#FF32F4] font-bold">{icon}</span>
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
