'use server';

/**
 * @fileOverview Provides AI-driven recipe suggestions based on seasonal ingredients and current cooking trends.
 *
 * - getRecipeSuggestions - A function that returns recipe suggestions.
 * - RecipeSuggestionsInput - The input type for the getRecipeSuggestions function.
 * - RecipeSuggestionsOutput - The return type for the getRecipeSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RecipeSuggestionsInputSchema = z.object({
  season: z.string().describe('The current season (e.g., Spring, Summer, Autumn, Winter).'),
  cookingTrends: z.string().describe('Current cooking trends (e.g., healthy eating, vegan, gluten-free).'),
});
export type RecipeSuggestionsInput = z.infer<typeof RecipeSuggestionsInputSchema>;

const RecipeSuggestionsOutputSchema = z.object({
  recipes: z
    .array(
      z.object({
        name: z.string().describe('The name of the recipe.'),
        ingredients: z.string().describe('A list of the ingredients needed for the recipe.'),
        instructions: z.string().describe('Instructions for preparing the recipe.'),
        reasoning: z.string().describe('Reasoning behind the AI pick of this recipe.'),
      })
    )
    .describe('An array of recipe suggestions based on the season and cooking trends.'),
});
export type RecipeSuggestionsOutput = z.infer<typeof RecipeSuggestionsOutputSchema>;

export async function getRecipeSuggestions(input: RecipeSuggestionsInput): Promise<RecipeSuggestionsOutput> {
  return recipeSuggestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'recipeSuggestionsPrompt',
  input: {schema: RecipeSuggestionsInputSchema},
  output: {schema: RecipeSuggestionsOutputSchema},
  prompt: `You are an AI recipe assistant that specializes in suggesting recipes based on the current season and current cooking trends.

  Suggest recipes considering these factors:
  Season: {{{season}}}
  Cooking Trends: {{{cookingTrends}}}

  Return an array of diverse and interesting recipe options. For each recipe include the name, a list of ingredients, instructions, and the AI reasoning for recommending it. Return valid JSON that matches the RecipeSuggestionsOutputSchema schema.

  Ensure the output is formatted as a valid JSON array of recipes.
  `,
});

const recipeSuggestionsFlow = ai.defineFlow(
  {
    name: 'recipeSuggestionsFlow',
    inputSchema: RecipeSuggestionsInputSchema,
    outputSchema: RecipeSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
