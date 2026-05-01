import Image from 'next/image';
import CaseStudyBlocks from './CaseStudyBlocks';
import { caseStudy } from '@/lib/api';
import { formatDate } from '@/utils/date';
import styles from './CaseStudyPreview.module.css';

export default async function CaseStudyPreview({ id }: { id: string }) {
  const study = await caseStudy(Number(id));

  return (
    <div className="container">
      <div className="container-content">
        <div className="container-topspacer ">
          <p>{formatDate(study.created_at)}</p>

          <h1>{study.title}</h1>
          <p>{study.description}</p>

          <div className={styles['image-wrapper']}>
            <Image
              src={study.image || '/fallback.png'}
              alt={study.title}
              fill
              className={styles.image}
            />
          </div>

          <CaseStudyBlocks blocks={study.blocks} />
        </div>
      </div>
    </div>
  );
}
