
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface CourseCardProps {
  title: string;
  description: string;
  imageUrl: string;
  onAction: () => void;
}

export const CourseCard = ({ title, description, imageUrl, onAction }: CourseCardProps) => {
  return (
    <Card className="overflow-hidden group">
      <div className="relative h-80 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 p-6 text-white">
          <h3 className="font-bold text-xl mb-3">{title}</h3>
          <p className="mb-4">{description}</p>
          <Button onClick={onAction} variant="secondary">
            Saiba Mais
          </Button>
        </div>
      </div>
    </Card>
  );
};
