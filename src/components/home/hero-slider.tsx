'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Button } from '../ui/button';
import Autoplay from "embla-carousel-autoplay"


const sliderItems = [
  {
    image: 'https://placehold.co/1600x800.png',
    dataAiHint: 'gourmet dish',
    title: 'Discover The Art of Fine Dining',
    description: 'Explore recipes curated by world-renowned chefs.',
    buttonText: 'Get Inspired',
    href: '/blog',
  },
  {
    image: 'https://placehold.co/1600x800.png',
    dataAiHint: 'fresh ingredients',
    title: 'Farm-to-Table Freshness',
    description: 'Learn to cook with the freshest seasonal ingredients.',
    buttonText: 'Explore Ingredients',
    href: '/ingredients',
  },
  {
    image: 'https://placehold.co/1600x800.png',
    dataAiHint: 'kitchen tools',
    title: 'Equip Your Kitchen Like a Pro',
    description: 'Find the best tools to elevate your cooking.',
    buttonText: 'Shop Now',
    href: '/shop',
  },
];

export default function HeroSlider() {
  return (
    <section className="w-full">
      <Carousel
        className="w-full"
        opts={{
          loop: true,
        }}
         plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: true,
          }),
        ]}
      >
        <CarouselContent>
          {sliderItems.map((item, index) => (
            <CarouselItem key={index}>
              <div className="p-0">
                <Card className="border-none rounded-none">
                  <CardContent className="relative flex aspect-video md:aspect-[2.4/1] items-center justify-center p-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      data-ai-hint={item.dataAiHint}
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-black/60" />
                    <div className="relative z-10 text-center text-white p-4">
                      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-headline">
                        {item.title}
                      </h1>
                      <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-slate-200">
                        {item.description}
                      </p>
                      <Button asChild size="lg" className="mt-8">
                        <Link href={item.href}>{item.buttonText}</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex" />
      </Carousel>
    </section>
  );
}
