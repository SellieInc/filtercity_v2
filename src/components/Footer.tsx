import { Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border mt-20">
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Filter City",
          "url": "https://www.filtercity.com",
          "logo": "https://www.filtercity.com/logos/filtercity.png",
          "email": "melanies.supply@gmail.com",
          "telephone": "+27-(0) 689 885 351",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "South Africa"
          }
        })}
      </script>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Fiter City</h3>
            <p className="text-muted-foreground mb-4">
              Premium filtration products and solutions for oil, air, water, and industrial systems.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <p>+27-(0) 689 885 351 - Filter City (PTY) Ltd</p>
                <p>+27-(0) 843 644 018 - Melanie</p>
              </li>

              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <p>melanies.supply@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>© 2024 Filter City. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
