
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export const ServiceCard = ({ title, description, imageUrl }: ServiceCardProps) => {
  return (
    <Card className="overflow-hidden group">
      <div className="relative h-64 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="font-bold text-xl mb-3">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};
