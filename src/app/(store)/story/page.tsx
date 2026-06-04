"use client";

import { motion } from "framer-motion";

export default function StoryPage() {
  return (
    <div className="bg-background pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading font-bold text-5xl md:text-6xl text-foreground mb-6"
          >
            Our Story
          </motion.h1>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full mb-8" />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed"
          >
            A journey from the heart of rural India to your dining table, preserving the sacred tradition of Bilona Ghee.
          </motion.p>
        </div>

        {/* Founder Section */}
        <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-lg border border-border/50 mb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FDFBF7] rounded-bl-full -z-10" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative flex justify-center"
            >
              {/* Note: Update this image source to the actual founder image (e.g., /founder.png) */}
              <div className="relative w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Founder of RadhaRoop Dairy" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#0A3622] text-[#D4AF37] p-6 rounded-2xl shadow-xl">
                <h3 className="font-heading font-bold text-xl">Founder</h3>
                <p className="text-sm opacity-90">RadhaRoop Dairy</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="font-heading font-bold text-4xl text-foreground">The Vision Behind <br/>The Purity</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                "Our mission started with a simple realization: the ghee we consume today lacks the vitality and purity of the ghee our grandparents used to make. We wanted to bring back the authentic, golden elixir of health."
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                By empowering local village communities and adhering strictly to the ancient Vedic Bilona method, we ensure that every jar of RadhaRoop Dairy Ghee is not just a product, but a piece of our heritage.
              </p>
              <div className="pt-4 border-t border-border mt-8">
                <p className="font-bold text-xl text-foreground">Creating a healthier tomorrow,</p>
                <p className="text-foreground/60">One spoonful at a time.</p>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  );
}
