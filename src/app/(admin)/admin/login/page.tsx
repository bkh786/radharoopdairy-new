"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock } from "lucide-react";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple placeholder auth for MVP
    if (password === "radharoop2026") {
      // In a real app, set an HTTP-only cookie or session token here
      router.push("/admin");
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-card p-8 rounded-3xl shadow-xl border border-border/50 text-center">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Lock className="text-primary" size={32} />
        </div>
        <h1 className="font-heading font-bold text-3xl text-foreground mb-2">Admin Dashboard</h1>
        <p className="text-foreground/60 mb-8">Secure login for RadhaRoop Dairy</p>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2 text-left">
            <label className="text-sm font-medium text-foreground/80">Admin Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(false); }}
              className="w-full bg-background border border-border px-4 py-3 rounded-xl focus:outline-none focus:border-primary transition-colors" 
              placeholder="Enter password" 
            />
            {error && <p className="text-destructive text-sm mt-1">Incorrect password</p>}
          </div>
          
          <button type="submit" className="w-full bg-primary text-primary-foreground px-8 py-3.5 rounded-xl font-bold hover:bg-primary/90 transition-colors shadow-md">
            Secure Login
          </button>
        </form>
      </div>
    </div>
  );
}
