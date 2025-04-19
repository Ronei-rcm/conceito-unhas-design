import { Instagram, MapPin, Phone, Mail, Clock, Star, Heart, WhatsApp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/5551992485593?text=Bem%20Vindos%20a%20Conceito.",
      "_blank"
    );
  };

  return (
    <div className="min-h-screen relative">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative overflow-hidden bg-gradient-to-b from-accent/50 to-background">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            <img 
              src="/lovable-uploads/39a873b2-3eab-4fb2-998d-e294b26f0158.png"
              alt="Logo Jhullie Ramos"
              className="w-60 mb-6"
            />
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              Transformando sonhos em realidade
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              Especialista em alongamentos com naturalidade, com mais de 28 certificações nacionais e internacionais.
            </p>
            <Button onClick={handleWhatsAppClick} size="lg" className="text-lg">
              Agende seu Horário
            </Button>
          </div>
          <div className="relative hidden md:block">
            <img
              src="/lovable-uploads/deab0e9d-90a7-4524-b162-0f8eb519db4e.png"
              alt="Jhullie Ramos"
              className="rounded-lg shadow-2xl max-h-[600px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-12">
            Nossos Serviços
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=1000"
                  alt="Alongamentos"
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-3">Alongamentos</h3>
                <p className="text-muted-foreground">
                  Técnicas exclusivas para um resultado natural e duradouro.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1610992015732-2449b0c26670?q=80&w=1000"
                  alt="Manicure"
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-3">Manicure</h3>
                <p className="text-muted-foreground">
                  Cuidados especializados para suas mãos.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=1000"
                  alt="Pedicure"
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-3">Pedicure</h3>
                <p className="text-muted-foreground">
                  Tratamentos completos para seus pés.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-12">
            Cursos Profissionalizantes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden group">
              <div className="relative h-80 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000"
                  alt="Curso para Iniciantes"
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="font-bold text-xl mb-3">Curso para Iniciantes</h3>
                  <p className="mb-4">
                    Aprenda as técnicas fundamentais para começar sua carreira.
                  </p>
                  <Button onClick={handleWhatsAppClick} variant="secondary">
                    Saiba Mais
                  </Button>
                </div>
              </div>
            </Card>
            <Card className="overflow-hidden group">
              <div className="relative h-80 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1603816245457-fe9c80b740ff?q=80&w=1000"
                  alt="Aperfeiçoamento"
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="font-bold text-xl mb-3">Aperfeiçoamento</h3>
                  <p className="mb-4">
                    Eleve suas habilidades ao próximo nível com técnicas avançadas.
                  </p>
                  <Button onClick={handleWhatsAppClick} variant="secondary">
                    Saiba Mais
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-12">
            Contato
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col gap-6">
              <Card>
                <CardContent className="p-6 flex items-center gap-4">
                  <MapPin className="h-5 w-5 text-primary" />
                  <p>Rua Palmeiras, 410 - Vera Cruz, Gravataí - RS</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex items-center gap-4">
                  <Phone className="h-5 w-5 text-primary" />
                  <p>(51) 99248-5593</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex items-center gap-4">
                  <Instagram className="h-5 w-5 text-primary" />
                  <div className="flex flex-col gap-2">
                    <a
                      href="https://instagram.com/jhullieramos.nails"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      @jhullieramos.nails
                    </a>
                    <a
                      href="https://instagram.com/conceito.emunhas"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      @conceito.emunhas
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-accent/50 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="space-y-4">
              <img 
                src="/lovable-uploads/39a873b2-3eab-4fb2-998d-e294b26f0158.png"
                alt="Logo Conceito em Unhas"
                className="w-40"
              />
              <p className="text-muted-foreground">
                Especialista em alongamentos com naturalidade, trazendo beleza e autoestima para suas clientes desde 2015.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/jhullieramos.nails"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <Button onClick={handleWhatsAppClick} variant="ghost" size="icon">
                  <Phone className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-lg">Horário de Atendimento</h3>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>Segunda à Sexta: 9h às 19h</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>Sábado: 9h às 17h</span>
                </div>
              </div>
              <div className="pt-4">
                <h3 className="font-bold text-lg mb-2">Diferenciais</h3>
                <div className="flex flex-col gap-2 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-primary" />
                    <span>Mais de 28 certificações</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="h-4 w-4 text-primary" />
                    <span>Atendimento personalizado</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-lg">Contato</h3>
              <div className="space-y-3 text-muted-foreground">
                <a
                  href="https://goo.gl/maps/YourGoogleMapsLink"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 hover:text-primary transition-colors"
                >
                  <MapPin className="h-4 w-4 mt-1" />
                  <span>Rua Palmeiras, 410 - Vera Cruz<br />Gravataí - RS</span>
                </a>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>(51) 99248-5593</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>conceito.emunhas@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
          
          <Separator className="mb-8" />
          
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2024 Conceito em Unhas. Todos os direitos reservados.</p>
            <p className="mt-2">
              Desenvolvido com {" "}
              <Heart className="h-3 w-3 inline-block text-primary" fill="currentColor" />
              {" "} por Jhullie Ramos
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#20BA5C] text-white rounded-full p-4 shadow-lg transition-transform hover:scale-110 z-50"
        aria-label="Chat on WhatsApp"
      >
        <WhatsApp className="h-6 w-6" />
      </button>
    </div>
  );
};

export default Index;
