import styles from './Card.module.css';

type StakeCardProps = {
  title: string;
  description: string;
};

export const stakes: StakeCardProps[] = [
  {
    title: 'Land Developers',
    description:
      'Buying parcels without understanding slope, flood exposure, or access roads.',
  },
  {
    title: 'Real Estate Firms',
    description:
      'Missing location information that separates a good investment from a costly mistake.',
  },
  {
    title: 'Urban Planners',
    description:
      'Presenting zoning decisions to stakeholders with no visual data to back them up.',
  },
];

export default function StakeCard({ title, description }: StakeCardProps) {
  return (
    <>
      <div className={styles.card}>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </>
  );
}
