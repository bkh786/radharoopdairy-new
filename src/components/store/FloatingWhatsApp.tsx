"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down a bit
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="https://wa.me/919616717512?text=Hello%20RadhaRoop%20Dairy,%20I%20have%20an%20enquiry."
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="absolute -top-10 right-0 bg-white text-foreground text-xs font-semibold px-3 py-1.5 rounded-lg shadow-sm whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity">
        Chat with us
      </span>
    </a>
  );
}
