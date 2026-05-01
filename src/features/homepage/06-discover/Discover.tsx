import ProjectCard from './Project/ProjectCard';
import styles from './Discover.module.css';
import Link from 'next/link';
import { caseStudies, projects } from '@/lib/api';
import CaseStudyCard from './CaseStudy/CaseStudyCard';

export default async function DiscoverSection() {
  const studies = await caseStudies();
  const projectsData = await projects();

  return (
    <>
      <div id="discover" className="container">
        <div className="container-content">
          <div className="container-context">
            <span className="font-orange">// projects & case-studies</span>
            <h2>
              Work that speaks <strong>for itself</strong>
            </h2>
            <p>
              Real projects across land planning, urban analysis, and real
              estate mapping — built with open source tools and a focus on
              clarity.
            </p>

            <section className={styles.structure}>
              <h3>Projects</h3>
              {projectsData.length > 0 ? (
                <div className={styles['structure-card']}>
                  {projectsData.map((item: any, index: number) => (
                    <Link key={item.id} href={`/project/${item.id}`}>
                      <ProjectCard key={index} {...item} />
                    </Link>
                  ))}
                </div>
              ) : (
                <p>No projects yet.</p>
              )}
              <div className={styles['structure-more']}>
                <Link href={'/project'}>show more ...</Link>
              </div>
            </section>

            <section className={styles.structure}>
              <h3>Case Studies</h3>
              {studies.length > 0 ? (
                <div className={styles['structure-card']}>
                  {studies.map((item: any, index: number) => (
                    <Link key={item.id} href={`/case-studies/${item.id}`}>
                      <CaseStudyCard key={index} {...item} />
                    </Link>
                  ))}
                </div>
              ) : (
                <p>No Case Studies Available</p>
              )}

              <div className={styles['structure-more']}>
                <Link href={'/case-studies'}>show more ...</Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
