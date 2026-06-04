"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    state: "",
    city: "",
    distributionType: "Retail",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    const text = `New Website Enquiry\n\nDistribution Type: ${formData.distributionType}\n\nName: ${formData.name}\nContact: ${formData.contact}\nEmail: ${formData.email}\nState: ${formData.state}\nCity: ${formData.city}\n\nMessage:\n${formData.message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/919616717512?text=${encodedText}`, "_blank");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This will be connected to Google Sheets API later
    alert("Form submitted successfully! (Google Sheets integration pending)");
  };

  return (
    <div className="bg-background min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">Contact Us</h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8" />
          <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto">
            Have questions about our pure Deshi Ghee? Interested in bulk orders or distribution? We'd love to hear from you.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card p-8 md:p-12 rounded-3xl shadow-lg border border-border/50"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/80">Full Name</label>
                <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-background border border-border px-4 py-3 rounded-xl focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/80">Contact Number</label>
                <input required type="tel" name="contact" value={formData.contact} onChange={handleChange} className="w-full bg-background border border-border px-4 py-3 rounded-xl focus:outline-none focus:border-primary transition-colors" placeholder="+91 XXXXX XXXXX" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/80">Email Address</label>
                <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-background border border-border px-4 py-3 rounded-xl focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/80">Distribution Type</label>
                <select name="distributionType" value={formData.distributionType} onChange={handleChange} className="w-full bg-background border border-border px-4 py-3 rounded-xl focus:outline-none focus:border-primary transition-colors">
                  <option value="Retail">Retail Customer</option>
                  <option value="Wholesale">Wholesale / Bulk</option>
                  <option value="Distributor">Distributorship</option>
                  <option value="Other">Other Enquiry</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/80">State</label>
                <input required type="text" name="state" value={formData.state} onChange={handleChange} className="w-full bg-background border border-border px-4 py-3 rounded-xl focus:outline-none focus:border-primary transition-colors" placeholder="Uttar Pradesh" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/80">City</label>
                <input required type="text" name="city" value={formData.city} onChange={handleChange} className="w-full bg-background border border-border px-4 py-3 rounded-xl focus:outline-none focus:border-primary transition-colors" placeholder="Varanasi" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground/80">Your Message</label>
              <textarea required name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full bg-background border border-border px-4 py-3 rounded-xl focus:outline-none focus:border-primary transition-colors resize-none" placeholder="How can we help you?" />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button type="submit" className="flex-1 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 shadow-md">
                <Send size={18} /> Submit Enquiry
              </button>
              <button type="button" onClick={handleWhatsApp} className="flex-1 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#20b858] transition-colors flex items-center justify-center gap-2 shadow-md">
                <MessageCircle size={18} /> Send via WhatsApp
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
