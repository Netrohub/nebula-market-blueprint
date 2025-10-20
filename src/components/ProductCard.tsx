import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  featured?: boolean;
}

const ProductCard = ({ name, price, image, category, rating, reviews, featured }: ProductCardProps) => {
  return (
    <Card className="card-hover overflow-hidden">
      <CardContent className="p-0">
        <div className="relative aspect-square overflow-hidden bg-muted">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
          {featured && (
            <Badge className="absolute left-3 top-3 bg-accent">
              Featured
            </Badge>
          )}
        </div>
        <div className="p-4">
          <div className="mb-2 flex items-center justify-between">
            <Badge variant="secondary" className="text-xs">
              {category}
            </Badge>
            <div className="flex items-center gap-1 text-sm">
              <Star className="h-3.5 w-3.5 fill-primary text-primary" />
              <span className="font-medium">{rating}</span>
              <span className="text-muted-foreground">({reviews})</span>
            </div>
          </div>
          <h3 className="mb-2 line-clamp-2 font-semibold">{name}</h3>
          <p className="text-2xl font-bold text-primary">${price.toFixed(2)}</p>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full gap-2">
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
