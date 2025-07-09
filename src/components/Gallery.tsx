import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Heart, Share2, Users, Calendar, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-catering.jpg";
import nasiGudegImage from "@/assets/nasi-gudeg.jpg";
import gadoGadoImage from "@/assets/gado-gado.jpg";
import rendangImage from "@/assets/rendang.jpg";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("semua");

  const filters = [
    { id: "semua", name: "Semua Foto" },
    { id: "pernikahan", name: "Pernikahan" },
    { id: "corporate", name: "Corporate" },
    { id: "makanan", name: "Makanan" },
    { id: "setup", name: "Setup Acara" }
  ];

  const galleryItems = [
    {
      id: 1,
      image: heroImage,
      title: "Wedding Reception Elegant Setup",
      category: "pernikahan",
      event: "Pernikahan Adat Jawa",
      guests: "300 tamu",
      location: "Ballroom Hotel Mulia",
      likes: 124,
      views: 1250
    },
    {
      id: 2,
      image: nasiGudegImage,
      title: "Authentic Gudeg Jogja Presentation",
      category: "makanan",
      event: "Traditional Menu Showcase",
      guests: "Food Photography",
      location: "Studio Foto",
      likes: 89,
      views: 892
    },
    {
      id: 3,
      image: gadoGadoImage,
      title: "Fresh Gado-Gado Healthy Option",
      category: "makanan",
      event: "Vegetarian Menu Special",
      guests: "Health Event",
      location: "Cafe Sehat Jakarta",
      likes: 67,
      views: 543
    },
    {
      id: 4,
      image: rendangImage,
      title: "Premium Rendang Padang",
      category: "makanan",
      event: "Cultural Food Festival",
      guests: "500 porsi",
      location: "Jakarta Convention Center",
      likes: 156,
      views: 1680
    },
    {
      id: 5,
      image: heroImage,
      title: "Corporate Lunch Buffet Setup",
      category: "corporate",
      event: "Company Annual Meeting",
      guests: "150 karyawan",
      location: "Gedung Perkantoran Sudirman",
      likes: 78,
      views: 892
    },
    {
      id: 6,
      image: nasiGudegImage,
      title: "Traditional Ceremony Catering",
      category: "setup",
      event: "Upacara Adat Betawi",
      guests: "200 tamu",
      location: "Taman Mini Indonesia",
      likes: 134,
      views: 1123
    }
  ];

  const filteredGallery = activeFilter === "semua" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="galeri" className="py-20 bg-warm-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            📸 Galeri Karya Kami
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Momen Indah Yang Kami Ciptakan
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Setiap acara adalah cerita unik. Lihat bagaimana kami menciptakan pengalaman 
            kuliner tak terlupakan untuk berbagai momen spesial klien kami.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "hero" : "warm"}
              onClick={() => setActiveFilter(filter.id)}
              className="transition-all duration-300"
            >
              {filter.name}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item) => (
            <Card key={item.id} className="group overflow-hidden hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between text-white">
                      <div className="flex items-center gap-3">
                        <button className="flex items-center gap-1 hover:text-primary transition-colors">
                          <Eye className="w-4 h-4" />
                          <span className="text-sm">{item.views}</span>
                        </button>
                        <button className="flex items-center gap-1 hover:text-red-400 transition-colors">
                          <Heart className="w-4 h-4" />
                          <span className="text-sm">{item.likes}</span>
                        </button>
                      </div>
                      <button className="hover:text-primary transition-colors">
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground">
                  {item.category}
                </Badge>
              </div>

              <CardContent className="p-4">
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{item.event}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-secondary" />
                    <span>{item.guests}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-accent" />
                    <span>{item.location}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {item.views}
                    </span>
                    <span className="flex items-center gap-1">
                      <Heart className="w-3 h-3" />
                      {item.likes}
                    </span>
                  </div>
                  <Button variant="outline" size="sm">
                    Lihat Detail
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            Lihat Semua Foto & Video
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;