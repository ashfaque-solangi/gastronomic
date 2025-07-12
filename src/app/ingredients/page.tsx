import { Leaf } from "lucide-react";

export default function IngredientsPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <Leaf className="h-8 w-8 text-primary" />
        </div>
        <h1 className="font-headline text-4xl font-bold md:text-5xl">
          The Freshest Ingredients
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Discover detailed information about a wide variety of ingredients, from common staples to exotic finds. We provide nutritional data, sourcing tips, and how to best use them in your culinary creations.
        </p>
        <p className="mt-4 text-lg text-muted-foreground">
          This page is currently under development. Check back soon for a comprehensive guide to all things edible!
        </p>
      </div>
    </div>
  );
}
