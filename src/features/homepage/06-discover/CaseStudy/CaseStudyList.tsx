import Link from 'next/link';
import { caseStudies } from '@/lib/api';
import styles from './CaseStudyList.module.css';
import CaseStudyCard from './CaseStudyCard';

export default async function CaseStudyList() {
  const studies = await caseStudies();

  return (
    <>
      <div className="container">
        <div className="container-content-fix-height">
          <div className={styles["container-study"]}>
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
          </div>
        </div>
      </div>
    </>
  );
}
