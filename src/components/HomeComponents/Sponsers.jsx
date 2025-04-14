import React from 'react';

function Sponsers() {
  // Array of dummy sponsor logos with consistent sizing
  const dummySponsors = [
    { id: 1, name: 'Sponsor 1', logo: 'https://logos-world.net/wp-content/uploads/2020/12/Lays-Logo.png', width: 120, height: 60 },
    { id: 2, name: 'Sponsor 2', logo: 'https://logos-world.net/wp-content/uploads/2020/11/Starbucks-Logo.png', width: 120, height: 60 },
    { id: 3, name: 'Sponsor 3', logo: 'https://logos-world.net/wp-content/uploads/2020/04/Apple-Logo.png', width: 60, height: 60 },
    { id: 4, name: 'Sponsor 4', logo: 'https://logos-world.net/wp-content/uploads/2020/11/Dell-Logo.png', width: 120, height: 60 },
    { id: 5, name: 'Sponsor 5', logo: 'https://logos-world.net/wp-content/uploads/2020/07/Pepsi-Logo.png', width: 60, height: 60 },
    { id: 6, name: 'Sponsor 6', logo: 'https://logos-world.net/wp-content/uploads/2020/04/Microsoft-Logo.png', width: 180, height: 60 },
    { id: 7, name: 'Sponsor 7', logo: 'https://logos-world.net/wp-content/uploads/2020/11/Coca-Cola-Logo.png', width: 120, height: 60 },
    { id: 8, name: 'Sponsor 8', logo: 'https://logos-world.net/wp-content/uploads/2020/04/Samsung-Logo.png', width: 180, height: 60 },
    // Duplicate the array to create seamless looping
    ...Array.from({ length: 8 }, (_, i) => ({
      id: i + 9,
      name: `Sponsor ${i + 1}`,
      logo: [
        'https://logos-world.net/wp-content/uploads/2020/12/Lays-Logo.png',
        'https://logos-world.net/wp-content/uploads/2020/11/Starbucks-Logo.png',
        'https://logos-world.net/wp-content/uploads/2020/04/Apple-Logo.png',
        'https://logos-world.net/wp-content/uploads/2020/11/Dell-Logo.png',
        'https://logos-world.net/wp-content/uploads/2020/07/Pepsi-Logo.png',
        'https://logos-world.net/wp-content/uploads/2020/04/Microsoft-Logo.png',
        'https://logos-world.net/wp-content/uploads/2020/11/Coca-Cola-Logo.png',
        'https://logos-world.net/wp-content/uploads/2020/04/Samsung-Logo.png'
      ][i],
      width: [120, 120, 60, 120, 60, 180, 120, 180][i],
      height: 60
    }))
  ];

  return (
    <div className="sponserSliderWrapper mb-0 mt-10 mx-7">
      <h3 className="font-extrabold text-lg sm:text-3xl md:text-5xl text-daBrown text-center">
        WE COULDN'T HAVE DONE IT
      </h3>
      <h3 className="mb-7 font-extrabold text-lg sm:text-3xl md:text-5xl text-daBrown text-center">
        ALONE
      </h3>
      <p className="text-daBrown font-garamond text-center text-lg mb-10">
        We appreciate our valued sponsors for their support in making NaSCon a success. 
        Their contribution drives innovation, empowers talent, and helps us create an unforgettable experience.
      </p>
      
      <div className="sliderOutline overflow-hidden relative">
        {/* Single scrolling row with proper sizing */}
        <div className="slider flex items-center py-8 animate-scroll whitespace-nowrap">
          {dummySponsors.map(sponsor => (
            <div 
              key={sponsor.id} 
              className="sponserLogo inline-flex items-center justify-center mx-8"
              style={{ width: `${sponsor.width}px`, height: `${sponsor.height}px` }}
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                loading="lazy"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* CSS for the animation */}
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
          display: inline-block;
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
          background: linear-gradient(to right, white, transparent);
        }
        .sliderOutline::after {
          right: 0;
          background: linear-gradient(to left, white, transparent);
        }
      `}</style>
    </div>
  );
}

export default Sponsers;