import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebookF, 
  FaTwitter, FaInstagram, FaLinkedinIn, FaRegClock,
  FaPaperPlane, FaArrowUp, FaShieldAlt, FaRegCreditCard
} from "react-icons/fa";
import logo from "../assets/images/logo1.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0B2A4A] text-white">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#FDB813] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#FDB813] rounded-full blur-3xl"></div>
      </div>

      {/* Main footer content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pt-20 pb-8">
        
        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="absolute -top-5 right-4 md:right-12 w-12 h-12 bg-[#FDB813] rounded-full flex items-center justify-center text-[#0B2A4A] shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group z-10"
          aria-label="Back to top"
        >
          <FaArrowUp className="group-hover:-translate-y-1 transition-transform" />
        </button>

        {/* Main grid – responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-x-8 lg:gap-y-12 mb-12 text-center lg:text-left">
          
          {/* Column 1: Company info */}
          <div className="space-y-4">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-3">
              <img src={logo} alt="MICRO Logo" className="h-12 w-auto object-contain" />
              <h3 className="text-2xl font-bold">JAY NIRMALA</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              A trusted name in financial services, committed to transparency, security, and member growth since inception.
            </p>
            <div className="flex justify-center lg:justify-start items-center gap-2 text-sm text-gray-300">
              <FaRegClock className="text-[#FDB813] flex-shrink-0" />
              <span>Mon – Sat: 10:00 AM – 5:00 PM</span>
            </div>
            <div className="flex justify-center lg:justify-start items-center gap-2 text-sm text-gray-300">
              <FaShieldAlt className="text-[#FDB813] flex-shrink-0" />
              <span>Regulated by Govt. of India</span>
            </div>
            <p className="text-xs text-gray-400 font-mono mt-2">
              CIN: U85300BR2023NPL061372
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold flex items-center justify-center lg:justify-start gap-2">
              <span className="w-8 h-0.5 bg-[#FDB813]"></span>
              Quick Links
            </h3>
           <ul className="space-y-2 text-sm">
  {["Home", "About Us", "Services", "BoardMembers", "Contact"].map(
    (item) => (
      <li key={item}>
        <Link
          to={`/${item.toLowerCase().replace(/\s+/g, '')}`}
          className="text-gray-300 hover:text-[#FDB813] transition-colors flex items-center justify-center lg:justify-start gap-2 group"
        >
          <span className="w-1 h-1 bg-[#FDB813] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
          {item}
        </Link>
      </li>
    )
  )}
</ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold flex items-center justify-center lg:justify-start gap-2">
              <span className="w-8 h-0.5 bg-[#FDB813]"></span>
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex flex-col lg:flex-row items-center lg:items-start gap-3">
                <FaMapMarkerAlt className="text-[#FDB813] flex-shrink-0" />
                <span className="text-gray-300">
                  No. 362/B, Kamarajar Street,<br />
                  Darbhanga – 605602, Bihar, India
                </span>
              </li>
              <li className="flex items-center justify-center lg:justify-start gap-3">
                <FaPhone className="text-[#FDB813] flex-shrink-0" />
                <a href="tel:+917397782590" className="text-gray-300 hover:text-[#FDB813] transition-colors">
                  +91 73977 82590
                </a>
              </li>
              <li className="flex items-center justify-center lg:justify-start gap-3">
                <FaEnvelope className="text-[#FDB813] flex-shrink-0" />
                <a href="mailto:info@micro.com" className="text-gray-300 hover:text-[#FDB813] transition-colors">
                  info@Jaynirmala.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Social */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold flex items-center justify-center lg:justify-start gap-2">
              <span className="w-8 h-0.5 bg-[#FDB813]"></span>
              Stay Updated
            </h3>
            <p className="text-gray-300 text-sm text-center lg:text-left">
              Subscribe to get financial tips and company updates.
            </p>
            <form onSubmit={handleSubscribe} className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 pr-12 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FDB813] focus:border-transparent transition"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#FDB813] rounded-lg flex items-center justify-center text-[#0B2A4A] hover:bg-white transition-colors"
              >
                <FaPaperPlane size={14} />
              </button>
            </form>
            {subscribed && (
              <p className="text-green-400 text-xs text-center lg:text-left">Thanks for subscribing!</p>
            )}

            {/* Social Icons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-2">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-[#FDB813] hover:text-[#0B2A4A] transition-all duration-300 hover:scale-110"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-4 text-sm text-gray-400 text-center">
          <p>© {currentYear} MICRO. All rights reserved.</p>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <a href="/privacy" className="hover:text-[#FDB813] transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-[#FDB813] transition-colors">Terms of Use</a>
            <a href="/disclaimer" className="hover:text-[#FDB813] transition-colors">Disclaimer</a>
          </div>

          {/* Trust badges */}
          <div className="flex items-center gap-3 justify-center">
            <FaRegCreditCard className="text-gray-500 hover:text-[#FDB813] transition-colors" size={20} />
            <FaShieldAlt className="text-gray-500 hover:text-[#FDB813] transition-colors" size={18} />
          </div>
        </div>

        {/* Additional CIN */}
        <p className="text-center text-xs text-gray-600 mt-6">
          JAY NIRMALA| CIN-U85300BR2023NPL061372
        </p>
      </div>
    </footer>
  );
};

export default Footer;
