import Image from 'next/image';
import { project } from '@/lib/api';
import { formatDate } from '@/utils/date';
import ProjectBlocks from './ProjectBlocks';
import styles from './ProjectPreview.module.css';

export default async function ProjectPreview({ id }: { id: string }) {
  const projectData = await project(Number(id));

  return (
    <div className="container-preview">
      <div className="container-content">
        <div className="container-context">
          <div className="container-topspacer">
            <p>{formatDate(projectData.created_at)}</p>

            <h1>{projectData.name}</h1>
            <p>{projectData.description}</p>

            <div className={styles['image-wrapper']}>
              <Image
                src={projectData.image || '/images/fallback.png'}
                alt={projectData.name}
                fill
                className={styles.image}
              />
            </div>

            <ProjectBlocks blocks={projectData.blocks} />
          </div>
        </div>
      </div>
    </div>
  );
}
