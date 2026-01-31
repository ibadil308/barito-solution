/* Design: Organic Tech - About page with contact info and map
  Map integration: Fixed using Iframe for stability
*/

import { MapPin, Phone, Instagram, Globe, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// import { MapView } from "@/components/Map"; // Hapus ini karena butuh API Key
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import { useRef } from "react"; // Tidak lagi diperlukan

export default function Tentang() {
  // Koordinat toko Anda: -0.959743, 114.905878
  // Link ini mengarah ke koordinat tersebut
  const googleMapsEmbedUrl = "https://maps.google.com/maps?q=-0.959743,114.905878&hl=id&z=16&output=embed";

  const contactInfo = [
    {
      icon: Phone,
      label: "WhatsApp",
      value: "083160077367",
      link: "https://wa.me/6283160077367",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@barito.solution",
      link: "https://instagram.com/barito.solution",
    },
    {
      icon: Globe,
      label: "Website",
      value: "baritosol.my.id",
      link: "https://baritosol.my.id",
    },
  ];

  const workingHours = [
    { day: "Senin - Jumat", hours: "09:00 - 17:00" },
    { day: "Sabtu", hours: "09:00 - 15:00" },
    { day: "Minggu", hours: "Tutup" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Header */}
        <section 
          className="py-16 md:py-20 relative overflow-hidden"
          style={{
            backgroundImage: "url(/images/about-pattern.jpg)", // Pastikan gambar ini ada, atau ganti dengan bg-color
            backgroundColor: "#f3f4f6", // Fallback color
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container text-center relative z-10">
            <h1 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
              Tentang Kami
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              Partner terpercaya untuk solusi teknologi Anda
            </p>
          </div>
        </section>

        {/* About Content */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center mb-16">
              {/* Image */}
              <div className="rounded-3xl overflow-hidden soft-shadow">
                <img 
                  src="/images/hero-workspace.jpg" 
                  alt="Workspace"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
              </div>

              {/* Content */}
              <div>
                <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6">
                  Barito Solution
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Barito Solution adalah penyedia layanan teknologi yang berfokus pada solusi komputer, instalasi aplikasi, dan pengembangan website. Kami berkomitmen untuk memberikan layanan berkualitas tinggi dengan harga yang kompetitif.
                  </p>
                  <p>
                    Dengan pengalaman dan keahlian di bidang teknologi informasi, kami siap membantu Anda mengatasi berbagai tantangan teknologi, mulai dari instalasi hardware dan software hingga pembuatan website profesional untuk bisnis Anda.
                  </p>
                  <p>
                    Tim kami terdiri dari teknisi berpengalaman yang siap memberikan solusi terbaik dan dukungan teknis yang responsif untuk memastikan sistem teknologi Anda berjalan dengan optimal.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <Card 
                    key={index}
                    className="soft-shadow hover:soft-shadow-lg smooth-transition hover:-translate-y-2 border-0"
                  >
                    <CardContent className="p-6 text-center">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <Icon className="text-primary" size={28} />
                      </div>
                      <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                        {contact.label}
                      </h3>
                      <a 
                        href={contact.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary smooth-transition"
                      >
                        {contact.value}
                      </a>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Working Hours */}
            <Card className="soft-shadow border-0 mb-16">
              <CardContent className="p-8 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Clock className="text-primary" size={24} />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-foreground">
                    Jam Operasional
                  </h3>
                </div>
                <div className="space-y-3">
                  {workingHours.map((schedule, index) => (
                    <div 
                      key={index}
                      className="flex justify-between items-center py-3 border-b border-border last:border-0"
                    >
                      <span className="text-foreground font-medium">{schedule.day}</span>
                      <span className="text-muted-foreground">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Map Section - FIXED */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="text-primary" size={24} />
                </div>
                <h3 className="font-display font-bold text-2xl text-foreground">
                  Lokasi Kami
                </h3>
              </div>
              
              {/* Google Maps Iframe */}
              <div className="w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden soft-shadow bg-secondary/20 relative">
                <iframe 
                  src={googleMapsEmbedUrl}
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Toko Ulis PONSEL"
                  className="absolute inset-0"
                />
              </div>
              
              {/* Address Info */}
              <div className="mt-6 p-6 bg-card rounded-2xl soft-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-lg text-foreground mb-2">
                      Alamat Lengkap
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Ulis PONSEL, Pasar Pendopo, Melayu<br />
                      Kec. Teweh Tengah, Kabupaten Barito Utara<br />
                      Kalimantan Tengah
                    </p>
                    <Button 
                      variant="link" 
                      className="p-0 h-auto mt-2 text-primary hover:no-underline hover:opacity-80"
                      asChild
                    >
                      <a 
                        href={`https://www.google.com/maps/search/?api=1&query=-0.959743,114.905878`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Buka di Google Maps &rarr;
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-primary">
          <div className="container text-center">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary-foreground mb-4">
              Mari Bekerja Sama
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Hubungi kami untuk konsultasi gratis dan temukan solusi teknologi yang tepat untuk kebutuhan Anda
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                variant="secondary"
                className="rounded-full smooth-transition hover:scale-105"
              >
                <a href="https://wa.me/6283160077367" target="_blank" rel="noopener noreferrer">
                  Hubungi via WhatsApp
                </a>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline"
                className="rounded-full smooth-transition hover:scale-105 bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <a href="https://instagram.com/barito.solution" target="_blank" rel="noopener noreferrer">
                  Follow Instagram
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
