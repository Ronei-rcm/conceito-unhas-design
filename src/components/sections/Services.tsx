
import { ServiceCard } from "@/components/ServiceCard";

export const Services = () => {
  const services = [
    {
      title: "Alongamentos",
      description: "Técnicas exclusivas para um resultado natural e duradouro.",
      imageUrl: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=1000"
    },
    {
      title: "Manicure",
      description: "Cuidados especializados para suas mãos.",
      imageUrl: "https://images.unsplash.com/photo-1610992015732-2449b0c26670?q=80&w=1000"
    },
    {
      title: "Pedicure",
      description: "Cuidados completos para seus pés.",
      imageUrl: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=1000"
    }
  ];

  return (
    <section id="services" className="py-16 bg-accent/30">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-12">
          Nossos Serviços
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
