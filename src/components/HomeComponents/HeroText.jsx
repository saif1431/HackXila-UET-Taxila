import React from 'react'

function HeroText() {
  return (
    <div>
      <h2 class=" text-4xl sm:text-5xl md:text-7xl items-center justify-center font-black text-daBrown text-center mt-4">NATIONAL SOLUTIONS CONVENTION</h2>
      <p class="max-w-4xl mx-auto text-sm sm:text-lg md:text-lg font-garamond text-center mt-4">NaSCon is an annual tech and business event by FAST-NUCES Islamabad, one of Pakistan’s largest inter-university competitions.</p>
      <div class="mt-5 flex items-center justify-center mb-20"><a href="/events"><span class="cursor-pointer"><div class=" relative inline-block -mt-1"><div class=" absolute inset-0 border-2 border-daBrown translate-x-1 translate-y-1"></div><button type="button" class="
          w-full relative px-6 py-2
          text-sm
          font-garamond
          text-white
          transition-all
          duration-300
          border-2
          border-daBrown
          group
          hover:translate-x-1
          hover:translate-y-1
          bg-gradient-to-tr from-poorple to-daBrown
          disabled:opacity-70
          disabled:cursor-not-allowed
          disabled:hover:translate-x-0
          disabled:hover:translate-y-0
          cursor-pointer
        "><span class="relative z-10 flex items-center justify-center gap-2">Check out events</span><span class=" absolute inset-0 w-full h-full bg-poorple -z-0 scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 "></span></button></div></span></a></div>
    </div>
  )
}

export default HeroText
