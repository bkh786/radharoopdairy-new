"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Leaf, ShieldCheck, HeartHandshake, Droplets } from "lucide-react";

export default function HomePage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-primary/20 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90" />
          {/* We would use next/image here in production */}
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1596431985398-9635e98f0ed8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center mix-blend-overlay opacity-60" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading font-bold text-5xl md:text-7xl text-foreground mb-6 leading-tight"
          >
            Pure Deshi Ghee Crafted the <span className="text-primary italic">Traditional Way</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-foreground/80 mb-10 font-light"
          >
            Rooted in Village Traditions. Delivered with Purity.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/shop" className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-medium hover:bg-primary/90 transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-lg">
              Explore Products <ArrowRight size={20} />
            </Link>
            <a href="https://wa.me/919616717512" target="_blank" rel="noopener noreferrer" className="bg-white text-primary border border-primary/20 px-8 py-4 rounded-full text-lg font-medium hover:bg-background transition-all flex items-center justify-center shadow-sm">
              WhatsApp Us
            </a>
          </motion.div>
        </div>
      </section>

      {/* Why RadhaRoop Dairy */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-4xl text-foreground mb-4">Why RadhaRoop Dairy</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: Droplets, title: "100% Pure", desc: "Unadulterated purity in every drop." },
              { icon: Leaf, title: "No Preservatives", desc: "Completely natural, chemical-free." },
              { icon: HeartHandshake, title: "Traditional Bilona", desc: "Churned using ancient methods." },
              { icon: ShieldCheck, title: "Trusted Quality", desc: "In-house production control." },
            ].map((feature, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-card p-8 rounded-2xl shadow-sm border border-border/50 text-center hover:shadow-md transition-shadow group">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon size={32} className="text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-3 text-foreground">{feature.title}</h3>
                <p className="text-foreground/70">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Traditional Journey Animation Placeholder */}
      <section className="py-24 bg-secondary/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-4xl text-foreground mb-4">The Traditional Journey</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">From our village cows to your dining table, witness the authentic Bilona process.</p>
          </motion.div>
          
          <div className="relative py-12">
             {/* We will build out the complex line art animation here later. For now, a stylish placeholder */}
             <div className="flex flex-col md:flex-row justify-between items-center relative z-10 gap-8">
                {["Pure Milk", "Curd Formation", "Bilona Churning", "Makkhan", "Slow Heating", "Pure Ghee"].map((step, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.15 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center z-10"
                  >
                    <div className="w-16 h-16 rounded-full bg-background border-4 border-primary flex items-center justify-center shadow-lg mb-4 text-primary font-bold">
                      {idx + 1}
                    </div>
                    <span className="font-medium text-sm text-center w-24">{step}</span>
                  </motion.div>
                ))}
             </div>
             {/* Connecting Line */}
             <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-primary/30 -translate-y-1/2 z-0" />
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-primary text-primary-foreground text-center relative">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-8 leading-tight">
            Experience Purity in Every Spoon.
          </h2>
          <Link href="/shop" className="bg-background text-primary px-10 py-4 rounded-full text-lg font-bold hover:bg-background/90 transition-all shadow-xl hover:scale-105 inline-block">
            Shop Authentic Ghee
          </Link>
        </div>
      </section>

    </div>
  );
}
