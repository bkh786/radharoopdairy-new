"use client";

import { motion } from "framer-motion";

export default function StoryPage() {
  return (
    <div className="bg-background min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">Our Story</h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8" />
          <p className="text-lg text-foreground/80 leading-relaxed">
            Every great journey begins with a simple thought. For RadhaRoop Dairy, it was the desire to bring back the authentic taste and purity of Deshi Ghee that we remembered from our childhood in the village.
          </p>
        </motion.div>

        {/* Timeline placeholder */}
        <div className="space-y-12">
          {[
            { year: "Our Roots", title: "The Village Beginning", desc: "Starting with just a few indigenous cows and a commitment to traditional practices." },
            { year: "The Process", title: "Reviving Bilona", desc: "We chose the harder path - the ancient Vedic Bilona method, ensuring maximum nutrition." },
            { year: "Today", title: "To Your Home", desc: "Delivering unadulterated purity to families across the country while empowering our village community." }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-6 items-start"
            >
              <div className="w-32 flex-shrink-0 text-right pt-1">
                <span className="font-bold text-primary font-heading text-xl">{item.year}</span>
              </div>
              <div className="w-4 h-4 rounded-full bg-primary mt-2 flex-shrink-0 relative">
                <div className="absolute top-4 left-1/2 -ml-0.5 w-1 h-24 bg-border/50" />
              </div>
              <div className="pb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-foreground/70">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
