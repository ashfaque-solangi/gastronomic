
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
  { name: "Tomatoes", image: "https://images.unsplash.com/photo-1617470702138-c84848419632?q=80&w=400&h=300&auto=format&fit=crop", dataAiHint: "fresh tomatoes", season: "Summer", description: "Juicy, red fruits (yes, botanically they are fruits!) that form the base of countless dishes worldwide. Perfect for salads, sauces, and sandwiches." },
  { name: "Avocado", image: "https://images.unsplash.com/photo-1528825871115-3581a5387919?q=80&w=400&h=300&auto=format&fit=crop", dataAiHint: "ripe avocado", season: "All Year", description: "Creamy and rich in healthy monounsaturated fats. A versatile ingredient for toast, guacamole, salads, and even smoothies." },
  { name: "Garlic", image: "https://images.unsplash.com/photo-1540100481333-72124de552e6?q=80&w=400&h=300&auto=format&fit=crop", dataAiHint: "garlic bulbs", season: "All Year", description: "A pungent and aromatic bulb that is a foundational ingredient in many cuisines. It adds a depth of flavor that is irreplaceable." },
  { name: "Basil", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=400&h=300&auto=format&fit=crop", dataAiHint: "fresh basil", season: "Summer", description: "A sweet and fragrant herb with a hint of peppery flavor. It is the star of pesto and a key component in Italian and Thai dishes." },
  { name: "Chicken", image: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?q=80&w=400&h=300&auto=format&fit=crop", dataAiHint: "raw chicken", season: "All Year", description: "A versatile and popular lean protein that can be roasted, grilled, fried, or stewed. It absorbs flavors well, making it a culinary chameleon." },
  { name: "Salmon", image: "https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?q=80&w=400&h=300&auto=format&fit=crop", dataAiHint: "salmon fillet", season: "Spring", description: "An oily fish prized for its rich flavor and high content of omega-3 fatty acids. Delicious when baked, pan-seared, or smoked." },
  { name: "Potatoes", image: "https://images.unsplash.com/photo-1590324831862-2841449741f2?q=80&w=400&h=300&auto=format&fit=crop", dataAiHint: "fresh potatoes", season: "Autumn", description: "A starchy and satisfying tuber that is incredibly versatile. It can be transformed into fries, mashed potatoes, gratins, and salads." },
  { name: "Onions", image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=400&h=300&auto=format&fit=crop", dataAiHint: "yellow onions", season: "All Year", description: "Provides a savory, aromatic base for countless recipes around the world. Their sweetness emerges when cooked slowly." },
  { name: "Lemons", image: "https://images.unsplash.com/photo-1574316234321-3965a7f43393?q=80&w=400&h=300&auto=format&fit=crop", dataAiHint: "fresh lemons", season: "Winter", description: "Adds a bright, acidic kick that can elevate both sweet and savory dishes. Its zest and juice are used to cut richness and add freshness." },
  { name: "Cilantro", image: "https://images.unsplash.com/photo-1628109343494-b74457782333?q=80&w=400&h=300&auto=format&fit=crop", dataAiHint: "fresh cilantro", season: "Spring", description: "A bright, citrusy herb with a distinctive flavor that people either love or hate. Popular in Mexican, Thai, and Vietnamese cooking." },
  { name: "Bell Peppers", image: "https://images.unsplash.com/photo-1567637209939-a73b2457d3a7?q=80&w=400&h=300&auto=format&fit=crop", dataAiHint: "bell peppers", season: "Summer", description: "Sweet and crunchy, they come in a variety of colors (red, yellow, green, orange) and are great raw in salads or cooked in stir-fries and fajitas." },
  { name: "Eggs", image: "https://images.unsplash.com/photo-1598985172252-094154a11f20?q=80&w=400&h=300&auto=format&fit=crop", dataAiHint: "fresh eggs", season: "All Year", description: "An incredibly versatile source of high-quality protein, essential for baking, breakfast dishes, and as a binder in countless recipes." },
  { name: "Olive Oil", image: "https://images.unsplash.com/photo-1509301648354-79342b43b4d4?q=80&w=400&h=300&auto=format&fit=crop", dataAiHint: "olive oil bottle", season: "All Year", description: "A staple of Mediterranean cooking, this healthy fat is used for sautéing, dressing, and finishing dishes. Extra virgin olive oil is best for cold applications." },
  { name: "Mushrooms", image: "https://images.unsplash.com/photo-1594285882195-36ae050b4457?q=80&w=400&h=300&auto=format&fit=crop", dataAiHint: "assorted mushrooms", season: "Autumn", description: "Fungi with a meaty texture and deep, earthy flavor known as umami. Varieties range from common cremini to exotic shiitake and porcini." },
  { name: "Rice", image: "https://images.unsplash.com/photo-1586201375765-c121a27c89ea?q=80&w=400&h=300&auto=format&fit=crop", dataAiHint: "bowl of rice", season: "All Year", description: "A staple grain for more than half of the world's population. Comes in many varieties like long-grain, short-grain, brown, and white, each suited to different dishes." }
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
          Discover detailed information about a wide variety of ingredients, from common staples to exotic finds. We provide nutritional data, sourcing tips, and how to best use them in your culinary creations. Understanding the building blocks of any great dish is the first step toward becoming a more confident and creative cook. Our comprehensive ingredient guide is designed to be your go-to resource for everything food-related. Learn about the history of spices, the science behind leavening agents, and the best seasons for different fruits and vegetables. We offer insights into how to select the freshest produce, the highest quality meats, and the most flavorful cheeses. Each entry in our guide includes practical advice on storage to maximize freshness and minimize waste. You'll also find a wealth of information on flavor pairings, helping you to experiment in the kitchen with confidence. Whether you're curious about a rare herb or want to master the basics of a pantry staple, our guide is here to educate and inspire your culinary journey. Dive in and explore the wonderful world of ingredients that make our food so diverse and delicious.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {ingredients.map((ingredient, index) => (
          <Card key={`${ingredient.name}-${index}`} className="overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
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
