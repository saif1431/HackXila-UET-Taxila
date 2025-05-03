import React from 'react';

function SponsorsType() {
  // Dummy logo URLs
  const dummyLogos = {
    platinum: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnMyw_95a9m4z5c-4D3bcehHg2GHBrVCU8WQ&s",
      "/PartnersLogos/UETTaxila.png",
      "/PartnersLogos/comptech.png",
      "/PartnersLogos/Softdesk.png",
      "/PartnersLogos/step.png",
    ],
    gold: [
      "/PartnersLogos/GDC.png",
      "/PartnersLogos/CSS.png",
      "/PartnersLogos/logo2.png"
    ],
    silver: [
      "/PartnersLogos/acmcui.png",
      "/PartnersLogos/comsats.png",
      "/PartnersLogos/debating.jpg",
      "/PartnersLogos/hirobotec.png",
    ],
    bronze: [
      "https://via.placeholder.com/200x80?text=Bronze+1",
      "https://via.placeholder.com/200x80?text=Bronze+2",
      "https://via.placeholder.com/200x80?text=Bronze+3",
      "https://via.placeholder.com/200x80?text=Bronze+4"
    ]
  };

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Platinum Sponsors */}
        <div className="mb-16 border-2 border-[#333] py-8 sm:py-12 rounded-lg">
          <h4 className="text-2xl sm:text-3xl font-Zumme font-extrabold text-gray-500 mb-6 sm:mb-8 text-center">UET Societies</h4>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 md:gap-12 px-4">
            {dummyLogos.platinum.map((logo, index) => (
              <div key={`platinum-${index}`} className="flex-shrink-0 p-2">
                <img 
                  src={logo}
                  alt={`Platinum sponsor ${index + 1}`}
                  className="h-16 sm:h-20 md:h-24 object-contain max-w-[120px] sm:max-w-[150px]"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Gold Sponsors */}
        <div className="mb-16 border-2 border-amber-500 py-8 sm:py-12 rounded-lg">
          <h4 className="text-2xl sm:text-3xl font-Zumme font-extrabold text-gray-500 mb-6 sm:mb-8 text-center">Far-off Societies</h4>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 md:gap-12 px-4">
            {dummyLogos.gold.map((logo, index) => (
              <div key={`gold-${index}`} className="flex-shrink-0 p-2">
                <img 
                  src={logo}
                  alt={`Gold sponsor ${index + 1}`}
                  className="h-14 sm:h-18 md:h-20 object-contain max-w-[120px] sm:max-w-[140px]"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Silver Sponsors */}
        <div className="mb-16 border-2 border-gray-400 py-8 sm:py-12 rounded-lg">
          <h4 className="text-2xl sm:text-3xl font-Zumme font-extrabold text-gray-500 mb-6 sm:mb-8 text-center">Nearby Societies</h4>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 px-4">
            {dummyLogos.silver.map((logo, index) => (
              <div key={`silver-${index}`} className="flex-shrink-0 p-2">
                <img 
                  src={logo}
                  alt={`Silver sponsor ${index + 1}`}
                  className="h-12 sm:h-16 md:h-18 object-contain max-w-[100px] sm:max-w-[120px]"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bronze Sponsors (optional) */}
        {/* <div className="mb-16 border-2 border-amber-700 py-8 sm:py-12 rounded-lg">
          <h4 className="text-2xl sm:text-3xl font-Zumme font-extrabold text-gray-500 mb-6 sm:mb-8 text-center">Bronze Sponsors</h4>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 px-4">
            {dummyLogos.bronze.map((logo, index) => (
              <div key={`bronze-${index}`} className="flex-shrink-0 p-2">
                <img 
                  src={logo}
                  alt={`Bronze sponsor ${index + 1}`}
                  className="h-10 sm:h-12 object-contain max-w-[80px] sm:max-w-[100px]"
                />
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default SponsorsType;