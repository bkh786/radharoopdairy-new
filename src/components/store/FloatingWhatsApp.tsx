"use client";

import { motion } from "framer-motion";

export function FloatingWhatsApp() {
  const phoneNumber = "919616717512";
  const message = "Hello RadhaRoop Dairy, I'd like to know more about your Pure Deshi Ghee.";

  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-2xl hover:scale-110 transition-transform duration-300"
      initial={{ scale: 0 }}
      whileHover={{ y: -5 }}
      // Pulse animation every 3 seconds
      animate={{
        scale: [1, 1.1, 1],
        boxShadow: [
          "0px 0px 0px 0px rgba(37, 211, 102, 0.7)",
          "0px 0px 0px 20px rgba(37, 211, 102, 0)",
          "0px 0px 0px 0px rgba(37, 211, 102, 0)"
        ]
      }}
      // @ts-ignore (Framer Motion types for complex arrays can be noisy)
      transition={{ 
        repeat: Infinity, 
        duration: 2,
        repeatDelay: 3
      }}
    >
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
        alt="WhatsApp Chat" 
        className="w-9 h-9 filter brightness-0 invert" 
      />
    </motion.a>
  );
}
