
import { Instagram, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/5551992485593?text=Bem%20Vindos%20a%20Conceito.",
      "_blank"
    );
  };

  return (
    <div className="min-h-screen">
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
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-3">Alongamentos</h3>
                <p className="text-muted-foreground">
                  Técnicas exclusivas para um resultado natural e duradouro.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-3">Manicure</h3>
                <p className="text-muted-foreground">
                  Cuidados especializados para suas mãos.
                </p>
              </CardContent>
            </Card>
            <Card>
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
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-3">Curso para Iniciantes</h3>
                <p className="text-muted-foreground mb-4">
                  Aprenda as técnicas fundamentais para começar sua carreira.
                </p>
                <Button onClick={handleWhatsAppClick} variant="secondary">
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-3">Aperfeiçoamento</h3>
                <p className="text-muted-foreground mb-4">
                  Eleve suas habilidades ao próximo nível com técnicas avançadas.
                </p>
                <Button onClick={handleWhatsAppClick} variant="secondary">
                  Saiba Mais
                </Button>
              </CardContent>
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
    </div>
  );
};

export default Index;
