import { Wrench } from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Essential Cooking Equipment',
  description: 'Equip your kitchen with the best tools. Our guides help you choose the right equipment, from knives to stand mixers, to improve your cooking.',
};

const equipments = [
  { name: "Chef's Knife", image: "https://images.unsplash.com/photo-1614760114946-5a43555203f2?q=80&w=400&h=300&auto=format&fit=crop", dataAiHint: "chefs knife", description: "The most important tool in the kitchen. A sharp, well-balanced chef's knife makes prep work a breeze." },
  { name: "Cast Iron Skillet", image: "https://images.unsplash.com/photo-1504304793368-25b0a6237a34?q=80&w=400&h=300&auto=format&fit=crop", dataAiHint: "cast iron skillet", description: "Incredibly versatile for searing, frying, and even baking. Gets better with age." },
  { name: "Stand Mixer", image: "https://images.unsplash.com/photo-1578619934390-3a1a194a2872?q=80&w=400&h=300&auto=format&fit=crop", dataAiHint: "stand mixer", description: "A must-have for bakers. Makes quick work of kneading dough and whipping cream." },
  { name: "Dutch Oven", image: "https://images.unsplash.com/photo-1583196828943-96cca4873d6b?q=80&w=400&h=300&auto=format&fit=crop", dataAiHint: "dutch oven", description: "Perfect for slow-cooking stews, braises, and soups. Provides even, consistent heat." },
  { name: "Food Processor", image: "https://images.unsplash.com/photo-1605549120699-27083a339f40?q=80&w=400&h=300&auto=format&fit=crop", dataAiHint: "food processor", description: "Saves time on chopping, grating, and pureeing. Great for making sauces and dips." },
  { name: "Blender", image: "https://images.unsplash.com/photo-1565012543929-417c804f375f?q=80&w=400&h=300&auto=format&fit=crop", dataAiHint: "kitchen blender", description: "Essential for smoothies, soups, and sauces. A high-powered model can handle anything." },
  { name: "Cutting Board", image: "https://images.unsplash.com/photo-1507048331192-d259247576d3?q=80&w=400&h=300&auto=format&fit=crop", dataAiHint: "cutting board", description: "Protect your countertops and your knives. Wood or plastic are both great options." },
  { name: "Measuring Cups & Spoons", image: "https://images.unsplash.com/photo-1596704017321-721a41a89b0a?q=80&w=400&h=300&auto=format&fit=crop", dataAiHint: "measuring cups", description: "Accuracy is key in baking and cooking. A good set is a fundamental requirement." },
  { name: "Whisk", image: "https://images.unsplash.com/photo-1596704017321-721a41a89b0a?q=80&w=400&h=300&auto=format&fit=crop", dataAiHint: "kitchen whisk", description: "For incorporating air into egg whites or cream, and for emulsifying dressings." },
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
          Having the right tools can make all the difference in your cooking. Explore our guides to the essential equipment every home cook should have.
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
