import { ButtonMain } from '@/shared/components/buttons/Buttons';
import StakeCard, { stakes } from './Card';
import styles from './Stakes.module.css';

export default function StakesSection() {
  return (
    <>
      <div className="container">
        <div className="container-content">
          <div className={styles['container-stakes']}>
            <main>
              <span className="font-orange">// the problems</span>
              <h2 className="font-heading">
                Bad location decisions are{' '}
                <strong className="font-heading-green">expensive</strong>{' '}
              </h2>
              <p>
                Real Estate developers don't know the risk . Planners miss the
                land zone. Urban projects stops before groundbreaking not
                because the data wasn't there, but because nobody could read it
                clearly.
              </p>
              <p className="font-strong">
                Without a spatial clarity, your team is making thousand-dollar
                decisions on guesswork.
              </p>
              <ButtonMain touchOnly={true} />
            </main>
            <aside>
              <div className={styles['card-section']}>
                {stakes.map((item, index) => (
                  <StakeCard
                    key={index}
                    title={item.title}
                    description={item.description}
                  />
                ))}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
