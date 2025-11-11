import { Link } from "react-router-dom";
import { NavLink } from "@/components/NavLink";
import logo from "@/assets/fiter-city-logo.png";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border shadow-industrial">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src={logo} alt="Fiter City Logo" className="h-12 w-12" />
            <span className="text-2xl font-bold text-foreground">Fiter City</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink
              to="/"
              className="text-foreground hover:text-primary transition-colors font-medium"
              activeClassName="text-primary"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="text-foreground hover:text-primary transition-colors font-medium"
              activeClassName="text-primary"
            >
              About
            </NavLink>
            <NavLink
              to="/products"
              className="text-foreground hover:text-primary transition-colors font-medium"
              activeClassName="text-primary"
            >
              Products
            </NavLink>
            <NavLink
              to="/brands"
              className="text-foreground hover:text-primary transition-colors font-medium"
              activeClassName="text-primary"
            >
              Brands
            </NavLink>
            <NavLink
              to="/contact"
              className="text-foreground hover:text-primary transition-colors font-medium"
              activeClassName="text-primary"
            >
              Contact
            </NavLink>
            <Button asChild className="bg-primary hover:bg-primary-dark">
              <Link to="/contact">Get a Quote</Link>
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
              <NavLink
                to="/"
                className="text-foreground hover:text-primary transition-colors font-medium px-2 py-2"
                activeClassName="text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="text-foreground hover:text-primary transition-colors font-medium px-2 py-2"
                activeClassName="text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </NavLink>
              <NavLink
                to="/products"
                className="text-foreground hover:text-primary transition-colors font-medium px-2 py-2"
                activeClassName="text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Products
              </NavLink>
              <NavLink
                to="/brands"
                className="text-foreground hover:text-primary transition-colors font-medium px-2 py-2"
                activeClassName="text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Brands
              </NavLink>
              <NavLink
                to="/contact"
                className="text-foreground hover:text-primary transition-colors font-medium px-2 py-2"
                activeClassName="text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </NavLink>
              <Button asChild className="bg-primary hover:bg-primary-dark w-full">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Get a Quote
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
