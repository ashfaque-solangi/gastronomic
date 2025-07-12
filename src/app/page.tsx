import AiRecipeTool from '@/components/home/ai-recipe-tool';
import Categories from '@/components/home/categories';
import FeaturedRecipes from '@/components/home/featured-recipes';
import HeroSlider from '@/components/home/hero-slider';
import HowItWorks from '@/components/home/how-it-works';
import Testimonials from '@/components/home/testimonials';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSlider />
      <Categories />
      <FeaturedRecipes />
      <HowItWorks />
      <AiRecipeTool />
      <Testimonials />
    </div>
  );
}
