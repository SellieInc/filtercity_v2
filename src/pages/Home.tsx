import { Hero } from "@/components/Hero";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Droplet, Wind, Settings } from "lucide-react";
import oilFilterImage from "@/assets/oil-filter.jpg";
import airFilterImage from "@/assets/air-filter.jpg";
import waterFilterImage from "@/assets/water-filter.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />

      {/* What We Do Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">What We Do</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Fiter City has been providing premium filtration solutions for over 20 years. Our commitment to quality and expertise ensures your systems run at peak performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplet className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Oil Filters</h3>
              <p className="text-muted-foreground">
                Premium oil filtration systems for automotive and industrial applications
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wind className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Air Filters</h3>
              <p className="text-muted-foreground">
                High-efficiency air filtration for clean and safe environments
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Industrial Systems</h3>
              <p className="text-muted-foreground">
                Complete filtration solutions for complex industrial operations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Featured Products</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our range of premium filtration products designed for maximum performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            <ProductCard
              title="Oil Filters"
              description="High-quality automotive and industrial oil filters for superior engine protection"
              image={oilFilterImage}
            />
            <ProductCard
              title="Air Filters"
              description="Advanced air filtration systems ensuring clean air for your applications"
              image={airFilterImage}
            />
            <ProductCard
              title="Water Filters"
              description="Professional water filtration solutions for pure, clean water"
              image={waterFilterImage}
            />
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary-dark">
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contact us today for expert advice on the best filtration solutions for your needs
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
            <Link to="/contact">Contact Us Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
