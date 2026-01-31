/* 
  Design: Organic Tech - Asymmetric flow layout with organic shapes
  Hero section with custom generated background
  Service preview cards with soft shadows
*/

import { ArrowRight, Laptop, Globe, Package } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  const services = [
    {
      icon: Laptop,
      title: "Instalasi Laptop/PC",
      description: "Instalasi sistem operasi, upgrade hardware, dan perbaikan komputer profesional.",
      image: "/images/service-installation.png",
    },
    {
      icon: Package,
      title: "Instalasi Aplikasi",
      description: "Instalasi Microsoft Office, software desain, dan aplikasi bisnis lainnya.",
      image: "/images/service-software.png",
    },
    {
      icon: Globe,
      title: "Pembuatan Website",
      description: "Website profesional untuk UMKM, toko online, dan profil bisnis Anda.",
      image: "/images/service-website.png",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "url(/images/hero-bg.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
          
          {/* Content */}
          <div className="container relative z-10 py-16 md:py-24 lg:py-32">
            <div className="max-w-3xl">
              <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                Solusi Teknologi Terpercaya untuk Bisnis Anda
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                Barito Solution menyediakan layanan instalasi komputer, aplikasi, dan pembuatan website profesional untuk mendukung kebutuhan teknologi Anda.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                <Button 
                  asChild 
                  size="lg" 
                  className="rounded-full smooth-transition hover:scale-105 soft-shadow"
                >
                  <Link href="/layanan">
                    <span className="flex items-center gap-2">
                      Lihat Layanan
                      <ArrowRight size={18} />
                    </span>
                  </Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg" 
                  className="rounded-full smooth-transition hover:scale-105"
                >
                  <a href="https://wa.me/6283160077367" target="_blank" rel="noopener noreferrer">
                    Hubungi Kami
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
                Layanan Kami
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Kami menyediakan berbagai layanan teknologi untuk membantu bisnis dan kebutuhan personal Anda
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card 
                    key={index}
                    className="soft-shadow hover:soft-shadow-lg smooth-transition hover:-translate-y-2 border-0 overflow-hidden group"
                  >
                    <CardContent className="p-0">
                      {/* Image */}
                      <div className="aspect-square overflow-hidden bg-secondary/30">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-full object-cover smooth-transition group-hover:scale-105"
                        />
                      </div>
                      
                      {/* Content */}
                      <div className="p-6">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                          <Icon className="text-primary" size={24} />
                        </div>
                        <h3 className="font-display font-semibold text-xl text-foreground mb-3">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="text-center mt-12">
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="rounded-full smooth-transition hover:scale-105"
              >
                <Link href="/layanan">
                  <span className="flex items-center gap-2">
                    Lihat Semua Layanan
                    <ArrowRight size={18} />
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary">
          <div className="container text-center">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary-foreground mb-4">
              Siap Memulai Proyek Anda?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Hubungi kami sekarang untuk konsultasi gratis dan dapatkan solusi teknologi terbaik untuk kebutuhan Anda
            </p>
            <Button 
              asChild 
              size="lg" 
              variant="secondary"
              className="rounded-full smooth-transition hover:scale-105 soft-shadow"
            >
              <a href="https://wa.me/6283160077367" target="_blank" rel="noopener noreferrer">
                Hubungi via WhatsApp
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
