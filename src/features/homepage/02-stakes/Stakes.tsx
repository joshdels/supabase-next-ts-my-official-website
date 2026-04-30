import { ButtonMain } from '@/shared/components/buttons/Buttons';
import StakeCard, { stakes } from './Card';
import styles from './Stakes.module.css';

export default function StakesSection() {
  return (
    <>
      <div className="container">
        <div className="container-content">
          <main className="container-context">
            <span className="font-orange">// the problems</span>
            <h2 className="font-heading">
              Bad location decisions are{' '}
              <strong className="font-heading-green">expensive</strong>{' '}
            </h2>
            <p>
              Land developers overbuy. Planners miszone. Urban projects stall
              before groundbreaking not because the data wasn't there, but
              because nobody could read it clearly.
            </p>
            <p className="">
              Without a spatial clarity, your team is making thousand-dollar decisions
              on guesswork.
            </p>
            <ButtonMain touchOnly={true} />
          </main>
          <main>
            <div className={styles['card-section']}>
              {stakes.map((item, index) => (
                <StakeCard
                  key={index}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
