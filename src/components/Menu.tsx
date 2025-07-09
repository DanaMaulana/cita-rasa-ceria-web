import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Users, ChefHat } from "lucide-react";
import nasiGudegImage from "@/assets/nasi-gudeg.jpg";
import gadoGadoImage from "@/assets/gado-gado.jpg";
import rendangImage from "@/assets/rendang.jpg";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("semua");

  const categories = [
    { id: "semua", name: "Semua Menu", icon: ChefHat },
    { id: "nusantara", name: "Nusantara", icon: Star },
    { id: "internasional", name: "Internasional", icon: Users },
    { id: "vegetarian", name: "Vegetarian", icon: Clock }
  ];

  const menuItems = [
    {
      id: 1,
      name: "Nasi Gudeg Jogja",
      category: "nusantara",
      image: nasiGudegImage,
      price: "Rp 35.000",
      description: "Gudeg khas Jogja dengan nangka muda, ayam kampung, telur, dan sambal krecek.",
      rating: 4.9,
      cookTime: "45 menit",
      serves: "1 porsi",
      tags: ["Halal", "Pedas", "Traditional"],
      isPopular: true
    },
    {
      id: 2,
      name: "Gado-Gado Jakarta",
      category: "vegetarian",
      image: gadoGadoImage,
      price: "Rp 28.000",
      description: "Salad sayuran segar dengan bumbu kacang spesial, tahu, tempe, dan kerupuk.",
      rating: 4.8,
      cookTime: "20 menit",
      serves: "1 porsi",
      tags: ["Vegetarian", "Sehat", "Fresh"],
      isPopular: false
    },
    {
      id: 3,
      name: "Rendang Padang",
      category: "nusantara",
      image: rendangImage,
      price: "Rp 42.000",
      description: "Daging sapi rendang dengan bumbu rempah khas Padang yang kaya akan rasa.",
      rating: 4.9,
      cookTime: "3 jam",
      serves: "1 porsi",
      tags: ["Halal", "Spicy", "Premium"],
      isPopular: true
    },
    {
      id: 4,
      name: "Nasi Liwet Solo",
      category: "nusantara",
      image: nasiGudegImage,
      price: "Rp 32.000",
      description: "Nasi liwet gurih dengan lauk pauk lengkap khas Solo.",
      rating: 4.7,
      cookTime: "40 menit",
      serves: "1 porsi",
      tags: ["Halal", "Traditional", "Comfort Food"],
      isPopular: false
    },
    {
      id: 5,
      name: "Caesar Salad",
      category: "internasional",
      image: gadoGadoImage,
      price: "Rp 38.000",
      description: "Salad segar dengan dressing caesar, crouton, dan parmesan cheese.",
      rating: 4.6,
      cookTime: "15 menit",
      serves: "1 porsi",
      tags: ["Fresh", "International", "Light"],
      isPopular: false
    },
    {
      id: 6,
      name: "Grilled Chicken",
      category: "internasional",
      image: rendangImage,
      price: "Rp 45.000",
      description: "Ayam bakar dengan marinade herbs dan sayuran panggang.",
      rating: 4.8,
      cookTime: "35 menit",
      serves: "1 porsi",
      tags: ["Halal", "Grilled", "Protein"],
      isPopular: true
    }
  ];

  const filteredMenu = activeCategory === "semua" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            🍽️ Menu Spesial Kami
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Cita Rasa Terbaik Indonesia
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nikmati kelezatan menu pilihan dari berbagai daerah di Indonesia, 
            diolah dengan resep autentik dan bahan-bahan berkualitas premium.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "hero" : "warm"}
              size="lg"
              onClick={() => setActiveCategory(category.id)}
              className="flex items-center gap-2"
            >
              <category.icon className="w-5 h-5" />
              {category.name}
            </Button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMenu.map((item) => (
            <Card key={item.id} className="group hover:shadow-warm transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {item.isPopular && (
                  <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                    ⭐ Popular
                  </Badge>
                )}
                <div className="absolute top-4 right-4 flex gap-2">
                  {item.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-2xl font-bold text-primary">{item.price}</span>
                </div>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>

                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span>{item.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{item.cookTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{item.serves}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="hero" className="flex-1">
                    Pesan Sekarang
                  </Button>
                  <Button variant="outline" size="icon">
                    ❤️
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="warm" size="lg">
            Lihat Menu Lengkap & Harga
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Menu;