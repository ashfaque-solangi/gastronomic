'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ChefHat, Loader2, Sparkles } from 'lucide-react';

import {
  RecipeSuggestionsInput,
  RecipeSuggestionsOutput,
} from '@/ai/flows/recipe-suggestions';
import { handleGetRecipeSuggestions } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

const formSchema = z.object({
  season: z.string().min(1, 'Please select a season.'),
  cookingTrends: z
    .string()
    .min(3, 'Please enter a trend, e.g., "vegan".'),
});

export default function AiRecipeTool() {
  const [suggestions, setSuggestions] = useState<RecipeSuggestionsOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      season: 'Summer',
      cookingTrends: 'healthy eating',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setSuggestions(null);
    try {
      const result = await handleGetRecipeSuggestions(values as RecipeSuggestionsInput);
      if (result) {
        setSuggestions(result);
      } else {
        throw new Error('No suggestions received.');
      }
    } catch (error) {
      console.error('Error getting recipe suggestions:', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to get recipe suggestions. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="ai-tool" className="py-12 md:py-24 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium">
              AI-Powered Suggestions
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-headline">
              Never Run Out of Ideas
            </h2>
            <p className="text-muted-foreground">
              Tell us the season and what you're in the mood for, and our AI chef will whip up some creative recipe ideas just for you.
            </p>

            <Card className="bg-card shadow-lg">
              <CardHeader>
                <CardTitle>Generate Recipes</CardTitle>
                <CardDescription>
                  Fill in the details below to get started.
                </CardDescription>
              </CardHeader>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <CardContent className="space-y-4">
                    <FormField
                      control={form.control}
                      name="season"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Season</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a season" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Spring">Spring</SelectItem>
                              <SelectItem value="Summer">Summer</SelectItem>
                              <SelectItem value="Autumn">Autumn</SelectItem>
                              <SelectItem value="Winter">Winter</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="cookingTrends"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Cooking Trend or Ingredient</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="e.g., vegan, gluten-free, chicken"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                  <CardFooter>
                    <Button type="submit" disabled={isLoading} className="w-full bg-slate-800 text-white hover:bg-slate-700 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-300">
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Generating...
                        </>
                      ) : (
                        <>
                          <Sparkles className="mr-2 h-4 w-4" />
                          Get Suggestions
                        </>
                      )}
                    </Button>
                  </CardFooter>
                </form>
              </Form>
            </Card>
          </div>
          <div className="h-full">
            <Card className="h-full bg-muted/50 flex flex-col shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ChefHat className="mr-2 text-foreground" />
                  AI Recommendations
                </CardTitle>
                <CardDescription>
                  Your personalized recipe ideas will appear here.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow overflow-auto p-2">
                {isLoading && (
                  <div className="flex flex-col items-center justify-center h-full space-y-4 text-muted-foreground">
                    <Loader2 className="h-12 w-12 animate-spin text-foreground" />
                    <p>Our AI is thinking...</p>
                  </div>
                )}
                {!isLoading && !suggestions && (
                  <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground p-8">
                     <ChefHat className="h-16 w-16 mb-4" />
                     <p>Ready to cook up some magic? <br/>Let's get some delicious ideas flowing!</p>
                  </div>
                )}
                {suggestions && (
                  <Accordion type="single" collapsible className="w-full">
                    {suggestions.recipes.map((recipe, index) => (
                      <AccordionItem value={`item-${index}`} key={index}>
                        <AccordionTrigger className="font-headline text-left hover:no-underline">{recipe.name}</AccordionTrigger>
                        <AccordionContent className="space-y-4">
                          <div>
                            <h4 className="font-bold mb-2">Why this recipe?</h4>
                            <p className="text-sm text-muted-foreground italic">"{recipe.reasoning}"</p>
                          </div>
                           <div>
                            <h4 className="font-bold mb-2">Ingredients</h4>
                            <p className="text-sm whitespace-pre-line">{recipe.ingredients}</p>
                          </div>
                           <div>
                            <h4 className="font-bold mb-2">Instructions</h4>
                            <p className="text-sm whitespace-pre-line">{recipe.instructions}</p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
