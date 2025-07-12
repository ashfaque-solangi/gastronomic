import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Utensils } from "lucide-react";

export default function Newsletter() {
    return (
        <section className="py-12 md:py-24 bg-secondary">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 text-primary">
                            <Utensils className="w-8 h-8" />
                             <h2 className="text-3xl md:text-4xl font-bold font-headline text-foreground">
                                Join Our Foodie Family
                            </h2>
                        </div>
                        <p className="text-muted-foreground">
                            Subscribe to our newsletter and get the latest recipes, cooking tips, and special offers delivered straight to your inbox.
                        </p>
                    </div>
                    <form className="flex w-full max-w-md mx-auto items-center space-x-2">
                        <Input type="email" placeholder="Enter your email" className="flex-1" />
                        <Button type="submit">Subscribe</Button>
                    </form>
                </div>
            </div>
        </section>
    );
}
