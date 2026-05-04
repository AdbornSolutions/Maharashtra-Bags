import React, { useState } from "react";

import banner from "../../assets/Crousel/banner.jpg";
import product1 from "../../assets/Dummy/Newcanvas/gopi.jpg";
import product2 from "../../assets/Dummy/Newcanvas/badshah.jpg";
import product3 from "../../assets/Dummy/Newcanvas/mrwhite.jpg";
// import product4 from "../../assets/Dummy/Newcanvas/wazir.jpg";
import product5 from "../../assets/Dummy/Newcanvas/chikkigold.jpg";
import product6 from "../../assets/Dummy/CompressedCanvas/canvassix.jpg";
import product7 from "../../assets/Dummy/Newcanvas/ravimagic.jpg";
import product8 from "../../assets/Dummy/CompressedCanvas/canvaseight.jpg";
import product9 from "../../assets/Dummy/CompressedCanvas/canvasnine.jpg";
import product10 from "../../assets/Dummy/Newcanvas/forestfragrance.jpg";
import product11 from "../../assets/Dummy/Newcanvas/hingmasale.jpg";
import product12 from "../../assets/Dummy/Newcanvas/manoharsugandha.jpg";
import product13 from "../../assets/Dummy/Newcanvas/mokshagarbatti.jpg";
import product14 from "../../assets/Dummy/Newcanvas/rrelaichi.jpg";
import product15 from "../../assets/Dummy/Newcanvas/shreejai.jpg";
import product16 from "../../assets/Dummy/Newcanvas/signaturepan.jpg";
import product17 from "../../assets/Dummy/Newcanvas/silver.jpg";
import product18 from "../../assets/Dummy/Newcanvas/tomatoketchup.jpg";
import product19 from "../../assets/Dummy/Newcanvas/ujalatorch.jpg";
import product20 from "../../assets/Dummy/Newcanvas/vimal.jpg";
import product21 from "../../assets/Dummy/Newcanvas/vithobaone.jpg";
import product22 from "../../assets/Dummy/Newcanvas/vithobatwo.jpg";
import product23 from "../../assets/Dummy/Newcanvas/swad.jpg";
import product24 from "../../assets/Dummy/Newcanvas/pritamchai.jpg";
import product25 from "../../assets/Dummy/Newcanvas/vandemataram.jpg";
import product26 from "../../assets/Dummy/Newcanvas/gopitwo.jpg";
import product27 from "../../assets/Dummy/Newcanvas/suryamasala.jpg";
import product28 from "../../assets/Dummy/Newcanvas/ravimagictwo.jpg";


import whyWe from "../../assets/Home/Why.png";

export default function CottonBag() {
  const [selectedImage, setSelectedImage] = useState(null);

  const products = [
    { id: 1, src: product1, alt: "Canvas Bag - 1" },
    { id: 2, src: product2, alt: "Canvas Bag - 2" },
    { id: 3, src: product3, alt: "Canvas Bag - 3" },
    // { id: 4, src: product4, alt: "Canvas Bag - 4" },
    { id: 5, src: product5, alt: "Canvas Bag - 5" },
    { id: 6, src: product6, alt: "Canvas Bag - 6" },
    { id: 7, src: product7, alt: "Canvas Bag - 7" },
    { id: 8, src: product8, alt: "Canvas Bag - 8" },
    { id: 9, src: product9, alt: "Canvas Bag - 9" },
    { id: 10, src: product10, alt: "Canvas Bag - 10" },
    { id: 11, src: product11, alt: "Canvas Bag - 11" },
    { id: 12, src: product12, alt: "Canvas Bag - 12" },
    { id: 13, src: product13, alt: "Canvas Bag - 13" },
    { id: 14, src: product14, alt: "Canvas Bag - 14" },
    { id: 15, src: product15, alt: "Canvas Bag - 15" },
    { id: 16, src: product16, alt: "Canvas Bag - 16" },
    { id: 17, src: product17, alt: "Canvas Bag - 17" },
    { id: 18, src: product18, alt: "Canvas Bag - 18" },
    { id: 19, src: product19, alt: "Canvas Bag - 19" },
    { id: 20, src: product20, alt: "Canvas Bag - 20" },
    { id: 21, src: product21, alt: "Canvas Bag - 21" },
    { id: 22, src: product22, alt: "Canvas Bag - 22" },
    { id: 23, src: product23, alt: "Canvas Bag - 23" },
    { id: 24, src: product24, alt: "Canvas Bag - 24" },
    { id: 25, src: product25, alt: "Canvas Bag - 25" },
    { id: 26, src: product26, alt: "Canvas Bag - 26" },
    { id: 27, src: product27, alt: "Canvas Bag - 27" },
    { id: 28, src: product28, alt: "Canvas Bag - 28" },
  ];

  const sendWhatsAppMessage = (product) => {
    const message = `Hello, I am interested in purchasing:\n\n👜 Product: ${product.name}\n\nPlease share more details.`;
    const url = `https://wa.me/+918087773898?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  const openImageModal = (src, alt) => setSelectedImage({ src, alt });
  const closeImageModal = () => setSelectedImage(null);

  return (
    <div className="bg-[#f3f3f3] ">
      {/* Top Banner */}
      <div className="w-full mb-4 md:mb-12 mt-[80px] sm:mt-[120px] md:mt-[100px]">
        <img
          src={banner}
          alt="banner"
          className="w-full h-full sm:h-[300px] md:h-full object-cover translate-y-10 sm:translate-y-0"
        />
      </div>

      {/* Intro Section */}
      <div className="w-full flex justify-center bg-[#f3f3f3] py-10 px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl">
          <h1 className="font-bold text-center text-xl sm:text-2xl md:text-3xl text-[#284C88]">
            Premium Canvas Bags by Maharashtra Bags – Durable, Eco-Friendly &
            Customizable
          </h1>
          <p className="mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-justify">
            Canvas bags from Maharashtra Bags offer the perfect blend of
            durability, affordability, and contemporary style. Lightweight yet
            strong, they are ideal for daily use, shopping, events, or branding
            while being gentle on the environment due to their reusable design.
            Their smooth texture and neat finish give them a professional look
            that customers appreciate. Highly durable and washable, these bags
            provide long-term value at an economical price. Maharashtra Bags
            ensures every canvas bag reflects practicality and sustainability,
            giving you not just a useful product but a responsible choice that
            supports mindful living.
          </p>
        </div>
      </div>

      <div className="w-full px-6 md:px-12 lg:px-20 py-12 bg-[#284C88] mt-0 rounded-2xl md:mt-12 ">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-light text-center mb-10 font-serif text-white">
          Our Canvas Bags
        </h2>

        {/* Grid Layout (Our Cotton Bags with details + button) */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="overflow-hidden  transition flex flex-col"
            >
              <img
                src={product.src}
                alt={product.alt}
                onClick={() => openImageModal(product.src, product.alt)}
                className="w-full
                            sm:h-56
                            md:h-64
                            lg:h-90
                            object-contain
                            hover:scale-105
                            transition
                            duration-300
                            cursor-pointer"
              />

              {/* ✅ Details + Button */}
              <div className="p-3 sm:p-4 text-center">
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white">
                  {product.alt}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-400 mt-1 ">
                  Material used - Cotton canvas
                </p>
                <button
                  onClick={() => sendWhatsAppMessage({ name: product.alt })}
                  className="mt-2 sm:mt-3 px-3 sm:px-5 py-2 rounded-md bg-orange-600 text-white text-xs sm:text-sm md:text-base font-medium  w-full sm:w-auto"
                >
                  Yes, I am interested
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Cotton Bags */}
      <section className="w-full py-10 sm:py-10 md:py-10 lg:py-0 px-4 sm:px-6 md:px-10 bg-gradient-to-b from-[#EFEFEF] to-[#999999]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-20 mt-10">
          {/* LEFT IMAGE — ONLY SHOW ON LG */}
          <div className="hidden lg:flex lg:w-[50%] justify-end relative">
            <img
              src={whyWe}
              alt="Why choose us"
              className="w-full max-w-[520px] h-auto object-cover drop-shadow-2xl"
            />
          </div>

          {/* RIGHT TEXT SECTION */}
          <div className="w-full lg:w-[50%] flex flex-col justify-center lg:pr-12 lg:mt-10 ">
            <h2 className="text-[25px] sm:text-[30px] md:text-4xl lg:text-[42px] font-bold text-orange-600 leading-tight ">
              WHY CANVAS BAGS FROM{" "}
              <span className="block">MAHARASHTRA BAGS</span>
            </h2>

            <p className="text-gray-700 text-sm sm:text-[12px] md:text-[15px] lg:text-[17px] mt-7 leading-relaxed">
              Canvas bags from Maharashtra Bags are eco-friendly, durable, and
              crafted with high-quality fabric that supports sustainable living.
              They also offer customization designs at affordable prices while
              promoting local artisans.
            </p>

            <ul className="mt-8 space-y-2 text-gray-800 text-sm sm:text-base md:text-[13px] lg:text-[18px]  leading-relaxed list-disc pl-5">
              <li>
                Eco-friendly – helps reduce waste and supports sustainability.
              </li>
              <li>
                Strong and long-lasting – made with quality cotton for heavy
                daily use.
              </li>
              <li>Customization – perfect for branding or personal style.</li>
              <li>
                Affordable & supports local makers – promotes local
                manufacturing.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
          onClick={closeImageModal}
        >
          <div className="relative max-w-full sm:max-w-4xl max-h-screen">
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-gray-300 transition z-10"
            >
              &times;
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-screen object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="text-center text-white mt-4 text-sm sm:text-base">
              {selectedImage.alt}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
