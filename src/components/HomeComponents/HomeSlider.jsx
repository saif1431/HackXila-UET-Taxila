import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

function HomeSlider() {
  const swiperRef = useRef(null);

  const images = [
    { id: 1, src: '/img1.jpg', alt: 'NASCON event' },
    { id: 2, src: '/img2.jpg', alt: 'NASCON event' },
    { id: 3, src: '/img3.jpg', alt: 'NASCON event' },
    { id: 4, src: '/img17.jpg', alt: 'NASCON event' },
    { id: 5, src: '/img16.jpg', alt: 'NASCON event' },
    { id: 6, src: '/img6.jpg', alt: 'NASCON event' },
    { id: 7, src: '/img7.jpg', alt: 'NASCON event' },
    { id: 8, src: '/img16.jpg', alt: 'NASCON event' },
  ];

  return (
    <div className="mt-5 w-full px-4 mx-auto py-4">
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={'auto'}
        centeredSlides={false}
        loop={true}  // Enable infinite loop
        autoplay={{
          delay: 2500,  // 2.5 seconds delay between transitions
          disableOnInteraction: false,  // Continue autoplay after user interaction
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination-custom',
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        className="w-full"
      >
        {images.map((image) => (
          <SwiperSlide key={image.id} style={{ width: '212.8px'  }}>
            <div className="border border-daBrown p-1 cursor-pointer">
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                width={300}
                height={200}
                className="w-full h-32 object-cover"
                style={{ color: 'transparent' }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      <div className="swiper-pagination-custom swiper-pagination-clickable swiper-pagination-horizontal mt-4 flex justify-center gap-2">
        {images.map((_, index) => (
          <span 
            key={index} 
            className="swiper-pagination-bullet w-2 h-2 rounded-full bg-gray-300 cursor-pointer"
            onClick={() => swiperRef.current?.swiper.slideTo(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default HomeSlider;