import { Carrot, Fish, IceCream, Pizza } from "lucide-react";
import { Card, CardContent, CardTitle } from "../ui/card";
import Link from "next/link";

const categories = [
    {
        name: "Appetizers",
        icon: <Pizza className="w-10 h-10" />,
        href: "#"
    },
    {
        name: "Main Courses",
        icon: <Fish className="w-10 h-10" />,
        href: "#"
    },
    {
        name: "Desserts",
        icon: <IceCream className="w-10 h-10" />,
        href: "#"
    },
    {
        name: "Vegetarian",
        icon: <Carrot className="w-10 h-10" />,
        href: "#"
    },
];

export default function Categories() {
    return (
        <section className="py-12 md:py-24 bg-background">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">Explore by Category</h2>
                    <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
                        Find the perfect recipe for any occasion, from quick bites to elaborate meals.
                    </p>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                    {categories.map((category) => (
                        <Link href={category.href} key={category.name} className="group">
                             <Card className="text-center flex flex-col items-center justify-center p-6 aspect-square transition-all duration-300 hover:bg-muted/50 hover:shadow-lg hover:-translate-y-1">
                                <CardContent className="p-0 flex flex-col items-center justify-center space-y-4">
                                    <div className="text-foreground transition-colors duration-300 group-hover:text-primary-foreground/80 dark:group-hover:text-black">
                                        {category.icon}
                                    </div>
                                    <CardTitle className="font-headline text-lg md:text-xl">{category.name}</CardTitle>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
