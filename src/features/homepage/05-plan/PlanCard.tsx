import styles from './PlanCard.module.css';

type PlanCardProps = {
  index: string;
  title: string;
  details: string;
};

export const plans: PlanCardProps[] = [
  {
    index: '01',
    title: 'Tell me about your land',
    details:
      "Share your problem and frustration, your data have and wanted, and what decision you're trying to make. No GIS knowledge required just tell.",
  },
  {
    index: '02',
    title: 'I build your spatial solution',
    details:
      'From site analysis to interactive web maps, I handle the technical side complexity that is clean, documented, and on time.',
  },
  {
    index: '03',
    title: 'You decide with confidence',
    details:
      'You get maps and data your whole team understands. Clear enough to present to stakeholders, precise enough to act on.',
  },
];

export default function PlanCard({ index, title, details }: PlanCardProps) {
  return (
    <>
      <div className={styles.card}>
        <span>{index}</span>
        <h4>{title}</h4>
        <p>{details}</p>
      </div>
    </>
  );
}
