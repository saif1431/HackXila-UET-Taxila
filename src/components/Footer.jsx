import React from 'react';
import logo from '/logo1.jpg';
import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { BsWhatsapp } from "react-icons/bs";

import { NavLink } from 'react-router-dom';
import Button from './HomeComponents/Button';

function Footer() {
  return (
    <div className="">
      <div className="footer-main grid grid-cols-1 md:grid-cols-4 gap-8 p-8 max-w-7xl mx-auto">
        {/* Column 1 - Logo and Contact */}
        <div className="col col-1 font-poppins text-daBrown">
          <img 
            alt="nascon logo" 
            src={logo} 
            width="140" 
            height="145" 
            className="mb-4"
            style={{ color: 'transparent' }}
          />
          <h4 className="text-2xl mb-3 text-daBrown font-Zumme">Reach Out</h4>
          <p className="font-poppins mb-1">We'd be glad to hear from you!</p>
          <p className="ont-poppins font-medium mb-1">hackxila@gmail.com</p>
          <p>+923315710238</p>
        </div>

        {/* Column 2 - Navigation */}
        <div className="col col-2 font-poppins">
          <h4 className="font-Zumme text-2xl text-daBrown mb-3">Navigate</h4>
          <NavLink 
            to="/" 
            className={({ isActive }) => `font-poppins block mb-2 transition-colors text-daBrown ${isActive ? 'text-poorple' : 'hover:text-poorple'}`}
          >
            Home
          </NavLink>
          <NavLink 
            to="/modules" 
            className={({ isActive }) => `font-poppins block mb-2 transition-colors text-daBrown ${isActive ? 'text-poorple' : 'hover:text-poorple'}`}
          >
            Our Modules
          </NavLink>
          <NavLink 
            to="/sponsors" 
            className={({ isActive }) => `font-poppins block mb-2 transition-colors text-daBrown ${isActive ? 'text-poorple' : 'hover:text-poorple'}`}
          >
            Community Partners
          </NavLink>
        </div>

        {/* Column 3 - Useful Links */}
        <div className="col col-3">
          <h4 className="font-Zumme text-2xl text-daBrown mb-3">Useful Links</h4>
          <a href="https://nu.edu.pk" target="_blank" rel="noopener noreferrer" className="font-poppins block mb-2 hover:text-poorple text-daBrown">
            UET Taxila
          </a>
          <a href="https://goto.now/MRnDC" target="_blank" rel="noopener noreferrer" className="font-poppins block mb-2 hover:text-poorple text-daBrown">
            Information Booklet
          </a>
          <NavLink to='/Ambassadors' className="font-poppins block mb-2 hover:text-poorple text-daBrown">
            Ambassador
          </NavLink>
        </div>

        {/* Column 4 - Sponsor */}
      </div>

      {/* Copyright and Social Media */}
      <div className="h-[50px] copyright bg-gradient-to-r from-poorple to-daBrown font-poppins py-4 px-8 flex items-center justify-center">
        <div className="w-full mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="font-poppins font-semibold copyright-text text-white md:mb-0">
            © HackXila 2025. All Rights Reserved.
          </p>
          
          <div className="socials flex gap-6">
            <a href="https://chat.whatsapp.com/CcIoRmezCzA2eGy6y6o3hZ" target="_blank" rel="noopener noreferrer" className="text-white hover:text-daBrown transition-colors">
              <BsWhatsapp size={20} />
            </a>
            <a href="https://www.instagram.com/hackxila/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-daBrown transition-colors">
              <FaInstagram size={20} />
            </a>
            <a href="https://www.linkedin.com/company/hackxila/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-daBrown transition-colors">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;