
import { CourseCard } from "@/components/CourseCard";

interface CoursesProps {
  onWhatsAppClick: () => void;
}

export const Courses = ({ onWhatsAppClick }: CoursesProps) => {
  const courses = [
    {
      title: "Curso para Iniciantes",
      description: "Aprenda as técnicas fundamentais para começar sua carreira.",
      imageUrl: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000"
    },
    {
      title: "Aperfeiçoamento",
      description: "Eleve suas habilidades ao próximo nível com técnicas avançadas.",
      imageUrl: "https://images.unsplash.com/photo-1603816245457-fe9c80b740ff?q=80&w=1000"
    }
  ];

  return (
    <section id="courses" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-12">
          Cursos Profissionalizantes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course) => (
            <CourseCard
              key={course.title}
              title={course.title}
              description={course.description}
              imageUrl={course.imageUrl}
              onAction={onWhatsAppClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
