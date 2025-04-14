import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

function HomeSlider() {
  const swiperRef = useRef(null);

  const images = [
    { id: 1, src: '/new/p1.jpeg', alt: 'NASCON event' },
    { id: 2, src: '/new/p3.jpeg', alt: 'NASCON event' },
    { id: 3, src: '/new/p6.jpeg', alt: 'NASCON event' },
    { id: 4, src: '/new/p4.jpeg', alt: 'NASCON event' },
    { id: 5, src: '/new/p5.jpeg', alt: 'NASCON event' },
    { id: 6, src: '/new/p7.jpeg', alt: 'NASCON event' },
    { id: 7, src: '/new/p8.jpeg', alt: 'NASCON event' },
    { id: 8, src: '/new/p9.jpeg', alt: 'NASCON event' },
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
          <SwiperSlide key={image.id} style={{ width: '212.8px' }}>
            <div className="border border-daBrown p-1 cursor-pointer">
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                width={300}
                height={200}
                className="w-full h-auto object-cover"
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