
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface CoursesProps {
  onWhatsAppClick: () => void;
}

export const Courses = ({ onWhatsAppClick }: CoursesProps) => {
  return (
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
                <Button onClick={onWhatsAppClick} variant="secondary">
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
                <Button onClick={onWhatsAppClick} variant="secondary">
                  Saiba Mais
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
