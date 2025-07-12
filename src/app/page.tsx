import HeroSlider from '@/components/home/hero-slider';
import FeaturedRecipes from '@/components/home/featured-recipes';
import AiRecipeTool from '@/components/home/ai-recipe-tool';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSlider />
      <FeaturedRecipes />
      <AiRecipeTool />
    </div>
  );
}
