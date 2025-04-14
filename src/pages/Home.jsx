import React from 'react'
import Marque from '../components/HomeComponents/Marque'
import HeroText from '../components/HomeComponents/HeroText'
import HomeSlider from '../components/HomeComponents/HomeSlider'
import EventDate from '../components/HomeComponents/EventDate'
import About from '../components/HomeComponents/About'
import Highlights from '../components/HomeComponents/Highlights'
import TotalEvents from '../components/HomeComponents/TotalEvents'
import Sponsers from '../components/HomeComponents/Sponsers'

function Home() {
  return (
    <div className='mt-22 '>
      <Marque/>
      <HeroText/>
      <HomeSlider/>
      <EventDate/>
      <div class="mt-10 h-[15px] bg-daBrown w-full"></div>
      <About/>
      <div class="mt-10 h-[15px] bg-daBrown w-full"></div>
      <Highlights/>
      <TotalEvents/>
      <Sponsers/>
      <div class="mt-10 h-[15px] bg-daBrown w-full"></div>
    </div>

  )
}

export default Home
