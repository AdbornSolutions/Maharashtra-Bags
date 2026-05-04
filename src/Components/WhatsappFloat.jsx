import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappFloat = () => {
  const phoneNumber = "+918087773898"; // 👈 your WhatsApp number 
  const message = "Hello sir, I am interested in your bags";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-6
        right-6
        z-50
        bg-green-500
        hover:bg-green-600
        text-white
        p-4
        rounded-full
        shadow-lg
        transition
        transform
        hover:scale-110
      "
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default WhatsappFloat;
