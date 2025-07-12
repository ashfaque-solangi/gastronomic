import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";

const testimonials = [
    {
        name: "Sarah L.",
        role: "Home Cook",
        avatar: "https://placehold.co/100x100.png",
        dataAiHint: "woman portrait",
        testimonial: "This website has completely transformed my cooking! The recipes are easy to follow and absolutely delicious. The AI tool is a game changer for when I don't know what to make."
    },
    {
        name: "Mike R.",
        role: "Food Blogger",
        avatar: "https://placehold.co/100x100.png",
        dataAiHint: "man portrait",
        testimonial: "As a food blogger, I'm always looking for inspiration. Gastronomic Hub is my go-to source for new ideas and techniques. The quality of the content is outstanding."
    },
    {
        name: "Jessica P.",
        role: "Busy Mom",
        avatar: "https://placehold.co/100x100.png",
        dataAiHint: "person smiling",
        testimonial: "Finding quick and healthy meals for my family used to be a struggle. Now, I can find tons of options in minutes. Thank you for making my life so much easier!"
    },
]

export default function Testimonials() {
    return (
        <section className="py-12 md:py-24 bg-secondary">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">What Our Users Say</h2>
                    <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
                        Don't just take our word for it. Here's what food lovers think about our platform.
                    </p>
                </div>
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full max-w-4xl mx-auto"
                >
                    <CarouselContent>
                        {testimonials.map((testimonial, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <Card className="h-full bg-card">
                                        <CardContent className="flex flex-col items-center text-center p-6 space-y-4">
                                            <div className="relative w-24 h-24">
                                                 <Image src={testimonial.avatar} alt={testimonial.name} fill className="rounded-full object-cover" data-ai-hint={testimonial.dataAiHint}/>
                                            </div>
                                            <p className="text-muted-foreground italic">"{testimonial.testimonial}"</p>
                                            <div>
                                                <p className="font-bold">{testimonial.name}</p>
                                                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </section>
    );
}
