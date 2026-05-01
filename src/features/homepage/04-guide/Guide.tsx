import Image from 'next/image';
import styles from './Guide.module.css';
import { ButtonContact, ButtonMain } from '@/shared/components/buttons/Buttons';

export default function GuideSection() {
  return (
    <>
      <div className="container">
        <div className="container-content">
          <main className="container-context">
            <span className="font-orange">// about me</span>
            <h2>
              You need someone who speaks both GIS and{' '}
              <strong>plain language.</strong>
            </h2>

            <p>
              I'm a GIS developer from Davao, Philippines working remotely and
              locally. I work with Open Source and Enterprise GIS tools to build
              spatial solutions that don't require a geography degree to
              understand.
            </p>
            <p>
              I've been where your team is either losing and drowing with in
              shapefiles with no clear output. I build the bridge between raw
              spatial data and the decisions that move your project forward.
            </p>
            <p>
              I'm not just a technician. I'm the person who asks "what decision
              are you trying to make?" before I actually build it.
            </p>

            <ButtonMain />
          </main>

          <aside className={styles['aside-container']}>
            <div className={styles.image}>
              <Image src="/images/profile1.png" alt="profile" fill />
            </div>
            <ButtonContact />
          </aside>
        </div>
      </div>
    </>
  );
}
