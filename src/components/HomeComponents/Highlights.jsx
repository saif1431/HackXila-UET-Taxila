import React from 'react';

function Highlights() {
  // Array of dummy image URLs (placeholder images from picsum.photos)
  const dummyImages = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    src: `https://picsum.photos/500/380?random=${i + 1}`,
    alt: `Event highlight ${i + 1}`
  }));

  return (
    <div className="flex justify-center flex-col gap-2 overflow-hidden pt-20">
      <h3 className="font-black text-xl sm:text-2xl md:text-6xl text-daBrown my-10 text-center">
        Last Year's Highlights
      </h3>
      
      <div className="imagesWrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
        {dummyImages.map((image) => (
          <div key={image.id} className="img overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:scale-105">
            <img 
              src={image.src}
              alt={image.alt}
              loading="lazy"
              width={500}
              height={380}
              className="w-full h-auto object-cover transition-opacity duration-500 hover:opacity-90"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Highlights;