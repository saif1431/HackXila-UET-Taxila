import React, { useState } from 'react';
// import Image from 'next/image' // If using Next.js
import petal from '/petal.png';
import logo from '/logo1.jpg';
import { NavLink } from 'react-router-dom';
import Button from './HomeComponents/Button';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav 
        className="flex py-5 z-40 w-full h-auto items-center justify-center data-[menu-open=true]:border-none fixed top-0 left-0 backdrop-blur-lg data-[menu-open=true]:backdrop-blur-xl backdrop-saturate-150 bg-background/70" 
        style={{ "--navbar-height": "3rem" }}
      >
        <header className="z-40 flex px-4 md:px-6 gap-4 w-full flex-row relative flex-nowrap items-center justify-between h-[var(--navbar-height)] max-w-[1024px]">
          {/* Logo */}
          <div className="flex items-center">
            <a className="text-white" href="/">
              <img 
                className='rounded-full w-20 India families. h-20 flex items-center justify-center' 
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
          
          {/* Desktop Navigation */}
          <ul className="gap-4 h-full flex-row flex-nowrap items-center data-[justify=start]:justify-start data-[justify=start]:flex-grow data-[justify=start]:basis-0 data-[justify=center]:justify-center data-[justify=end]:justify-end data-[justify=end]:flex-grow data-[justify=end]:basis-0 hidden sm:flex font-poppins font-semibold" data-justify="end">
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
                <NavLink className="cursor-pointer navbar-link" to='/modules'>Our Modules</NavLink>
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
              <Button marginTop = 'mt-0'/>
                </span>
              </a>
            </li>
          </ul>
          
          {/* Mobile Menu Button */}
          <div className="flex gap-4 h-full flex-row flex-nowrap items-center sm:hidden" data-justify="end">
            <button 
              className="group flex items-center justify-center w-6 h-full rounded-small tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2" 
              type="button" 
              aria-label="Open menu" 
              aria-pressed={isMenuOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">open navigation menu</span>
              <span className={`w-full h-full pointer-events-none flex flex-col items-center justify-center text-inherit group-data-[pressed=true]:opacity-70 transition-opacity before:content-[''] before:block before:h-px before:w-6 before:bg-current before:transition-transform before:duration-150 before:-translate-y-1 before:rotate-0 after:content-[''] after:block after:h-px after:w-6 after:bg-current after:transition-transform after:duration-150 after:translate-y-1 after:rotate-0 ${isMenuOpen ? 'before:translate-y-px before:rotate-45 after:translate-y-0 after:-rotate-45' : ''}`}></span>
            </button>
          </div>
        </header>
      </nav>
      
      {/* Mobile Menu */}
      <div className={`fixed top-[var(--navbar-height)] left-0 w-full bg-background/95 backdrop-blur-lg  z-30 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'} sm:hidden`}>
        <div className="flex flex-col items-center py-4 space-y-4">
          <NavLink 
            className="cursor-pointer navbar-link text-lg py-2 text-black font-bold" 
            to='/' 
          >
            Home
          </NavLink>
          <NavLink 
            className="cursor-pointer navbar-link text-lg py-2 text-black font-bold" 
            to='/modules' 
          >
            Our Modules
          </NavLink>
          <a 
            className="cursor-pointer navbar-link text-lg py-2 text-black font-bold" 
            target="_blank" 
            href="https://www.canva.com/design/DAGj7xMTCbI/U2GpWtVI3aNkyP9DvHxGDA/edit?utm_content=DAGj7xMTCbI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" 
            rel="noopener noreferrer"
            onClick={toggleMenu}
          >
            Information
          </a>
          <NavLink 
            className="cursor-pointer navbar-link text-lg py-2 text-black font-bold" 
            to='/sponsors'
            onClick={toggleMenu}
          >
            Sponsors
          </NavLink>
          <a 
            className="cursor-pointer navbar-link text-lg py-2 text-black font-bold" 
            href="/amb-prt-tree"
            onClick={toggleMenu}
          >
            Ambassadors
          </a>
      <Button/>
        </div>
      </div>
      
      {/* Spacer to account for fixed navbar */}
      <div className="h-[var(--navbar-height)]"></div>
    </div>
  );
}

export default Navbar;