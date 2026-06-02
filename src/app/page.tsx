import Navbar from "@/components/Navbar";
import HeroFunnel from "@/components/funnel/HeroFunnel";
import ClientLogoBar from "@/components/funnel/ClientLogoBar";
import ProblemSection from "@/components/funnel/ProblemSection";
import BeforeAfterSection from "@/components/funnel/BeforeAfterSection";
import ServicesSection from "@/components/funnel/ServicesSection";
import AIAssistantShowcase from "@/components/funnel/AIAssistantShowcase";
import HowItWorksSection from "@/components/funnel/HowItWorksSection";
import StatsSection from "@/components/StatsSection";
import ROICalculator from "@/components/funnel/ROICalculator";
import TestimonialsSection from "@/components/funnel/TestimonialsSection";
import CTASection from "@/components/funnel/CTASection";
import FAQSection from "@/components/funnel/FAQSection";
import Footer from "@/components/funnel/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <HeroFunnel />
      <ClientLogoBar />
      <AIAssistantShowcase />
      <ROICalculator />
      <ProblemSection />
      <BeforeAfterSection />
      <ServicesSection />
      <HowItWorksSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
      <FAQSection />
      <Footer />
    </main>
  );
}
