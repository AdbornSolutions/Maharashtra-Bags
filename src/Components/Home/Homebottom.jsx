import React, { useEffect, useState, useRef } from "react";
import clientImg from "../../assets/Home/clientImg.jpg";
import Video1 from "../../assets/Crousel/videoplayback.mp4";
import formBg from "../../assets/Home/formBg.jpg";
import { useForm, ValidationError } from '@formspree/react';

export default function AboutSection() {
  const stats = [
    { label: "Happy Clients", value: 1200 },
    { label: "Our Team", value: 85 },
    { label: "Ratings", value: 500 },
  ];

  const [counters, setCounters] = useState(stats.map(() => 0));
  const sectionRef = useRef(null);
  const animatedRef = useRef(false);
  const rafRef = useRef(null);
  const observerRef = useRef(null);

  // ---------- COUNTER ANIMATION (requestAnimationFrame, eased) ----------
  function startCounters() {
    if (animatedRef.current) return;
    animatedRef.current = true;

    const duration = 3000; // ms
    const startTime = performance.now();
    const startVals = counters.slice(); // all zeros normally
    const targets = stats.map((s) => s.value);

    const easeOutQuad = (t) => 1 - (1 - t) * (1 - t);

    function step(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutQuad(progress);

      const next = targets.map((target, i) =>
        Math.floor(startVals[i] + (target - startVals[i]) * eased)
      );

      setCounters(next);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        // ensure exact final values
        setCounters(targets);
        rafRef.current = null;
      }
    }

    rafRef.current = requestAnimationFrame(step);
  }

  // ---------- OBSERVER: start when section is visible ----------
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startCounters();
        }
      },
      { threshold: 0.3 }
    );

    observerRef.current.observe(el);
    return () => {
      if (observerRef.current && el) observerRef.current.unobserve(el);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ---------- TESTIMONIALS (single timer, correct cleanup) ----------
  const testimonials = [
    {
      text: "Maharashtra Bags has consistently delivered high-quality packaging solutions that meet our brand and operational standards. Their reliability, material quality, and timely execution make them a trusted packaging partner for Haldiram.",
      author: "Haldirams",
      image: clientImg,
    },
    {
      text: "Their ability to meet large-volume requirements while maintaining quality and timelines has made Maharashtra Bags a reliable packaging partner for us. The collaboration has supported our operational efficiency and brand consistency.",
      author: "Suhana Masala",
      image: clientImg,
    },
    {
      text: "Maharashtra Bags understands the specific packaging needs of the seeds and agriculture sector. Their focus on strength, print quality, and timely delivery has made them a trusted supplier.",
      author: "Ankur Seeds",
      image: clientImg,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // single timer for testimonial auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []); // run once

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );

  // -----------------------form spree--------------------------

  const [state, handleSubmit] = useForm("xlgdwpgw");
  // if (state.succeeded) {
  //   return <p>Thanks for joining!</p>;
  // }


  return (
    <div className="w-full">
      {/* ================= HERO COUNTER SECTION ================= */}
      <div
        ref={sectionRef}
        className="relative w-full text-center py-16 md:py-32 lg:py-40 px-4 md:px-10 overflow-hidden"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={Video1} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 flex flex-col justify-center items-center px-4">
          <h3 className="text-lg md:text-3xl font-semibold text-white">
            Maharashtra Bags : Quality, Customization & Reliability
          </h3>

          <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-red-400 mt-4">
            Our Numbers Showcase Our Success
          </h2>

          <div className="mt-8 flex flex-col md:flex-row items-center gap-10 md:gap-20">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <h3 className="text-4xl md:text-6xl font-extrabold text-white">
                  {counters[i]}+
                </h3>
                <p className="text-base md:text-lg text-white mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= TESTIMONIAL ================= */}
      <div
        className="w-full md:h-[500px] bg-[#1f4c80] py-16 px-5 md:px-10 lg:px-16 
                md:flex md:flex-col md:items-center md:justify-center"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-16">
          Our Clients Words
        </h2>

        <div
          className="max-w-6xl mx-auto 
                  flex flex-col md:flex-row 
                  items-center md:items-center md:justify-center
                  gap-8 md:gap-16"
        >
          {/* Image */}
          {/* <div className="flex justify-center md:justify-center w-full md:w-auto">
            <img
              src={testimonials[currentIndex].image}
              alt="Client"
              className="w-32 h-32 md:w-48 md:h-[140px] rounded-full object-cover shadow-xl"
            />
          </div> */}

          {/* Text */}
          <div className="text-white text-center md:text-left px-2">
            <p className="italic text-lg md:text-xl leading-relaxed">
              “{testimonials[currentIndex].text}”
            </p>

            <p className="mt-6 text-sm md:text-base font-medium opacity-80">
              – {testimonials[currentIndex].author}
            </p>

            <div className="flex justify-center md:justify-start mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all ${index === currentIndex ? "bg-white w-5" : "bg-gray-300 w-3"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ================= NEWSLETTER + FORM ================= */}
      <div
        className="w-full py-16 px-5 md:px-10 lg:px-20 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(255,118,43,0.85), rgba(255,118,43,0.85)), url(${formBg})`,
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12">
          {/* LEFT */}
          <div className="text-white max-w-xl md:mt-12">
            <h2 className="text-3xl font-bold text-black">
              Get In Touch with Us <br /> Anytime!
            </h2>

            <p className="mt-6 text-lg opacity-90">
              Transform your brand with our custom bags! Order now and make a
              lasting impression.
            </p>

            <div className="flex items-center gap-5 mt-10">
              <img
                src={testimonials[currentIndex].image}
                className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover shadow-lg"
              />

              <div>
                <span className="text-black text-2xl md:text-3xl font-bold">
                  Marketing Specialist
                </span>
                <p className="text-sm opacity-90">+91-8087773898</p>
              </div>
            </div>

            <p className="mt-10 text-base md:text-lg opacity-90">
              Elevate Your Brand with Custom Bags: Stylish, Sustainable, and
              Perfect for Promotion
            </p>
          </div>

          {/* FORM */}
          <div className="w-full md:w-[40%] bg-white p-6 md:p-10 rounded-2xl shadow-lg md:ml-36">

            {state.succeeded ? (
              /* THANK YOU MESSAGE */
              <div className="text-center py-12">
                <h3 className="text-2xl font-bold text-[#1f4c80]">
                  Thank You!
                </h3>
                <p className="mt-4 text-gray-600">
                  Your message has been sent successfully.
                  <br />
                  We will contact you soon.
                </p>
              </div>
            ) : (
              /* FORM */
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="border border-gray-300 p-3 rounded"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  required
                  className="border border-gray-300 p-3 rounded"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />

                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number"
                  required
                  className="border border-gray-300 p-3 rounded"
                />

                <textarea
                  name="message"
                  rows={4}
                  placeholder="Message"
                  required
                  className="border border-gray-300 p-3 rounded"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="bg-[#1f4c80] text-white py-3 rounded text-lg font-medium disabled:opacity-60"
                >
                  {state.submitting ? "Sending..." : "Send"}
                </button>

              </form>
            )}

          </div>

        </div>
      </div>
    </div>
  );
}

