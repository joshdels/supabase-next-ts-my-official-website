import { ButtonMain } from '@/shared/components/buttons/Buttons';
import styles from './Hero.module.css';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <>
      <div className="container">
        <div className="container-content">
          <div className={styles['container-hero']}>
            <main>
              <span className="font-orange">
                GIS Developer · Davao, Philippines
              </span>
              <h1>
                Your land data has a story <em>I help you read it</em>{' '}
              </h1>
              <p>
                I build maps, spatial tools, and land analysis systems for real
                estate firms, land developers, and urban planning teams who need
                clear answers from complex geographic data to real world
                outcome.
              </p>
              <ButtonMain />
            </main>

            <aside className={styles['aside-container']}>
              <div className={styles.image}>
                <Image
                  src="/images/landvalue.jpg"
                  alt="profile"
                  fill
                  className={styles.image}
                />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
