
import { Instagram, Phone, Mail, MapPin, Clock, Star, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface FooterProps {
  onWhatsAppClick: () => void;
}

export const Footer = ({ onWhatsAppClick }: FooterProps) => {
  return (
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
              <Button onClick={onWhatsAppClick} variant="ghost" size="icon">
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
  );
};
