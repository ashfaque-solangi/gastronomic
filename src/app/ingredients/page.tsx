import { Leaf } from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ingredient Guide',
  description: 'Explore our guide to ingredients, from common staples to exotic finds. Get nutritional data, sourcing tips, and the best ways to use them in your cooking.',
};

const ingredients = [
  { name: "Tomatoes", image: "https://images.unsplash.com/photo-1467020323552-36f7bf0e30e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VG9tYXRvZXN8ZW58MHx8MHx8fDA%3D", dataAiHint: "fresh tomatoes", season: "Summer", description: "Juicy, red fruits perfect for salads, sauces, and sandwiches." },
  { name: "Avocado", image: "https://images.unsplash.com/photo-1590431306482-f700ee050c59?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEF2b2NhZG98ZW58MHx8MHx8fDA%3D", dataAiHint: "ripe avocado", season: "All Year", description: "Creamy and rich in healthy fats, great for toast and guacamole." },
  { name: "Garlic", image: "https://images.unsplash.com/photo-1639119677984-b6c9ed1b0ca8?q=80&w=1333&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", dataAiHint: "garlic bulbs", season: "All Year", description: "Aromatic and pungent, a foundational ingredient in many cuisines." },
  { name: "Basil", image: "https://images.unsplash.com/photo-1627738663093-d0779d56e3bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEJhc2lsfGVufDB8fDB8fHww", dataAiHint: "fresh basil", season: "Summer", description: "A sweet and fragrant herb, essential for pesto and Italian dishes." },
  { name: "Chicken", image: "https://plus.unsplash.com/premium_photo-1661767136966-38d5999f819a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fENoaWNrZW4lMjBtZWF0fGVufDB8fDB8fHww", dataAiHint: "raw chicken", season: "All Year", description: "A versatile lean protein that can be roasted, grilled, or fried." },
  { name: "Salmon", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=400&h=300&auto=format&fit=crop", dataAiHint: "salmon fillet", season: "Spring", description: "An oily fish rich in omega-3s, delicious when baked or pan-seared." },
  { name: "Potatoes", image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=400&h=300&auto=format&fit=crop", dataAiHint: "fresh potatoes", season: "Autumn", description: "A starchy tuber that's incredibly versatile, from fries to mash." },
  { name: "Onions", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtlpoOOdlgB-IFRwcbMQ9AG-4Zh2xa871_iA&s", dataAiHint: "yellow onions", season: "All Year", description: "Provides a savory base for countless recipes around the world." },
  { name: "Lemons", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIn2XzJ97e7tnSVqXKNZIjGsUXm_s1XTNKYg&s", dataAiHint: "fresh lemons", season: "Winter", description: "Adds a bright, acidic kick to both sweet and savory dishes." },
  { name: "Cilantro", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPZA1EeW8uySk_6fPmEMT_RRZiSVYA6LWA3Q&s", dataAiHint: "fresh cilantro", season: "Spring", description: "A bright, citrusy herb popular in Mexican, Thai, and Vietnamese cooking." },
  { name: "Bell Peppers", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREEf1ZirvrzxXq2MwTC5N0b4nGjH2VsOQC_w&s", dataAiHint: "bell peppers", season: "Summer", description: "Sweet and crunchy, they come in a variety of colors and are great raw or cooked." },
  { name: "Eggs", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzgKigohIEgizt-0nw8T8jfZfD0gFblsM0iw&s", dataAiHint: "fresh eggs", season: "All Year", description: "An incredibly versatile source of protein, essential for baking and breakfast." },
];

export default function IngredientsPage() {
  return (
    <div className="container px-4 py-12 md:py-24">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center mb-12">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <Leaf className="h-8 w-8 text-primary" />
        </div>
        <h1 className="font-headline text-4xl font-bold md:text-5xl">
          The Freshest Ingredients
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Discover detailed information about a wide variety of ingredients, from common staples to exotic finds. We provide nutritional data, sourcing tips, and how to best use them in your culinary creations.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {ingredients.map((ingredient) => (
          <Card key={ingredient.name} className="overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <CardHeader className="p-0">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={ingredient.image}
                  alt={ingredient.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  data-ai-hint={ingredient.dataAiHint}
                />
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <Badge variant="secondary" className="mb-2">Best in {ingredient.season}</Badge>
              <h2 className="font-headline text-xl leading-snug mb-2">
                {ingredient.name}
              </h2>
              <p className="text-muted-foreground text-sm">{ingredient.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
