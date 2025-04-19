import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from './Button'

function HeroText() {
  return (
    <div className='mt-12'>
      <h2 class=" text-4xl sm:text-5xl md:text-7xl items-center justify-center font-Zumme text-daBrown text-center mt-6 font-semibold">HackXila Where Ideas <br /> Take Flight
</h2>
      <p class="max-w-4xl mx-auto text-sm sm:text-xl md:text-xl font-poppins  font-medium text-center mt-4">HackXila is a dynamic one-day ideathon and hackathon that challenges participants to solve real-world problems through innovation. Tech enthusiasts, developers, and creative thinkers collaborate to build solutions and prototypes under time constraints. The event features exciting competitions including idea hacking, quizzes, AI prompt engineering, and speed typing – all designed to spark creativity, teamwork, and technical growth.</p>
<Button/>
    </div>
  )
}

export default HeroText
