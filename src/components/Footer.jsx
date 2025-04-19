import React from 'react';
import logo from '/logo1.jpg';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
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
          <p className="ont-poppins font-medium mb-1">info@nascon.com.pk</p>
          <p>051-111-128-128</p>
        </div>

        {/* Column 2 - Navigation */}
        <div className="col col-2 font-poppins">
          <h4 className="font-Zumme text-2xl text-daBrown mb-3 ">Navigate</h4>
          <a href="/" className="font-poppins block mb-2 hover:text-poorple transition-colors text-daBrown">Home</a>
          <a href="/events" className="font-poppins block mb-2 hover:text-poorple transition-colors text-daBrown">Events</a>
          <a href="/sponsors" className="font-poppins block mb-2 hover:text-poorple transition-colors text-daBrown">Sponsors</a>
          <a href="/amb-prt-tree" className="font-poppins block mb-2 hover:text-poorple transition-colors text-daBrown">Ambassadors and Partners</a>
        </div>

        {/* Column 3 - Useful Links */}
        <div className="col col-3 ">
          <h4 className="font-Zumme text-2xl text-daBrown mb-3 ">Useful Links</h4>
          <a href="https://nu.edu.pk" target="_blank" rel="noopener noreferrer" className="font-poppins block mb-2 hover:text-poorple text-daBrown">FAST-NUCES Website</a>
          <a href="https://goto.now/MRnDC" target="_blank" rel="noopener noreferrer" className="font-poppins block mb-2 hover:text-poorple text-daBrown">Information Booklet</a>
          <a href="https://docs.google.com/forms/d/1T0Y4bd208SJMlXQuDciC0ul3Ty4BT3sAxhBSHM_VZV4/edit" target="_blank" rel="noopener noreferrer" className="font-poppins block mb-2 hover:text-poorple text-daBrown">Become an Ambassador</a>
          <a href="https://docs.google.com/forms/d/1UdbjB9jllCWgcDSQyP8-0dNkfI6ePAoA_flW_4fnDKQ/edit" target="_blank" rel="noopener noreferrer" className="font-poppins block mb-2 hover:text-poorple text-daBrown">Become a Community Partner</a>
        </div>

        {/* Column 4 - Sponsor */}
        <div className="col col-4 font-poppins">
          <h4 className="font-Zumme text-2xl text-daBrown mb-3">Become a Sponsor</h4>
          <p className="font-poppins mb-4">To become an official sponsor for NaSCon'25, please give us some information and we will reach you out</p>
        <Button marginTop='mt-0'/>
        </div>
      </div>

      {/* Copyright and Social Media */}
      <div className="h-[50px] copyright bg-gradient-to-r from-poorple to-daBrown font-poppins py-4 px-8 flex items-center justify-center">
        <div className="w-full mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="font-poppins font-semibold copyright-text text-white  md:mb-0">© HackXila 2025. All Rights Reserved.</p>
          
          <div className="socials flex gap-6">
            <a href="https://www.facebook.com/fast.nascon/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-daBrown transition-colors">
              <FaFacebook size={20} />
            </a>
            <a href="https://www.instagram.com/nascon_fast/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-daBrown transition-colors">
              <FaInstagram size={20} />
            </a>
            <a href="https://www.linkedin.com/company/nascon-nu/?originalSubdomain=pk" target="_blank" rel="noopener noreferrer" className="text-white hover:text-daBrown transition-colors">
              <FaLinkedin size={20} />
            </a>
            <a href="https://www.youtube.com/@nascon5634" target="_blank" rel="noopener noreferrer" className="text-white hover:text-daBrown transition-colors">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;