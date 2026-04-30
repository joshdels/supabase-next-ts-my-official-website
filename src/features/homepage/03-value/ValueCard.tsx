import styles from './ValueCard.module.css';

type ValueCardProps = {
  title: string;
  description: string;
};

export const value: ValueCardProps[] = [
  {
    title: 'Land Planning',
    description:
      "Site suitability, zoning analysis, and land use classification — so your planning team knows exactly what they're working with before a single permit is filed.",
  },
  {
    title: 'Real Estate',
    description:
      'Location intelligence, proximity analysis, and market mapping — so your developers and investors see the full picture of a site before committing.',
  },
  {
    title: 'Urban GIS',
    description:
      'Infrastructure mapping, flood risk, road networks, and population density — so your city planners and stakeholders have data they can present and defend.',
  },
];

export default function ValueCard({ title, description }: ValueCardProps) {
  return (
    <>
      <div className={styles.card}>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </>
  );
}
