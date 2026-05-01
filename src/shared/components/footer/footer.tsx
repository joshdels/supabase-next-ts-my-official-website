'use client';

import { scrollToSection } from '@/utils/scrollToPage';
import styles from './Footer.module.css';
import Link from 'next/link';

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
            <button
              className="btn-navigation"
              onClick={() => scrollToSection('discover')}
            >
              My Works
            </button>
            <Link href={'/contact'}>
              <button className="btn-primary">Contact</button>
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
}
