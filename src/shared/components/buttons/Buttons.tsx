'use client';

import { scrollToSection } from '@/utils/scrollToPage';
import styles from './Buttons.module.css';
import Link from 'next/link';

type ButtonMainProp = {
  touchOnly?: boolean;
  workOnly?: boolean;
};

export function ButtonMain({ touchOnly, workOnly }: ButtonMainProp) {
  return (
    <>
      <div className={styles['button-section']}>
        {!touchOnly && (
          <button
            className="btn-secondary"
            onClick={() => scrollToSection('discover')}
          >
            see my work
          </button>
        )}
        {!workOnly && (
          <button
            className="btn-primary"
            onClick={() => scrollToSection('contact')}
          >
            get in touch
          </button>
        )}
      </div>
    </>
  );
}

export function ButtonContact() {
  return (
    <>
      <div className={styles['button-lower']}>
        <Link
          href="https://docs.google.com/document/d/1cgLC5nZa1zEWc50NGUkG3fRfPHiJ6kymfsaN7GYC6_M/edit?tab=t.0"
          target="_blank"
          className="btn-secondary"
        >
          CV
        </Link>
        <Link
          href="https://www.linkedin.com/in/joshua-de-leon-8b0310301/"
          target="_blank"
          className="btn-secondary"
        >
          Linkedin
        </Link>
        <Link
          href="https://github.com/joshdels"
          target="_blank"
          className="btn-secondary"
        >
          Github
        </Link>
      </div>
    </>
  );
}
