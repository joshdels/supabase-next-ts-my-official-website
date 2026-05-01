import CaseStudyList from '@/features/homepage/06-discover/CaseStudy/CaseStudyList';
import FooterSection from '@/shared/components/footer/footer';
import NavbarSection from '@/shared/components/navbar/Navbar';

export default function CasePage() {
  return (
    <>
      <div>
        <NavbarSection />
        <CaseStudyList />
        <FooterSection />
      </div>
    </>
  );
}
