// ScrollHandler.tsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ScrollHandler: React.FC<{ refs: { [key: string]: React.RefObject<HTMLDivElement> } }> = ({ refs }) => {
  const navigate = useNavigate(); // Now this is within the Router context

  useEffect(() => {
    const sections = [
      { ref: refs.about, path: "/about" },
      { ref: refs.timeline, path: "/timeline" },
      { ref: refs.problems, path: "/problems" },
      { ref: refs.prizes, path: "/prizes" },
      { ref: refs.faq, path: "/dontknow" },
      { ref: refs.team, path: "/team" },
    ];

    const options = {
      root: null, // Use the viewport as the root
      threshold: 0.5, // Trigger when 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const path = sections.find(section => section.ref.current === entry.target)?.path;
          if (path) {
            navigate(path); // Change route based on the visible section
          }
        }
      });
    }, options);

    sections.forEach(section => {
      if (section.ref.current) {
        observer.observe(section.ref.current); // Start observing each section
      }
    });

    return () => {
      observer.disconnect(); // Cleanup observer on component unmount
    };
  }, [navigate, refs]);

  return null; // This component doesn't render anything
};

export default ScrollHandler;
