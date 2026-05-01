import Link from 'next/link';
import ProjectCard from './ProjectCard';
import styles from './ProjectList.module.css';

export default function ProjectList({ data }: { data: any[] }) {
  return (
    <>
      <div className="container">
        <div className="container-content-fix-height">
          <div className="container-context">
            <div className={styles['container-project']}>
              <h3>Projects</h3>
              <div className={styles['structure-card']}>
                {data.map((item) => (
                  <Link key={item.id} href={`/projects/${item.id}`}>
                    <ProjectCard {...item} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
