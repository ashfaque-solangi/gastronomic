'use server';

import {
  getRecipeSuggestions,
  RecipeSuggestionsInput,
  RecipeSuggestionsOutput,
} from '@/ai/flows/recipe-suggestions';

export async function handleGetRecipeSuggestions(
  input: RecipeSuggestionsInput
): Promise<RecipeSuggestionsOutput | null> {
  try {
    const output = await getRecipeSuggestions(input);
    return output;
  } catch (error) {
    console.error('An error occurred in handleGetRecipeSuggestions:', error);
    // Optionally re-throw or handle the error as needed
    return null;
  }
}
