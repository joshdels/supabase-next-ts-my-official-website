import PlanCard, { plans } from './PlanCard';
import styles from './Plan.module.css';
import { ButtonMain } from '@/shared/components/buttons/Buttons';

export default function PlanSection() {
  return (
    <>
      <div className="container-light">
        <div className="container-content">
          <div className="container-context">
            <span className="font-orange">// how it works</span>
            <h2>
              Working together is <strong>simple.</strong>{' '}
            </h2>

            <div className={styles['card-container']}>
              {plans.map((item, index) => (
                <PlanCard
                  key={index}
                  index={item.index}
                  title={item.title}
                  details={item.details}
                />
              ))}
            </div>

            <ButtonMain touchOnly={true} />
          </div>
        </div>
      </div>
    </>
  );
}
