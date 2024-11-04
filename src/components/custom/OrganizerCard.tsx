import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const LeadOrganizers = () => {
  const organizers = [
    { id: 1, image: "../../../public/assets/team_members/arnavGupta.jpg", name: "Arnav Gupta", linkedin: "https://www.linkedin.com/in/arnav-gupta-437a66256/" },
    { id: 2, image: "../../../public/assets/team_members/manasChopra.jpg", name: "Manas Chopra", linkedin: "https://www.linkedin.com/in/themanas95826/" },
    { id: 3, image: "../../../public/assets/team_members/prathamBatra.jpg", name: "Pratham Batra", linkedin: "https://www.linkedin.com/in/pratham1908/" },
    { id: 4, image: "../../../public/assets/team_members/purveshGupta.jpg", name: "Purvesh Gupta", linkedin: "https://www.linkedin.com/in/purveshgupta/" },
    { id: 5, image: "../../../public/assets/team_members/sakshamVerma.jpg", name: "Saksham Verma", linkedin: "https://www.linkedin.com/in/saksham-verma-a9390b256/" },
  ];

  return (
    <div className="text-center mt-10">
      <h1 className="md:text-[12rem] font-bebas text-6xl text-pink font-bold mb-[2rem] md:mb-[5rem] text-center">
        ORGANIZERS
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
              <a href={organizer.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>
                {organizer.name}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile view with slider */}
      <div className="md:hidden">
        <Slider
          dots
          infinite
          speed={1500}
          slidesToShow={3}
          slidesToScroll={1}
          autoplay
          autoplaySpeed={1000}
          arrows={false}
          swipeToSlide
          customPaging={(i) => (
            <div className={`custom-dot ${i === 0 ? 'active' : ''}`}></div>
          )}
          appendDots={(dots) => (
            <div style={{ position: 'relative', marginTop: '20px' }}>
              <ul style={{ display: 'flex', justifyContent: 'center', padding: '0px', gap: '1px' }}> {dots} </ul>
            </div>
          )}
        >
          {organizers.map((organizer) => (
            <div
              key={organizer.id}
              className="flex-shrink px-2 mx-auto w-32 h-52 bg-transparent rounded-[100px] flex justify-center relative slider-card"
            >
              <img src={organizer.image} alt={organizer.name} className="rounded-[100px] w-full h-full object-cover" />
              <div style={{
                position: 'absolute',
                bottom: '12px',
                left: '50%',
                transform: 'translateX(-50%)',
                textAlign: 'center',
                color: 'grey',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                padding: '5px 12px',
                borderRadius: '8px',
                width: 'fit-content',
                maxWidth: '80%',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
              }}>
                <a href={organizer.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none', fontSize: '12px' }}>
                  {organizer.name} 
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Custom Dot and Slide Styling */}
      <style>{`
        /* Gray color for inactive dots */
        .slick-dots li button:before {
          font-size: 10px;
          color: grey; 
        }
        /* Pink color for active dot */
        .slick-dots li.slick-active button:before {
          color: pink;
        }
        .custom-dot {
          width: 8px;
          height: 8px;
          background-color: grey;
          border-radius: 50%;
        }
        .slick-active .custom-dot {
          background-color: #DA39AE;
        }

        /* Pink border for active card */
        .slick-center .slider-card {
          border: 2px solid pink;
          transform: scale(1.1); 
          transition: transform 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default LeadOrganizers;
