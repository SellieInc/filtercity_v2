import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
}

export const ProductCard = ({ title, description, image }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-industrial-lg transition-all duration-300 group">
      <div className="aspect-square overflow-hidden bg-secondary">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
    </Card>
  );
};
