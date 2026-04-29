import StakeCard, { stakes } from './Card';
import styles from './Stakes.module.css';

export default function StakesSection() {
  return (
    <>
      <div className="container">
        <div className="container-content">
          <div className="container-context">
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
              Without a spatial lens, your team is making million-peso decisions
              on guesswork.
            </p>
            <section>
              <button className="btn-primary">get in touch</button>
            </section>
          </div>
          <div className={styles['card-section']}>
            {stakes.map((item, index) => (
              <StakeCard
                key={index}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
