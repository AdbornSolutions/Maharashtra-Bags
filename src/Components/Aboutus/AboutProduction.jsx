import React from "react";
import { ShoppingCart } from "lucide-react";

import Quality from "../../assets/Aboutus/AboutProduction/Delivery_Quality.png";
import Quantity from "../../assets/Aboutus/AboutProduction/Delivery_Quantity.png";
import Timely from "../../assets/Aboutus/AboutProduction/Delivery_Timely.png";
import Class from "../../assets/Aboutus/AboutProduction/Delivering_Class.png";
import CoreValues from "../../assets/Aboutus/AboutProduction/CoreValues.png";
import AboutBg from "../../assets/Aboutus/AboutProduction/AboutProduction.png";

const ProductionPowerhouse = () => {
  const features = [
    { title: "Delivering Quality", image: Quality },
    { title: "Delivering Quantity", image: Quantity },
    { title: "Delivering Timely", image: Timely },
    { title: "Delivering Class", image: Class },
  ];

  // const values = [
  //   "30+ years of manufacturing experience.",
  //   "In-house production for quality consistency.",
  //   "Export-ready products aligned with global standards.",
  //   "Reliable bulk supply with competitive pricing.",
  //   "Long-term partnership approach.",
  // ];

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section
        className="relative bg-cover bg-center bg-no-repeat flex items-center"
        style={{ backgroundImage: `url(${AboutBg})` }}
      >
        <div className="absolute inset-0 bg-black/40 min-h-[380px] sm:min-h-[500px] md:min-h-[600px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14 md:py-16 text-center w-full">
          <h2 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4">
            Production Powerhouse
          </h2>

          <p className="text-white/90 max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed px-2">
            We excel in manufacturing high-quality bags, delivering over xxxx
            units daily. Our skilled team and advanced machinery ensure
            exceptional products, meeting every client's needs efficiently.
          </p>

          {/* FEATURES GRID */}
          <div className="relative mt-8 sm:mt-10">
            {/* YELLOW LINE only desktop */}
            <div className="hidden lg:block absolute left-0 right-0 h-[4px] bg-yellow-400 top-[50px] z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
              {features.map((item, i) => (
                <div
                  key={i}
                  className="text-center group relative flex flex-col items-center"
                >
                  {/* TITLE */}
                  <h3 className="text-white font-semibold text-base sm:text-lg md:text-xl mb-3 sm:mb-4">
                    {item.title}
                  </h3>

                  {/* DOT — remove on mobile, show only on lg+ */}
                  <div className="hidden lg:flex justify-center mb-3 sm:mb-5 relative z-10">
                    <div className="w-4 h-4 bg-yellow-400 rounded-full border-2 border-yellow-600 shadow-sm"></div>
                  </div>

                  {/* IMAGE */}
                  <div className="relative overflow-hidden rounded-lg shadow-2xl group-hover:shadow-3xl transition-all duration-300 transform group-hover:scale-105 mx-auto">
                    <div className="w-[225px] sm:w-[230px] md:w-[235px] lg:w-[240px] mx-auto">
                      <div className="aspect-[3/4] bg-white relative">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 "
                        />

                        {/* hover arrow on desktop only */}
                        {/* <div className="hidden lg:flex items-center justify-center absolute inset-0 pointer-events-none">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-2">
                            <svg width="56" height="56" viewBox="0 0 24 24" fill="none">
                              <circle cx="12" cy="12" r="12" fill="#F6C84C" />
                              <path d="M10 8l4 4-4 4" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                        </div> */}

                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      {/* <section className="w-full bg-[#284C88] py-8 sm:py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4 sm:px-6 items-center">
          <div>
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-light mb-4 font-serif text-center md:text-left lg:-mt-24">
              Our Commitment
            </h2>

            <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed font-serif mb-6">
              At Maharashtra Bags, we believe packaging is more than a
              product—it is a brand communication tool. We work closely with our
              clients to deliver durable, cost-effective, and brand-enhancing
              bag solutions that meet the expectations of national &
              international Buyers.
            </p>

            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-light mb-4 font-serif text-center md:text-left">
              Why Choose Us
            </h2>

            <div className="space-y-3">
              {values.map((v, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <ShoppingCart className="text-white w-4 h-4 mt-1" />
                  <span className="text-white text-sm sm:text-base leading-relaxed">
                    {v}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full flex justify-center md:justify-end">
            <img
              src={CoreValues}
              alt="Core Values"
              className="rounded-lg shadow-lg w-[250px] sm:w-[260px] md:w-full md:h-[500px] object-cover"
            />
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default ProductionPowerhouse;
