import { useReveal } from "../hooks/useReveal";
import HeroSection     from "../components/sections/HeroSection";
import FeaturedDishes  from "../components/sections/FeaturedDishes";
import ChefStory       from "../components/sections/ChefStory";
import Pillars         from "../components/sections/Pillars";
import SpiceBreak      from "../components/sections/SpiceBreak";
import Reviews         from "../components/sections/Reviews";
import CTABanner       from "../components/sections/CTABanner";
import AdminDashboard  from "../components/sections/AdminDashboard";
import BusinessCTA     from "../components/sections/BusinessCTA";

export default function HomePage() {
  useReveal();

  return (
    <div>
      <HeroSection />
      <FeaturedDishes />
      <ChefStory />
      <Pillars />
      <SpiceBreak />
      <Reviews />
      <CTABanner />
      <AdminDashboard />
      <BusinessCTA />
    </div>
  );
}
