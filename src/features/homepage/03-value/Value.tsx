import ValueCard, { value } from './ValueCard';
import styles from './Value.module.css';
import { ButtonMain } from '@/shared/components/buttons/Buttons';

export default function ValueSection() {
  return (
    <>
      <div className="container-dark">
        <div className="container-content">
          <div className={`container-context ${styles['value-container']}`}>
            <span className="font-green">// what i do</span>
            <h2>
              I turn raw geographic data into decisions{' '}
              <strong> your whole team can act on</strong>
            </h2>
            <p>
              Whether you need a site suitability map, a zoning analysis, or an
              interactive web map for your stakeholders — I build it clean,
              fast, and readable by people who aren't GIS experts.
            </p>
            <div className={styles['card-container']}>
              {value.map((item, index) => (
                <ValueCard
                  key={index}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
            <ButtonMain workOnly={true} />
          </div>
        </div>
      </div>
    </>
  );
}
