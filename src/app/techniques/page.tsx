import { CookingPot } from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const techniques = [
  { name: "Sautéing", image: "https://placehold.co/400x300.png", dataAiHint: "saute pan", description: "Quickly cooking food in a small amount of fat over high heat.", href: "#" },
  { name: "Roasting", image: "https://placehold.co/400x300.png", dataAiHint: "roasting vegetables", description: "Cooking food with dry heat in an oven, creating a browned exterior.", href: "#" },
  { name: "Braising", image: "https://placehold.co/400x300.png", dataAiHint: "braised meat", description: "A combination-cooking method that uses both wet and dry heats.", href: "#" },
  { name: "Grilling", image: "https://placehold.co/400x300.png", dataAiHint: "food grilling", description: "Cooking food over direct heat on a grill, often outdoors.", href: "#" },
  { name: "Steaming", image: "https://placehold.co/400x300.png", dataAiHint: "steamed vegetables", description: "Cooking with moist heat, which helps retain nutrients and moisture.", href: "#" },
  { name: "Poaching", image: "https://placehold.co/400x300.png", dataAiHint: "poached egg", description: "Gently cooking food in a liquid, such as water, milk, or stock.", href: "#" },
];

export default function TechniquesPage() {
  return (
    <div className="container py-12 md:py-24">
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
              <CardTitle className="font-headline text-xl leading-snug mb-2">
                {technique.name}
              </CardTitle>
              <p className="text-muted-foreground text-sm">{technique.description}</p>
            </CardContent>
             <CardContent className="p-6 pt-0">
                 <Button variant="outline" asChild className="w-full">
                  <Link href={technique.href}>Learn More</Link>
                </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}