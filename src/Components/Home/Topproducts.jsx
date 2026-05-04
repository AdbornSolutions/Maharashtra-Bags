import React, { useState, useEffect } from "react";

import product1 from "../../assets/Dummy/Newbopp/yellowstripebg.jpg";
import product2 from "../../assets/Dummy/Newjute/jutebggggg.jpg";
import product3 from "../../assets/Dummy/Newcanvas/gopi.jpg";
import product4 from "../../assets/Dummy/Newnonwoven/yawalkar.jpg";

const TopProducts = () => {
  // PRODUCT LIST (single image per product)
  const products = [
    {
      id: 1,
      images: [product1],
      alt: "BOPP Bag - 1",
      material: "Material used - polypropylene plastic",
    },
    {
      id: 2,
      images: [product2],
      alt: "Jute Bag - 1",
      material: "Material used - Jute fabric",
    },
    {
      id: 3,
      images: [product3],
      alt: "Canvas Bag - 1",
      material: "Material used - Cotton canvas",
    },
    {
      id: 4,
      images: [product4],
      alt: "Non-woven Bag - 1",
      material: "Material used - polyester fibers",
    },
  ];

  // WhatsApp
  const sendWhatsAppMessage = (productName) => {
    const url = `https://wa.me/+918087773898?text=${encodeURIComponent(
      `Hello, I am interested in ${productName}. Can you please share more details?`
    )}`;
    window.open(url, "_blank");
  };

  // Modal open / close
  const [selectedProductIndex, setSelectedProductIndex] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openImageModal = (productIndex) => {
    setSelectedProductIndex(productIndex);
    setCurrentImageIndex(0);
  };

  const closeImageModal = () => {
    setSelectedProductIndex(null);
    setCurrentImageIndex(0);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    const images = products[selectedProductIndex].images;
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    const images = products[selectedProductIndex].images;
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Lock background scroll while modal is open
  useEffect(() => {
    if (selectedProductIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProductIndex]);

  return (
    <>
      <div className="w-full px-6 md:px-12 lg:px-20 py-12 bg-[#284C88] mt-0 ">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-light text-center mb-10 font-serif text-white">
          Our Top Products
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="overflow-hidden transition flex flex-col"
            >
              <img
                src={product.images[0]}
                alt={product.alt}
                onClick={() => openImageModal(index)}
                className="w-full sm:h-56 md:h-64 lg:h-auto object-contain hover:scale-105 transition duration-300 cursor-pointer"
              />

              <div className="p-3 sm:p-4 text-center">
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white">
                  {product.alt}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-400 mt-1 ">
                  {product.material}
                </p>
                <button
                  onClick={() => sendWhatsAppMessage(product.alt)}
                  className="mt-2 sm:mt-3 px-3 sm:px-5 py-2 rounded-md bg-orange-600 text-white text-xs sm:text-sm md:text-base font-medium w-full sm:w-auto"
                >
                  Yes, I am interested
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL (backdrop closes modal) */}
      {selectedProductIndex !== null && (
        <div
          onClick={closeImageModal}
          className="
      fixed inset-0
      z-[999]
      bg-black/80
      flex items-center justify-center
      pt-20 px-4
    "
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="
        relative
        flex flex-col
        items-center
        justify-center
        max-h-[calc(100vh-5rem)]
      "
          >
            {/* ✅ CLOSE BUTTON ON IMAGE TOP-RIGHT */}
            <button
              onClick={closeImageModal}
              aria-label="Close image"
              className="
          absolute
          top-2 right-2
          z-10
          w-10 h-10
          flex items-center justify-center
          rounded-full
          bg-black/70 hover:bg-black
          text-white text-2xl
        "
            >
              &times;
            </button>

            {/* PREV */}
            {products[selectedProductIndex].images.length > 1 && (
              <button
                onClick={prevImage}
                className="
            absolute left-[-3rem] md:left-[-4rem]
            text-white text-3xl
            bg-black/60 hover:bg-black
            w-12 h-12 rounded-full
          "
              >
                ❮
              </button>
            )}

            {/* IMAGE */}
            <img
              src={products[selectedProductIndex].images[currentImageIndex]}
              alt="Product"
              className="
          w-auto
          max-w-[90vw] max-h-[65vh]
          sm:max-w-[85vw] sm:max-h-[70vh]
          md:max-w-[75vw] md:max-h-[75vh]
          lg:max-w-[65vw] lg:max-h-[75vh]
          object-contain
          rounded-lg
        "
            />
            {/* NEXT */}
            {products[selectedProductIndex].images.length > 1 && (
              <button
                onClick={nextImage}
                className="
            absolute right-[-3rem] md:right-[-4rem]
            text-white text-3xl
            bg-black/60 hover:bg-black
            w-12 h-12 rounded-full
          "
              >
                ❯
              </button>
            )}

            <p className="text-center text-white mt-4 text-sm sm:text-base">
              {products[selectedProductIndex].alt}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default TopProducts;
