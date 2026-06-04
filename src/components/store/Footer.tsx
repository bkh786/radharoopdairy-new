import Link from "next/link";
import { MapPin, Mail, Phone, ShieldCheck, Leaf, Award } from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="relative bg-[#0A3622] text-[#E8F2EE] pt-20 pb-10 overflow-hidden">
      {/* Decorative Village Pattern Background overlay */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5C35 5 40 10 40 15C40 20 35 25 30 25C25 25 20 20 20 15C20 10 25 5 30 5ZM30 10C27.2 10 25 12.2 25 15C25 17.8 27.2 20 30 20C32.8 20 35 17.8 35 15C35 12.2 32.8 10 30 10ZM30 35C40 35 50 40 50 50V55H10V50C10 40 20 35 30 35ZM30 40C22.5 40 15.6 43.8 15.1 49.9L15 50H45L44.9 49.9C44.4 43.8 37.5 40 30 40Z' fill='%23FFFFFF' fill-rule='evenodd'/%3E%3C/svg%3E\")",
          backgroundSize: "60px 60px"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Trust Badges Row */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16 pb-12 border-b border-[#E8F2EE]/10">
          <div className="flex flex-col items-center text-center gap-2">
            <ShieldCheck size={40} className="text-[#D4AF37]" />
            <span className="text-sm font-semibold tracking-widest uppercase">FSSAI Certified</span>
          </div>
          <div className="flex flex-col items-center text-center gap-2">
            <Leaf size={40} className="text-[#D4AF37]" />
            <span className="text-sm font-semibold tracking-widest uppercase">100% Organic</span>
          </div>
          <div className="flex flex-col items-center text-center gap-2">
            <Award size={40} className="text-[#D4AF37]" />
            <span className="text-sm font-semibold tracking-widest uppercase">ISO 9001:2015</span>
          </div>
          <div className="flex flex-col items-center text-center gap-2">
            <ShieldCheck size={40} className="text-[#D4AF37]" />
            <span className="text-sm font-semibold tracking-widest uppercase">GMP Practice</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Col */}
          <div className="space-y-6">
            <h3 className="font-heading font-bold text-3xl text-white">RadhaRoop <span className="text-[#D4AF37] italic">Dairy</span></h3>
            <p className="text-[#E8F2EE]/80 leading-relaxed text-sm">
              Pure Deshi Ghee crafted the traditional way. Rooted in village traditions, delivered with purity to your home. No preservatives, 100% natural.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#E8F2EE]/10 flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#0A3622] transition-colors"><FaFacebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#E8F2EE]/10 flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#0A3622] transition-colors"><FaInstagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#E8F2EE]/10 flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#0A3622] transition-colors"><FaYoutube size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#E8F2EE]/10 flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#0A3622] transition-colors"><FaLinkedin size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-6 tracking-wider uppercase text-sm">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/shop" className="text-[#E8F2EE]/80 hover:text-[#D4AF37] transition-colors text-sm">Shop Products</Link></li>
              <li><Link href="/story" className="text-[#E8F2EE]/80 hover:text-[#D4AF37] transition-colors text-sm">Our Story</Link></li>
              <li><Link href="/founder" className="text-[#E8F2EE]/80 hover:text-[#D4AF37] transition-colors text-sm">Founder's Message</Link></li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="font-bold text-white mb-6 tracking-wider uppercase text-sm">Policies</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-[#E8F2EE]/80 hover:text-[#D4AF37] transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link href="#" className="text-[#E8F2EE]/80 hover:text-[#D4AF37] transition-colors text-sm">Shipping Policy</Link></li>
              <li><Link href="#" className="text-[#E8F2EE]/80 hover:text-[#D4AF37] transition-colors text-sm">Refund Policy</Link></li>
              <li><Link href="#" className="text-[#E8F2EE]/80 hover:text-[#D4AF37] transition-colors text-sm">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-6 tracking-wider uppercase text-sm">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-[#E8F2EE]/80 text-sm">
                <MapPin className="text-[#D4AF37] mt-1 flex-shrink-0" size={18} />
                <span>RadhaRoop Dairy Farm, Village Post, District, Uttar Pradesh, India</span>
              </li>
              <li className="flex items-center gap-3 text-[#E8F2EE]/80 text-sm">
                <Phone className="text-[#D4AF37] flex-shrink-0" size={18} />
                <span>+91 9616717512</span>
              </li>
              <li className="flex items-center gap-3 text-[#E8F2EE]/80 text-sm">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-[18px] h-[18px] flex-shrink-0 filter invert-0 brightness-200" style={{ filter: 'brightness(0) saturate(100%) invert(88%) sepia(31%) saturate(735%) hue-rotate(345deg) brightness(92%) contrast(85%)' }} />
                <a href="https://wa.me/919616717512" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors">Chat on WhatsApp</a>
              </li>
              <li className="flex items-center gap-3 text-[#E8F2EE]/80 text-sm">
                <Mail className="text-[#D4AF37] flex-shrink-0" size={18} />
                <span>hello@radharoopdairy.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#E8F2EE]/10 mt-16 pt-8 text-center text-sm text-[#E8F2EE]/60">
          <p>&copy; {new Date().getFullYear()} RadhaRoop Dairy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
