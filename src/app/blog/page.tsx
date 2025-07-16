
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Culinary Chronicle Blog',
  description: 'Our digital magazine features chef interviews, culinary articles, and curated recipe collections. Dive into the stories behind the food.',
};

const blogPosts = [
  {
    title: "The Art of Sourdough: A Beginner's Guide",
    image: "https://images.unsplash.com/photo-1589067334259-86c32e495393?q=80&w=600&h=400&auto=format&fit=crop",
    dataAiHint: "sourdough bread",
    href: "/blog/art-of-sourdough",
    category: "Baking",
    description: "Unlock the secrets to baking the perfect loaf of sourdough bread at home. From cultivating a starter to achieving the perfect bake, we've got you covered.",
    author: "Jane Doe",
    date: "October 26, 2023",
  },
  {
    title: "A Deep Dive into the World of Spices",
    image: "https://images.unsplash.com/photo-1600962815123-627882252a12?q=80&w=600&h=400&auto=format&fit=crop",
    dataAiHint: "colorful spices",
    href: "/blog/world-of-spices",
    category: "Techniques",
    description: "Explore the history and use of common and exotic spices to elevate your everyday cooking. Learn how to toast, grind, and blend spices for maximum flavor.",
    author: "John Smith",
    date: "October 22, 2023",
  },
  {
    title: "Mastering the Grill: Tips from a BBQ Pitmaster",
    image: "https://images.unsplash.com/photo-1594041682319-1423f9b3f34d?q=80&w=600&h=400&auto=format&fit=crop",
    dataAiHint: "grilling steak",
    href: "/blog/mastering-the-grill",
    category: "Grilling",
    description: "Fire up the grill with confidence. Learn the best techniques for direct and indirect heat, temperature control, and grilling meats and vegetables to perfection.",
    author: "Mike Richards",
    date: "October 19, 2023",
  },
  {
    title: "The Ultimate Guide to Essential Knife Skills",
    image: "https://images.unsplash.com/photo-1620216464293-8ca6a203e053?q=80&w=600&h=400&auto=format&fit=crop",
    dataAiHint: "chopping vegetables",
    href: "/blog/knife-skills-guide",
    category: "Techniques",
    description: "A sharp knife is a chef's best friend. Learn the essential cuts—from brunoise to julienne—that will make you faster, safer, and more efficient in the kitchen.",
    author: "Emily Chen",
    date: "October 15, 2023",
  },
  {
    title: "Seasonal Superfoods: What to Eat in Autumn",
    image: "https://images.unsplash.com/photo-1601205164923-820551722218?q=80&w=600&h=400&auto=format&fit=crop",
    dataAiHint: "autumn vegetables",
    href: "/blog/seasonal-superfoods-autumn",
    category: "Wellness",
    description: "Discover the most nutritious and delicious foods that autumn has to offer. We explore the benefits of pumpkins, pomegranates, Brussels sprouts, and more.",
    author: "Dr. Alan Green",
    date: "October 11, 2023",
  },
  {
    title: "One-Pot Wonders: 5 Easy Weeknight Dinners",
    image: "https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?q=80&w=600&h=400&auto=format&fit=crop",
    dataAiHint: "one pot meal",
    href: "/blog/one-pot-wonders",
    category: "Quick Meals",
    description: "Spend less time cleaning and more time enjoying. These five one-pot recipes are packed with flavor and perfect for busy weeknights.",
    author: "Sarah Lee",
    date: "October 8, 2023",
  },
  {
    title: "The Science of Perfect Pasta",
    image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?q=80&w=600&h=400&auto=format&fit=crop",
    dataAiHint: "making pasta",
    href: "/blog/science-of-pasta",
    category: "Cooking",
    description: "From the importance of salted water to the science of emulsifying a sauce, understand the chemistry that makes pasta one of the world's most beloved foods.",
    author: "Dr. Elena Rizzo",
    date: "October 5, 2023",
  },
  {
    title: "Fermentation for Beginners: Kimchi & Sauerkraut",
    image: "https://images.unsplash.com/photo-1594313223274-4264665cf1d2?q=80&w=600&h=400&auto=format&fit=crop",
    dataAiHint: "kimchi jars",
    href: "/blog/fermentation-for-beginners",
    category: "DIY",
    description: "Dive into the fascinating world of fermentation. Learn to make delicious and healthy kimchi and sauerkraut in your own kitchen with our step-by-step guide.",
    author: "Kenji Tanaka",
    date: "October 2, 2023",
  },
  {
    title: "Baking with Alternative Flours",
    image: "https://images.unsplash.com/photo-1545609232-603411a03649?q=80&w=600&h=400&auto=format&fit=crop",
    dataAiHint: "gluten-free baking",
    href: "/blog/alternative-flours",
    category: "Baking",
    description: "Explore the delicious world of gluten-free baking with our guide to using almond, coconut, and buckwheat flours for fantastic results in your favorite recipes.",
    author: "Chloe Adams",
    date: "September 28, 2023",
  },
  {
    title: "The Art of Plating: How to Make Your Food Look Beautiful",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600&h=400&auto=format&fit=crop",
    dataAiHint: "gourmet plating",
    href: "/blog/art-of-plating",
    category: "Presentation",
    description: "They say you eat with your eyes first. Learn the principles of professional food styling and plating to turn your home-cooked meals into works of art.",
    author: "Isabelle Dubois",
    date: "September 25, 2023",
  },
  {
    title: "Understanding Umami: The Fifth Taste",
    image: "https://images.unsplash.com/photo-1598514983318-208b8ce43134?q=80&w=600&h=400&auto=format&fit=crop",
    dataAiHint: "mushrooms soy sauce",
    href: "/blog/understanding-umami",
    category: "Food Science",
    description: "Go beyond sweet, sour, salty, and bitter. Discover the savory taste of umami and learn how to incorporate umami-rich ingredients to add depth to your cooking.",
    author: "Dr. Kenjiro Sato",
    date: "September 21, 2023",
  },
  {
    title: "A Guide to Homemade Stock",
    image: "https://images.unsplash.com/photo-1598214886328-98939a738a0f?q=80&w=600&h=400&auto=format&fit=crop",
    dataAiHint: "soup stock pot",
    href: "/blog/homemade-stock-guide",
    category: "Fundamentals",
    description: "Elevate your soups, sauces, and stews by making your own stock from scratch. Our guide covers chicken, beef, and vegetable stocks.",
    author: "Marcus Chen",
    date: "September 18, 2023",
  },
];

export default function BlogPage() {
  return (
    <div className="container px-4 py-12 md:py-24">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center mb-12">
        <h1 className="font-headline text-4xl font-bold md:text-5xl">
          The Culinary Chronicle
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Explore our digital magazine, featuring exclusive interviews with top chefs, in-depth culinary articles, stunning food photography, and curated recipe collections that tell a story. Food is more than just sustenance; it's culture, history, science, and art. The Culinary Chronicle is your portal to this fascinating world. We journey to the source of ingredients, exploring farms and markets to understand where our food comes from. We sit down with innovative chefs who are pushing the boundaries of gastronomy and share their stories and philosophies. Our team of writers, photographers, and recipe developers is passionate about creating content that is not only beautiful but also informative and inspiring. Whether you're looking for a deep dive into the history of a particular dish, a scientific explanation of a cooking technique, or simply a stunning gallery of food photography to spark your creativity, you'll find it here. Our mission is to foster a deeper appreciation for the food we eat and the people who produce it. Join our community of curious cooks and food lovers as we explore the rich tapestry of the culinary world together, one story at a time.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Link href={post.href} key={post.title}>
            <Card className="overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-card h-full">
              <CardHeader className="p-0">
                <div className="block aspect-video relative overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    data-ai-hint={post.dataAiHint}
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <Badge variant="outline" className="mb-2">{post.category}</Badge>
                <h2 className="font-headline text-xl leading-snug">
                  {post.title}
                </h2>
                <p className="text-muted-foreground text-sm mt-2">{post.description}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex justify-between items-center text-sm text-muted-foreground">
                <div>
                  <p className="font-semibold">{post.author}</p>
                  <p>{post.date}</p>
                </div>
                <div className="flex items-center gap-1 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4"/>
                </div>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
