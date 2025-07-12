import { ChefHat, Search, Smile } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const steps = [
    {
        icon: <Search className="w-10 h-10" />,
        title: "Find a Recipe",
        description: "Browse through thousands of our curated recipes or use the AI tool to find something new."
    },
    {
        icon: <ChefHat className="w-10 h-10" />,
        title: "Get Cooking",
        description: "Follow our easy, step-by-step instructions to create your culinary masterpiece."
    },
    {
        icon: <Smile className="w-10 h-10" />,
        title: "Enjoy Your Meal",
        description: "Savor the delicious results of your hard work with family and friends."
    }
]

export default function HowItWorks() {
    return (
        <section className="py-12 md:py-24 bg-background">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">How It Works</h2>
                    <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
                        Creating delicious meals has never been this simple. Follow these three easy steps.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <Card key={step.title} className="text-center border-dashed border-2 p-4">
                            <CardHeader className="items-center">
                                <div className="p-4 bg-muted rounded-full mb-4">
                                    {step.icon}
                                </div>
                                <CardTitle className="font-headline text-xl">{index + 1}. {step.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{step.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
