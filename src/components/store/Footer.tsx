import Link from "next/link";
import { Facebook, Instagram, Youtube, Linkedin, MapPin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-16 pb-8 border-t-4 border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & Story */}
          <div className="md:col-span-1">
            <h3 className="font-heading font-bold text-2xl mb-4 text-primary">RadhaRoop Dairy</h3>
            <p className="text-background/80 text-sm leading-relaxed mb-6">
              Pure Deshi Ghee crafted the traditional way. Rooted in village traditions, delivered with purity to your home. No preservatives, 100% natural.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-background/80 hover:text-primary transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-background/80 hover:text-primary transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-background/80 hover:text-primary transition-colors"><Youtube size={20} /></a>
              <a href="#" className="text-background/80 hover:text-primary transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-primary-foreground">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/shop" className="text-background/80 hover:text-primary transition-colors">Shop Products</Link></li>
              <li><Link href="/story" className="text-background/80 hover:text-primary transition-colors">Our Story</Link></li>
              <li><Link href="/process" className="text-background/80 hover:text-primary transition-colors">Our Process</Link></li>
              <li><Link href="/founder" className="text-background/80 hover:text-primary transition-colors">Founder's Message</Link></li>
              <li><Link href="/contact" className="text-background/80 hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-primary-foreground">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span className="text-background/80">Village RadhaRoop, District,<br />Uttar Pradesh, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <a href="tel:+919616717512" className="text-background/80 hover:text-primary transition-colors">+91 96167 17512</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <a href="mailto:hello@radharoopdairy.com" className="text-background/80 hover:text-primary transition-colors">hello@radharoopdairy.com</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-primary-foreground">Stay Updated</h4>
            <p className="text-background/80 text-sm mb-4">Subscribe to our newsletter for traditional recipes and updates.</p>
            <form className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-background/10 border border-background/20 text-background px-4 py-2 rounded-md focus:outline-none focus:border-primary placeholder:text-background/50 text-sm"
              />
              <button 
                type="submit" 
                className="bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium hover:bg-primary/90 transition-colors text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-background/60">
          <p>&copy; {new Date().getFullYear()} RadhaRoop Dairy. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="/admin/login" className="hover:text-primary transition-colors">Admin Login</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
