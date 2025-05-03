import React from 'react';

function Sponsors() {
  // Array of sponsor logos with consistent sizing
  const sponsors = [
    { id: 1, name: 'UET Taxila', logo: '/PartnersLogos/UETTaxila.png' },
    { id: 2, name: 'Softdesk', logo: '/PartnersLogos/Softdesk.png' },
    { id: 3, name: 'STEP', logo: '/PartnersLogos/step.png' },
    { id: 4, name: 'Debating Society', logo: '/PartnersLogos/debating.jpg' },
    { id: 5, name: 'ACM CUI', logo: '/PartnersLogos/acmcui.png' },
    { id: 6, name: 'Logo', logo: '/PartnersLogos/logo2.png' },
    { id: 7, name: 'COMSATS', logo: '/PartnersLogos/comsats.png' },
    { id: 8, name: 'CSS', logo: '/PartnersLogos/CSS.png' },
    { id: 9, name: 'GDC', logo: '/PartnersLogos/GDC.png' },
    { id: 10, name: 'Hirobotec', logo: '/PartnersLogos/hirobotec.png' },
    { id: 11, name: 'Comptech', logo: '/PartnersLogos/comptech.png' },
    { id: 11, name: 'Ai & RD', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnMyw_95a9m4z5c-4D3bcehHg2GHBrVCU8WQ&s' },
  ];

  // For infinite scrolling effect, duplicate the array once
  const scrollingSponsors = [...sponsors, ...sponsors];

  // Uniform dimensions for all logos
  const logoWidth = 150;
  const logoHeight = 80;

  return (
    <div className="sponsorSliderWrapper mb-0 mt-10 mx-7">
      <h3 className="font-Zumme font-extrabold text-lg sm:text-3xl md:text-5xl text-daBrown text-center">
        WE COULDN'T HAVE DONE IT
      </h3>
      <h3 className="font-Zumme mb-7 font-extrabold text-lg sm:text-3xl md:text-5xl text-daBrown text-center">
        ALONE
      </h3>
      <p className="font-Poppins text-daBrown text-center text-lg mb-10">
        We appreciate our valued sponsors for their support in making Hackxila a success. 
        Their contribution drives innovation, empowers talent, and helps us create an unforgettable experience.
      </p>
      
      <div className="overflow-hidden relative">
        {/* Gradient fade effects on sides */}
        <div className="sliderOutline">
          {/* Single scrolling row with proper sizing */}
          <div className="slider flex items-center py-8 animate-scroll whitespace-nowrap">
            {scrollingSponsors.map((sponsor, index) => (
              <div 
                key={`${sponsor.id}-${index}`}
                className="sponsorLogo inline-flex items-center justify-center mx-8"
                style={{ 
                  width: `${logoWidth}px`, 
                  height: `${logoHeight}px`,
                  minWidth: `${logoWidth}px`
                }}
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  loading="lazy"
                  className="max-w-full max-h-full object-contain p-2"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* CSS for the animation */}
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
          display: inline-block;
        }
        .sliderOutline {
          position: relative;
        }
        .sliderOutline::before, .sliderOutline::after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          width: 100px;
          z-index: 2;
          pointer-events: none;
        }
        .sliderOutline::before {
          left: 0;
          // background: linear-gradient(to right, white, transparent);
        }
        .sliderOutline::after {
          right: 0;
          // background: linear-gradient(to left, white, transparent);
        }
      `}</style>
    </div>
  );
}

export default Sponsors;