import { formatDate } from '@/utils/date';
import styles from './CaseStudyCard.module.css';
import Image from 'next/image';

type CaseStudyProps = {
  title: string;
  description: string;
  image: string;
  is_highlight?: boolean;
  tags: string[];
  created_at: string;
};

export default function CaseStudyCard({
  title,
  description,
  image,
  tags,
  created_at,
}: CaseStudyProps) {
  return (
    <div className={styles.card}>
      <aside className={styles['image-wrapper']}>
        <Image src={image || ''} alt={title} fill className={styles.image} />
      </aside>

      <main className={styles.content}>
        <h4>{title}</h4>
        <span className={styles.date}>{formatDate(created_at)}</span>
        <p>{description}</p>

        <div className={styles.tags}>
          {tags.map((item, index) => (
            <span key={index} className={styles.tag}>
              {item}
            </span>
          ))}
        </div>
      </main>
    </div>
  );
}
