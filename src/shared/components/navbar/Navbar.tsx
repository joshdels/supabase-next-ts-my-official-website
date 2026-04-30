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
          <Link href={'/'}>Projects</Link>
          <Link href={'/'}>Case Study</Link>
          <Link href={'/'}>Contact</Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={styles['mobile-menu']}
        >
          <Menu color="currentColor" />
        </button>

        {isOpen && (
          <div className={styles['mobile-dropdown']}>
            <Link href={'/'}>Case Study</Link>
            <Link href={'/'}>Tools</Link>
            <Link href={'/'}>Member</Link>
          </div>
        )}
      </div>
    </div>
  );
}
