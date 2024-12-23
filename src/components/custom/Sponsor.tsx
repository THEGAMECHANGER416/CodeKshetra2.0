import image1 from "/assets/aihello.png";
import image2 from "/assets/aptos.png";
import image3 from "/assets/balamsiq.png";
import image4 from "/assets/beeceptor.png";
import image5 from "/assets/Devfolio.svg";
import image6 from "/assets/ethindia.png";
import image7 from "/assets/interview buddy.png";
import image8 from "/assets/polygon.png";
import image9 from "/assets/unifest.png";
import image10 from "/assets/wolfram.png";
import image11 from "/assets/pathway.png";
import MLH from "/assets/mlh-logo-color.png";
import { FaExternalLinkAlt } from "react-icons/fa";

const Sponsors = () => {
  const sponsors = [
    { src: image1, url: "https://www.aihello.com" },
    { src: image2, url: "https://aptosfoundation.org" },
    { src: image3, url: "https://balsamiq.com" },
    { src: image4, url: "https://www.beeceptor.com" },
    { src: image5, url: "https://devfolio.co" },
    { src: image6, url: "https://ethindia.devfolio.co" },
    { src: image7, url: "https://interviewbuddy.net" },
    { src: image8, url: "https://www.polygon.technology" },
    { src: image9, url: "https://www.unifest.in" },
    { src: image10, url: "https://www.wolfram.com" },
    { src: image11, url: "https://www.pathway.com" },
  ];

  const partners = [MLH];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <h1 className="md:text-[13rem] mt-[0.2rem] font-bebas text-[6.4rem] text-pink font-bold mb-[4rem] md:mb-[6rem] text-center">
        SPONSORS
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 w-full max-w-6xl px-4 sm:px-6">
        {sponsors.map((sponsor, index) => (
          <a
            key={index}
            href={sponsor.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-48 sm:h-52 bg-white rounded-3xl shadow-lg overflow-hidden flex items-center justify-center"
          >
            <img
              src={sponsor.src}
              alt={`Sponsor ${index + 1}`}
              className="w-full p-5 h-full object-contain hover:scale-110 transition-all duration-300 ease-in-out"
            />
          </a>
        ))}
      </div>

      <h1 className="md:text-[13rem] font-bebas text-[6.4rem] text-pink font-bold mb-[4rem] md:mb-[6rem] text-center mt-[9rem]">
        PARTNERS
      </h1>

      <div className=" grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 w-full max-w-6xl px-4 sm:px-6 hidden md:grid">
        {partners.map((src, index) => (
          <div
            key={index}
            className="w-full col-start-2 h-48 sm:h-52 bg-white rounded-3xl shadow-lg overflow-hidden p-14 flex flex-col items-center justify-center"
          >
            <img
              src={src}
              alt={`Partner ${index + 1}`}
              className="w-full h-full object-contain hover:scale-110 transition-all duration-300 ease-in-out"
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center md:hidden">
        <div className="w-full h-48 sm:h-52 bg-white rounded-3xl shadow-lg overflow-hidden p-14">
          <img
            src={MLH}
            alt={`Partner MLH`}
            className="w-full h-full object-contain hover:scale-110 transition-all duration-300 ease-in-out"
          />
        </div>
      </div>
      <div className="my-2 space-x-3 text-white">
        <a
          href="https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2"
        >
          <span className="font-bold">Read the MLH Code of Conduct</span>
          <FaExternalLinkAlt />
        </a>
      </div>
    </div>
  );
};

export default Sponsors;
