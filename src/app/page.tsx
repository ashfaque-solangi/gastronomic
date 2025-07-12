import AiRecipeTool from '@/components/home/ai-recipe-tool';
import Categories from '@/components/home/categories';
import CommunitySpotlight from '@/components/home/community-spotlight';
import FeaturedRecipes from '@/components/home/featured-recipes';
import HeroSlider from '@/components/home/hero-slider';
import HowItWorks from '@/components/home/how-it-works';
import Newsletter from '@/components/home/newsletter';
import RecipeOfTheDay from '@/components/home/recipe-of-the-day';
import Testimonials from '@/components/home/testimonials';

export default function Home() {
  return (
    <div className="flex flex-col">
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
