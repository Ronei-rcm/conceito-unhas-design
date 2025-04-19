
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Courses } from "@/components/sections/Courses";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/5551992485593?text=Bem%20Vindos%20a%20Conceito.",
      "_blank"
    );
  };

  return (
    <div className="min-h-screen relative">
      <Navbar />
      <Hero onWhatsAppClick={handleWhatsAppClick} />
      <Services />
      <Courses onWhatsAppClick={handleWhatsAppClick} />
      <Contact />
      <Footer onWhatsAppClick={handleWhatsAppClick} />
      <WhatsAppButton onClick={handleWhatsAppClick} />
    </div>
  );
};

export default Index;
