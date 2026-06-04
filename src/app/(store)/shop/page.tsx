"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useState } from "react";

import { MOCK_PRODUCTS } from "@/lib/constants";

export default function ShopPage() {
  const [filter, setFilter] = useState("All");
  
  // This will eventually be dynamic categories from Sheets
  const categories = ["All", "Ghee", "Honey", "Spices"];

  const filteredProducts = MOCK_PRODUCTS.filter(p => filter === "All" || p.category === filter);

  return (
    <div className="bg-background min-h-screen pb-24">
      {/* Header */}
      <div className="bg-primary/5 py-16 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4"
          >
            Our Pure Ghee
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-foreground/70 max-w-2xl mx-auto text-lg"
          >
            Authentic, traditional, and crafted with love. Browse our collection of pure Deshi Ghee.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, idx) => {
            const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100);
            const isAvailable = product.status === "Available";

            return (
              <motion.div
                key={product.sku}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`bg-card rounded-2xl border border-border/50 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 relative group flex flex-col ${!isAvailable && "opacity-70 grayscale-[30%]"}`}
              >
                {!isAvailable && (
                  <div className="absolute top-6 -right-12 bg-destructive text-destructive-foreground px-12 py-1 rotate-45 z-20 text-xs font-bold shadow-sm">
                    Out of Stock
                  </div>
                )}
                {isAvailable && discount > 0 && (
                  <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-bold z-10 shadow-sm border border-secondary-foreground/10">
                    Save {discount}%
                  </div>
                )}
                
                <div className="aspect-square bg-muted relative overflow-hidden">
                   {/* Product Image Placeholder */}
                   <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 mix-blend-multiply" />
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-xs text-primary font-bold uppercase tracking-wider mb-2">{product.usp}</div>
                  <h3 className="font-heading font-bold text-xl text-foreground mb-2 line-clamp-2">{product.name}</h3>
                  
                  <div className="flex gap-2 text-xs text-foreground/60 mb-4 flex-wrap">
                    {product.highlights.map(h => (
                      <span key={h} className="bg-primary/5 px-2 py-1 rounded-md border border-primary/10">{h}</span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-foreground">₹{product.price}</span>
                      {discount > 0 && (
                        <span className="text-sm text-foreground/50 line-through ml-2">₹{product.mrp}</span>
                      )}
                    </div>
                  </div>

                  <div className="mt-6 flex gap-3">
                    <button 
                      disabled={!isAvailable}
                      className={`flex-grow py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all ${
                        isAvailable 
                          ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md" 
                          : "bg-muted text-muted-foreground cursor-not-allowed"
                      }`}
                    >
                      <ShoppingBag size={18} />
                      {isAvailable ? "Add to Cart" : "Sold Out"}
                    </button>
                    
                    <a 
                      href={`https://wa.me/919616717512?text=Hello,%20I%20want%20to%20enquire%20about%20${encodeURIComponent(product.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl border border-[#25D366] text-[#25D366] flex items-center justify-center hover:bg-[#25D366] transition-colors group/wa"
                    >
                      <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-6 h-6 filter invert-0 brightness-100 group-hover/wa:brightness-0 group-hover/wa:invert" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
