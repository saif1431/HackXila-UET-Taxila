import React from 'react';
import logo from '/logo1.jpg';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <div className="">
      <div className="footer-main grid grid-cols-1 md:grid-cols-4 gap-8 p-8 max-w-7xl mx-auto">
        {/* Column 1 - Logo and Contact */}
        <div className="col col-1 font-garamond text-daBrown">
          <img 
            alt="nascon logo" 
            src={logo} 
            width="140" 
            height="145" 
            className="mb-4"
            style={{ color: 'transparent' }}
          />
          <h4 className="text-2xl mb-3 text-daBrown">Reach Out</h4>
          <p className="mb-1">We'd be glad to hear from you!</p>
          <p className="mb-1">info@nascon.com.pk</p>
          <p>051-111-128-128</p>
        </div>

        {/* Column 2 - Navigation */}
        <div className="col col-2 font-garamond">
          <h4 className="text-2xl text-daBrown mb-3">Navigate</h4>
          <a href="/" className="block mb-2 hover:text-poorple transition-colors text-daBrown">Home</a>
          <a href="/events" className="block mb-2 hover:text-poorple transition-colors text-daBrown">Events</a>
          <a href="/sponsors" className="block mb-2 hover:text-poorple transition-colors text-daBrown">Sponsors</a>
          <a href="/amb-prt-tree" className="block mb-2 hover:text-poorple transition-colors text-daBrown">Ambassadors and Partners</a>
        </div>

        {/* Column 3 - Useful Links */}
        <div className="col col-3 font-garamond">
          <h4 className="text-2xl text-daBrown mb-3">Useful Links</h4>
          <a href="https://nu.edu.pk" target="_blank" rel="noopener noreferrer" className="block mb-2 hover:text-poorple text-daBrown">FAST-NUCES Website</a>
          <a href="https://goto.now/MRnDC" target="_blank" rel="noopener noreferrer" className="block mb-2 hover:text-poorple text-daBrown">Information Booklet</a>
          <a href="https://docs.google.com/forms/d/1T0Y4bd208SJMlXQuDciC0ul3Ty4BT3sAxhBSHM_VZV4/edit" target="_blank" rel="noopener noreferrer" className="block mb-2 hover:text-poorple text-daBrown">Become an Ambassador</a>
          <a href="https://docs.google.com/forms/d/1UdbjB9jllCWgcDSQyP8-0dNkfI6ePAoA_flW_4fnDKQ/edit" target="_blank" rel="noopener noreferrer" className="block mb-2 hover:text-poorple text-daBrown">Become a Community Partner</a>
        </div>

        {/* Column 4 - Sponsor */}
        <div className="col col-4 font-garamond">
          <h4 className="text-2xl text-daBrown mb-3">Become a Sponsor</h4>
          <p className="mb-4">To become an official sponsor for NaSCon'25, please give us some information and we will reach you out</p>
          <a target="_blank" href="https://docs.google.com/forms/d/1YwhIG5XssT5W8IP6F3s6BNoePf-z-0i94h075dljhlk/edit?ts=67a3a535" rel="noopener noreferrer">
            <div className="relative inline-block -mt-1">
              <div className="absolute inset-0 border-2 border-daBrown translate-x-1 translate-y-1"></div>
              <button 
                type="button" 
                className="w-full relative px-6 py-2 text-sm font-garamond text-white transition-all duration-300 border-2 border-daBrown group hover:translate-x-1 hover:translate-y-1 bg-gradient-to-tr from-poorple to-daBrown"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">Become a Sponsor</span>
                <span className="absolute inset-0 w-full h-full bg-poorple -z-0 scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
              </button>
            </div>
          </a>
        </div>
      </div>

      {/* Copyright and Social Media */}
      <div className="copyright bg-gradient-to-r from-poorple to-daBrown font-garamond py-4 px-8">
        <div className="w-full mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="copyright-text text-white mb-4 md:mb-0">© NaSCon 2025. All Rights Reserved.</p>
          
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