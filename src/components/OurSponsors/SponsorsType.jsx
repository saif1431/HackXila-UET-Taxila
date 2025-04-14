import React from 'react';

function SponsorsType() {
  // Dummy logo URLs
  const dummyLogos = {
    platinum: [
      "https://via.placeholder.com/200x80?text=Platinum+1",
      "https://via.placeholder.com/200x80?text=Platinum+2"
    ],
    gold: [
      "https://via.placeholder.com/200x80?text=Gold+1",
      "https://via.placeholder.com/200x80?text=Gold+2",
      "https://via.placeholder.com/200x80?text=Gold+3"
    ],
    silver: [
      "https://via.placeholder.com/200x80?text=Silver+1",
      "https://via.placeholder.com/200x80?text=Silver+2",
      "https://via.placeholder.com/200x80?text=Silver+3"
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
        {/* Platinum Sponsors - Fixed border */}
        <div className="mb-16 border-2 border-[#333] py-16">
          <h4 className="text-3xl font-bold text-yellow-600 mb-8 text-center">Platinum Sponsors</h4>
          <div className="flex flex-wrap justify-center gap-8">
            {dummyLogos.platinum.map((logo, index) => (
              <img 
                key={`platinum-${index}`}
                src={logo}
                alt={`Platinum sponsor ${index + 1}`}
                className="h-20 object-contain"
              />
            ))}
          </div>
        </div>

        {/* Other sponsor tiers remain the same */}
        {/* Gold Sponsors */}
        <div className="mb-16 border-2 border-amber-500 py-16">
          <h4 className="text-3xl font-bold text-yellow-500 mb-8 text-center">Gold Sponsors</h4>
          <div className="flex flex-wrap justify-center gap-8">
            {dummyLogos.gold.map((logo, index) => (
              <img 
                key={`gold-${index}`}
                src={logo}
                alt={`Gold sponsor ${index + 1}`}
                className="h-20 object-contain"
              />
            ))}
          </div>
        </div>

        {/* Silver Sponsors */}
        <div className="mb-16 border-2 border-gray-400 py-16">
          <h4 className="text-3xl font-bold text-gray-500 mb-8 text-center">Silver Sponsors</h4>
          <div className="flex flex-wrap justify-center gap-8">
            {dummyLogos.silver.map((logo, index) => (
              <img 
                key={`silver-${index}`}
                src={logo}
                alt={`Silver sponsor ${index + 1}`}
                className="h-20 object-contain"
              />
            ))}
          </div>
        </div>

        {/* Bronze Sponsors */}
        <div className="mb-16 border-2 border-amber-700 py-16">
          <h4 className="text-3xl font-bold text-amber-700 mb-8 text-center">Bronze Sponsors</h4>
          <div className="flex flex-wrap justify-center gap-8">
            {dummyLogos.bronze.map((logo, index) => (
              <img 
                key={`bronze-${index}`}
                src={logo}
                alt={`Bronze sponsor ${index + 1}`}
                className="h-20 object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SponsorsType;