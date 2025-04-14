import React from 'react';
// import Image from 'next/image'; // If using Next.js

function About() {
  return (
    <div className="flex flex-col md:flex-row w-full justify-center items-center gap-10 p-8 md:p-20">
      <div className="flex flex-col w-full md:max-w-3xl">
        <h2 className="font-black text-3xl sm:text-5xl md:text-7xl text-daBrown">ABOUT US</h2>
        <p className="mt-3 text-lg font-garamond">
          NaSCon is an annual tech and business extravaganza organized by FAST NUCES Islamabad. It is one of Pakistan's biggest inter-university competitions attracting participants from all over the country. It started as a small-scale technology-based competition and has now expanded into a national-level convention featuring diverse challenges in tech, business and engineering.
        </p>
        <p className="mt-3 mb-5 text-lg font-garamond">
          Each year, NaSCon expands with new and exciting competitions, encouraging students to push their creative and analytical boundaries. It provides a dynamic platform for participants to showcase their skills, collaborate with like-minded individuals, and experience the thrill of competitive excellence.
        </p>
      </div>
      
      <div className="p-2 border border-daBrown">
        {/* Next.js Image component (recommended) */}
        {/* <Image
          src=""
          alt="Image related to nascon"
          width={600}
          height={400}
          className="object-cover"
          priority={false}
        /> */}
        
        {/* Regular img tag alternative */}
        {/*
        <img 
          src="/new/wrw.jpeg" 
          alt="Image related to nascon" 
          className="w-full h-auto"
          loading="lazy"
        />
        */}
      </div>
    </div>
  );
}

export default About;