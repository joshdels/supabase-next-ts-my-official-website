import Image from 'next/image';
import styles from './Guide.module.css';
import { ButtonContact, ButtonMain } from '@/shared/components/buttons/Buttons';

export default function GuideSection() {
  return (
    <>
      <div className="container">
        <div className="container-content">
          <div className={styles['container-guide']}>
            <main>
              <span className="font-orange">{`// about me`}</span>
              <h2>
                You need someone who speaks both GIS and{' '}
                <strong>plain language.</strong>
              </h2>

              <p>
                I'm a GIS Analyst/Developer from Davao, Philippines working
                remotely and locally. I work with Open Source and Enterprise GIS
                tools to build spatial solutions that don't require a geography
                degree to understand.
              </p>
              <p>
                I've been where your team is either losing and suffocating with
                a lot of shapefiles with no clear output. I build the bridge
                between raw spatial data and the decisions that move your
                project forward.
              </p>
              <p className="font-strong">
                I'm not just a technician. I'm the person who asks{' '}
                <span className="font-italic">
                  "what decision are you trying to make?"
                </span>{' '}
                before I actually analyze, solve and build it.
              </p>

              <ButtonMain />
            </main>

            <aside className={styles['aside-container']}>
              <Image
                src="/images/profile1.png"
                alt="profile"
                width={400}
                height={400}
                className={styles.image}
              />

              <ButtonContact />
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
