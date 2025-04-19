import { Button } from "@/components/ui/button";

interface HeroProps {
  onWhatsAppClick: () => void;
}

export const Hero = ({ onWhatsAppClick }: HeroProps) => {
  return (
    <section className="pt-32 pb-16 px-4 relative overflow-hidden bg-gradient-to-b from-accent/50 to-background">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="text-left">
          <img 
            src="/lovable-uploads/25402ffa-ba53-4a53-84a7-781c5e680dab.png"
            alt="Logo Jhullie Ramos"
            className="w-60 mb-6"
          />
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Transformando sonhos em realidade
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl">
            Especialista em alongamentos com naturalidade, com mais de 28 certificações nacionais e internacionais.
          </p>
          <Button onClick={onWhatsAppClick} size="lg" className="text-lg">
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
  );
};
