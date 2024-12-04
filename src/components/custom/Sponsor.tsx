import image1 from "../../../public/assets/aihello.png";
import image2 from "../../../public/assets/aptos.png";
import image3 from "../../../public/assets/balamsiq.png";
import image4 from "../../../public/assets/beeceptor.png";
import image5 from "../../../public/assets/Devfolio.svg";
import image6 from "../../../public/assets/ethindia.png";
import image7 from "../../../public/assets/interview buddy.png";
import image8 from "../../../public/assets/polygon.png";
import image9 from "../../../public/assets/unifest.png";
import image10 from "../../../public/assets/wolfram.png";


const Sponsors = () => {
    const sponsors = [image1, image2, image3, image4, image5, image6,image7,image8,image9,image10];

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black">
            <h1 className="md:text-[12rem] font-bebas text-6xl text-pink font-bold mb-[4rem] md:mb-[6rem] text-center">
                SPONSORS
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 w-full max-w-6xl px-4 sm:px-6">
                {sponsors.map((src, index) => (
                    <div
                        key={index}
                        className="w-full h-48 sm:h-52 bg-lightpink rounded-3xl shadow-lg overflow-hidden flex items-center justify-center"
                    >
                        <img
                            src={src}
                            alt={`Sponsor ${index + 1}`}
                            className="w-full p-5 h-full object-contain hover:scale-110 transition-all duration-300 ease-in-out"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sponsors;
