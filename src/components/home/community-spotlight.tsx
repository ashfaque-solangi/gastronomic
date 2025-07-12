import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const communityPosts = [
  {
    id: 1,
    author: {
      name: "VeganVibes",
      avatar: "https://placehold.co/100x100.png",
      dataAiHint: "woman smiling",
    },
    image: {
      src: "https://placehold.co/600x400.png",
      alt: "A vibrant vegan curry dish.",
      dataAiHint: "vegan curry",
    },
    title: "My new favorite weekday curry!",
    commentCount: 23,
  },
  {
    id: 2,
    author: {
      name: "BBQKing",
      avatar: "https://placehold.co/100x100.png",
      dataAiHint: "man grilling",
    },
    image: {
      src: "https://placehold.co/600x400.png",
      alt: "Perfectly grilled BBQ ribs.",
      dataAiHint: "bbq ribs",
    },
    title: "Nailed the fall-off-the-bone ribs this weekend!",
    commentCount: 58,
  },
  {
    id: 3,
    author: {
      name: "PastryQueen",
      avatar: "https://placehold.co/100x100.png",
      dataAiHint: "baker portrait",
    },
    image: {
      src: "https://placehold.co/600x400.png",
      alt: "A beautiful layered cake with berries.",
      dataAiHint: "berry cake",
    },
    title: "First attempt at a mirror glaze cake. So proud!",
    commentCount: 112,
  },
];

export default function CommunitySpotlight() {
  return (
    <section className="py-12 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            From Our Community
          </h2>
          <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
            See what fellow food lovers are creating and sharing. Get inspired by real home cooks.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {communityPosts.map((post) => (
            <Card key={post.id} className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="relative aspect-square">
                <Image
                  src={post.image.src}
                  alt={post.image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={post.image.dataAiHint}
                />
              </div>
              <CardContent className="p-4">
                <p className="font-semibold text-lg mb-2">{post.title}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={post.author.avatar} alt={post.author.name} data-ai-hint={post.author.dataAiHint} />
                      <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">{post.author.name}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                    <MessageCircle className="w-4 h-4" />
                    <span>{post.commentCount}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
                <Link href="#">Explore Community <ArrowRight className="ml-2" /></Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
