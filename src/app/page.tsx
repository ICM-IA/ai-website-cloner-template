import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import WhyICMSection from "@/components/WhyICMSection";
import BenefitsSection from "@/components/BenefitsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <WhyICMSection />
      <BenefitsSection />
    </main>
  );
}
