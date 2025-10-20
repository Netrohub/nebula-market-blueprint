import { Card } from "@/components/ui/card";
import { Smartphone, Laptop, Watch, Headphones, Camera, Gamepad2 } from "lucide-react";

const categories = [
  { name: "Electronics", icon: Smartphone, count: 245 },
  { name: "Computers", icon: Laptop, count: 189 },
  { name: "Wearables", icon: Watch, count: 127 },
  { name: "Audio", icon: Headphones, count: 156 },
  { name: "Photography", icon: Camera, count: 98 },
  { name: "Gaming", icon: Gamepad2, count: 213 },
];

const CategoryGrid = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-3xl font-bold">Browse by Category</h2>
          <p className="text-muted-foreground">Explore products across popular categories</p>
        </div>
        
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.name}
                className="card-hover cursor-pointer p-6 text-center"
              >
                <div className="mb-3 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="mb-1 font-semibold">{category.name}</h3>
                <p className="text-sm text-muted-foreground">{category.count} items</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
