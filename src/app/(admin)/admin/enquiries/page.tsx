"use client";

import { MessageCircle } from "lucide-react";

export default function AdminEnquiries() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Customer Enquiries</h1>
        <p className="text-foreground/60 mt-1">View leads from the contact form.</p>
      </div>

      <div className="bg-card rounded-2xl border border-border/50 shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-muted/50 text-foreground/70 text-sm">
              <th className="p-4 font-medium border-b border-border/50">Date</th>
              <th className="p-4 font-medium border-b border-border/50">Name</th>
              <th className="p-4 font-medium border-b border-border/50">Contact</th>
              <th className="p-4 font-medium border-b border-border/50">Type</th>
              <th className="p-4 font-medium border-b border-border/50">Message</th>
              <th className="p-4 font-medium border-b border-border/50 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3].map((i) => (
              <tr key={i} className="border-b border-border/30 hover:bg-muted/20 transition-colors">
                <td className="p-4 text-foreground/70 text-sm">Oct 24, 2023</td>
                <td className="p-4 font-medium text-sm">Rahul Sharma</td>
                <td className="p-4 text-foreground/70 text-sm">+91 9876543210</td>
                <td className="p-4 text-sm"><span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-semibold">Retail</span></td>
                <td className="p-4 text-foreground/70 text-sm truncate max-w-[200px]">I would like to order 5 liters of ghee for a wedding...</td>
                <td className="p-4 text-right">
                  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-semibold text-[#25D366] hover:bg-[#25D366]/10 px-3 py-1.5 rounded-full transition-colors border border-[#25D366]/20">
                    <MessageCircle size={14} /> Reply
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
