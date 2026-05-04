import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import Marquee from "react-fast-marquee";
import bag2 from "../../assets/Home/Mahbg2.jpg";
import bopphome from "../../assets/Home/newcanvashome.png";
import nonwovenhome from "../../assets/Home/nonwovenhome.png";
import purpleBag from "../../assets/Home/purplebag.png";
import blueBag from "../../assets/Home/bluebag.png";
import redBag from "../../assets/Home/redbag.png";
import brownBag from "../../assets/Home/brownbag.png";
import firstimg from "../../assets/Home/youtubeone.png";
import secondimg from "../../assets/Home/youtubetwo.png";
import zedblack from "../../assets/Aboutus/zedblack.jpg";
import haldiramsLogo from "../../assets/Aboutus/haldirams-logo.svg";
import andhrasales from "../../assets/Aboutus/andhrasales.jpg";
import ankurseeds from "../../assets/Aboutus/ankurseeds.jpg";
import bigbell from "../../assets/Aboutus/bigbell.jpg";
import goenka from "../../assets/Aboutus/goenka.jpg";
import goodday from "../../assets/Aboutus/goodday.jpg";
import manohar from "../../assets/Aboutus/manohar.jpg";
import mokshagarbatti from "../../assets/Aboutus/mokshagarbatti.jpg";
import nathseeds from "../../assets/Aboutus/nathseeds.jpg";
import pritamchai from "../../assets/Aboutus/pritamchai.jpg";
import ravimasale from "../../assets/Aboutus/ravimasale.jpg";
import rrmasala from "../../assets/Aboutus/rrmasala.jpg";
import raghuvir from "../../assets/Aboutus/raghuvir.jpg";
import safariagarbatti from "../../assets/Aboutus/safariagarbatti.jpg";
import shalimaragarbatti from "../../assets/Aboutus/shalimaragarbatti.jpg";
import suhanamasala from "../../assets/Aboutus/Suhanamasala.jpg";
import swastik from "../../assets/Aboutus/swastik.jpg";
import thakur from "../../assets/Aboutus/thakur.jpg";
import waghmaremasala from "../../assets/Aboutus/waghmaremasala.jpg";
import raisoni from "../../assets/Aboutus/ghraisoni.jpg";
import basantlal from "../../assets/Aboutus/basantlal.jpg";
import CoreValues from "../../assets/Aboutus/AboutProduction/CoreValues.png";

import AOS from "aos";
import "aos/dist/aos.css";

const categories = [
  {
    title: "Canvas bags",
    desc: "High-quality canvas bags offering strength, comfort, and everyday affordability.",
    icon: purpleBag,
    path: "/canvas-bags",
  },

  {
    title: "Non-woven bags",
    desc: "Lightweight and durable non-woven bags that are affordable, reusable, and reliable.",
    icon: brownBag,
    path: "/non-woven-bags",
  },
  {
    title: "Jute Bags",
    desc: "Eco-friendly jute bags crafted with natural fibers, strong build, and timeless appeal.",
    icon: redBag,
    path: "/jute-bags",
  },
  {
    title: "BOPP bags",
    desc: "High-quality BOPP bags with glossy finish, long-lasting strength, and great value.",
    icon: blueBag,
    path: "/bopp-bags",
  },
];

const sendWhatsAppMessage = () => {
  const message = "Hello, I am interested in customizing Bags";
  const url = `https://wa.me/+918087773898?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};

const MaharashtraBags = () => {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);
   const values = [
    "30+ years of manufacturing experience.",
    "In-house production for quality consistency.",
    "Export-ready products aligned with global standards.",
    "Reliable bulk supply with competitive pricing.",
    "Long-term partnership approach.",
  ];

  return (
    <>
      {/* Categories */}
      <div className="w-full bg-gray-100 py-20 px-4 md:px-10 ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {categories.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center text-center hover:shadow-md transition"
              onClick={() => navigate(item.path)}
            >
              <img
                src={item.icon}
                alt={item.title}
                className="h-12 w-12 mb-3"
              />
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-500 text-sm mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#F5874F] rounded-xl p-6 sm:p-8 md:p-10">
        <div className="w-full px-3 sm:px-6  py-10 rounded-xl text-white font-bold ">
          {/* ================= MOBILE ONLY * ================= */}
          <div className="block md:hidden space-y-20">
            {/* section 1 */}
            <div>
              <h1 className="text-[25px] sm:text-[30px] font-garamond tracking-wide uppercase leading-tight pl-2">
                WE ARE MAHARASHTRA BAGS 👜
              </h1>

              <img
                src={bopphome}
                alt="bopphome"
                className="block sm:hidden w-full h-[230px] mt-6 mb-6 object-cover rounded-xl shadow"
              />

              <p className="mt-4 text-base leading-relaxed text-white/90">
                We specialize in crafting high-quality, eco-friendly bags made
                from jute, cotton, and non-woven materials. Our commitment to
                sustainable manufacturing ensures durable, stylish, and reusable
                bags that cater to diverse needs.
              </p>
            </div>

            {/* section 2 */}
            <div>
              <h1 className="text-[25px] sm:text-[30px] font-garamond tracking-wide uppercase leading-tight pl-2 ">
                We serve the best bags over the globe
              </h1>

              <img
                src={nonwovenhome}
                alt="nonwovenhome"
                className="block sm:hidden w-full h-[230px] mt-6 mb-6 object-cover rounded-xl shadow"
              />

              <p className="mt-4 text-base leading-relaxed text-white/90">
                Our products combine eco-conscious materials with premium
                craftsmanship. Perfect for shopping, branding, packaging, and
                much more.
              </p>
            </div>
          </div>

          {/* ================= DESKTOP ONLY ================= */}
          <div className="hidden md:block rounded-xl p-0 lg:p-5 space-y-32 w-full">
            {/* SECTION 1 */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* LEFT TEXT */}
              <div data-aos="fade-right" className="w-full">
                <h1 className="text-[25px] md:text-[35px]  lg:text-[50px] font-garamond tracking-wide uppercase leading-tight">
                  WE ARE MAHARASHTRA BAGS 👜
                </h1>

                <p className="text-gray-200 mt-10 leading-relaxed font-normal text-xl w-full">
                  We specialize in crafting high-quality, eco-friendly bags made
                  from jute, cotton, and non-woven materials. Our commitment to
                  sustainable manufacturing ensures durable, stylish, and
                  reusable bags that cater to all needs.From custom logo
                  printing to bulk production, we deliver reliable bag solutions
                  for businesses, retailers, and promotional use.Our bags are
                  designed to enhance brand visibility while supporting
                  environmentally responsible practices.
                </p>
              </div>

              {/* RIGHT VIDEO */}
              <div data-aos="fade-left" className="w-full flex justify-center">
                <img
                  src={bopphome}
                  alt="bopphome"
                  loading="lazy"
                  className="w-full h-[380px] lg:h-[420px] object-cover rounded-2xl shadow-xl"
                />
              </div>
            </div>

            {/* SECTION 2 */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* VIDEO LEFT */}
              <div data-aos="fade-right" className="w-full flex justify-center">
                <img
                  src={nonwovenhome}
                  alt="nonwovenhome"
                  loading="lazy"
                  className="w-full h-[380px] lg:h-[420px] object-cover rounded-2xl shadow-xl"
                />
              </div>

              {/* TEXT RIGHT */}
              <div data-aos="fade-left" className="w-full">
                <h1 className=" text-[25px] md:text-[35px] lg:text-[50px] font-garamond tracking-wide uppercase leading-tight">
                  We serve the best bags across the globe
                </h1>

                <p className="text-gray-200 mt-10 leading-relaxed font-normal text-xl w-full">
                  Our products combine eco-conscious materials with premium
                  craftsmanship. Perfect for shopping, branding, packaging, and
                  much more.We offer a wide range of customizable, durable bags
                  designed to meet both business and personal needs. Ideal for
                  retail, corporate gifting, events, and promotions, our bags
                  support sustainability while enhancing brand value. Trusted by
                  brands for quality, consistency, and timely delivery across
                  India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="bg-white w-full py-14">
        <div className="flex flex-col md:flex-row gap-8 mt-20 mx-4 md:mx-8 lg:mx-16 ">
          {/* IMAGE SECTION */}
          <div className="relative w-full md:w-1/2 h-[350px] md:h-[420px] lg:h-[460px]">
            <img
              src={bag2}
              alt="Custom Bags"
              className="w-full h-full object-cover rounded-md"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center p-8 ">
              <h2 className="text-white text-2xl md:text-3xl font-semibold mb-4">
                Custom Bags Tailored with Your Logo and Design
              </h2>
              <p className="text-gray-200 mb-6 text-sm md:text-base">
                Personalized & premium quality bags to elevate your brand image.
              </p>
              <button
                className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                onClick={() => sendWhatsAppMessage()}
              >
                CUSTOMIZE
              </button>
            </div>
          </div>

          {/* VIDEO SECTION */}
          <div className="flex flex-col gap-6 w-full md:w-1/2">
            <div className="relative h-[160px] md:h-[200px] lg:h-[220px] rounded-md overflow-hidden">
              <img
                src={firstimg} // or "/images/your-image.jpg"
                alt="Preview"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative h-[160px] md:h-[200px] lg:h-[220px] rounded-md overflow-hidden">
              <img
                src={secondimg} // or "/images/your-image.jpg"
                alt="Preview"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 mt-20 mb-[100px] px-6 py-6">
  {/* Heading */}
  <h2 className="text-2xl lg:text-5xl font-bold text-center lg:mb-12 mb-8">
    Featured Client
  </h2>

  <Marquee
    gradient={false}
    speed={100}          // 🔥 smooth + fast (adjust 60–120)
    pauseOnHover
    className="py-2"
  >
    <div className="flex items-center gap-12 sm:gap-16 md:gap-20 px-6">
      {[
        zedblack, haldiramsLogo, andhrasales, ankurseeds, bigbell, goenka,
        goodday, manohar, mokshagarbatti, nathseeds, pritamchai, raghuvir,
        ravimasale, rrmasala, safariagarbatti, shalimaragarbatti,
        suhanamasala, swastik, thakur, waghmaremasala, raisoni, basantlal,
      ].map((logo, index) => (
        <img
          key={index}
          src={logo}
          alt="client-logo"
          className="
            h-8
            sm:h-12
            md:h-14
            lg:h-20
            object-contain
            mx-8
          "
        />
      ))}
    </div>
  </Marquee>
</div>

      {/* CORE VALUES */}
      <section className="w-full bg-[#F5874F] py-8 sm:py-12 mb-20">
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
      </section>
    </>
  );
};

export default MaharashtraBags;
