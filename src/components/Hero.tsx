import { Button } from "@/components/ui/button";
import { Star, Users, Award, Clock } from "lucide-react";
import heroImage from "@/assets/hero-catering.jpg";

const Hero = () => {
  return (
    <section id="beranda" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              🍽️ Catering Terpercaya & Berkualitas #1
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Sajikan Cita Rasa
            <span className="text-primary block"> Terbaik</span>
            Untuk Acara Istimewa Anda
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Dengan pengalaman lebih dari 10 tahun, kami menyediakan layanan catering premium 
            dengan menu autentik Indonesia dan internasional untuk berbagai acara special Anda.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Konsultasi Gratis
            </Button>
            <Button variant="warm" size="lg" className="text-lg px-8 py-4">
              Lihat Menu Lengkap
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/20 rounded-full mb-3 mx-auto">
                <Star className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground">4.9</div>
              <div className="text-sm text-muted-foreground">Rating Google</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-secondary/20 rounded-full mb-3 mx-auto">
                <Users className="w-6 h-6 text-secondary" />
              </div>
              <div className="text-2xl font-bold text-foreground">1500+</div>
              <div className="text-sm text-muted-foreground">Klien Puas</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-accent/20 rounded-full mb-3 mx-auto">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <div className="text-2xl font-bold text-foreground">10+</div>
              <div className="text-sm text-muted-foreground">Tahun Pengalaman</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-primary-glow/20 rounded-full mb-3 mx-auto">
                <Clock className="w-6 h-6 text-primary-glow" />
              </div>
              <div className="text-2xl font-bold text-foreground">24/7</div>
              <div className="text-sm text-muted-foreground">Layanan Konsultasi</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;