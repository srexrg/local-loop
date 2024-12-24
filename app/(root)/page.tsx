import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";
import Categories from "@/components/categories";
import Process from "@/components/process";
import SuccessStories from "@/components/success-storires";
import CallToAction from "@/components/cta";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100">
      <HeroSection />
      <Features />
      <Categories />
      <Process />
      <SuccessStories />
      <CallToAction />
    </main>
  );
}
