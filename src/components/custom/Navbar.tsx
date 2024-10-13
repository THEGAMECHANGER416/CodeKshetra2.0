import React, { useState, useEffect, useRef } from 'react';
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { FaGripLines, FaPenToSquare, FaQuestion, FaRegClock } from "react-icons/fa6";
import { RiTeamFill } from "react-icons/ri";
import { HiHome } from "react-icons/hi";
import { useLocation } from 'react-router-dom';

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
  const [targetSection, setTargetSection] = useState<string>('');
  const location = useLocation();

  useEffect(() => {
    // Update selected section based on the URL
    setSelectedSection(location.pathname);
  }, [location.pathname]);

  const handleNavClick = (path: string, ref: React.RefObject<HTMLDivElement>, navItemRef: React.RefObject<HTMLButtonElement>) => {
    // Set the target section when nav item is clicked
    setTargetSection(path);
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // Scroll the clicked nav item into view
    navItemRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  };

  return (
    <div className="fixed md:left-[1rem] md:top-1/2 md:transform md:-translate-y-1/2 bottom-[5rem] md:bottom-auto right-[1rem] w-11/12 md:w-16 bg-[#2c1e36] text-white rounded-full shadow-lg">
      <div className="flex md:flex-col md:items-center h-auto gap-0.5 overflow-x-auto">
        <NavItem to="/" icon={<HiHome />} label="Home" isFirst selected={selectedSection === '/'} target={targetSection} scrollTo={scrollRefs.home} onClick={handleNavClick} />
        <NavItem to="/about" icon={<FaGripLines />} label="About" selected={selectedSection === '/about'} target={targetSection} scrollTo={scrollRefs.about} onClick={handleNavClick} />
        <NavItem to="/timeline" icon={<FaRegClock />} label="TimeLine" selected={selectedSection === '/timeline'} target={targetSection} scrollTo={scrollRefs.timeline} onClick={handleNavClick} />
        <NavItem to="/problems" icon={<FaPenToSquare />} label="Problems" selected={selectedSection === '/problems'} target={targetSection} scrollTo={scrollRefs.problems} onClick={handleNavClick} />
        <NavItem to="/prizes" icon={<RiMoneyRupeeCircleFill />} label="Prizes" selected={selectedSection === '/prizes'} target={targetSection} scrollTo={scrollRefs.prizes} onClick={handleNavClick} />
        <NavItem to="/dontknow" icon={<FaQuestion />} label="DontKnow" selected={selectedSection === '/dontknow'} target={targetSection} scrollTo={scrollRefs.faq} onClick={handleNavClick} />
        <NavItem to="/team" icon={<RiTeamFill />} label="Team" isLast selected={selectedSection === '/team'} target={targetSection} scrollTo={scrollRefs.team} onClick={handleNavClick} />
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
  target: string; // Add target prop
  scrollTo: React.RefObject<HTMLDivElement>;
  onClick: (path: string, ref: React.RefObject<HTMLDivElement>, navItemRef: React.RefObject<HTMLButtonElement>) => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, to, isFirst, isLast, selected, target, scrollTo, onClick }) => {
  const navItemRef = useRef<HTMLButtonElement>(null);
  const isActive = selected || (target === to && false) ; // Determine if the item is active based on selected or target state

  return (
    <div className="flex-1 md:flex-none">
      <button
        ref={navItemRef}
        className={`w-full md:w-16 py-2 h-[4rem] flex items-center justify-center transition-colors 
        ${isActive ? 'bg-[#3a2c4e] md:bg-[#3a2c4e]' : ''}
        ${isFirst ? 'rounded-l-full md:rounded-t-full md:rounded-b-none' : isLast ? 'rounded-r-full md:rounded-b-full md:rounded-t-none' : ''} 
        hover:bg-[#3a2c4e] ${isActive ? '' : 'disable-hover'}`} // Update logic to check isActive
        onClick={() => onClick(to, scrollTo, navItemRef)}
        aria-label={label}
      >
        <span className="text-[#FF32F4] font-bold">{icon}</span>
      </button>
    </div>
  );
};

export default Navbar;
