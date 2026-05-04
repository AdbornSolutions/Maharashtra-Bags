import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/newlogo.png";

const Footer = () => {
  return (
    <footer className="bg-white pt-12 pb-8 z-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-1">
        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 lg:gap-0 text-sm">
          {/* LOGO + ABOUT */}
          <div className="space-y-5 max-w-xs">
            <img
              src={logo}
              alt="Maharashtra Bags Logo"
              className="w-40 h-auto object-contain"
            />

            <p className="text-gray-600 leading-relaxed text-[15px]">
              We create durable, eco-friendly jute, canvas, and non-woven bags
              that combine style and sustainability.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-[17px]">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-600 text-[15px]">
              <li>
                <Link to="/" className="hover:text-black transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-black transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/privacypolicy"
                  className="hover:text-black transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/termscondition"
                  className="hover:text-black transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* PRODUCTS */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-[17px]">
              Our Products
            </h3>

            <ul className="space-y-3 text-gray-600 text-[15px]">
              <li>
                <Link
                  to="/canvas-bags"
                  className="hover:text-black transition-colors"
                >
                  Canvas Bags
                </Link>
              </li>
              <li>
                <Link
                  to="/non-woven-bags"
                  className="hover:text-black transition-colors"
                >
                  Non-Woven Bags
                </Link>
              </li>
              <li>
                <Link
                  to="/jute-bags"
                  className="hover:text-black transition-colors"
                >
                  Jute Bags
                </Link>
              </li>
              <li>
                <Link
                  to="/bopp-bags"
                  className="hover:text-black transition-colors"
                >
                  BOPP Bags
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-[17px]">
              Contact Us
            </h3>

            <ul className="space-y-4 text-gray-600 text-[15px]">
              {/* Address */}
              <li className="flex items-start gap-2">
                <span className="text-xl">📍</span>
                <p className="leading-relaxed">
                  B/H Janta Hall 
                  <br />
                  Chapru Nagar
                  <br />
                  Nagpur 440008. India
                </p>
              </li>

              {/* Email (wraps nicely) */}
              <li className="flex items-start gap-2">
                <span className="text-xl">✉️</span>
                <p className="break-words break-all max-w-[18rem] md:max-w-none">
                  Maharashtrabags222@gmail.com
                </p>
              </li>

              {/* Phone */}
              <li className="flex items-start gap-2">
                <span className="text-xl">📞</span>
                <p>+91-8087773898</p>
                <p>+91 9372207443</p>
              </li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-12 pt-6 border-t border-gray-300 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Maharashtra Bags — All Rights Reserved.
        </div>

        {/* DEVELOPER CREDIT */}
        {/* <p className="pt-3 text-center text-[14px] text-gray-500">
          Developed by{" "}
          <button
            type="button"
            onClick={() =>
              window.open(
                "https://idevifysolutions.com/",
                "_blank",
                "noopener,noreferrer"
              )
            }
            className="font-bold text-gray-700 hover:text-black underline focus:outline-none focus:ring-2 focus:ring-gray-400 rounded"
            aria-label="Visit Idevify Solution Pvt Ltd website"
          >
            Idevify Solution Pvt Ltd
          </button>
        </p> */}
      </div>
    </footer>
  );
};

export default Footer;
