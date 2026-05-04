import React, { useState } from "react";
import banner from "../../assets/Crousel/banner.jpg";
import product1 from "../../assets/Dummy/Newjute/jutebggggg.jpg";
import product2 from "../../assets/Dummy/Newjute/colorfulbag.jpg";

import whyWe from "../../assets/Home/Why.png";

export default function CottonBag() {
  const [selectedImage, setSelectedImage] = useState(null);

  const products = [
    { id: 1, src: product1, alt: "Jute Bag - 1" },
    { id: 2, src: product2, alt: "Jute Bag - 2" },
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
    <div className="bg-[#f3f3f3]">
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
            Premium Jute Bags by Maharashtra Bags – Durable, Eco-Friendly &
            Customizable
          </h1>
          <p className="mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-justify">
            Jute bags from Maharashtra Bags beautifully combine strength,
            sustainability, and a natural earthy appeal. Designed to carry heavy
            loads with ease, they remain gentle on the environment because of
            their biodegradable nature. Their unique texture and premium finish
            make them a stylish choice for daily use, gifting, or branding.
            Customers appreciate their long-lasting durability, and because they
            are reusable and versatile, they offer exceptional value.
            Maharashtra Bags ensures every jute bag promotes eco-friendly living
            with pride, giving you not just a practical product but a
            responsible choice that supports nature and craftsmanship.
          </p>
        </div>
      </div>

      <div className="w-full px-6 md:px-12 lg:px-20 py-12 bg-[#284C88] mt-0 rounded-2xl md:mt-12 ">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-light text-center mb-10 font-serif text-white">
          Our Jute Bags
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
                  Material used - Jute fabric
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

      {/* jutaa Cotton Bags */}
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
              WHY JUTE BAGS FROM <span className="block">MAHARASHTRA BAGS</span>
            </h2>

            <p className="text-gray-700 text-sm sm:text-[12px] md:text-[15px] lg:text-[17px] mt-7 leading-relaxed">
              Jute bags from Maharashtra Bags are biodegradable, stylish, and
              made from strong natural fibers that ensure long-lasting use. They
              offer excellent customization options while supporting
              eco-friendly living and local craftsmanship.
            </p>

            <ul className="mt-8 space-y-2 text-gray-800 text-sm sm:text-base md:text-[13px] lg:text-[18px]  leading-relaxed list-disc pl-5">
              <li>100% biodegradable – a great alternative to plastic.</li>
              <li>
                High durability – strong fibers make them ideal for heavy loads.
              </li>
              <li>
                Attractive & customization – suitable for branding and gifting.
              </li>
              <li>
                Promotes sustainability & local artisans – supports Eco-friendly
                production and local makers.
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
