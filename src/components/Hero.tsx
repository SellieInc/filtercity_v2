import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-filtration.jpg";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Pure Filtration.<br />
            Perfect Performance.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Experts in Oil, Air, and Water Filtration Solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={() => scrollToSection("about")} size="lg" className="bg-primary hover:bg-primary-dark text-lg">
              Learn More
            </Button>
            <Button onClick={() => scrollToSection("contact")} size="lg" variant="outline" className="text-lg border-2 hover:bg-secondary">
              Get a Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
