
import { Card, CardContent } from "@/components/ui/card";

export const Services = () => {
  return (
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
                Cuidados completos para seus pés.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
