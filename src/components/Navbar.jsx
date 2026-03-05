import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import logo from '../assets/images/logo1.jpg';
import { 
  Clock, Mail, Phone, MapPin, Home, Building2, 
  PiggyBank, HandCoins, ChevronDown, Menu, X,
  PhoneCall, MailOpen, Calendar, Facebook, Twitter, 
  Instagram, Linkedin, ChevronRight
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
 
  const [isDesktopCompanyOpen, setIsDesktopCompanyOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  

  return (
    <>
      {/* ===== TOP BAR ===== */}
      <div className="bg-[#0B2A4A] text-white text-xs md:text-sm hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-2">
            <div className="flex items-center gap-2 text-gray-200">
              <Calendar size={14} className="text-[#FDB813]" />
              <span>Mon - Sat: 10:00 AM - 05:00 PM</span>
              <span className="text-gray-400 mx-2">|</span>
              <span className="text-[#FDB813] font-medium">Sunday Closed</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="mailto:info@njfnidhi.in" className="flex items-center gap-1 text-gray-200 hover:text-[#FDB813] transition-colors">
                <MailOpen size={14} />
                <span>info@njfnidhi.in</span>
              </a>
              <span className="text-gray-400">|</span>
              <a href="tel:+917397782590" className="flex items-center gap-1 text-gray-200 hover:text-[#FDB813] transition-colors font-medium">
                <PhoneCall size={14} />
                <span>+91 73977 82590</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ===== MAIN NAVBAR ===== */}
      <header className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? 'shadow-xl' : 'shadow-md'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-xl overflow-hidden shadow-lg border-2 border-[#0B2A4A]/10">
                <img src={logo} alt="NJF Nidhi Limited" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-[#0B2A4A] leading-tight tracking-tight">
                  JAYNIRMALA
                </span>
                <span className="text-sm font-medium text-[#FDB813] leading-tight -mt-1">
                 MUTUAL BENEFIT NIDHI LIMITED
                </span>
                <span className="text-[10px] text-gray-400 uppercase tracking-wider">
                  Since 2010
                </span>
              </div>
            </a>

            {/* Desktop Navigation - WITH HOVER EFFECTS ONLY */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="/" className="text-gray-600 hover:text-[#0B2A4A] hover:scale-105 transition-all duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FDB813] after:transition-all hover:after:w-full">
                Home
              </a>
              
              {/* Company Dropdown - Desktop */}
              <div className="relative">
                <button 
                  onClick={() => setIsDesktopCompanyOpen(!isDesktopCompanyOpen)}
                  className="flex items-center gap-1 text-gray-600 hover:text-[#0B2A4A] hover:scale-105 transition-all duration-300 font-medium"
                >
                  Company
                  <ChevronDown size={16} className={`transition-transform ${isDesktopCompanyOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isDesktopCompanyOpen && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-200 py-4 px-4 animate-fadeIn z-50">
                    {/* Desktop dropdown content */}
                    <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-100">
                      <div className="w-8 h-8 bg-[#0B2A4A] rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-xs">JAYNIRMALA</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 text-sm">MUTUAL BENEFIT NIDHI LIMITED</h3>
                        <p className="text-[10px] text-gray-500">Nidhi Company</p>
                      </div>
                    </div>

                    <div className="mb-3 text-xs text-gray-600 leading-relaxed">
                      NJF Nidhi Limited is a Nidhi company incorporated under the Companies Act 2013 & 
                      regulated by Ministry of Corporate Affairs, Government of India.
                    </div>

                    <div className="mb-3">
                      <h4 className="font-semibold text-gray-800 text-xs mb-2">Contact Info</h4>
                      <div className="space-y-2">
                        <div className="flex gap-2">
                          <MapPin size={14} className="text-[#FDB813] flex-shrink-0" />
                          <p className="text-xs text-gray-600">No. 362/B, Kamarajar St, Villupuram</p>
                        </div>
                        <div className="flex gap-2">
                          <Mail size={14} className="text-[#FDB813] flex-shrink-0" />
                          <a href="mailto:info@njfnidhi.in" className="text-xs text-[#0B2A4A]">info@njfnidhi.in</a>
                        </div>
                        <div className="flex gap-2">
                          <Phone size={14} className="text-[#FDB813] flex-shrink-0" />
                          <a href="tel:+917397782590" className="text-xs text-[#0B2A4A]">+91-7397782590</a>
                        </div>
                      </div>
                    </div>

                    <div className="mb-2">
                      <h4 className="font-semibold text-gray-800 text-xs mb-2">Social Networks</h4>
                      <div className="flex gap-2">
                        <a href="#" className="w-7 h-7 bg-[#0B2A4A] rounded-full flex items-center justify-center text-white hover:bg-[#FDB813]">
                          <Facebook size={12} />
                        </a>
                        <a href="#" className="w-7 h-7 bg-[#0B2A4A] rounded-full flex items-center justify-center text-white hover:bg-[#FDB813]">
                          <Twitter size={12} />
                        </a>
                        <a href="#" className="w-7 h-7 bg-[#0B2A4A] rounded-full flex items-center justify-center text-white hover:bg-[#FDB813]">
                          <Instagram size={12} />
                        </a>
                        <a href="#" className="w-7 h-7 bg-[#0B2A4A] rounded-full flex items-center justify-center text-white hover:bg-[#FDB813]">
                          <Linkedin size={12} />
                        </a>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-1 pt-2 border-t border-gray-100">
  <Link to="/aboutus" className="flex items-center gap-1 text-xs text-gray-600 hover:text-[#0B2A4A]">
    <ChevronRight size={12} /> About Us
  </Link>
  <Link to="/board" className="flex items-center gap-1 text-xs text-gray-600 hover:text-[#0B2A4A]">
    <ChevronRight size={12} /> Board Members
  </Link>
  <Link to="/mission" className="flex items-center gap-1 text-xs text-gray-600 hover:text-[#0B2A4A]">
    <ChevronRight size={12} /> Mission
  </Link>
  <Link to="/policies" className="flex items-center gap-1 text-xs text-gray-600 hover:text-[#0B2A4A]">
    <ChevronRight size={12} /> Policies
  </Link>
</div>
                  </div>
                )}
              </div>

              <a href="/deposits" className="text-gray-600 hover:text-[#0B2A4A] hover:scale-105 transition-all duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FDB813] after:transition-all hover:after:w-full">Deposits</a>
              <Link to="/Loan" className="text-gray-600 hover:text-[#0B2A4A] hover:scale-105 transition-all duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FDB813] after:transition-all hover:after:w-full">Loan</Link>
              <a href="/gallery" className="text-gray-600 hover:text-[#0B2A4A] hover:scale-105 transition-all duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FDB813] after:transition-all hover:after:w-full">Gallery</a>
              <a href="/Contactus" className="text-gray-600 hover:text-[#0B2A4A] hover:scale-105 transition-all duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FDB813] after:transition-all hover:after:w-full">Contact Us</a>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Link to="/login" className="px-5 py-2.5 border-2 border-[#0B2A4A] text-[#0B2A4A] font-medium rounded-lg hover:bg-[#0B2A4A] hover:text-white hover:scale-105 transition-all duration-300">Login</Link>
              <Link to="/register" className="px-5 py-2.5 bg-[#FDB813] text-[#0B2A4A] font-medium rounded-lg hover:bg-[#0B2A4A] hover:text-white hover:scale-105 transition-all duration-300 shadow-md">Register</Link>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 rounded-lg hover:bg-gray-100">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* ===== MOBILE MENU ===== */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white justify-center">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-2">
                <a href="/" className="px-4 py-3 text-gray-700 hover:bg-[#FDB813]/10 hover:text-[#0B2A4A] rounded-lg">Home</a>
                <a href="/company" className="px-4 py-3 text-gray-700 hover:bg-[#FDB813]/10 hover:text-[#0B2A4A] rounded-lg">Company</a>
                <a href="/deposits" className="px-4 py-3 text-gray-700 hover:bg-[#FDB813]/10 hover:text-[#0B2A4A] rounded-lg">Deposits</a>
                <a href="/loans" className="px-4 py-3 text-gray-700 hover:bg-[#FDB813]/10 hover:text-[#0B2A4A] rounded-lg">Loans</a>
                <a href="/gallery" className="px-4 py-3 text-gray-700 hover:bg-[#FDB813]/10 hover:text-[#0B2A4A] rounded-lg">Gallery</a>
                <a href="/Contactus" className="px-4 py-3 text-gray-700 hover:bg-[#FDB813]/10 hover:text-[#0B2A4A] rounded-lg">Contact Us</a>
              </div>
            </div>
          </div>
        )}
      </header>

      
    </>
  );
};

export default Navbar;