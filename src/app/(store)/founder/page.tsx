"use client";

import { motion } from "framer-motion";

export default function FounderPage() {
  return (
    <div className="bg-background min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">Founder's Message</h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card rounded-3xl overflow-hidden shadow-lg border border-border/50"
        >
          <div className="md:flex">
            <div className="md:w-2/5 bg-primary/10 relative min-h-[400px]">
              {/* Founder Image Placeholder */}
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Founder" 
                className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80"
              />
            </div>
            <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
              <h2 className="font-heading font-bold text-3xl text-foreground mb-6">"Purity should reach every home."</h2>
              
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  When I started RadhaRoop Dairy, my vision was simple: I wanted to share the pure, unadulterated Deshi Ghee that we grew up eating in our village with the rest of the country.
                </p>
                <p>
                  In today's commercialized world, authenticity is often lost. We pledge to never use preservatives, to never blend our products with chemicals, and to always maintain ethical production standards.
                </p>
                <p>
                  Every jar of our ghee represents not just purity, but also rural employment generation and a trust-based relationship with you, our customer.
                </p>
              </div>

              <div className="mt-10 pt-8 border-t border-border/50">
                <div className="font-heading text-2xl font-bold text-primary mb-1">Founder Name</div>
                <div className="text-sm text-foreground/60 uppercase tracking-widest">Founder, RadhaRoop Dairy</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
