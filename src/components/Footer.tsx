import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  MessageSquare,
  Youtube,
  Star,
  Award,
  Users,
  ChefHat
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Catering Pernikahan",
    "Corporate Catering",
    "Catering Acara Spesial",
    "Snack & Coffee Break",
    "Prasmanan Harian",
    "Catering Keluarga"
  ];

  const quickLinks = [
    { name: "Tentang Kami", href: "#about" },
    { name: "Layanan", href: "#layanan" },
    { name: "Menu", href: "#menu" },
    { name: "Galeri", href: "#galeri" },
    { name: "Testimoni", href: "#testimoni" },
    { name: "Kontak", href: "#kontak" }
  ];

  const achievements = [
    { icon: Star, number: "4.9", label: "Rating Google" },
    { icon: Users, number: "1500+", label: "Klien Puas" },
    { icon: Award, number: "10+", label: "Tahun Pengalaman" },
    { icon: ChefHat, number: "50+", label: "Menu Pilihan" }
  ];

  return (
    <footer className="bg-gradient-to-b from-muted/30 to-muted/60">
      {/* Newsletter Section */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Dapatkan Penawaran Spesial & Tips Kuliner
            </h3>
            <p className="text-muted-foreground mb-8">
              Berlangganan newsletter kami untuk mendapatkan promo eksklusif, menu terbaru, dan tips acara
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Masukkan email Anda..." 
                className="flex-1"
              />
              <Button variant="hero">
                Berlangganan
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              *Kami menghargai privasi Anda. Tidak ada spam, hanya konten berkualitas.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-primary mb-3">CateringKu</h2>
              <p className="text-muted-foreground leading-relaxed">
                Menyajikan cita rasa terbaik Indonesia dengan standar kualitas internasional. 
                Terpercaya lebih dari 10 tahun melayani berbagai acara spesial.
              </p>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Ikuti Kami</h4>
              <div className="flex gap-3">
                <Button variant="outline" size="icon" className="hover:bg-blue-600 hover:text-white hover:border-blue-600">
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="hover:bg-pink-600 hover:text-white hover:border-pink-600">
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="hover:bg-green-600 hover:text-white hover:border-green-600">
                  <MessageSquare className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="hover:bg-red-600 hover:text-white hover:border-red-600">
                  <Youtube className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Layanan Kami</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#layanan" 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Menu Cepat</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Kontak Kami</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">
                    Jl. Raya Kemang No. 123<br />
                    Jakarta Selatan 12560
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">+62 812-3456-7890</p>
                  <p className="text-sm text-muted-foreground">+62 821-9876-5432</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">info@cateringku.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">
                    Senin - Sabtu: 08:00 - 22:00<br />
                    Minggu: 09:00 - 21:00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <Separator className="my-12" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/20 rounded-full mb-3 mx-auto">
                <achievement.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground">{achievement.number}</div>
              <div className="text-sm text-muted-foreground">{achievement.label}</div>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <Separator className="mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © {currentYear} CateringKu. Semua hak dilindungi. 
            <span className="ml-2">Dibuat dengan ❤️ di Indonesia</span>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Kebijakan Privasi
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Syarat & Ketentuan
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              FAQ
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;