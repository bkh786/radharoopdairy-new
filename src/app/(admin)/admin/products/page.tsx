"use client";

import { Plus, Edit2, Trash2 } from "lucide-react";

export default function AdminProducts() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Manage Products</h1>
          <p className="text-foreground/60 mt-1">Add, edit, or remove products from your store.</p>
        </div>
        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-primary/90 transition-colors shadow-sm font-medium">
          <Plus size={18} /> Add Product
        </button>
      </div>

      <div className="bg-card rounded-2xl border border-border/50 shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-muted/50 text-foreground/70 text-sm">
              <th className="p-4 font-medium border-b border-border/50">Product Name</th>
              <th className="p-4 font-medium border-b border-border/50">Category</th>
              <th className="p-4 font-medium border-b border-border/50">Price</th>
              <th className="p-4 font-medium border-b border-border/50">Status</th>
              <th className="p-4 font-medium border-b border-border/50 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3].map((i) => (
              <tr key={i} className="border-b border-border/30 hover:bg-muted/20 transition-colors">
                <td className="p-4 font-medium">Pure A2 Cow Deshi Ghee</td>
                <td className="p-4 text-foreground/70">Ghee</td>
                <td className="p-4 text-foreground/70">₹1199</td>
                <td className="p-4">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">Available</span>
                </td>
                <td className="p-4 text-right space-x-2">
                  <button className="p-2 text-foreground/60 hover:text-primary transition-colors bg-background rounded-lg border border-border"><Edit2 size={16} /></button>
                  <button className="p-2 text-foreground/60 hover:text-destructive transition-colors bg-background rounded-lg border border-border"><Trash2 size={16} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
