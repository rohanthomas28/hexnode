import { useState, useEffect } from 'react';
import './App.css';
import KioskTabs from './components/KioskTabs';
import KioskFeatures from './components/KioskFeatures';
import Testimonial from './components/Testimonial';
import Platforms from './components/Platforms';
import Footer from './components/Footer';

import bannerImg from "./assets/hexnode-kiosk.webp"
import forrester from "./assets/forrester.webp"
import gartner from "./assets/gartner.webp"
import idc from "./assets/idc.webp"
import { Menu, X  } from "lucide-react";

function App() {
  const [showStickyHeader, setShowStickyHeader] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navBg, setNavBg] = useState("bg-transparent");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
  
      // Set nav background based on scroll
      if (currentScrollY > 10) {
        setNavBg("bg-white text-black shadow-md");
      } else {
        setNavBg("bg-transparent text-white");
      }
  
      // Optional: preserve your sticky header logic
      const ctaOffset = document.getElementById("cta-section")?.offsetTop || 300;
      if (currentScrollY > ctaOffset) {
        setShowStickyHeader(true);
      } else {
        setShowStickyHeader(false);
      }
  
      // Track scroll direction if you're using it
      setScrollDirection(currentScrollY > lastScrollY ? "down" : "up");
      setLastScrollY(currentScrollY);
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [menuOpen]);

  return (
    <div className="bg-[#0D0F18] min-h-screen flex flex-col items-center text-white">
      {/* Navbar */}
      <nav
      className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center py-4 px-6 md:px-16 transition-transform duration-300 ease-in-out ${
        showStickyHeader && scrollDirection === "down" ? "translate-y-[-100%] md:translate-y-0" : "translate-y-0"
      } ${navBg}`}
        
      >
        {/* Logo */}
        <h1 className="text-2xl font-bold">
          hexnode
        </h1>

       {/* Hamburger menu for mobile */}
       <div className="md:hidden">
          {menuOpen ? (
            <X
              className={`w-7 h-7 cursor-pointer ${
                navBg.includes("text-black") ? "text-black" : "text-white"
              }`}
              onClick={() => setMenuOpen(false)}
            />
          ) : (
            <Menu
              className={`w-7 h-7 transition-colors duration-300 ${navBg}`}
              onMouseEnter={() => setNavBg("bg-white text-black shadow-md")}
              onMouseLeave={() =>
                setNavBg(
                  window.scrollY > 50
                    ? "bg-white text-black shadow-md"
                    : "bg-transparent text-white"
                )
              }
              onClick={() => setMenuOpen(true)}
            />
          )}
        </div>

        {/* Button only visible on md and up */}
        <button className="hidden md:block bg-red-500 text-white px-6 py-2 rounded-md text-sm md:text-base">
          14 DAY FREE TRIAL
        </button>

        {menuOpen && (
          <div className="fixed top-0 left-0 w-full h-[650px] bg-white flex flex-col items-center justify-start pt-20 px-6">
            <X
              className="absolute top-6 right-6 w-7 h-7 text-black cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
            <button className="w-full bg-[#D80032] text-white py-3 rounded-md text-sm font-semibold">
              14 DAY FREE TRIAL
            </button>
            <a href="#" className="mt-6 text-[#0D0F18] font-medium text-lg">
              Login
            </a>
          </div>
        )}
      </nav>
      
      {/* Hero Section */}
      <div className="flex flex-col-reverse xl:flex-row items-center justify-between max-w-8xl w-full mt-20 xl:mt-28 px-4 xl:px-16 gap-y-10 xl:gap-x-12 "  >
        {/* Text Section */}
        <div className="max-w-lg text-center xl:text-left">
        <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold leading-tight">
          Turn your devices into <br />
          kiosks in a few minutes <br />
          with Hexnode UEM
        </h2>
          {/* Email Form */}
          <div id="cta-section" className="mt-6 flex flex-col sm:flex-row gap-3 items-center sm:mb-8">
            <input
              type="email"
              placeholder="Your Work Email"
              className="px-4 py-3 text-black bg-white rounded-sm w-full sm:w-80 focus:outline-none"
            />
            <button className="bg-red-500 px-4 py-3 rounded-sm text-white font-semibold w-full sm:w-auto">
              GET STARTED NOW!
            </button>
          </div>
        </div>

        {showStickyHeader && (
          <div
            className={`fixed top-0 left-0 w-full z-40 bg-white shadow-md transition-all duration-300 md:hidden ${
              scrollDirection === "up" ? "mt-16" : "mt-0"
            }`}
          >
            <div className="flex justify-between items-center px-4 py-3">
              <span className="text-lg font-semibold text-black"></span>
              <button className="bg-red-500 px-4 py-3 rounded-sm text-white font-semibold">
                14 DAY FREE TRIAL
              </button>
            </div>
          </div>
        )}

        {/* Image Section */}
        <div className="flex justify-center w-full xl:w-[50%]">
          <img
            src={bannerImg}
            alt="Hexnode Kiosk"
            className="w-[100%] h-auto max-w-md sm:max-w-lg xl:max-w-none xl:ml-5"
          />
        </div>
      </div>

      {/* Recognition Section */}
      <div className="bg-[#1A1C2B] w-full grid grid-cols-1 md:grid-cols-3 md:divide-x divide-gray-600 px-4 sm:px-8 py-8 text-center md:text-left mt-8 ">
        {/* IDC */}
        <div className="p-4 flex flex-col items-center md:items-start md:px-16">
          <img src={idc} alt="idc" className="max-w-[200px] sm:max-w-[250px] mb-4" />
          <p className="text-gray-400 text-sm leading-relaxed">
            Hexnode is listed as a leader and a major player in IDC MarketScape UEM Vendors Assessment Reports 2024.
          </p>
          {/* Small divider for mobile */}
          <div className="w-16 border-t border-gray-500 mt-4 md:hidden"></div>
        </div>

        {/* Gartner */}
        <div className="p-4 flex flex-col items-center md:items-start md:px-16">
          <img src={gartner} alt="gartner" className="max-w-[200px] sm:max-w-[250px] mb-4" />
          <p className="text-gray-400 text-sm leading-relaxed">
            Hexnode was recognized in the 2025 Gartner Market Guide for Unified Endpoint Management Tools.
          </p>
          {/* Small divider for mobile */}
          <div className="w-16 border-t border-gray-500 mt-4 md:hidden"></div>
        </div>

        {/* Forrester */}
        <div className="p-4 flex flex-col items-center md:items-start md:px-16">
          <img src={forrester} alt="forrester" className="max-w-[200px] sm:max-w-[250px] mb-4" />
          <p className="text-gray-400 text-sm leading-relaxed">
            Forrester includes Hexnode as a Notable vendor in The Unified Endpoint Management Landscape, Q3 2023.
          </p>
        </div>
      </div>
      <KioskTabs></KioskTabs>
      <KioskFeatures></KioskFeatures>
      <Testimonial></Testimonial>
      <Platforms></Platforms>
      <Footer></Footer>
    </div>
    
  );
}

export default App;
