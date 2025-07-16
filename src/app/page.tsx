import type { Metadata } from 'next';
import AiRecipeTool from '@/components/home/ai-recipe-tool';
import Categories from '@/components/home/categories';
import CommunitySpotlight from '@/components/home/community-spotlight';
import FeaturedRecipes from '@/components/home/featured-recipes';
import HeroSlider from '@/components/home/hero-slider';
import HowItWorks from '@/components/home/how-it-works';
import Newsletter from '@/components/home/newsletter';
import RecipeOfTheDay from '@/components/home/recipe-of-the-day';
import Testimonials from '@/components/home/testimonials';

export const metadata: Metadata = {
  title: 'Gastronomic Hub - Your Culinary Companion',
  description: 'A comprehensive food recipe website for enthusiasts and home cooks, featuring thousands of recipes, expert cooking techniques, and detailed ingredient guides.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://gastronomic-sooty.vercel.app/',
  },
};

export default function Home() {
  return (
    <div className="flex flex-col">
       <h1 className="sr-only">Gastronomic Hub - Your Culinary Companion for recipes, cooking techniques, and ingredient guides.</h1>
      <HeroSlider />
      <Categories />
      <FeaturedRecipes />
      <RecipeOfTheDay />
      <HowItWorks />
      <AiRecipeTool />
      <CommunitySpotlight />
      <Testimonials />
      <Newsletter />
    </div>
  );
}
