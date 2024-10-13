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
  const location = useLocation();

  useEffect(() => {
    setSelectedSection(location.pathname);
  }, [location.pathname]);

  const handleNavClick = (path: string, ref: React.RefObject<HTMLDivElement>, navItemRef: React.RefObject<HTMLButtonElement>) => {
    setSelectedSection(path);
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // Scroll the clicked nav item into view
    navItemRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  };

  return (
    <div className="fixed md:left-[1rem] md:top-1/2 md:transform md:-translate-y-1/2 bottom-[5rem] md:bottom-auto right-[1rem] w-11/12 md:w-16 bg-[#2c1e36] text-white rounded-full shadow-lg">
      <div className="flex md:flex-col md:items-center h-auto gap-0.5 overflow-x-auto">
        <NavItem to="/" icon={<HiHome />} label="Home" isFirst selected={selectedSection === '/'} scrollTo={scrollRefs.home} onClick={handleNavClick} />
        <NavItem to="/about" icon={<FaGripLines />} label="About" selected={selectedSection === '/about'} scrollTo={scrollRefs.about} onClick={handleNavClick} />
        <NavItem to="/timeline" icon={<FaRegClock />} label="TimeLine" selected={selectedSection === '/timeline'} scrollTo={scrollRefs.timeline} onClick={handleNavClick} />
        <NavItem to="/problems" icon={<FaPenToSquare />} label="Problems" selected={selectedSection === '/problems'} scrollTo={scrollRefs.problems} onClick={handleNavClick} />
        <NavItem to="/prizes" icon={<RiMoneyRupeeCircleFill />} label="Prizes" selected={selectedSection === '/prizes'} scrollTo={scrollRefs.prizes} onClick={handleNavClick} />
        <NavItem to="/dontknow" icon={<FaQuestion />} label="DontKnow" selected={selectedSection === '/dontknow'} scrollTo={scrollRefs.faq} onClick={handleNavClick} />
        <NavItem to="/team" icon={<RiTeamFill />} label="Team" isLast selected={selectedSection === '/team'} scrollTo={scrollRefs.team} onClick={handleNavClick} />
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
  scrollTo: React.RefObject<HTMLDivElement>;
  onClick: (path: string, ref: React.RefObject<HTMLDivElement>, navItemRef: React.RefObject<HTMLButtonElement>) => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, to, isFirst, isLast, selected, scrollTo, onClick }) => {
  const navItemRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="flex-1 md:flex-none">
      <button
        ref={navItemRef}
        className={`w-full md:w-16 py-2 h-[4rem] flex items-center justify-center transition-colors 
        ${selected ? 'bg-[#3a2c4e] md:bg-[#3a2c4e]' : ''}
        ${isFirst ? 'rounded-l-full md:rounded-t-full md:rounded-b-none' : isLast ? 'rounded-r-full md:rounded-b-full md:rounded-t-none' : ''} 
        hover:bg-[#3a2c4e] ${selected ? '' : 'disable-hover'}`} // Add disable-hover class here
        onClick={() => onClick(to, scrollTo, navItemRef)}
        aria-label={label}
      >
        <span className="text-[#FF32F4] font-bold">{icon}</span>
      </button>
    </div>
  );
};

export default Navbar;
