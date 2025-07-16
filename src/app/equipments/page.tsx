
import { Wrench } from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Essential Cooking Equipment',
  description: 'Equip your kitchen with the best tools. Our guides help you choose the right equipment, from knives to stand mixers, to improve your cooking.',
};

const equipments = [
  { name: "Chef's Knife", image: "https://images.unsplash.com/photo-1556911220-e15b29be8c3f?q=80&w=400&h=300&auto=format&fit=crop", dataAiHint: "chefs knife", description: "The single most important tool in any kitchen. A sharp, well-balanced 8-inch chef's knife makes prep work efficient and enjoyable." },
  { name: "Cast Iron Skillet", image: "https://images.unsplash.com/photo-1601205165388-40345d4a138c?q=80&w=400&h=300&auto=format&fit=crop", dataAiHint: "cast iron skillet", description: "Incredibly versatile and durable, it's perfect for searing, frying, baking, and more. It provides excellent heat retention and gets better with age." },
  { name: "Stand Mixer", image: "https://images.unsplash.com/photo-1618519369014-517a94c1b502?q=80&w=400&h=300&auto=format&fit=crop", dataAiHint: "stand mixer", description: "A must-have for serious bakers. It makes quick work of kneading dough, whipping cream, and mixing batters, saving you time and effort." },
  { name: "Dutch Oven", image: "https://images.unsplash.com/photo-1598448555209-967a216e545e?q=80&w=400&h=300&auto=format&fit=crop", dataAiHint: "dutch oven", description: "A heavy, lidded pot perfect for slow-cooking stews, braises, soups, and even baking artisan bread. Its even heat distribution is unmatched." },
  { name: "Food Processor", image: "https://images.unsplash.com/photo-1605549120713-3563a62862f1?q=80&w=400&h=300&auto=format&fit=crop", dataAiHint: "food processor", description: "A huge time-saver for chopping, grating, shredding, and pureeing. Great for making sauces, dips, and doughs in seconds." },
  { name: "High-Powered Blender", image: "https://images.unsplash.com/photo-1594411993481-4286241a87e5?q=80&w=400&h=300&auto=format&fit=crop", dataAiHint: "kitchen blender", description: "Essential for ultra-smooth smoothies, soups, and sauces. A high-powered model can handle tough ingredients like nuts and ice with ease." },
  { name: "Large Cutting Board", image: "https://images.unsplash.com/photo-1549298236-83605c03c5cf?q=80&w=400&h=300&auto=format&fit=crop", dataAiHint: "cutting board", description: "Protect your countertops and your knives with a large, stable cutting board. Wood or plastic are both great options, but wood is gentler on blades." },
  { name: "Measuring Cups & Spoons", image: "https://images.unsplash.com/photo-1601614270154-10bde403254c?q=80&w=400&h=300&auto=format&fit=crop", dataAiHint: "measuring cups", description: "Accuracy is key in cooking and especially baking. A complete, accurate set of measuring cups and spoons is a fundamental requirement." },
  { name: "Balloon Whisk", image: "https://images.unsplash.com/photo-1542317855-322191599818?q=80&w=400&h=300&auto=format&fit=crop", dataAiHint: "kitchen whisk", description: "For incorporating air into egg whites or cream, and for emulsifying dressings and sauces smoothly. Its balloon shape is ideal for airy results." },
  { name: "Digital Kitchen Scale", image: "https://images.unsplash.com/photo-1594955745749-9486a38b5523?q=80&w=400&h=300&auto=format&fit=crop", dataAiHint: "kitchen scale", description: "For precise baking and portion control, a digital scale is far more accurate than volume measurements. Essential for consistent results." },
  { name: "Rimmed Baking Sheets", image: "https://images.unsplash.com/photo-1628109343494-b74457782333?q=80&w=400&h=300&auto=format&fit=crop", dataAiHint: "baking sheets", description: "A true kitchen workhorse for roasting vegetables, baking cookies, and sheet pan dinners. The rim prevents juices from spilling." },
  { name: "Colander", image: "https://images.unsplash.com/photo-1589996488941-c724de13a1e9?q=80&w=400&h=300&auto=format&fit=crop", dataAiHint: "kitchen colander", description: "A perforated bowl used to strain away liquid from food, such as draining boiled pasta or washing salad greens. A kitchen staple." }
];

export default function EquipmentsPage() {
  return (
    <div className="container px-4 py-12 md:py-24">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center mb-12">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <Wrench className="h-8 w-8 text-primary" />
        </div>
        <h1 className="font-headline text-4xl font-bold md:text-5xl">
          Essential Kitchen Equipment
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Having the right tools can make all the difference in your cooking, transforming it from a chore into a joy. Explore our guides to the essential equipment every home cook should have. A well-equipped kitchen is the foundation of great cooking. It's not about having every gadget imaginable, but about investing in high-quality, versatile tools that will serve you well for years to come. Our expert guides are designed to demystify kitchen equipment and help you make informed choices. We provide in-depth reviews, comparisons, and recommendations for everything from the most basic utensils to specialized appliances. Learn what makes a great chef's knife, why a cast iron skillet is a worthwhile investment, and how a stand mixer can revolutionize your baking. We also offer advice on proper care and maintenance to ensure your equipment lasts a lifetime. Whether you're setting up your first kitchen or looking to upgrade your existing tools, our comprehensive guides will help you build a collection of equipment that is both functional and inspiring. With the right tools at your disposal, you'll be empowered to tackle any recipe with confidence and precision.
        </p>
      </div>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {equipments.map((item) => (
          <Card key={item.name} className="overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <CardHeader className="p-0">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  data-ai-hint={item.dataAiHint}
                />
              </div>
            </CardHeader>
            <CardContent className="p-6 flex-grow">
              <h2 className="font-headline text-xl leading-snug mb-2">
                {item.name}
              </h2>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
