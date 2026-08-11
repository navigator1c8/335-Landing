import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutSection from "@/components/sections/AboutSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import EquipmentSection from "@/components/sections/EquipmentSection";
import PricingSection from "@/components/sections/PricingSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import TeamSection from "@/components/sections/TeamSection";
import FAQSection from "@/components/sections/FAQSection";
import BookingSection from "@/components/sections/BookingSection";
import ReviewsCarouselSection from "@/components/sections/ReviewsCarouselSection";
import CTADownloadSection from "@/components/sections/CTADownloadSection";
import CTABannerSection from "@/components/sections/CTABannerSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <AboutSection />
      <ProcessSection />
      <ProjectsSection />
      <EquipmentSection />
      <PricingSection />
      <TestimonialsSection />
      <TeamSection />
      <ReviewsCarouselSection />
      <FAQSection />
      <CTABannerSection />
      <BookingSection />
      <CTADownloadSection />
      <ContactSection />
    </Layout>
  );
};

export default Index;
