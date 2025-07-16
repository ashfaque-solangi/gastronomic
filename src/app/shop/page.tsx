
'use client';

import { ShoppingCart, Check } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { cn } from "@/lib/utils";
import type { Metadata } from 'next';

// This is a client component, so we can't export metadata directly.
// We would typically set this in a parent layout or via the Head component if needed.
// For now, the page-level metadata is in layout.tsx.

const products = [
  {
    id: "prod_001",
    name: "8-Inch Chef's Knife",
    image: "https://images.unsplash.com/photo-1620216464293-8ca6a203e053?q=80&w=400&h=300&auto=format&fit=crop",
    dataAiHint: "chefs knife",
    price: "$99.99",
    description: "A high-carbon stainless steel knife, forged for balance and precision. Perfect for all your chopping, slicing, and dicing needs."
  },
  {
    id: "prod_002",
    name: "12-Inch Cast Iron Skillet",
    image: "https://images.unsplash.com/photo-1549618112-25801f9f5926?q=80&w=400&h=300&auto=format&fit=crop",
    dataAiHint: "cast iron skillet",
    price: "$45.00",
    description: "Pre-seasoned and ready to use. This skillet offers unparalleled heat retention for searing, sautéing, baking, and frying."
  },
  {
    id: "prod_003",
    name: "Digital Kitchen Scale",
    image: "https://images.unsplash.com/photo-1594955745749-9486a38b5523?q=80&w=400&h=300&auto=format&fit=crop",
    dataAiHint: "kitchen scale",
    price: "$25.50",
    description: "Achieve precision in your baking and cooking with this easy-to-read scale. Features a tare function and measures in grams, ounces, and pounds."
  },
  {
    id: "prod_004",
    name: "5-Quart Stand Mixer",
    image: "https://images.unsplash.com/photo-1544132808-b1c43d55030f?q=80&w=400&h=300&auto=format&fit=crop",
    dataAiHint: "stand mixer",
    price: "$299.00",
    description: "A powerful and versatile mixer with multiple attachments for dough, batters, and meringues. A baker's best friend."
  },
  {
    id: "prod_005",
    name: "Ceramic Non-stick Pan Set",
    image: "https://images.unsplash.com/photo-1574967399899-764957a72be0?q=80&w=400&h=300&auto=format&fit=crop",
    dataAiHint: "pan set",
    price: "$120.00",
    description: "A 3-piece set that's durable, easy to clean, and free from harmful chemicals. An essential for healthy, everyday cooking."
  },
  {
    id: "prod_006",
    name: "Organic Bamboo Cutting Board Set",
    image: "https://images.unsplash.com/photo-1628109343494-b74457782333?q=80&w=400&h=300&auto=format&fit=crop",
    dataAiHint: "cutting board",
    price: "$35.00",
    description: "Eco-friendly and gentle on knives, this set includes three different sizes for all your food prep needs. Naturally antibacterial."
  },
  {
    id: "prod_007",
    name: "Immersion Blender with Whisk",
    image: "https://images.unsplash.com/photo-1618519369014-517a94c1b502?q=80&w=400&h=300&auto=format&fit=crop",
    dataAiHint: "immersion blender",
    price: "$55.00",
    description: "Perfect for soups, smoothies, and sauces, blending directly in the pot. Comes with a whisk attachment for added versatility."
  },
  {
    id: "prod_008",
    name: "Enameled Dutch Oven",
    image: "https://images.unsplash.com/photo-1601205165388-40345d4a138c?q=80&w=400&h=300&auto=format&fit=crop",
    dataAiHint: "dutch oven",
    price: "$150.00",
    description: "Ideal for braises, stews, and even baking bread. The enamel coating prevents sticking and makes cleanup a breeze. A true kitchen workhorse."
  },
  {
    id: "prod_009",
    name: "Electric Spice Grinder",
    image: "https://images.unsplash.com/photo-1516393593254-949246f480ce?q=80&w=400&h=300&auto=format&fit=crop",
    dataAiHint: "spice grinder",
    price: "$29.99",
    description: "Unlock the full flavor of your spices by grinding them fresh at home. Also great for coffee beans and nuts."
  },
  {
    id: "prod_010",
    name: "French Press Coffee Maker",
    image: "https://images.unsplash.com/photo-1545665225-b23b99e4d45e?q=80&w=400&h=300&auto=format&fit=crop",
    dataAiHint: "french press",
    price: "$39.99",
    description: "Brew rich, full-bodied coffee with this classic French press. Features a durable borosilicate glass carafe and a multi-layer filtration system."
  },
  {
    id: "prod_011",
    name: "Silicone Utensil Set",
    image: "https://images.unsplash.com/photo-1598112268886-f13251a3f05b?q=80&w=400&h=300&auto=format&fit=crop",
    dataAiHint: "kitchen utensils",
    price: "$49.99",
    description: "A complete set of heat-resistant silicone utensils that won't scratch your non-stick cookware. Includes spatula, spoon, tongs, and more."
  },
  {
    id: "prod_012",
    name: "Professional Mandoline Slicer",
    image: "https://images.unsplash.com/photo-1596796123472-35a60f4a13c8?q=80&w=400&h=300&auto=format&fit=crop",
    dataAiHint: "vegetable slicer",
    price: "$42.50",
    description: "Create perfectly uniform slices, juliennes, and waffle cuts with ease. Includes multiple blades and a safety guard for protection."
  }
];

export default function ShopPage() {
  const [addedToCart, setAddedToCart] = useState<string[]>([]);

  const handleAddToCart = (productId: string) => {
    setAddedToCart(prev => [...prev, productId]);
    setTimeout(() => {
        setAddedToCart(prev => prev.filter(id => id !== productId));
    }, 2000); // Revert back after 2 seconds
  };

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
          Welcome to the Gastronomic Hub marketplace! Here you will find a carefully curated selection of high-quality kitchen tools, gadgets, and specialty ingredients chosen by our team of culinary experts. We believe that great cooking starts with great equipment. That's why we've sourced products that offer the perfect blend of performance, durability, and design. We've personally tested these items in our own kitchens to ensure they meet our high standards. From the essential chef's knife that feels like an extension of your hand to the versatile Dutch oven that will be passed down for generations, each product in our shop is here to enhance your cooking experience. We also feature a selection of artisanal ingredients that can elevate your dishes from good to unforgettable. Explore our collection and discover the tools that will inspire you to create, experiment, and share delicious food with confidence. Our goal is to be your trusted partner in the kitchen, providing not just recipes and techniques, but also the very best equipment to bring your culinary visions to life.
        </p>
      </div>

       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
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
              <h2 className="font-headline text-xl leading-snug mb-2">
                {product.name}
              </h2>
              <p className="text-muted-foreground text-sm">{product.description}</p>
            </CardContent>
            <CardFooter className="p-6 pt-0 flex justify-between items-center">
                <p className="font-bold text-lg">{product.price}</p>
                <Button onClick={() => handleAddToCart(product.id)} disabled={addedToCart.includes(product.id)} className={cn("w-36", addedToCart.includes(product.id) && "bg-green-500 hover:bg-green-600")}>
                    {addedToCart.includes(product.id) ? (
                        <>
                            <Check className="mr-2 h-4 w-4" /> Added
                        </>
                    ) : (
                        "Add to Cart"
                    )}
                </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
