import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { CareerRoadmap } from "@/components/CareerRoadmap";
import { GetToKnowMe } from "@/components/GetToKnowMe";
import { Projects } from "@/components/Projects";
import { InstagramSection } from "@/components/InstagramSection";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <ExpertiseSection />
        <CareerRoadmap />
        <Projects />
        <InstagramSection />
        <GetToKnowMe />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
