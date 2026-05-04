import AboutBag from "../../assets/Aboutus/aboutbagone.jpg";
import AboutBag3 from "../../assets/Aboutus/aboutbagtwo.jpg";
import AboutProduction from "./AboutProduction";
import cotton from "../../assets/Aboutus/Aboutusvideo.mp4";
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
import thirdimg from "../../assets/Home/youtubethree.png";
import fourthimg from "../../assets/Home/youtubefour.png";
import Marquee from "react-fast-marquee";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

function AboutHero() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <div className="p-0">
      {/* Top Banner */}
      <div className="w-full h-full sm:h-[300px] md:h-full lg:h-full mb-4 md:mb-12 mt-20 md:mt-20">
        <video
          src={cotton}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      {/* About Section */}
      <section className="w-full bg-[#F5874F] sm:py-8 md:py-12 lg:py-0 rounded-xl lg:h-[760px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-12 ">
          {/* Heading */}
          <h2
            className="text-white text-center font-light font-serif lg:-mt-5 md:-mt-5"
            style={{ fontSize: "clamp(1.7rem, 4vw, 3.5rem)" }}
          >
            About Maharashtra Bags
          </h2>
          <p className="text-white/90 text-center mx-auto text-sm sm:text-base md:text-lg leading-relaxed px-2 lg:mb-20">
            Lifting Brands with Quality Bags Since 1990
          </p>

          <div className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            {/* Left Image */}
            <div className="flex justify-center lg:justify-end">
              <img
                src={AboutBag}
                alt="About Bag"
                className="
            w-[320px]
            sm:w-[380px]
            md:w-[500px]
            lg:w-[650px]
            xl:w-[750px]
            h-[250px]
            sm:h-[300px]
            md:h-[350px]
            lg:h-[500px]
            object-cover rounded-md shadow-md  lg:-mt-5"
              />
            </div>

            <div className="flex flex-col justify-between text-white font-serif">
              <p
                className="
      leading-relaxed mb-4
    text-xs font-thin sm:text-base
      lg:text-xl lg:leading-8 lg:-mt-5
    "
              >
                Established in 1990, Maharashtra Bags is a trusted Indian
                manufacturer of promotional canvas bags and non-woven bags,
                serving B2B clients, exporters, and corporate buyers across
                India and international markets.
              </p>

              <p
                className="
      leading-relaxed mb-4
      text-xs font-thin sm:text-base
      lg:text-xl lg:leading-8
    "
              >
                Our journey began in Itwari Market, Nagpur, under the name
                “Maharashtra Thaili Bhandar,” supplying reliable bag solutions
                to local retailers. With a continuous focus on quality,
                functional design, and brand promotion, we evolved into
                Maharashtra Bags, reflecting our growth into a modern,
                manufacturing-driven organization.
              </p>

              <p
                className="
      leading-relaxed
      text-xs font-thin sm:text-base
      lg:text-xl lg:leading-8 mb-5
    "
              >
                Today, we operate with our own in-house manufacturing facility,
                enabling us to maintain strict quality control, consistent
                production standards, and dependable delivery timelines. Our
                products are widely used for retail packaging, promotional
                campaigns, corporate gifting, and export distribution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Need To Know Accordion */}
      <section className="w-full bg-white px-4 sm:px-6 lg:px-10 py-10">
        {/* Desktop aligned wrapper */}
        <div className="lg:max-w-6xl lg:mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
            Need To Know
          </h2>
        </div>

        <div className="max-w-6xl space-y-4 lg:mx-auto">
          {[
            {
              title: "Inquiry",
              content: `To send us your inquiry, email us your requirements or WhatsApp with some key details like:
• Style
• Fabric
• Size
• Print

Or send us a screenshot of the bag.`,
            },
            {
              title: "Quantity",
              content:
                "The minimum order quantity at Maharashtra Bags is 4,000 pieces.",
            },
            {
              title: "Production Time",
              content:
                "As a top Canvas & NonWoven bags manufacturer from India, we bring our A-game when it comes to prompt execution and order fulfillment. Our general production lead time is 25 days from all approvals and advance payment, whichever is later. However, if you have any specific deadline, we will be happy to help in the best possible way.",
            },
            {
              title: "Size",
              content:
                "The sizes mentioned in the product pages, or in any of our communications, are outside dimensions in Inches. They are in H X L X W Ex.16H X 14L X 5W (Guzzet)",
            },
            {
              title: "Fabrics / Zip / Runner / Handle",
              content:
                "We have fabrics available in a wide range of grammage, quality and colors to ensure clients’ distinct needs are met with adequacy. So tell us Proper about your requirements so we can choose your Fabric  accordingly.",
            },
            {
              title: "Printing",
              content: "Digital Offset Printing.",
            },
            {
              title: "Customization",
              content: "We can customize the bag according to your needs.",
            },
            {
              title: "Packing",
              content:
                "Orders are packed in standard size master cartons. Bunch of 25 pieces in one poly Bag. Made with strip Packing. custom-size cartons or special packing requirements can be met at an extra cost.",
            },
            {
              title: "Samples",
              content: "Samples are available against inquiry or order.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="border border-blue-900 rounded-xl overflow-hidden"
            >
              {/* HEADER */}
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4
                 bg-blue-900 text-white font-semibold text-sm sm:text-base"
              >
                {item.title}
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 shrink-0" />
                )}
              </button>

              {/* CONTENT */}
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                <div className="bg-white px-4 sm:px-6 py-4 text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                  {item.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Direction of shop & Youtube video section */}
      <div className="flex flex-col  md:flex-row gap-8  mx-4 md:mx-8 lg:mx-16 my-3 mt-20 mb-40">
        {/* Left section Direction of shop */}
        <div className="relative w-full md:w-1/2 h-[350px] md:h-[420px] lg:h-[460px] rounded-lg overflow-hidden">
          {/* Background Image */}
          <img
            src={AboutBag3}
            alt="ShopImg"
            className="w-full h-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40 flex items-end justify-center pb-6 rounded-lg">
            {/* Button */}
            <button
              className="px-6 py-2 bg-red-600 text-white rounded-md h-10 w-60 flex items-center justify-center"
              onClick={() =>
                window.open(
                  "https://maps.app.goo.gl/1HbCiqfeVaZEG5Zh6",
                  "_blank"
                )
              }
            >
              Direction Of Shop
            </button>
          </div>
        </div>

        {/* Right section */}
        <div className="flex flex-col gap-5 w-full md:w-1/2 bg-gray-100">
          {/* First Image */}
          <div className="relative h-[160px] md:h-[200px] lg:h-[220px] rounded-md overflow-hidden">
            <img
              src={thirdimg}
              alt="Small Image 2"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Second Image with YouTube-style play thumbnail */}
          <div className="relative h-[160px] md:h-[200px] lg:h-[220px] rounded-md overflow-hidden">
            <img
              src={fourthimg}
              alt="Small Image 2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

{/* Heading */}
      {/* <div className="bg-gray-50 mt-20 mb-[100px] px-6 py-6">

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
</div> */}

      {/* Production Section */}
      <AboutProduction />
    </div>
  );
}

export default AboutHero;
