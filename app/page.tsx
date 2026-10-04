import Hero from '@/components/sections/Hero';
import BrandStatement from '@/components/sections/BrandStatement';
import SelectedWork from '@/components/sections/SelectedWork';
import FeaturedStory from '@/components/sections/FeaturedStory';
import OurApproach from '@/components/sections/OurApproach';
import TheStudio from '@/components/sections/TheStudio';
import Films from '@/components/sections/Films';
import Services from '@/components/sections/Services';
import ClientStories from '@/components/sections/ClientStories';
import InstagramShowcase from '@/components/social/InstagramShowcase';
import FinalCTA from '@/components/sections/FinalCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandStatement />
      <SelectedWork />
      <FeaturedStory />
      <OurApproach />
      <TheStudio />
      <Films />
      <Services />
      <ClientStories />
      <InstagramShowcase />
      <FinalCTA />
    </>
  );
}
