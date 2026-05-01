import ProjectList from '@/features/homepage/06-discover/Project/ProjectList';
import { projects } from '@/lib/api';
import FooterSection from '@/shared/components/footer/footer';
import NavbarSection from '@/shared/components/navbar/Navbar';

export default async function ProjectPage() {
  const projectData = await projects();
  return (
    <>
      <div>
        <NavbarSection />
        <ProjectList data={projectData} />
        <FooterSection />
      </div>
    </>
  );
}
