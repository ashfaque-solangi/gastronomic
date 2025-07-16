
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
    description: "A perfectly roasted chicken with a crispy skin and juicy meat, infused with fresh flavors of lemon and herbs. A guaranteed crowd-pleaser for any family dinner.",
  },
  {
    title: "Classic Italian Pasta Carbonara",
    image: "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?q=80&w=600&h=400&auto=format&fit=crop",
    dataAiHint: "italian pasta",
    category: "Dinner",
    description: "A timeless Roman classic that brings the heart of Italy to your dinner table. Made with eggs, hard cheese, cured pork, and black pepper for a creamy, rich sauce without any cream.",
  },
  {
    title: "Spicy Thai Green Curry with Tofu",
    image: "https://images.unsplash.com/photo-1572455044439-c1a3a4be45a8?q=80&w=600&h=400&auto=format&fit=crop",
    dataAiHint: "thai curry",
    category: "Vegan",
    description: "Aromatic and vibrant, this vegan curry is a delightful explosion of flavors. Creamy coconut milk, spicy green curry paste, and an assortment of fresh vegetables make this a healthy and satisfying meal.",
  },
  {
    title: "Hearty Beef and Barley Stew",
    image: "https://images.unsplash.com/photo-1604537466507-910d6d5165a2?q=80&w=600&h=400&auto=format&fit=crop",
    dataAiHint: "beef stew",
    category: "Comfort Food",
    description: "Comfort food at its finest, perfect for a cozy evening meal. Tender beef, nutritious barley, and a medley of root vegetables simmered in a rich, savory broth.",
  },
  {
    title: "Decadent Chocolate Lava Cake",
    image: "https://images.unsplash.com/photo-1610444043914-00122e4d5ed6?q=80&w=600&h=400&auto=format&fit=crop",
    dataAiHint: "chocolate cake",
    category: "Dessert",
    description: "A rich and molten chocolate cake that is pure indulgence for any sweet tooth. This individual-sized dessert features a gooey, liquid chocolate center that flows out when you cut into it.",
  },
  {
    title: "Fresh Summer Berry and Spinach Salad",
    image: "https://images.unsplash.com/photo-1504754524776-8f4f37790774?q=80&w=600&h=400&auto=format&fit=crop",
    dataAiHint: "berry salad",
    category: "Salad",
    description: "A light and refreshing salad bursting with the sweetness of summer berries, goat cheese, and candied nuts, all tossed in a zesty vinaigrette dressing.",
  },
   {
    title: "Homemade Margherita Pizza",
    image: "https://images.unsplash.com/photo-1598021680155-534de3531920?q=80&w=600&h=400&auto=format&fit=crop",
    dataAiHint: "margherita pizza",
    category: "Pizza",
    description: "Simple yet delicious, this classic Neapolitan pizza features fresh basil, creamy mozzarella, and a tangy tomato sauce on a perfectly chewy crust.",
  },
  {
    title: "Crispy Pan-Seared Salmon",
    image: "https://images.unsplash.com/photo-1519623812453-6199f893c445?q=80&w=600&h=400&auto=format&fit=crop",
    dataAiHint: "baked salmon",
    category: "Seafood",
    description: "A healthy and quick meal featuring a salmon fillet with perfectly crispy skin and a flaky, moist interior. Seasoned simply with salt, pepper, and a squeeze of lemon.",
  },
  {
    title: "Gourmet Mushroom Risotto",
    image: "https://images.unsplash.com/photo-1631292782168-a35985b93d79?q=80&w=600&h=400&auto=format&fit=crop",
    dataAiHint: "mushroom risotto",
    category: "Vegetarian",
    description: "A creamy and savory risotto packed with the earthy flavors of wild mushrooms, Parmesan cheese, and a hint of white wine. A sophisticated dish for any occasion.",
  },
  {
    title: "Classic American Cheeseburger",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&h=400&auto=format&fit=crop",
    dataAiHint: "cheeseburger fries",
    category: "American",
    description: "The quintessential American meal. A juicy, grilled beef patty topped with melted cheese, lettuce, tomato, and onion, served on a toasted brioche bun.",
  },
  {
    title: "Fluffy Buttermilk Pancakes",
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?q=80&w=600&h=400&auto=format&fit=crop",
    dataAiHint: "pancakes berries",
    category: "Breakfast",
    description: "Start your day right with a stack of light and fluffy pancakes made from scratch. Serve with a pat of butter and a generous drizzle of maple syrup.",
  },
  {
    title: "Authentic Chicken Tikka Masala",
    image: "https://images.unsplash.com/photo-1588166421930-848e107b233f?q=80&w=600&h=400&auto=format&fit=crop",
    dataAiHint: "chicken tikka",
    category: "Indian",
    description: "A globally beloved Indian dish. Grilled chunks of chicken are enveloped in a creamy, spiced tomato sauce that is both rich and comforting.",
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
          From quick weeknight meals to elaborate weekend feasts, find the perfect recipe for any occasion. Our collection is constantly growing with delicious and reliable recipes. This extensive library covers a wide range of culinary traditions, dietary needs, and cooking styles. Whether you're a novice cook looking for simple, step-by-step instructions or an experienced chef seeking new inspiration, our curated selection has something for everyone. Each recipe is meticulously tested by our culinary team to ensure it is not only delicious but also easy to follow. We provide detailed ingredient lists, precise measurements, and clear instructions to guide you through the cooking process. Many of our recipes also include tips for substitutions, wine pairings, and presentation ideas to help you create a truly memorable meal. Explore categories like vegetarian, gluten-free, low-carb, and international cuisines to find dishes that suit your lifestyle and taste preferences. We are committed to helping you discover the joy of cooking and share amazing food with your loved ones.
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
