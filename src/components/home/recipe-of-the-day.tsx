import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Clock, Star, Users } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function RecipeOfTheDay() {
  return (
    <section className="py-12 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium mb-4">
                <Award className="inline-block w-4 h-4 mr-1 text-primary"/>
                Recipe of the Day
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-headline">
                Lemon Herb Roasted Chicken
            </h2>
            <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
                A perfectly roasted chicken with a crispy skin and juicy meat, infused with the fresh flavors of lemon and herbs. A guaranteed crowd-pleaser.
            </p>
        </div>

        <Card className="overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="relative aspect-video lg:aspect-auto">
            <Image
              src="https://images.unsplash.com/photo-1604503468817-a1f1227a854d?q=80&w=800&h=600&auto=format&fit=crop"
              alt="Lemon Herb Roasted Chicken"
              fill
              className="object-cover"
              data-ai-hint="roast chicken"
            />
          </div>
          <CardContent className="p-6 md:p-8 lg:p-12 flex flex-col justify-center">
            <div className="space-y-6">
                <div className="flex items-center gap-4">
                    <Badge variant="outline" className="text-sm">Dinner</Badge>
                    <div className="flex items-center gap-1">
                        <Star className="w-5 h-5 text-primary fill-primary" />
                        <Star className="w-5 h-5 text-primary fill-primary" />
                        <Star className="w-5 h-5 text-primary fill-primary" />
                        <Star className="w-5 h-5 text-primary fill-primary" />
                        <Star className="w-5 h-5 text-primary/30 fill-primary/30" />
                        <span className="ml-1 text-sm text-muted-foreground">(124 reviews)</span>
                    </div>
                </div>
                <h3 className="text-2xl font-bold font-headline">Why You'll Love It</h3>
                <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                    <li><strong>Incredibly Flavorful:</strong> Aromatic herbs and zesty lemon create a taste that's simply irresistible.</li>
                    <li><strong>Juicy & Tender:</strong> Our method ensures the chicken stays moist on the inside with a perfectly crispy skin.</li>
                    <li><strong>Simple Ingredients:</strong> Made with common ingredients you likely already have in your pantry.</li>
                </ul>

                <div className="grid grid-cols-2 gap-4 text-sm pt-4">
                    <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-primary" />
                        <div>
                            <p className="font-semibold">Prep time</p>
                            <p className="text-muted-foreground">20 mins</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-primary" />
                        <div>
                            <p className="font-semibold">Cook time</p>
                            <p className="text-muted-foreground">1 hr 15 mins</p>
                        </div>
                    </div>
                     <div className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-primary" />
                        <div>
                            <p className="font-semibold">Servings</p>
                            <p className="text-muted-foreground">4-6 people</p>
                        </div>
                    </div>
                </div>

                <div className="pt-4">
                    <Button size="lg">
                        Get Full Recipe <ArrowRight className="ml-2" />
                    </Button>
                </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
