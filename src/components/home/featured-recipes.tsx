import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

const featuredRecipes = [
  {
    title: 'Classic Italian Pasta',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'italian pasta',
    href: '#',
  },
  {
    title: 'Spicy Thai Green Curry',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'thai curry',
    href: '#',
  },
  {
    title: 'Hearty Beef Stew',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'beef stew',
    href: '#',
  },
   {
    title: 'Decadent Chocolate Lava Cake',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'chocolate cake',
    href: '#',
  },
];

export default function FeaturedRecipes() {
  return (
    <section className="py-12 md:py-24 bg-muted">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-center">
          Trending Recipes
        </h2>
        <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
          Explore our most popular dishes, loved by food enthusiasts around the world.
        </p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredRecipes.map((recipe) => (
            <Card key={recipe.title} className="overflow-hidden flex flex-col">
              <CardHeader className="p-0">
                <div className="aspect-video relative">
                  <Image
                    src={recipe.image}
                    alt={recipe.title}
                    fill
                    className="object-cover"
                    data-ai-hint={recipe.dataAiHint}
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4 flex-grow">
                <CardTitle className="font-headline text-lg leading-snug">
                  {recipe.title}
                </CardTitle>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button variant="outline" asChild className="w-full">
                  <Link href={recipe.href}>View Recipe <ArrowRight className="ml-2" /></Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
