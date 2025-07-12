import { CookingPot } from "lucide-react";

export default function EquipmentsPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <CookingPot className="h-8 w-8 text-primary" />
        </div>
        <h1 className="font-headline text-4xl font-bold md:text-5xl">
          Master Your Kitchen
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Dive into our comprehensive guides on cooking equipment. From the essential chef's knife to advanced sous-vide machines, we cover everything you need to know to choose, use, and maintain your tools like a professional.
        </p>
        <p className="mt-4 text-lg text-muted-foreground">
          Our equipment guides are being polished. Check back soon for in-depth reviews and tutorials.
        </p>
      </div>
    </div>
  );
}
