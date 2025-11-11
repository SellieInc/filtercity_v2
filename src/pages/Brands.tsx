import { Card } from "@/components/ui/card";

const brands = [
  { name: "Bosch", category: "Automotive Filters" },
  { name: "Mann+Hummel", category: "Industrial Filtration" },
  { name: "Donaldson", category: "Air & Liquid Filters" },
  { name: "Parker", category: "Hydraulic Filters" },
  { name: "Pall Corporation", category: "Industrial Systems" },
  { name: "Eaton", category: "Fluid Power Solutions" },
  { name: "Baldwin Filters", category: "Heavy Duty Filters" },
  { name: "Wix Filters", category: "Automotive & Industrial" },
  { name: "Fram", category: "Automotive Filters" },
  { name: "Mahle", category: "Engine Components" },
  { name: "UFI Filters", category: "Filtration Systems" },
  { name: "Hengst", category: "Industrial Filters" },
];

const Brands = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-6">Brands We Work With</h1>
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
              <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {brand.name}
              </h3>
              <p className="text-muted-foreground">{brand.category}</p>
            </Card>
          ))}
        </div>

        <div className="bg-primary text-primary-foreground p-12 rounded-lg max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Trusted Partnerships</h2>
          <p className="text-lg text-center leading-relaxed opacity-90">
            Our relationships with these leading manufacturers allow us to offer competitive pricing, ensure product authenticity, and provide expert technical support for all your filtration needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Brands;
