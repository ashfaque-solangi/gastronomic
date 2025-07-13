
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
    image: 'https://images.unsplash.com/photo-1595295333158-4742f28fbd85?q=80&w=600&h=400&auto=format&fit=crop',
    dataAiHint: 'italian pasta',
    href: '#',
    description: 'A timeless classic that brings the heart of Italy to your plate.'
  },
  {
    title: 'Spicy Thai Green Curry',
    image: 'https://images.unsplash.com/photo-1572455044439-c1a3a4be45a8?q=80&w=600&h=400&auto=format&fit=crop',
    dataAiHint: 'thai curry',
    href: '#',
    description: 'Aromatic and vibrant, this curry is a delightful explosion of flavors.'
  },
  {
    title: 'Hearty Beef Stew',
    image: 'https://images.unsplash.com/photo-1604537466507-910d6d5165a2?q=80&w=600&h=400&auto=format&fit=crop',
    dataAiHint: 'beef stew',
    href: '#',
    description: 'Comfort food at its finest, perfect for a cozy evening.'
  },
   {
    title: 'Decadent Chocolate Lava Cake',
    image: 'https://images.unsplash.com/photo-1610444043914-00122e4d5ed6?q=80&w=600&h=400&auto=format&fit=crop',
    dataAiHint: 'chocolate cake',
    href: '#',
    description: 'A rich and molten chocolate cake that is pure indulgence.'
  },
];

export default function FeaturedRecipes() {
  return (
    <section className="py-12 md:py-24 bg-secondary">
      <div className="container px-4">
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
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
