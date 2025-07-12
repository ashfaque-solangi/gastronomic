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
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=600&h=400&auto=format&fit=crop',
    dataAiHint: 'italian pasta',
    href: '#',
    description: 'A timeless classic that brings the heart of Italy to your plate.'
  },
  {
    title: 'Spicy Thai Green Curry',
    image: 'https://images.unsplash.com/photo-1569058242253-92a8c3295932?q=80&w=600&h=400&auto=format&fit=crop',
    dataAiHint: 'thai curry',
    href: '#',
    description: 'Aromatic and vibrant, this curry is a delightful explosion of flavors.'
  },
  {
    title: 'Hearty Beef Stew',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=600&h=400&auto=format&fit=crop',
    dataAiHint: 'beef stew',
    href: '#',
    description: 'Comfort food at its finest, perfect for a cozy evening.'
  },
   {
    title: 'Decadent Chocolate Lava Cake',
    image: 'https://images.unsplash.com/photo-1586985289942-d698c1a63c63?q=80&w=600&h=400&auto=format&fit=crop',
    dataAiHint: 'chocolate cake',
    href: '#',
    description: 'A rich and molten chocolate cake that is pure indulgence.'
  },
];

export default function FeaturedRecipes() {
  return (
    <section className="py-12 md:py-24 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">
            Trending Recipes
            </h2>
            <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
            Explore our most popular dishes, loved by food enthusiasts around the world.
            </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredRecipes.map((recipe) => (
            <Card key={recipe.title} className="overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-card">
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
                <h3 className="font-headline text-xl leading-snug">
                  {recipe.title}
                </h3>
                <p className="text-muted-foreground text-sm mt-2">{recipe.description}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button variant="outline" className="w-full">
                  View Recipe <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
