import { Leaf } from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ingredients = [
  { name: "Tomatoes", image: "https://placehold.co/400x300.png", dataAiHint: "fresh tomatoes", season: "Summer", description: "Juicy, red fruits perfect for salads, sauces, and sandwiches." },
  { name: "Avocado", image: "https://placehold.co/400x300.png", dataAiHint: "ripe avocado", season: "All Year", description: "Creamy and rich in healthy fats, great for toast and guacamole." },
  { name: "Garlic", image: "https://placehold.co/400x300.png", dataAiHint: "garlic bulbs", season: "All Year", description: "Aromatic and pungent, a foundational ingredient in many cuisines." },
  { name: "Basil", image: "https://placehold.co/400x300.png", dataAiHint: "fresh basil", season: "Summer", description: "A sweet and fragrant herb, essential for pesto and Italian dishes." },
  { name: "Chicken", image: "https://placehold.co/400x300.png", dataAiHint: "raw chicken", season: "All Year", description: "A versatile lean protein that can be roasted, grilled, or fried." },
  { name: "Salmon", image: "https://placehold.co/400x300.png", dataAiHint: "salmon fillet", season: "Spring", description: "An oily fish rich in omega-3s, delicious when baked or pan-seared." },
  { name: "Potatoes", image: "https://placehold.co/400x300.png", dataAiHint: "fresh potatoes", season: "Autumn", description: "A starchy tuber that's incredibly versatile, from fries to mash." },
  { name: "Onions", image: "https://placehold.co/400x300.png", dataAiHint: "yellow onions", season: "All Year", description: "Provides a savory base for countless recipes around the world." },
  { name: "Lemons", image: "https://placehold.co/400x300.png", dataAiHint: "fresh lemons", season: "Winter", description: "Adds a bright, acidic kick to both sweet and savory dishes." },
  { name: "Cilantro", image: "https://placehold.co/400x300.png", dataAiHint: "fresh cilantro", season: "Spring", description: "A bright, citrusy herb popular in Mexican, Thai, and Vietnamese cooking." },
  { name: "Bell Peppers", image: "https://placehold.co/400x300.png", dataAiHint: "bell peppers", season: "Summer", description: "Sweet and crunchy, they come in a variety of colors and are great raw or cooked." },
  { name: "Eggs", image: "https://placehold.co/400x300.png", dataAiHint: "fresh eggs", season: "All Year", description: "An incredibly versatile source of protein, essential for baking and breakfast." },
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
              <CardTitle className="font-headline text-xl leading-snug mb-2">
                {ingredient.name}
              </CardTitle>
              <p className="text-muted-foreground text-sm">{ingredient.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
