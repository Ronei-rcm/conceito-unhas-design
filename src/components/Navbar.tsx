
import { Instagram, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/39a873b2-3eab-4fb2-998d-e294b26f0158.png"
            alt="Logo Jhullie Ramos"
            className="h-8"
          />
        </a>
        
        <div className="hidden md:flex items-center gap-6">
          <a href="#services" className="hover:text-primary transition-colors">
            Serviços
          </a>
          <a href="#courses" className="hover:text-primary transition-colors">
            Cursos
          </a>
          <a href="#about" className="hover:text-primary transition-colors">
            Sobre
          </a>
          <a href="#contact" className="hover:text-primary transition-colors">
            Contato
          </a>
          <a
            href="https://instagram.com/jhullieramos.nails"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <Instagram className="h-5 w-5" />
          </a>
        </div>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col gap-4 mt-8">
              <a href="#services" className="text-lg">
                Serviços
              </a>
              <a href="#courses" className="text-lg">
                Cursos
              </a>
              <a href="#about" className="text-lg">
                Sobre
              </a>
              <a href="#contact" className="text-lg">
                Contato
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};
