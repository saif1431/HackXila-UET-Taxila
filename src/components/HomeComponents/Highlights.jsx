import React from 'react';

function Highlights() {
  // Array of your image URLs
  const galleryImages = [
    { id: 1, src: '/img10.jpg', alt: 'Event 1' },
    { id: 2, src: '/img11.jpg', alt: 'Event 2' },
    { id: 3, src: '/img12.jpg', alt: 'Event 2' },
    { id: 4, src: '/img13.jpg', alt: 'Event 2' },
    { id: 5, src: '/img14.jpg', alt: 'Event 2' },
    { id: 6, src: '/img7.jpg', alt: 'Event 2' },
    { id: 7, src: '/img16.jpg', alt: 'Event 2' },
    { id: 8, src: '/img17.jpg', alt: 'Event 2' },
    { id: 9, src: '/img18.jpg', alt: 'Event 2' },
    { id: 10, src: '/img19.jpg', alt: 'Event 2' },
    { id: 11, src: '/img20.jpg', alt: 'Event 2' },
    { id: 12, src: '/img21.jpg', alt: 'Event 2' },
    { id: 13, src: '/img22.jpg', alt: 'Event 2' },
    { id: 14, src: '/img23.jpg', alt: 'Event 2' },
    { id: 15, src: '/img24.jpg', alt: 'Event 2' },
    { id: 16, src: '/img25.jpg', alt: 'Event 2' },
    { id: 17, src: '/img26.jpg', alt: 'Event 2' },
    { id: 18, src: '/img27.jpg', alt: 'Event 2' },
  ];
  const handleImageError = (e) => {
    console.error('Failed to load image:', e.target.src);
    e.target.style.border = '2px solid red'; // Visual error indicator
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        <h3 className="font-Zumme text-3xl sm:text-4xl md:text-6xl text-daBrown mb-12 text-center">
          Last Year's Highlights
        </h3>
  

        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 mt-12">
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className="break-inside-avoid relative group overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <img 
                src={image.src}
                alt={image.alt}
                loading="lazy"
                onError={handleImageError}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
             
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Highlights;