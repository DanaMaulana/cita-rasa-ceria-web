import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  CheckCircle,
  Users,
  Calendar,
  MessageSquare
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    guestCount: "",
    eventDate: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple form validation
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Form Tidak Lengkap",
        description: "Mohon lengkapi nama, email, dan nomor telepon.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Pesan Berhasil Dikirim! ✅",
      description: "Tim kami akan menghubungi Anda dalam 1x24 jam untuk konsultasi lebih lanjut."
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      eventType: "",
      guestCount: "",
      eventDate: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telepon & WhatsApp",
      details: ["+62 812-3456-7890", "+62 821-9876-5432"],
      color: "text-green-600"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@cateringku.com", "order@cateringku.com"],
      color: "text-blue-600"
    },
    {
      icon: MapPin,
      title: "Alamat Kantor",
      details: ["Jl. Raya Kemang No. 123", "Jakarta Selatan 12560"],
      color: "text-red-600"
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      details: ["Senin - Sabtu: 08:00 - 22:00", "Minggu: 09:00 - 21:00"],
      color: "text-amber-600"
    }
  ];

  return (
    <section id="kontak" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            📞 Hubungi Kami
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Konsultasi Gratis Sekarang
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ceritakan acara impian Anda! Tim ahli kami siap membantu mewujudkan 
            pengalaman kuliner yang tak terlupakan untuk momen spesial Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover:shadow-warm transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r from-primary/10 to-primary/20 flex items-center justify-center flex-shrink-0`}>
                        <info.icon className={`w-6 h-6 ${info.color}`} />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-2">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-muted-foreground text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Quick Action Buttons */}
              <div className="space-y-3">
                <Button variant="hero" className="w-full justify-start" size="lg">
                  <Phone className="w-5 h-5 mr-3" />
                  Telepon Langsung
                </Button>
                <Button variant="secondary" className="w-full justify-start" size="lg">
                  <MessageSquare className="w-5 h-5 mr-3" />
                  Chat WhatsApp
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-warm">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                  <Send className="w-6 h-6 text-primary" />
                  Form Konsultasi & Pemesanan
                </CardTitle>
                <p className="text-muted-foreground">
                  Isi form berikut untuk mendapatkan penawaran terbaik sesuai kebutuhan acara Anda.
                </p>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nama Lengkap *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Masukkan nama lengkap"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="nama@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Nomor Telepon *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+62 812-3456-7890"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="eventType">Jenis Acara</Label>
                      <Select value={formData.eventType} onValueChange={(value) => setFormData({...formData, eventType: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih jenis acara" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pernikahan">Pernikahan</SelectItem>
                          <SelectItem value="corporate">Corporate Event</SelectItem>
                          <SelectItem value="ulang-tahun">Ulang Tahun</SelectItem>
                          <SelectItem value="arisan">Arisan/Gathering</SelectItem>
                          <SelectItem value="lainnya">Lainnya</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="guestCount">Jumlah Tamu</Label>
                      <Select value={formData.guestCount} onValueChange={(value) => setFormData({...formData, guestCount: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Estimasi jumlah tamu" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="50-100">50 - 100 orang</SelectItem>
                          <SelectItem value="100-200">100 - 200 orang</SelectItem>
                          <SelectItem value="200-300">200 - 300 orang</SelectItem>
                          <SelectItem value="300-500">300 - 500 orang</SelectItem>
                          <SelectItem value="500+">500+ orang</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="eventDate">Tanggal Acara</Label>
                      <Input
                        id="eventDate"
                        type="date"
                        value={formData.eventDate}
                        onChange={(e) => setFormData({...formData, eventDate: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Pesan Tambahan</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Ceritakan detail acara Anda, preferensi menu, budget, atau pertanyaan lainnya..."
                      rows={4}
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button type="submit" variant="hero" size="lg" className="flex-1">
                      <Send className="w-5 h-5 mr-2" />
                      Kirim Konsultasi Gratis
                    </Button>
                    <Button type="button" variant="warm" size="lg">
                      <MessageSquare className="w-5 h-5 mr-2" />
                      Chat WhatsApp
                    </Button>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Tim kami akan merespons dalam 1x24 jam</span>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;