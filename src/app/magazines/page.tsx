import { BookOpen } from "lucide-react";

export default function MagazinesPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <BookOpen className="h-8 w-8 text-primary" />
        </div>
        <h1 className="font-headline text-4xl font-bold md:text-5xl">
          The Culinary Chronicle
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Explore our digital magazine, featuring exclusive interviews with top chefs, in-depth culinary articles, stunning food photography, and curated recipe collections that tell a story.
        </p>
        <p className="mt-4 text-lg text-muted-foreground">
          The next issue is hot off the press and will be available here soon. Stay tuned for inspiring content!
        </p>
      </div>
    </div>
  );
}
