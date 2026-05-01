import { formatDate } from '@/utils/date';
import styles from './ProjectCard.module.css';
import Image from 'next/image';

type ProjectCardProps = {
  name: string;
  description: string;
  image: string;
  is_highlight?: boolean;
  tags: string[];
  created_at: string;
};

export default function ProjectCard({
  name,
  description,
  image,
  tags,
  created_at,
}: ProjectCardProps) {
  return (
    <div className={styles.card}>
      <aside className={styles['image-wrapper']}>
        <Image src={image || ''} alt={name} fill className={styles.image} />
      </aside>

      <main className={styles.content}>
        <h4>{name}</h4>
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
