import Image from 'next/image';
import CaseStudyBlocks from './CaseStudyBlocks';
import { caseStudy } from '@/lib/api';
import { formatDate } from '@/utils/date';
import styles from './CaseStudyPreview.module.css';

export default async function CaseStudyPreview({ id }: { id: string }) {
  const study = await caseStudy(Number(id));

  return (
    <div className="page-wrapper">
      <div className="page-wrapper-grid">
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.heading}>
              <p>{formatDate(study.created_at)}</p>

              <h1>{study.title}</h1>
              <p>{study.description}</p>
            </div>
          </div>

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