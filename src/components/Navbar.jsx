import React from 'react'
// import Image from 'next/image' // If using Next.js
import petal from '/petal.png'
import logo from '/logo1.jpg'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav className="flex py-5 z-40 w-full h-auto items-center justify-center data-[menu-open=true]:border-none fixed top-0 left-0 backdrop-blur-lg data-[menu-open=true]:backdrop-blur-xl backdrop-saturate-150 bg-background/70" style={{ "--navbar-height": "3rem" }}>
        <header className="z-40 flex px-6 gap-4 w-full flex-row relative flex-nowrap items-center justify-between h-[var(--navbar-height)] max-w-[1024px]">
          <ul className="flex gap-4 h-full flex-row flex-nowrap  text-white items-center data-[justify=start]:justify-start data-[justify=start]:flex-grow data-[justify=start]:basis-0 data-[justify=center]:justify-center data-[justify=end]:justify-end data-[justify=end]:flex-grow data-[justify=end]:basis-0" data-justify="start">
            <div className="flex basis-0 flex-row flex-grow flex-nowrap justify-start bg-transparent items-center no-underline text-medium whitespace-nowrap box-border">
              <a className="text-white" href="/">
                {/* Replace with your Image component or img tag */}
                {/* <h1>Logo</h1> */}
                <img 
                className='rounded-full w-20 h-20 flex  items-center justify-center' 
                  alt="LOGO" 
                  loading="lazy" 
                  width="90" 
                  height="90" 
                  decoding="async" 
                  style={{ color: "transparent" }} 
                  src={logo}
                />
              </a>
            </div>
          </ul>
          
          <ul className="gap-4 h-full flex-row flex-nowrap items-center data-[justify=start]:justify-start data-[justify=start]:flex-grow data-[justify=start]:basis-0 data-[justify=center]:justify-center data-[justify=end]:justify-end data-[justify=end]:flex-grow data-[justify=end]:basis-0 hidden sm:flex" data-justify="end">
            <li className="text-medium whitespace-nowrap box-border list-none data-[active=true]:font-semibold">
              <div className="flex flex-col items-center relative">
                <NavLink className="cursor-pointer navbar-link" to='/'>Home</NavLink>
                
                <img 
                  alt="active link indicator" 
                  loading="lazy" 
                  width="15" 
                  height="15" 
                  decoding="async" 
                  className="absolute -bottom-1" 
                  style={{ color: "transparent" }} 
                  src={petal}
                />
              </div>
            </li>
            <li className="text-medium whitespace-nowrap box-border list-none data-[active=true]:font-semibold">
              <div className="flex flex-col items-center relative">
                <a target="_blank" href="https://www.canva.com/design/DAGj7xMTCbI/U2GpWtVI3aNkyP9DvHxGDA/edit?utm_content=DAGj7xMTCbI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" rel="noopener noreferrer">
                  <span className="cursor-pointer navbar-link">Information</span>
                </a>
              </div>
            </li>
            <li className="text-medium whitespace-nowrap box-border list-none data-[active=true]:font-semibold">
              <div className="flex flex-col items-center relative">
                <NavLink className="cursor-pointer navbar-link" to='/sponsors'>Sponsors</NavLink>
                
              </div>
            </li>
            <li className="text-medium whitespace-nowrap box-border list-none data-[active=true]:font-semibold">
              <div className="flex flex-col items-center relative">
                <a href="/amb-prt-tree"><span className="cursor-pointer navbar-link">Ambassadors</span></a>
              </div>
            </li>
            <li className="text-medium whitespace-nowrap box-border list-none data-[active=true]:font-semibold">
              <a href="/events">
                <span className="cursor-pointer navbar-link">
                  <div className="relative inline-block -mt-1">
                    <div className="absolute inset-0 border-2 border-daBrown translate-x-1 translate-y-1"></div>
                 <NavLink to='/registration'>
                 <button 
                      type="button" 
                      className="w-full relative px-6 py-2 text-sm font-garamond text-white transition-all
                      hover:bg-red-400
                      duration-300 border-2 border-daBrown group hover:translate-x-1 hover:translate-y-1 bg-gradient-to-tr from-poorple to-daBrown disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-x-0 disabled:hover:translate-y-0 cursor-pointer"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">Register Now</span>
                      <span className="absolute inset-0 w-full h-full bg-poorple -z-0 scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
                    </button>
                 </NavLink>
                  </div>
                </span>
              </a>
            </li>
          </ul>
          
          <ul className="flex gap-4 h-full flex-row flex-nowrap items-center data-[justify=start]:justify-start data-[justify=start]:flex-grow data-[justify=start]:basis-0 data-[justify=center]:justify-center data-[justify=end]:justify-end data-[justify=end]:flex-grow data-[justify=end]:basis-0 sm:hidden" data-justify="end">
            <button 
              className="group flex items-center justify-center w-6 h-full rounded-small tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 sm:hidden" 
              type="button" 
              aria-label="Open menu" 
              aria-pressed="false"
            >
              <span className="sr-only">open navigation menu</span>
              <span className="w-full h-full pointer-events-none flex flex-col items-center justify-center text-inherit group-data-[pressed=true]:opacity-70 transition-opacity before:content-[''] before:block before:h-px before:w-6 before:bg-current before:transition-transform before:duration-150 before:-translate-y-1 before:rotate-0 group-data-[open=true]:before:translate-y-px group-data-[open=true]:before:rotate-45 after:content-[''] after:block after:h-px after:w-6 after:bg-current after:transition-transform after:duration-150 after:translate-y-1 after:rotate-0 group-data-[open=true]:after:translate-y-0 group-data-[open=true]:after:-rotate-45"></span>
            </button>
          </ul>
        </header>
      </nav>
      <div className="hidden sm:block h-[var(--navbar-height)]"></div>
      <div className="hidden sm:block h-[var(--navbar-height)]"></div>
    </div>
  )
}

export default Navbar