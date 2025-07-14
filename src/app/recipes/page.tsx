
import { UtensilsCrossed } from "lucide-react";
import type { Metadata } from 'next';
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: 'Recipe Collection',
  description: 'Find the perfect recipe for any occasion, from quick meals to elaborate feasts. Our collection features delicious and reliable recipes tested by our team.',
};

const recipes = [
  {
    title: "Lemon Herb Roasted Chicken",
    image: "https://images.unsplash.com/photo-1599305221447-3a6d62a98f40?q=80&w=600&h=400&auto=format&fit=crop",
    dataAiHint: "roast chicken",
    category: "Dinner",
    description: "A perfectly roasted chicken with a crispy skin and juicy meat, infused with fresh flavors.",
  },
  {
    title: "Classic Italian Pasta",
    image: "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?q=80&w=600&h=400&auto=format&fit=crop",
    dataAiHint: "italian pasta",
    category: "Dinner",
    description: "A timeless classic that brings the heart of Italy to your dinner table.",
  },
  {
    title: "Spicy Thai Green Curry",
    image: "https://images.unsplash.com/photo-1572455044439-c1a3a4be45a8?q=80&w=600&h=400&auto=format&fit=crop",
    dataAiHint: "thai curry",
    category: "Vegan",
    description: "Aromatic and vibrant, this curry is a delightful explosion of flavors.",
  },
  {
    title: "Hearty Beef Stew",
    image: "https://images.unsplash.com/photo-1604537466507-910d6d5165a2?q=80&w=600&h=400&auto=format&fit=crop",
    dataAiHint: "beef stew",
    category: "Comfort Food",
    description: "Comfort food at its finest, perfect for a cozy evening meal.",
  },
  {
    title: "Decadent Chocolate Lava Cake",
    image: "https://images.unsplash.com/photo-1610444043914-00122e4d5ed6?q=80&w=600&h=400&auto=format&fit=crop",
    dataAiHint: "chocolate cake",
    category: "Dessert",
    description: "A rich and molten chocolate cake that is pure indulgence for any sweet tooth.",
  },
  {
    title: "Fresh Summer Berry Salad",
    image: "https://images.unsplash.com/photo-1504754524776-8f4f37790774?q=80&w=600&h=400&auto=format&fit=crop",
    dataAiHint: "berry salad",
    category: "Salad",
    description: "A light and refreshing salad bursting with the sweetness of summer berries.",
  },
   {
    title: "Homemade Margherita Pizza",
    image: "https://images.unsplash.com/photo-1598021680155-534de3531920?q=80&w=600&h=400&auto=format&fit=crop",
    dataAiHint: "margherita pizza",
    category: "Pizza",
    description: "Simple yet delicious, featuring fresh basil, mozzarella, and a tangy tomato sauce.",
  },
  {
    title: "Crispy Baked Salmon",
    image: "https://images.unsplash.com/photo-1519623812453-6199f893c445?q=80&w=600&h=400&auto=format&fit=crop",
    dataAiHint: "baked salmon",
    category: "Seafood",
    description: "A healthy and quick meal with perfectly crispy skin and flaky salmon.",
  },
  {
    title: "Gourmet Mushroom Risotto",
    image: "https://images.unsplash.com/photo-1631292782168-a35985b93d79?q=80&w=600&h=400&auto=format&fit=crop",
    dataAiHint: "mushroom risotto",
    category: "Vegetarian",
    description: "A creamy and savory risotto packed with the earthy flavors of wild mushrooms.",
  }
];

export default function RecipesPage() {
  return (
    <div className="container px-4 py-12 md:py-24">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center mb-12">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <UtensilsCrossed className="h-8 w-8 text-primary" />
        </div>
        <h1 className="font-headline text-4xl font-bold md:text-5xl">
          Our Recipe Collection
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          From quick weeknight meals to elaborate weekend feasts, find the perfect recipe for any occasion. Our collection is constantly growing with delicious and reliable recipes.
        </p>
      </div>

       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <Card key={recipe.title} className="overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <CardHeader className="p-0">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={recipe.image}
                  alt={recipe.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  data-ai-hint={recipe.dataAiHint}
                />
              </div>
            </CardHeader>
            <CardContent className="p-6 flex-grow">
               <Badge variant="secondary" className="mb-2">{recipe.category}</Badge>
              <h2 className="font-headline text-xl leading-snug mb-2">
                {recipe.title}
              </h2>
              <p className="text-muted-foreground text-sm">{recipe.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
