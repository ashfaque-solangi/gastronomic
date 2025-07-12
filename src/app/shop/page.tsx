import { ShoppingCart } from "lucide-react";

export default function ShopPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <ShoppingCart className="h-8 w-8 text-primary" />
        </div>
        <h1 className="font-headline text-4xl font-bold md:text-5xl">
          Curated Kitchen Essentials
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Welcome to the Gastronomic Hub marketplace! Here you'll find a curated selection of high-quality kitchen tools, gadgets, and specialty ingredients to elevate your cooking experience.
        </p>
        <p className="mt-4 text-lg text-muted-foreground">
          Our shop is currently being stocked with the best products. Please visit again soon to explore our collection.
        </p>
      </div>
    </div>
  );
}
