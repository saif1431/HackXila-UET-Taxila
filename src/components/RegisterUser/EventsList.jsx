import React from 'react'
import EventDetail from './EventDetail'

function EventsList() {
  return (
    <div>
      <div class="mb-3 py-3 flex justify-center w-full items-center p-10 bg-gradient-to-r from-poorple to-daBrown"><h3 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold"><span class="relative inline-block text-center"><span class="relative text-center z-10 bg-gradient-to-r from-poorple to-daBrown bg-clip-text text-white">Events</span><span class="sr-only text-center">Events</span></span></h3></div>
      <div class="mt-5 flex flex-col items-center justify-center text-center"><h2 class="mb-3 text-xl sm:text-xl md:text-5xl items-center justify-center font-black text-daBrown">JOIN US BY REGISTERING FOR AN</h2><h2 class="mb-3 text-xl sm:text-3xl md:text-5xl text-blue font-black text-daBrown">EVENT</h2></div>
      <div className='px-6'>
      <EventDetail/>
      </div>
    </div>
  )
}

export default EventsList
