import { CookingPot } from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cooking Techniques',
  description: 'Our guides cover techniques from sauté to sous-vide. Learn everything you need to know to start cooking like a professional in your own kitchen.',
};


const techniques = [
  { name: "Sautéing", image: "https://images.unsplash.com/photo-1554108343-a4e951793744?q=80&w=400&h=300&auto=format&fit=crop", dataAiHint: "saute pan", description: "Quickly cooking food in a small amount of fat over high heat.", href: "#" },
  { name: "Roasting", image: "https://images.unsplash.com/photo-1598511757731-b92e21be8e9d?q=80&w=400&h=300&auto=format&fit=crop", dataAiHint: "roasting vegetables", description: "Cooking food with dry heat in an oven, creating a browned exterior.", href: "#" },
  { name: "Braising", image: "https://images.unsplash.com/photo-1567620832903-9fc6debc3e3d?q=80&w=400&h=300&auto=format&fit=crop", dataAiHint: "braised meat", description: "A combination-cooking method that uses both wet and dry heats.", href: "#" },
  { name: "Grilling", image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=400&h=300&auto=format&fit=crop", dataAiHint: "food grilling", description: "Cooking food over direct heat on a grill, often outdoors.", href: "#" },
  { name: "Steaming", image: "https://images.unsplash.com/photo-1589454848601-e04870533355?q=80&w=400&h=300&auto=format&fit=crop", dataAiHint: "steamed vegetables", description: "Cooking with moist heat, which helps retain nutrients and moisture.", href: "#" },
  { name: "Poaching", image: "https://images.unsplash.com/photo-1599021438202-3bab11a3b19a?q=80&w=400&h=300&auto=format&fit=crop", dataAiHint: "poached egg", description: "Gently cooking food in a liquid, such as water, milk, or stock.", href: "#" },
  { name: "Blanching", image: "https://images.unsplash.com/photo-1498654896293-37a310881ce0?q=80&w=400&h=300&auto=format&fit=crop", dataAiHint: "blanching vegetables", description: "Scalding vegetables in boiling water or steam for a short time.", href: "#" },
  { name: "Sous-Vide", image: "https://images.unsplash.com/photo-1620353468163-1466a5554359?q=80&w=400&h=300&auto=format&fit=crop", dataAiHint: "sous vide machine", description: "Cooking food in a vacuum-sealed bag in a temperature-controlled water bath.", href: "#" },
  { name: "Stir-Frying", image: "https://images.unsplash.com/photo-1585851256333-f5421191a320?q=80&w=400&h=300&auto=format&fit=crop", dataAiHint: "stir fry wok", description: "A Chinese cooking technique in which ingredients are fried in a small amount of very hot oil while being stirred in a wok.", href: "#" },
];

export default function TechniquesPage() {
  return (
    <div className="container px-4 py-12 md:py-24">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center mb-12">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <CookingPot className="h-8 w-8 text-primary" />
        </div>
        <h1 className="font-headline text-4xl font-bold md:text-5xl">
          Master Your Kitchen
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Dive into our comprehensive guides on cooking techniques. From the essential sauté to advanced sous-vide, we cover everything you need to know to cook like a professional.
        </p>
      </div>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {techniques.map((technique) => (
          <Card key={technique.name} className="overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <CardHeader className="p-0">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={technique.image}
                  alt={technique.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  data-ai-hint={technique.dataAiHint}
                />
              </div>
            </CardHeader>
            <CardContent className="p-6 flex-grow">
              <h2 className="font-headline text-xl leading-snug mb-2">
                {technique.name}
              </h2>
              <p className="text-muted-foreground text-sm">{technique.description}</p>
            </CardContent>
             <CardContent className="p-6 pt-0">
                 <Button variant="outline" className="w-full">Learn More</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
