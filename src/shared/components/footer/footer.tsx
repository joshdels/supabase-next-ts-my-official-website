import styles from './Footer.module.css';

export default function FooterSection() {
  return (
    <>
      <div className="container-footer">
        <footer className={styles['footer']}>
          <div>
            <div className={styles.owner}>
              <h4>Joshua De Leon</h4>
              <h4>GIS Analyst/Developer</h4>
            </div>
            <span className={styles.location}>Davao, Philippines</span>
          </div>
          <div className={styles.navigation}>
            <p>Projects</p>
            <p>Contact</p>
            <p>About</p>
          </div>
        </footer>
      </div>
    </>
  );
}
