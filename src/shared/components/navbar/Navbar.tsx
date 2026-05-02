'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ArrowUpFromLine, Menu } from 'lucide-react';
import styles from './Navbar.module.css';

export default function NavbarSection() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className={styles.navbar}>
      <div className={styles['navbar-content']}>
        <div>
          <Link href={'/'}>
            <h3>JoshDels</h3>
          </Link>
        </div>

        <div className={styles['navbar-menu']}>
          <Link href={'/'} className="btn-navigation">
            <span>My Works</span>
          </Link>
          <Link href={'/contact'}>
            <button className="btn-primary">Contact</button>
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={styles['mobile-menu']}
        >
          <Menu />
        </button>

        {isOpen && (
          <div className={styles.overlay}>
            <div className={styles['mobile-dropdown']}>
              <Link href={'/'}>Home</Link>
              <Link href={'/'}>My Work</Link>
              <Link href={'/contact'} className="btn-primary">
                Contact
              </Link>
              <button
                className={styles['mobile-button']}
                onClick={() => setIsOpen(!isOpen)}
              >
                <ArrowUpFromLine size={24} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
