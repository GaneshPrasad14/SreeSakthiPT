import { Layout } from "@/components/layout/Layout";
import { HeroSlider } from "@/components/home/HeroSlider";
import { Categories } from "@/components/home/Categories";
import { AboutPreview } from "@/components/home/AboutPreview";
import { Stats } from "@/components/home/Stats";
import { CallToAction } from "@/components/home/CallToAction";
import { CategoryShowcase } from "@/components/home/CategoryShowcase";

const Index = () => {
  return (
    <Layout>
      <HeroSlider />
      <Categories />
      <CategoryShowcase />
      <AboutPreview />
      <Stats />
      <CallToAction />
    </Layout>
  );
};

export default Index;
