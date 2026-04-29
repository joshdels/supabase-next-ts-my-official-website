import styles from './Hero.module.css';

export default function HeroSection() {
  return (
    <>
      <div className="container">
        <div className="container-content">
          <div className={styles['hero-container']}>
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
                clear answers from complex geographic data.
              </p>
              <div className={styles['button-section']}>
                <button className="btn-secondary">see my work</button>
                <button className="btn-primary">get in touch</button>
              </div>
            </main>
            <aside>
              <div>image image on the wall</div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
