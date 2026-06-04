"use client";

import { Package, MessageSquare, TrendingUp, Users } from "lucide-react";

export default function AdminDashboard() {
  const stats = [
    { name: "Total Products", value: "12", icon: Package, change: "+2 this month" },
    { name: "Total Enquiries", value: "48", icon: MessageSquare, change: "+12 this week" },
    { name: "Website Visitors", value: "1,245", icon: Users, change: "+15% vs last month" },
    { name: "Conversion Rate", value: "3.8%", icon: TrendingUp, change: "+0.4% vs last month" },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Dashboard Overview</h1>
        <p className="text-foreground/60 mt-1">Welcome back. Here's what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-card p-6 rounded-2xl border border-border/50 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-primary/10 rounded-xl">
                <stat.icon className="text-primary" size={24} />
              </div>
            </div>
            <h3 className="text-foreground/60 text-sm font-medium">{stat.name}</h3>
            <p className="text-3xl font-bold text-foreground mt-1 mb-2">{stat.value}</p>
            <p className="text-xs text-primary font-medium">{stat.change}</p>
          </div>
        ))}
      </div>

      {/* Recent Activity Placeholder */}
      <div className="bg-card rounded-2xl border border-border/50 shadow-sm p-6">
        <h2 className="text-xl font-bold text-foreground mb-6">Recent Enquiries</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-background rounded-xl border border-border">
              <div className="flex flex-col">
                <span className="font-semibold text-foreground">Rahul Sharma</span>
                <span className="text-sm text-foreground/60">Enquired about Pure A2 Cow Deshi Ghee</span>
              </div>
              <span className="text-sm text-foreground/50">{i} hour{i > 1 ? 's' : ''} ago</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
