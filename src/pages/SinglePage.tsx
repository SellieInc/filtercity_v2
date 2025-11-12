import { Hero } from "@/components/Hero";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Droplet, Wind, Settings, Shield, Award, Users, Target, MapPin, Phone, Mail, Clock } from "lucide-react";
import oilFilterImage from "@/assets/oil-filter.jpg";
import airFilterImage from "@/assets/air-filter.jpg";
import waterFilterImage from "@/assets/water-filter.jpg";
import industrialSystemImage from "@/assets/industrial-system.jpg";
import baldwinLogo from "@/assets/products/baldwin.svg";
import donaldsonLogo from "@/assets/products/Donaldson-Filtration-Solutions.svg";
import fleetguardLogo from "@/assets/products/fleetguard.svg";
import framLogo from "@/assets/products/fram.svg";
import gudLogo from "@/assets/products/gudfilters.svg";
import mannLogo from "@/assets/products/mann+hummel.svg";
import oilwatchLogo from "@/assets/products/oilwatch.svg";
import racorLogo from "@/assets/products/racor.svg";
import wearcheckLogo from "@/assets/products/wearcheck.svg";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const brands = [
  { name: "OilWatch", description: "A laboratory that offers oil analysis and test kits to detect machine failures and extend lubricant life.", image: oilwatchLogo },
  { name: "WearCheck", description: "Global network specializing in oil and wear particle analysis to optimize machinery performance.", image: wearcheckLogo },
  { name: "Donaldson Filtration", description: "Global manufacturer providing custom filtration solutions for engines, vehicles, and industrial systems.", image: donaldsonLogo },
  { name: "Fleetguard Filtration", description: "Produces filters, lubricants, and coolants for heavy-duty equipment, improving performance and reducing maintenance.", image: fleetguardLogo },
  { name: "GUD Filters", description: "South African brand offering OEM-quality oil, fuel, air, and cabin air filters.", image: gudLogo },
  { name: "MANN+HUMMEL", description: "Global filtration leader developing products for air, water, and mobility industries.", image: mannLogo },
  { name: "Racor Filtration (Parker)", description: "Racor, a distinguished subbrand of Parker, specializes in providing top-tier filtration solutions. Focused on filters that enhance efficiency and performance, Racor's products encompass a wide range of applications across various industries.", image: racorLogo },
  { name: "FRAM Filtration", description: "Renowned brand delivering innovative, reliable oil and air filters for vehicles.", image: framLogo },
  { name: "Baldwin Filtration", description: "Global provider of premium filters for engine protection and performance.", image: baldwinLogo },
];

const SinglePage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* What We Do Section */}
      <section id="about" className="py-20 bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-5xl font-bold text-foreground mb-6">About Fiter City</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We specialize in providing high-quality filters for marine, industrial, and agricultural applications. Our extensive range includes fuel, oil, water, and air filters designed to safeguard equipment, ensure peak performance, and boost efficiency. Trust in our commitment to quality and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
            <Card className="border-2 hover:shadow-industrial-lg transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Quality Assurance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Every product we offer meets the highest industry standards. We rigorously test all filters to ensure they deliver exceptional performance and reliability.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-industrial-lg transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Customer Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We prioritize our customers' needs, offering personalized solutions and dedicated support to ensure complete satisfaction with every purchase.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-foreground mb-4">What We Do</h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Fiter City has been providing premium filtration solutions for over 20 years. Our commitment to quality and expertise ensures your systems run at peak performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplet className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">Oil Filters</h4>
              <p className="text-muted-foreground">
                Premium oil filtration systems for automotive and industrial applications
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wind className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">Air Filters</h4>
              <p className="text-muted-foreground">
                High-efficiency air filtration for clean and safe environments
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">Industrial Systems</h4>
              <p className="text-muted-foreground">
                Complete filtration solutions for complex industrial operations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-secondary scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-5xl font-bold text-foreground mb-6">Our Products</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Discover our comprehensive range of premium filtration products designed to meet the highest standards of quality and performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <ProductCard
              title="Oil Filters"
              description="Designed to maintain the purity of your engine oil, our oil filters help reduce wear and tear and improve overall engine efficiency."
              image={oilFilterImage}
            />
            <ProductCard
              title="Air Filtration"
              description="Fleetguard air filtration products are designed to protect engines from dust, dirt, and other contaminants. They are used in a variety of industries and environments."
              image={airFilterImage}
            />
            <ProductCard
              title="Water / Coolant Filters"
              description="Our water filters purify and protect your systems from water contamination, ensuring your equipment operates at peak performance."
              image={waterFilterImage}
            />
            <ProductCard
              title="Industrial Filtration Systems"
              description="Complete turnkey filtration solutions for manufacturing facilities and processing plants."
              image={industrialSystemImage}
            />
            <ProductCard
              title="Hydraulic Filters"
              description="Precision hydraulic filters designed to protect expensive hydraulic systems from contamination."
              image={oilFilterImage}
            />
            <ProductCard
              title="Fuel Filters"
              description="Our fuel filters are engineered to keep your engines running smoothly by removing contaminants from fuel systems, thus extending the lifespan of your equipment."
              image={airFilterImage}
            />
            <ProductCard
              title="Coolant ES Compleat"
              description="ES Compleat is a coolant and antifreeze from Fleetguard that can be used in heavy-duty and light-duty diesel, natural gas, and gasoline engines. It provides reliable corrosion protection and thermal stability for modern engines."
              image={industrialSystemImage}
            />
            <ProductCard
              title="OAT Coolant - Long Life"
              description="Fleetguard OAT coolant utilizes Organic Acid Technology (OAT) to provide long-lasting corrosion protection in engine cooling systems. Designed for extended life with proper maintenance and compatible with various engine types."
              image={waterFilterImage}
            />
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section id="brands" className="py-20 bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-5xl font-bold text-foreground mb-6">Trusted Brands We Work With</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We partner with the world's leading filtration manufacturers to bring you the best products in the industry. Our extensive network ensures you have access to premium quality filters from trusted brands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
            {brands.map((brand, index) => (
              <Card
                key={index}
                className="p-8 text-center hover:shadow-industrial-lg transition-all duration-300 hover:border-primary group"
              >
                {brand.image && (
                  <div className="mb-4 flex items-center justify-center">
                    <img src={brand.image} alt={brand.name} className="h-12 object-contain" />
                  </div>
                )}
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {brand.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{brand.description}</p>
              </Card>
            ))}
          </div>

          <div className="bg-primary text-primary-foreground p-12 rounded-lg max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6 text-center">Trusted Partnerships</h3>
            <p className="text-lg text-center leading-relaxed opacity-90">
              Our relationships with these leading manufacturers allow us to offer competitive pricing, ensure product authenticity, and provide expert technical support for all your filtration needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-secondary scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-5xl font-bold text-foreground mb-6">Contact Us</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have questions about our products or need expert advice? We're here to help. Reach out to our team today.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your filtration needs..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary-dark">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2 text-lg">Phone</h3>
                      <p className="text-muted-foreground">
                        Phone: +27-(0) 689 885 351 - Filter City (PTY) Ltd<br />
                        Phone: +27-(0) 843 644 018 - Melanie
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2 text-lg">Email</h3>
                      <p className="text-muted-foreground">
                        melanies.supply@gmail.com
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2 text-lg">Business Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 8:00 AM - 6:00 PM<br />
                        Saturday: 9:00 AM - 2:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SinglePage;
