
import { Instagram, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const Contact = () => {
  return (
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
  );
};
