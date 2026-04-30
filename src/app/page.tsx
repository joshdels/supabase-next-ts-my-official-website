import HeroSection from '@/features/homepage/01-hero/Hero';
import StakesSection from '@/features/homepage/02-stakes/Stakes';
import ValueSection from '@/features/homepage/03-value/Value';
import GuideSection from '@/features/homepage/04-guide/Guide';
import PlanSection from '@/features/homepage/05-plan/Plan';
import CaseStudySection from '@/features/homepage/06-discover/DiscoverSection';
import SkillSection from '@/features/homepage/07-skills/Skills';
import ContactSection from '@/features/homepage/08-contact/Contact';
import FooterSection from '@/shared/components/footer/Footer';
import NavbarSection from '@/shared/components/navbar/Navbar';


export default function Home() {
  return (
    <>
      <NavbarSection />
      <HeroSection />
      <StakesSection />
      <ValueSection />
      <GuideSection />
      <PlanSection />
      <CaseStudySection />
      <SkillSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
