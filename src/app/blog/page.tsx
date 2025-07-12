import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const blogPosts = [
  {
    title: "The Art of Sourdough: A Beginner's Guide",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "sourdough bread",
    href: "#",
    category: "Baking",
    description: "Unlock the secrets to baking the perfect loaf of sourdough bread at home. From starter to bake, we've got you covered.",
    author: "Jane Doe",
    date: "October 26, 2023",
  },
  {
    title: "A Deep Dive into the World of Spices",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "colorful spices",
    href: "#",
    category: "Techniques",
    description: "Explore the history and use of common and exotic spices to elevate your everyday cooking to a new level.",
    author: "John Smith",
    date: "October 22, 2023",
  },
  {
    title: "Mastering the Grill: Tips from a BBQ Pitmaster",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "grilling steak",
    href: "#",
    category: "Grilling",
    description: "Fire up the grill with confidence. Learn the best techniques for grilling meats and vegetables to perfection.",
    author: "Mike Richards",
    date: "October 19, 2023",
  },
  {
    title: "The Ultimate Guide to Knife Skills",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "chopping vegetables",
    href: "#",
    category: "Techniques",
    description: "A sharp knife is a chef's best friend. Learn the essential cuts that will make you faster and more efficient in the kitchen.",
    author: "Emily Chen",
    date: "October 15, 2023",
  },
  {
    title: "Seasonal Superfoods: What to Eat in Autumn",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "autumn vegetables",
    href: "#",
    category: "Wellness",
    description: "Discover the most nutritious and delicious foods that autumn has to offer, from pumpkins to pomegranates.",
    author: "Dr. Alan Green",
    date: "October 11, 2023",
  },
  {
    title: "One-Pot Wonders: 5 Easy Weeknight Dinners",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "one pot meal",
    href: "#",
    category: "Quick Meals",
    description: "Spend less time cleaning and more time enjoying. These five one-pot recipes are perfect for busy weeknights.",
    author: "Sarah Lee",
    date: "October 8, 2023",
  },
];

export default function BlogPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center mb-12">
        <h1 className="font-headline text-4xl font-bold md:text-5xl">
          The Culinary Chronicle
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Explore our digital magazine, featuring exclusive interviews with top chefs, in-depth culinary articles, stunning food photography, and curated recipe collections that tell a story.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Card key={post.title} className="overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-card">
            <CardHeader className="p-0">
              <Link href={post.href} className="block aspect-video relative overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  data-ai-hint={post.dataAiHint}
                />
              </Link>
            </CardHeader>
            <CardContent className="p-6 flex-grow">
              <Badge variant="outline" className="mb-2">{post.category}</Badge>
              <CardTitle className="font-headline text-xl leading-snug">
                <Link href={post.href} className="hover:text-primary transition-colors">{post.title}</Link>
              </CardTitle>
              <p className="text-muted-foreground text-sm mt-2">{post.description}</p>
            </CardContent>
            <CardFooter className="p-6 pt-0 flex justify-between items-center text-sm text-muted-foreground">
              <div>
                <p className="font-semibold">{post.author}</p>
                <p>{post.date}</p>
              </div>
               <Button variant="outline" asChild className="w-auto">
                  <Link href={post.href}>Read More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}