/* 
  Design: Organic Tech - Service details page with flowing layout
  Detailed service cards with pricing and features
*/

import { Check, Laptop, Package, Globe, Wrench, Code, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Layanan() {
  const services = [
    {
      icon: Laptop,
      title: "Instalasi Laptop/PC",
      description: "Layanan instalasi dan perbaikan komputer profesional",
      image: "/images/service-installation.png",
      features: [
        "Instalasi sistem operasi (Windows, Linux)",
        "Upgrade RAM, SSD, dan hardware lainnya",
        "Pembersihan dan maintenance rutin",
        "Perbaikan hardware dan troubleshooting",
        "Optimasi performa komputer",
        "Backup dan recovery data",
      ],
    },
    {
      icon: Package,
      title: "Instalasi Aplikasi",
      description: "Instalasi software dan aplikasi untuk kebutuhan bisnis",
      image: "/images/service-software.png",
      features: [
        "Microsoft Office (Word, Excel, PowerPoint)",
        "Software desain (Photoshop, CorelDraw, dll)",
        "Aplikasi akuntansi dan keuangan",
        "Software antivirus dan keamanan",
        "Aplikasi multimedia dan editing",
        "Konfigurasi dan setup aplikasi",
      ],
    },
    {
      icon: Globe,
      title: "Pembuatan Website",
      description: "Website profesional untuk bisnis dan UMKM",
      image: "/images/service-website.png",
      features: [
        "Website profil perusahaan",
        "Toko online / E-commerce",
        "Website UMKM dan katalog produk",
        "Landing page promosi",
        "Website responsive (mobile-friendly)",
        "Domain dan hosting setup",
      ],
    },
  ];

  const additionalServices = [
    {
      icon: Wrench,
      title: "Maintenance & Support",
      description: "Pemeliharaan berkala dan dukungan teknis untuk memastikan sistem Anda berjalan optimal",
    },
    {
      icon: Code,
      title: "Custom Development",
      description: "Pengembangan aplikasi dan sistem khusus sesuai kebutuhan bisnis Anda",
    },
    {
      icon: Smartphone,
      title: "Konsultasi IT",
      description: "Konsultasi teknologi untuk membantu Anda memilih solusi terbaik",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Header */}
        <section className="py-16 md:py-20 bg-secondary/30">
          <div className="container text-center">
            <h1 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
              Layanan Kami
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              Solusi teknologi lengkap untuk mendukung kebutuhan bisnis dan personal Anda
            </p>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="space-y-16 md:space-y-24">
              {services.map((service, index) => {
                const Icon = service.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <div 
                    key={index}
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center ${
                      isEven ? "" : "lg:grid-flow-dense"
                    }`}
                  >
                    {/* Image */}
                    <div className={`${isEven ? "" : "lg:col-start-2"}`}>
                      <div className="rounded-3xl overflow-hidden soft-shadow aspect-square">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`${isEven ? "" : "lg:col-start-1 lg:row-start-1"}`}>
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                        <Icon className="text-primary" size={32} />
                      </div>
                      
                      <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
                        {service.title}
                      </h2>
                      
                      <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                        {service.description}
                      </p>

                      <ul className="space-y-3 mb-8">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Check className="text-accent" size={14} />
                            </div>
                            <span className="text-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Button 
                        asChild 
                        size="lg" 
                        className="rounded-full smooth-transition hover:scale-105"
                      >
                        <a href="https://wa.me/6283160077367" target="_blank" rel="noopener noreferrer">
                          Konsultasi Gratis
                        </a>
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
                Layanan Tambahan
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Dukungan lengkap untuk semua kebutuhan teknologi Anda
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {additionalServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card 
                    key={index}
                    className="soft-shadow hover:soft-shadow-lg smooth-transition hover:-translate-y-2 border-0"
                  >
                    <CardHeader>
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="text-primary" size={24} />
                      </div>
                      <CardTitle className="font-display text-xl">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24">
          <div className="container">
            <Card className="soft-shadow-lg border-0 overflow-hidden">
              <CardContent className="p-8 md:p-12 text-center bg-gradient-to-br from-primary to-primary/80">
                <h2 className="font-display font-bold text-3xl md:text-4xl text-primary-foreground mb-4">
                  Butuh Konsultasi?
                </h2>
                <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                  Hubungi kami untuk mendapatkan konsultasi gratis dan penawaran terbaik sesuai kebutuhan Anda
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    asChild 
                    size="lg" 
                    variant="secondary"
                    className="rounded-full smooth-transition hover:scale-105"
                  >
                    <a href="https://wa.me/6283160077367" target="_blank" rel="noopener noreferrer">
                      WhatsApp
                    </a>
                  </Button>
                  <Button 
                    asChild 
                    size="lg" 
                    variant="outline"
                    className="rounded-full smooth-transition hover:scale-105 bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                  >
                    <a href="https://instagram.com/barito.solution" target="_blank" rel="noopener noreferrer">
                      Instagram
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
