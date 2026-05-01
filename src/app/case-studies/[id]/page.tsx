import CaseStudyPreview from '@/features/homepage/06-discover/CaseStudy/CaseStudyPreview';
import NavbarSection from '@/shared/components/navbar/Navbar';
import FooterSection from '@/shared/components/footer/footer';

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div>
      <NavbarSection />
      <CaseStudyPreview id={id} />
      <FooterSection />
    </div>
  );
}
