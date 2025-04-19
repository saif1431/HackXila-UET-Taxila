import React from 'react'

function TotalEvents() {
  return (
      <div>
      <div class="flex flex-row w-full justify-center relative"><div class="flex flex-col items-center py-20"><h3 class="font-Zumme mb-7 font-extrabold text-xl sm:text-3xl md:text-5xl text-daBrown">WE'VE DONE IT BEFORE</h3><div class="countDiv flex gap-10 justify-center flex-wrap"><div class="countDiv flex items-center gap-10"><div class="flex flex-col items-center"><h3 class="font-Zumme ml-2 count text-daBrown text-5xl font-bold"><span>04</span>+</h3><h4 class="font-Zumme line text-daBrown">Events</h4></div></div><div class="countDiv flex flex-wrap items-center gap-10"><div class="flex flex-col items-center"><h3 class="font-Zumme ml-2 count text-daBrown text-5xl font-bold">100k+</h3><h4 class="font-Zumme line font-extrabold text-daBrown">Raised</h4></div></div><div class="countDiv flex items-center gap-10"><div class="flex flex-col items-center"><h3 class="font-Zumme ml-2 count text-daBrown text-5xl font-bold">50k+</h3><h4 class="font-Zumme line text-daBrown">Prize Money</h4></div></div><div class="countDiv flex items-center gap-10"><div class="flex flex-col items-center"><h3 class="font-Zumme ml-2 count text-daBrown text-5xl font-bold"><span>10</span>+</h3><h4 class="font-Zumme line text-daBrown">Institutes</h4></div></div></div></div></div>

      <div class="flex flex-row items-center justify-center gap-1 sm:gap-3 md:gap-7 w-screen py-4 md:py-12 bg-gradient-to-t from-poorple to-daBrown text-white"><a href="/events?filter=CS Events"><h2 class="font-Zumme font-extrabold text-[10px] text-white sm:text-xl md:text-4xl">Computing</h2></a><span class="text-[10px] sm:text-2xl font-bold">•</span><a href="/events?filter=Business Events"><h2 class="font-Zumme font-bold text-[10px] text-white sm:text-xl md:text-4xl">Business</h2></a><span class="text-[10px] sm:text-2xl font-bold">•</span><a href="/events?filter=Engineering Events"><h2 class="font-bold text-[10px] font-Zumme text-white sm:text-xl md:text-4xl">Engineering</h2></a><a href="/events?filter=Social Events"></a></div>
      </div>
  )
}

export default TotalEvents
