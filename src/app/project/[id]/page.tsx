import NavbarSection from '@/shared/components/navbar/Navbar';
import FooterSection from '@/shared/components/footer/footer';
import ProjectPreview from '@/features/homepage/06-discover/Project/ProjectPreview';

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div>
      <NavbarSection />
      <ProjectPreview id={id} />
      <FooterSection />
    </div>
  );
}
