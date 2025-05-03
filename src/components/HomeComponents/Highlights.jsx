import React from 'react';

function Highlights() {
  // Array of your image URLs
  const galleryImages = [
    { id: 1, src: '/team/teamImage4.png', alt: 'Event 1' },
    { id: 2, src: '/team/teamImage17.png', alt: 'Event 2' },
    { id: 3, src: '/team/teamImage19.png', alt: 'Event 2' },
    { id: 4, src: '/team/teamImage6.png', alt: 'Event 2' },
    { id: 5, src: '/team/teamImage7.png', alt: 'Event 2' },
    { id: 6, src: '/team/teamImage10.png', alt: 'Event 2' },
    { id: 7, src: '/team/teamImage1.png', alt: 'Event 2' },
    { id: 8, src: '/team/teamImage16.png', alt: 'Event 2' },
    { id: 9, src: '/team/teamImage14.png', alt: 'Event 2' },
    { id: 10, src: '/team/teamImage11.png', alt: 'Event 2' },
    { id: 11, src: '/team/teamImage9.png', alt: 'Event 2' },
    { id: 12, src: '/team/teamImage12.png', alt: 'Event 2' },
    { id: 13, src: '/team/teamImage2.png', alt: 'Event 2' },
    { id: 14, src: '/team/teamImage15.png', alt: 'Event 2' },
    { id: 15, src: '/team/teamImage13.png', alt: 'Event 2' },
    { id: 16, src: '/team/teamImage22.png', alt: 'Event 2' },
    { id: 17, src: '/team/teamImage5.png', alt: 'Event 2' },
    { id: 18, src: '/team/teamImage8.png', alt: 'Event 2' },
    { id: 19, src: '/team/teamImage3.png', alt: 'Event 2' },
    { id: 20, src: '/team/teamImage20.png', alt: 'Event 2' },
    { id: 21, src: '/team/teamImage18.png', alt: 'Event 2' },
    { id: 22, src: '/team/teamImage21.png', alt: 'Event 2' },
  ];
  const handleImageError = (e) => {
    console.error('Failed to load image:', e.target.src);
    e.target.style.border = '2px solid red'; // Visual error indicator
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        <h3 className="font-Zumme text-3xl sm:text-4xl md:text-6xl text-daBrown mb-12 text-center">
         Our Team
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
                className="w-full overflow-hidden h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
             
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Highlights;