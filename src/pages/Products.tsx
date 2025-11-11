import { ProductCard } from "@/components/ProductCard";
import oilFilterImage from "@/assets/oil-filter.jpg";
import airFilterImage from "@/assets/air-filter.jpg";
import waterFilterImage from "@/assets/water-filter.jpg";
import industrialSystemImage from "@/assets/industrial-system.jpg";

const Products = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-6">Our Products</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Discover our comprehensive range of premium filtration products designed to meet the highest standards of quality and performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <ProductCard
            title="Oil Filters"
            description="Premium automotive and industrial oil filters engineered for superior engine protection and extended service life. Compatible with all major vehicle makes and industrial equipment."
            image={oilFilterImage}
          />
          <ProductCard
            title="Air Filters"
            description="High-efficiency particulate air filters that capture dust, pollen, and contaminants. Ideal for automotive, residential, and commercial applications."
            image={airFilterImage}
          />
          <ProductCard
            title="Water Filters"
            description="Advanced water filtration systems providing clean, safe drinking water. Removes sediment, chlorine, and other impurities for crystal clear water quality."
            image={waterFilterImage}
          />
          <ProductCard
            title="Industrial Filtration Systems"
            description="Complete turnkey filtration solutions for manufacturing facilities, processing plants, and heavy industrial operations. Customizable to your specific needs."
            image={industrialSystemImage}
          />
          <ProductCard
            title="Hydraulic Filters"
            description="Precision hydraulic filters designed to protect expensive hydraulic systems from contamination and ensure smooth, reliable operation."
            image={oilFilterImage}
          />
          <ProductCard
            title="Fuel Filters"
            description="High-performance fuel filtration products that remove water and particles, protecting engines and ensuring optimal fuel efficiency."
            image={airFilterImage}
          />
        </div>

        <div className="mt-20 bg-secondary p-12 rounded-lg max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Why Choose Our Products?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-muted-foreground">
            <div>
              <h3 className="font-semibold text-foreground mb-2">✓ Superior Quality</h3>
              <p>All products meet or exceed OEM specifications</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">✓ Extended Lifespan</h3>
              <p>Engineered for durability and long service intervals</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">✓ Wide Compatibility</h3>
              <p>Compatible with major brands and equipment</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">✓ Expert Support</h3>
              <p>Technical assistance and product recommendations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
