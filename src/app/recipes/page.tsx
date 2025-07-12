import { UtensilsCrossed } from "lucide-react";

export default function RecipesPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <UtensilsCrossed className="h-8 w-8 text-primary" />
        </div>
        <h1 className="font-headline text-4xl font-bold md:text-5xl">
          Our Recipe Collection
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          From quick weeknight meals to elaborate weekend feasts, find the perfect recipe for any occasion. Our collection is constantly growing with delicious and reliable recipes tested by our team.
        </p>
        <p className="mt-4 text-lg text-muted-foreground">
          The kitchen is heating up! Our full recipe browser with advanced filtering is coming soon.
        </p>
      </div>
    </div>
  );
}