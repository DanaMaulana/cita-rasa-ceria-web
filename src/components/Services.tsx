import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Heart, 
  Building2, 
  PartyPopper, 
  Coffee, 
  Utensils,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Catering Pernikahan",
      description: "Sajikan momen bahagia dengan menu spesial pernikahan yang tak terlupakan",
      features: ["Menu prasmanan lengkap", "Dekorasi buffet elegan", "Pelayan profesional", "Setup & cleanup"],
      price: "Mulai dari Rp 45.000/porsi",
      color: "text-red-500"
    },
    {
      icon: Building2,
      title: "Catering Corporate",
      description: "Solusi catering profesional untuk acara kantor, meeting, dan gathering",
      features: ["Menu box/prasmanan", "Delivery tepat waktu", "Invoice & laporan", "Paket hemat bulk"],
      price: "Mulai dari Rp 25.000/porsi",
      color: "text-blue-500"
    },
    {
      icon: PartyPopper,
      title: "Catering Acara Spesial",
      description: "Rayakan ulang tahun, arisan, dan acara keluarga dengan cita rasa istimewa",
      features: ["Menu custom sesuai tema", "Hiasan meja cantik", "Peralatan makan lengkap", "Fotografer makanan"],
      price: "Mulai dari Rp 35.000/porsi",
      color: "text-primary"
    },
    {
      icon: Coffee,
      title: "Snack & Coffee Break",
      description: "Cemilan dan minuman segar untuk meeting, seminar, dan acara formal",
      features: ["Aneka snack tradisional", "Kopi & teh premium", "Presentasi menarik", "Porsi fleksibel"],
      price: "Mulai dari Rp 15.000/porsi",
      color: "text-amber-600"
    },
    {
      icon: Utensils,
      title: "Prasmanan Harian",
      description: "Layanan catering harian untuk kantin, mess, dan kebutuhan rutin",
      features: ["Menu berubah setiap hari", "Gizi seimbang", "Harga ekonomis", "Kontrak jangka panjang"],
      price: "Mulai dari Rp 20.000/porsi",
      color: "text-secondary"
    },
    {
      icon: Users,
      title: "Catering Keluarga",
      description: "Solusi praktis untuk acara keluarga besar dengan rasa rumahan",
      features: ["Menu khas nusantara", "Porsi keluarga besar", "Rasa autentik", "Harga terjangkau"],
      price: "Mulai dari Rp 30.000/porsi",
      color: "text-green-600"
    }
  ];

  return (
    <section id="layanan" className="py-20 bg-warm-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            🍽️ Layanan Terbaik Kami
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Layanan Catering Lengkap
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dari acara intimate hingga grand celebration, kami siap melayani semua kebutuhan catering Anda 
            dengan standar kualitas tinggi dan harga yang kompetitif.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-warm transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r from-primary/10 to-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-8 h-8 ${service.color}`} />
                </div>
                <CardTitle className="text-xl text-foreground mb-2">{service.title}</CardTitle>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-4 border-t border-border">
                  <div className="text-lg font-bold text-primary mb-3">{service.price}</div>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Konsultasi Sekarang
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg" className="px-8 py-4">
            Lihat Semua Paket Layanan
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;