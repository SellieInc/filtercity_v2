import { Card } from "@/components/ui/card";

const brands = [
  { name: "OilWatch", description: "A laboratory that offers oil analysis and test kits to detect machine failures and extend lubricant life." },
  { name: "WearCheck", description: "Global network specializing in oil and wear particle analysis to optimize machinery performance." },
  { name: "Donaldson Filtration", description: "Global manufacturer providing custom filtration solutions for engines, vehicles, and industrial systems." },
  { name: "Fleetguard Filtration", description: "Produces filters, lubricants, and coolants for heavy-duty equipment, improving performance and reducing maintenance." },
  { name: "GUD Filters", description: "South African brand offering OEM-quality oil, fuel, air, and cabin air filters." },
  { name: "MANN+HUMMEL", description: "Global filtration leader developing products for air, water, and mobility industries." },
  { name: "Racor Filtration (Parker)", description: "Specializes in high-efficiency filtration solutions for multiple industries." },
  { name: "FRAM Filtration", description: "Renowned brand delivering innovative, reliable oil and air filters for vehicles." },
  { name: "Baldwin Filtration", description: "Global provider of premium filters for engine protection and performance." },
];

const Brands = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-6">Trusted Brands We Work With</h1>
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
              <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {brand.name}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{brand.description}</p>
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
