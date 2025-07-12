import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const products = [
  {
    name: "Chef's Knife",
    image: "https://placehold.co/400x300.png",
    dataAiHint: "chefs knife",
    price: "$99.99",
    description: "A high-carbon stainless steel knife, perfect for all your chopping needs."
  },
  {
    name: "Cast Iron Skillet",
    image: "https://placehold.co/400x300.png",
    dataAiHint: "cast iron skillet",
    price: "$45.00",
    description: "Pre-seasoned and ready to use for searing, sautéing, baking, and more."
  },
  {
    name: "Digital Kitchen Scale",
    image: "https://placehold.co/400x300.png",
    dataAiHint: "kitchen scale",
    price: "$25.50",
    description: "Achieve precision in your baking and cooking with this easy-to-read scale."
  },
  {
    name: "Stand Mixer",
    image: "https://placehold.co/400x300.png",
    dataAiHint: "stand mixer",
    price: "$299.00",
    description: "A powerful and versatile mixer for dough, batters, and meringues."
  },
  {
    name: "Non-stick Pan Set",
    image: "https://placehold.co/400x300.png",
    dataAiHint: "pan set",
    price: "$120.00",
    description: "Durable and easy to clean, this set is a kitchen essential for everyday cooking."
  },
  {
    name: "Bamboo Cutting Board Set",
    image: "https://placehold.co/400x300.png",
    dataAiHint: "cutting board",
    price: "$35.00",
    description: "Eco-friendly and gentle on knives, this set includes three different sizes."
  },
  {
    name: "Immersion Blender",
    image: "https://placehold.co/400x300.png",
    dataAiHint: "immersion blender",
    price: "$55.00",
    description: "Perfect for soups, smoothies, and sauces, blending directly in the pot."
  },
  {
    name: "Dutch Oven",
    image: "https://placehold.co/400x300.png",
    dataAiHint: "dutch oven",
    price: "$150.00",
    description: "Ideal for braises, stews, and even baking bread. A true kitchen workhorse."
  },
  {
    name: "Spice Grinder",
    image: "https://placehold.co/400x300.png",
    dataAiHint: "spice grinder",
    price: "$29.99",
    description: "Unlock the full flavor of your spices by grinding them fresh at home."
  },
];

export default function ShopPage() {
  return (
    <div className="container px-4 py-12 md:py-24">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center mb-12">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <ShoppingCart className="h-8 w-8 text-primary" />
        </div>
        <h1 className="font-headline text-4xl font-bold md:text-5xl">
          Curated Kitchen Essentials
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Welcome to the Gastronomic Hub marketplace! Here you'll find a curated selection of high-quality kitchen tools, gadgets, and specialty ingredients to elevate your cooking experience.
        </p>
      </div>

       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <Card key={product.name} className="overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <CardHeader className="p-0">
               <div className="aspect-video relative overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  data-ai-hint={product.dataAiHint}
                />
              </div>
            </CardHeader>
            <CardContent className="p-6 flex-grow">
              <CardTitle className="font-headline text-xl leading-snug mb-2">
                {product.name}
              </CardTitle>
              <p className="text-muted-foreground text-sm">{product.description}</p>
            </CardContent>
            <CardFooter className="p-6 pt-0 flex justify-between items-center">
                <p className="font-bold text-lg">{product.price}</p>
                <Button asChild>
                  <Link href="#">Add to Cart</Link>
                </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
