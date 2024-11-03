import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaLinkedin } from "react-icons/fa";

const LeadOrganizers = () => {
  const organizers = [
    { id: 1, image: "../../../public/assets/team_members/arnavGupta.jpg", name: "Arnav Gupta", linkedin: "https://www.linkedin.com/in/arnav-gupta-437a66256/" },
    { id: 2, image: "../../../public/assets/team_members/manasChopra.jpg", name: "Manas Chopra", linkedin: "https://www.linkedin.com/in/themanas95826/" },
    { id: 3, image: "../../../public/assets/team_members/prathamBatra.jpg", name: "Pratham Batra", linkedin: "https://www.linkedin.com/in/pratham1908/" },
    { id: 4, image: "../../../public/assets/team_members/purveshGupta.jpg", name: "Purvesh Gupta", linkedin: "https://www.linkedin.com/in/purveshgupta/" },
    { id: 5, image: "../../../public/assets/team_members/sakshamVerma.jpg", name: "Saksham Verma", linkedin: "https://www.linkedin.com/in/saksham-verma-a9390b256/" },
  ];

  const settings = {
    dots: false, 
    infinite: true, 
    speed: 1500, 
    slidesToShow: 3, 
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 1000, 
    arrows: false, 
    swipeToSlide: true, 
  };

  return (
    <div className="text-center mt-10">
      <h1 className="md:text-[12rem] font-bebas text-6xl text-pink font-bold mb-[4rem] md:mb-[6rem] text-center">
        LEAD ORGANIZERS
      </h1>

      {/* Desktop view with flex layout */}
      <div className="hidden md:flex justify-center gap-12">
        {organizers.map((organizer) => (
          <div key={organizer.id} className="md:w-52 md:h-80 w-40 h-64 bg-transparent rounded-[100px] flex justify-center relative">
            <img src={organizer.image} alt={organizer.name} className="rounded-[100px] w-full h-full object-cover" />
            <div style={{
              position: 'absolute',
              bottom: '10px',
              left: '50%',
              transform: 'translateX(-50%)',
              textAlign: 'center',
              color: 'white',
              padding: '5px 12px',
              borderRadius: '8px',
              width: 'fit-content',
              maxWidth: '80%',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
            }}>
              <a href={organizer.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none', fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <FaLinkedin className='text-blue-800' style={{ width: '20px', height: '20px', marginRight: '6px' }} />
                <span>{organizer.name}</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile view with slider */}
      <div className="md:hidden">
        <Slider {...settings}>
          {organizers.map((organizer) => (
            <div key={organizer.id} className="flex-shrink px-2 mx-auto w-32 h-52 bg-transparent rounded-[100px] flex justify-center relative">
              <img src={organizer.image} alt={organizer.name} className="rounded-[100px] w-full h-full object-cover" />
              <div style={{
                position: 'absolute',
                bottom: '12px',
                left: '50%',
                transform: 'translateX(-50%)',
                textAlign: 'center',
                color: 'white',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                padding: '5px 12px',
                borderRadius: '8px',
                width: 'fit-content',
                maxWidth: '80%',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
              }}>
                <a href={organizer.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none', fontSize: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <FaLinkedin className='text-blue-300' style={{ width: '18px', height: '18px', marginRight: '5px' }} />
                  <span>{organizer.name}</span>
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default LeadOrganizers;
