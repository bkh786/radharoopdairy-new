"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Star, ChevronRight, CheckCircle2 } from "lucide-react";

export default function HomePage() {
  const categories = [
    { name: "A2 Ghee", image: "https://images.unsplash.com/photo-1602484661845-a7b68239021e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", bg: "bg-[#FCECD8]" },
    { name: "Pickles", image: "https://images.unsplash.com/photo-1596649284958-868661dbb0b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", bg: "bg-[#E6E8CD]" },
    { name: "Atta", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", bg: "bg-[#F3E5D8]" },
    { name: "Cold Pressed Oils", image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", bg: "bg-[#F4E3D7]" },
  ];

  const reviews = [
    { name: "Minerva Thakur", text: "A variety of ways to use my favourite ghee and honey. My skin feels nourished, and many other benefits come from using them!", rating: 5, avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
    { name: "Lakshmi Dev", text: "Their ghee helped solve my acid reflux problem. While cooking with wood pressed oils imparts a unique taste and I feel lighter.", rating: 5, avatar: "https://randomuser.me/api/portraits/women/68.jpg" },
    { name: "Dr Shagun Walia", text: "This ghee is the most healthy option out there for children. I use it regularly for my daughter and she loves the taste.", rating: 5, avatar: "https://randomuser.me/api/portraits/women/90.jpg" },
    { name: "Pankaj Tiwari", text: "Works very well for holistic healing! Typical honey is very sweet, but this one feels absolutely natural like nobody's business :)", rating: 5, avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
  ];

  return (
    <div className="bg-background overflow-hidden">
      
      {/* 1. Immersive Hero Banner Section */}
      <section className="relative w-full min-h-[85vh] flex items-center justify-center pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        {/* Banner Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FDFBF7] via-[#FDFBF7]/90 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1595856461971-d64e1d713c7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Farm Background" 
            className="w-full h-full object-cover object-right opacity-60"
          />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-block px-4 py-1.5 bg-[#D4AF37]/20 text-[#0A3622] rounded-full font-bold text-sm tracking-widest uppercase mb-2 border border-[#D4AF37]/30">
              Fresh Village Harvest
            </div>
            <h1 className="font-heading font-extrabold text-5xl md:text-7xl text-foreground leading-[1.1]">
              Pure & Authentic <br/>
              <span className="text-[#0A3622]">Bilona Ghee</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-lg leading-relaxed">
              Experience the richness of traditional A2 cow ghee, crafted with love by village artisans. No preservatives, just pure nourishment.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Link 
                href="/shop" 
                className="bg-[#0A3622] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#0A3622]/90 hover:scale-105 transition-all shadow-xl flex items-center gap-2"
              >
                Shop Now <ChevronRight size={20} />
              </Link>
              <Link 
                href="/story" 
                className="bg-white text-foreground px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 border border-border hover:scale-105 transition-all shadow-md"
              >
                Our Story
              </Link>
            </div>
            
            <div className="flex items-center gap-6 pt-6 text-sm font-medium text-foreground/70">
              <span className="flex items-center gap-2"><CheckCircle2 className="text-[#0A3622]" size={18} /> Lab Tested</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="text-[#0A3622]" size={18} /> Farm Fresh</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="text-[#0A3622]" size={18} /> Cruelty Free</span>
            </div>
          </motion.div>

          {/* Hero Product Image - Use the attached jar image later */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" as const }}
            className="relative hidden lg:flex justify-center"
          >
            <div className="absolute inset-0 bg-[#D4AF37]/20 rounded-full blur-[100px] -z-10" />
            {/* Note: Update this src to the uploaded product jar image (e.g., /product-jar.png) */}
            <img 
              src="https://images.unsplash.com/photo-1602484661845-a7b68239021e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="RadhaRoop Pure Ghee" 
              className="w-full max-w-[450px] object-contain drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* 2. Visual Categories Slider */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">Explore Categories</h2>
              <div className="w-16 h-1 bg-[#D4AF37] mt-4 rounded-full" />
            </div>
            <Link href="/shop" className="text-[#0A3622] font-semibold hover:underline hidden sm:block">View All</Link>
          </div>
          
          <div className="flex overflow-x-auto hide-scrollbar gap-6 pb-8 snap-x snap-mandatory">
            {categories.map((category, index) => (
              <Link href="/shop" key={index} className="snap-center shrink-0 w-64 group">
                <div className={`${category.bg} rounded-[2rem] p-6 aspect-square flex items-center justify-center relative overflow-hidden transition-transform group-hover:-translate-y-2`}>
                  <img src={category.image} alt={category.name} className="w-40 h-40 object-cover rounded-full shadow-lg group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-center font-bold text-lg mt-6 text-foreground group-hover:text-[#0A3622] transition-colors">{category.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Promotional Banner Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0A3622] rounded-3xl overflow-hidden flex flex-col md:flex-row relative">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="p-12 md:p-16 flex-1 flex flex-col justify-center relative z-10">
              <span className="text-[#D4AF37] font-bold tracking-widest uppercase mb-4">RadhaRoop Benefit Club</span>
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-white leading-tight mb-6">
                Join our healthy <br/>mornings club.
              </h2>
              <p className="text-[#E8F2EE]/80 text-lg mb-8 max-w-md">
                Get up to 25% off with Purity Coins, exclusive mystery gifts, and early access to new authentic village products.
              </p>
              <button className="bg-[#D4AF37] text-[#0A3622] px-8 py-4 rounded-full font-bold hover:bg-white transition-colors w-max shadow-xl">
                Join Now for Free
              </button>
            </div>
            <div className="flex-1 min-h-[300px] relative">
              <img 
                src="https://images.unsplash.com/photo-1542691457-cbe4df041eb2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Healthy Lifestyle" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. What Do Our Customers Say (Reviews Carousel) */}
      <section className="py-24 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl text-foreground">What Do Our Customers Say</h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-6 rounded-full" />
          </div>

          <div className="flex overflow-x-auto hide-scrollbar gap-8 pb-12 snap-x snap-mandatory px-4 md:px-0">
            {reviews.map((review, i) => (
              <div key={i} className="snap-center shrink-0 w-[350px] bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-border/50 flex flex-col justify-between">
                <div>
                  <p className="text-foreground/80 leading-relaxed italic mb-8 relative z-10">
                    "{review.text}"
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold text-foreground">{review.name}</h4>
                    <div className="flex gap-1 mt-1">
                      {[...Array(review.rating)].map((_, idx) => (
                        <Star key={idx} size={14} className="fill-[#D4AF37] text-[#D4AF37]" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
