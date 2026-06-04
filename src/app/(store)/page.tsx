"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Play, CheckCircle2, Leaf, ShieldCheck, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import { MOCK_PRODUCTS } from "@/lib/constants";

const carouselImages = [
  "/deshi_ghee.png",
  "/jar.png",
  "/jar_bowl.png",
  "/jar_spoon.png",
  "/pure_traditional.png",
  "/rich_aroma.png",
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));

  return (
    <div className="bg-background overflow-hidden">
      
      {/* 1. Hero Product Carousel */}
      <section 
        className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden"
      >
        <AnimatePresence initial={false}>
          <motion.img
            key={currentSlide}
            src={carouselImages[currentSlide]}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-contain bg-[#D4AF37]/10 z-0 p-4 md:p-12"
            alt="Pure Deshi Ghee"
          />
        </AnimatePresence>

        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 w-full h-full flex flex-col justify-end pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl"
          >
            <h1 className="font-heading font-extrabold text-5xl md:text-7xl text-white leading-tight mb-4 drop-shadow-lg">
              Pure Deshi Ghee
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 drop-shadow-md max-w-xl">
              Experience the richness of traditional A2 cow ghee, crafted with love by village artisans. A legacy of purity in every spoon.
            </p>
            <Link 
              href="/shop" 
              className="inline-flex bg-[#D4AF37] text-[#0A3622] px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-colors shadow-xl items-center gap-2"
            >
              Shop the Purity <ChevronRight size={20} />
            </Link>
          </motion.div>
        </div>

        {/* Manual Controls */}
        <div className="absolute z-20 bottom-8 left-0 right-0 flex justify-center items-center gap-6">
          <button onClick={prevSlide} className="p-2 rounded-full bg-black/20 text-white hover:bg-black/40 backdrop-blur-sm transition-all"><ChevronLeft size={24}/></button>
          <div className="flex gap-2">
            {carouselImages.map((_, idx) => (
              <button 
                key={idx} 
                onClick={() => setCurrentSlide(idx)}
                className={`w-3 h-3 rounded-full transition-all ${idx === currentSlide ? 'bg-[#D4AF37] scale-125' : 'bg-white/50 hover:bg-white/80'}`}
              />
            ))}
          </div>
          <button onClick={nextSlide} className="p-2 rounded-full bg-black/20 text-white hover:bg-black/40 backdrop-blur-sm transition-all"><ChevronRight size={24}/></button>
        </div>
      </section>

      {/* 2. Brand Introduction */}
      <section className="py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Leaf className="mx-auto text-[#0A3622] mb-6" size={40} />
          <h2 className="font-heading font-bold text-4xl text-foreground mb-6">Rooted in Village Heritage</h2>
          <p className="text-xl text-foreground/80 leading-relaxed font-medium">
            At RadhaRoop Dairy, we believe that the secret to true wellness lies in the traditions of our ancestors. We bring you 100% natural, farm-fresh Deshi Ghee, prepared exactly the way it has been for generations.
          </p>
        </div>
      </section>

      {/* 3. Ghee Process Video Section */}
      <section className="w-full bg-[#0A3622] relative overflow-hidden">
        <div className="relative aspect-video max-h-[70vh] w-full flex items-center justify-center">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-60"
            src="/ghee_process.mp4"
            ref={(el) => { if (el) el.playbackRate = 0.25; }}
          />
          <div className="absolute inset-0 bg-black/30 z-10" />
          <div className="relative z-20 text-center px-4">
            <h2 className="font-heading font-extrabold text-4xl md:text-6xl text-white mb-4 drop-shadow-xl">
              The Traditional Journey of Pure Deshi Ghee
            </h2>
            <p className="text-lg md:text-2xl text-[#E8F2EE] max-w-3xl mx-auto drop-shadow-md">
              Prepared through time-honored methods that preserve aroma, texture, nutrition, and authenticity.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Trust & Differentiation Section */}
      <section className="py-20 bg-[#FDFBF7] border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">Why Families Trust RadhaRoop Dairy</h2>
            <p className="text-lg text-foreground/70">Purity, tradition, and trust in every spoon.</p>
            <div className="w-16 h-1 bg-[#D4AF37] mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-border/50 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 bg-[#0A3622]/5 rounded-2xl flex items-center justify-center mb-6">
                <MapPin className="text-[#0A3622]" size={24} />
              </div>
              <h3 className="font-bold text-xl mb-3 text-foreground">Farm Fresh Origins</h3>
              <p className="text-foreground/70 leading-relaxed text-sm">Milk sourced directly from trusted village dairy farms, ensuring freshness, authenticity, and complete traceability from source to table.</p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-border/50 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 bg-[#0A3622]/5 rounded-2xl flex items-center justify-center mb-6">
                <Play className="text-[#0A3622]" size={24} />
              </div>
              <h3 className="font-bold text-xl mb-3 text-foreground">Traditional Bilona Method</h3>
              <p className="text-foreground/70 leading-relaxed text-sm">Prepared using the age-old Bilona process that preserves natural aroma, texture, nutrition, and authentic Deshi Ghee richness.</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-border/50 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 bg-[#0A3622]/5 rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck className="text-[#0A3622]" size={24} />
              </div>
              <h3 className="font-bold text-xl mb-3 text-foreground">100% Pure & Chemical-Free</h3>
              <p className="text-foreground/70 leading-relaxed text-sm">No preservatives, no artificial flavors, no chemical blending—only pure Deshi Ghee crafted with care and integrity.</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-border/50 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 bg-[#0A3622]/5 rounded-2xl flex items-center justify-center mb-6">
                <Leaf className="text-[#0A3622]" size={24} />
              </div>
              <h3 className="font-bold text-xl mb-3 text-foreground">Supporting Rural Communities</h3>
              <p className="text-foreground/70 leading-relaxed text-sm">Every purchase contributes to livelihood generation, fair employment opportunities, and the growth of village-based dairy ecosystems.</p>
            </div>
          </div>

          <div className="mt-16 flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-[#0A3622] font-semibold text-sm">
            <span className="flex items-center gap-2"><CheckCircle2 className="text-[#D4AF37]" size={20} /> Pure Cow Milk</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="text-[#D4AF37]" size={20} /> Bilona Churned</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="text-[#D4AF37]" size={20} /> No Preservatives</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="text-[#D4AF37]" size={20} /> In-House Production</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="text-[#D4AF37]" size={20} /> Quality Guaranteed</span>
          </div>
        </div>
      </section>

      {/* 5. Featured Products */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-2">Featured Collection</h2>
              <p className="text-foreground/60">Our finest selection of pure ghee.</p>
            </div>
            <Link href="/shop" className="text-[#0A3622] font-semibold hover:underline hidden sm:block">View All</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MOCK_PRODUCTS.slice(0, 3).map((product) => (
              <div key={product.sku} className="group bg-[#FDFBF7] rounded-[2rem] p-6 border border-border/50 hover:border-[#D4AF37] transition-all duration-300">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white mb-6 p-4">
                  <img src={product.image} alt={product.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                  {product.status === "Not Available" && (
                    <div className="absolute top-4 left-4 bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold">Out of Stock</div>
                  )}
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-xl text-foreground group-hover:text-[#0A3622] transition-colors">{product.name}</h3>
                  <p className="text-sm text-foreground/60">{product.usp}</p>
                  <div className="flex items-center justify-between pt-4">
                    <span className="font-bold text-2xl text-[#0A3622]">₹{product.price}</span>
                    <Link href={`/shop`} className="px-5 py-2 rounded-full bg-[#0A3622] text-white text-sm font-bold hover:bg-[#D4AF37] hover:text-[#0A3622] transition-colors">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Brand Story / Founder Story */}
      <section className="py-24 bg-[#0A3622] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')] opacity-20 mix-blend-multiply" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#D4AF37] rounded-3xl rotate-3 -z-10" />
              <img src="/founder.png" alt="Founder" className="rounded-3xl w-full max-w-md mx-auto object-cover aspect-[4/5] shadow-2xl" />
            </div>
            <div className="space-y-6">
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-white leading-tight">Empowering Villages,<br/>Nourishing Homes</h2>
              <p className="text-lg text-[#E8F2EE]/90 leading-relaxed">
                "Our journey started with a simple belief: everyone deserves the authentic, golden elixir that our grandparents used to make. We refuse to compromise on tradition, ensuring every jar is crafted with integrity, supporting rural ecosystems while bringing health to your dining table."
              </p>
              <div className="pt-8">
                <Link href="/founder" className="inline-block border-2 border-[#D4AF37] text-[#D4AF37] px-8 py-3 rounded-full font-bold hover:bg-[#D4AF37] hover:text-[#0A3622] transition-colors">
                  Meet Our Founder
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Contact CTA (WhatsApp) */}
      <section className="py-20 bg-[#FDFBF7] text-center">
        <div className="max-w-3xl mx-auto px-4">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-16 h-16 mx-auto mb-6" />
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">Have Questions About Bulk Orders?</h2>
          <p className="text-lg text-foreground/70 mb-8">Chat directly with our team on WhatsApp for fast responses and special wholesale pricing.</p>
          <a 
            href="https://wa.me/919616717512?text=Hello%20RadhaRoop%20Dairy,%20I%20have%20an%20inquiry." 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#1DA851] transition-transform hover:scale-105 shadow-xl"
          >
            Chat with Us Now
          </a>
        </div>
      </section>

    </div>
  );
}
