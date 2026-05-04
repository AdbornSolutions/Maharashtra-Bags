import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/newlogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About us", path: "/about" },
    { name: "Canvas Bags", path: "/canvas-bags" },
    { name: "Non-woven Bags", path: "/non-woven-bags" },
    { name: "Jute Bags", path: "/jute-bags" },
    { name: "BOPP Bags", path: "/bopp-bags" },
  ];

  return (
    <>
      {/* TOP OFFER MARQUEE */}
      <div className="marquee bg-orange-600">
        <div className="marquee-inner">
          {Array(4)
            .fill(
              "🎉 Welcome to Maharastra Bags shop — Get Discount upto 25% — Use Code: WELCOME10 🎉"
            )
            .map((text, i) => (
              <span key={i} className="marquee-item">
                {text}
              </span>
            ))}
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="bg-white shadow-md fixed w-full top-[40px] left-0 z-40 transition-all duration-300">
        <div className="mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center h-20">
            {/* LOGO LEFT */}
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="Logo"
                className="h-12 sm:h-14 md:h-16 w-auto object-contain lg:object-fill lg:w-72"
              />
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex w-full items-center justify-center space-x-8 ml-4 lg:space-x-12">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;

                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`font-garamond font-bold relative group text-[#1b1e26] tracking-wide
                      text-sm md:text-base lg:text-lg xl:text-xl
                      transition-colors duration-200
                    `}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.name}

                    {/* Hover underline */}
                    <span
                      className="absolute left-0 -bottom-1 h-[2px] bg-red-600 w-0 group-hover:w-full transition-all duration-300"
                      aria-hidden
                    ></span>

                    {/* Active underline */}
                    {isActive && (
                      <span className="absolute left-0 -bottom-1 h-[2px] bg-red-600 w-full" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* MOBILE MENU BTN */}
            <button
              className="md:hidden text-gray-800"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-md">
            <div className="flex flex-col items-center space-y-4 py-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="text-base sm:text-lg text-gray-800 hover:text-red-600 font-medium"
                >
                  {item.name}
                </Link>
              ))}

              {/* add mobile icons or CTAs here if needed */}
            </div>
          </div>
        )}
      </nav>

      {/* MARQUEE CSS */}
      <style>
        {`
          .marquee {
            width: 100%;
            overflow: hidden;
            color: white;
            padding: 8px 0;
            position: fixed;
            top: 0;
            z-index: 50;
          }
          .marquee-inner {
            display: flex;
            width: max-content;
            animation: marqueeAnimation 15s linear infinite;
          }
          .marquee-item {
            margin-right: 50px;
            white-space: nowrap;
          }
          @keyframes marqueeAnimation {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </>
  );
};

export default Navbar;
