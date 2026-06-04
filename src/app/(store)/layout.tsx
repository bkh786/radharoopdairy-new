import { Navbar } from "@/components/store/Navbar";
import { Footer } from "@/components/store/Footer";
import { FloatingWhatsApp } from "@/components/store/FloatingWhatsApp";

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
