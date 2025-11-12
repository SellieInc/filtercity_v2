import logo from "@/assets/Filter-city-logo.png";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    setMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border shadow-industrial">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img src={logo} alt="Filter City Logo" className="h-12 w-24" />
            <span className="text-2xl font-bold text-foreground">Filter City</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("brands")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Brands
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contact
            </button>
            <Button onClick={() => scrollToSection("contact")} className="bg-primary hover:bg-primary-dark">
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-foreground hover:text-primary transition-colors font-medium px-2 py-2 text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground hover:text-primary transition-colors font-medium px-2 py-2 text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="text-foreground hover:text-primary transition-colors font-medium px-2 py-2 text-left"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection("brands")}
                className="text-foreground hover:text-primary transition-colors font-medium px-2 py-2 text-left"
              >
                Brands
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-primary transition-colors font-medium px-2 py-2 text-left"
              >
                Contact
              </button>
              <Button onClick={() => scrollToSection("contact")} className="bg-primary hover:bg-primary-dark w-full">
                Get a Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
