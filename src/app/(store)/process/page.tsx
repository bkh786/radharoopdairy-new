"use client";

import { motion } from "framer-motion";

export default function ProcessPage() {
  return (
    <div className="bg-background min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">Our Process</h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8" />
          <p className="text-lg text-foreground/80 leading-relaxed">
            The secret to our pure Deshi Ghee lies in the ancient Bilona method. We don't use machines to separate cream; we use time, patience, and tradition.
          </p>
        </motion.div>

        <div className="grid gap-8">
          {[
            { step: 1, title: "Milk Collection", desc: "Fresh A2 milk is collected from our healthy, grass-fed indigenous cows." },
            { step: 2, title: "Curd Setting", desc: "The whole milk is boiled and set into curd overnight in earthen pots." },
            { step: 3, title: "Bilona Churning", desc: "The curd is hand-churned using a wooden bilona in two directions to extract Makkhan." },
            { step: 4, title: "Slow Heating", desc: "The Makkhan is slowly heated over cow dung cakes to preserve nutrients and develop the rich aroma." },
            { step: 5, title: "Packaging", desc: "The pure golden liquid is carefully filtered and packed in glass jars." },
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-2xl border border-border/50 shadow-sm flex flex-col sm:flex-row gap-6 items-center sm:items-start"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary font-heading font-bold text-2xl flex-shrink-0">
                0{item.step}
              </div>
              <div className="text-center sm:text-left">
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
