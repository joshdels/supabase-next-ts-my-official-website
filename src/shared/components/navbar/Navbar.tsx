'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu } from 'lucide-react';
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
          <Link href={'/projects'}>
            <span>Projects</span>
          </Link>
          <Link href={'/case-study'}>
            <span>Case Study</span>
          </Link>
          <Link href={'/case-study'}>
            <span>Contact</span>
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={styles['mobile-menu']}
        >
          <Menu />
        </button>

        {isOpen && (
          <div className={styles['mobile-dropdown']}>
            <Link href={'/case-study'}>Case Study</Link>
            <Link href={'/tools'}>Tools</Link>
            <Link href={'/login'}>Member</Link>
          </div>
        )}
      </div>
    </div>
  );
}
