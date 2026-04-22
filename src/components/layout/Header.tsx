'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';
import LanguageSwitcher from './LanguageSwitcher';
import { FaBars, FaTimes } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const currentLang = pathname.split('/')[1] || 'en';

  const navLinks = [
    { name: 'Home', path: '' },
    { name: 'About', path: 'about' },
    { name: 'Contact', path: 'contact' },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <h1>HomeMaster</h1>
        </div>

        {/* Desktop Nav */}
        <nav className={styles.nav}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={`/${currentLang}/${link.path}`}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* RIGHT SIDE */}
        <div className={styles.actions}>
          {/* ✅ ALWAYS visible */}
          <LanguageSwitcher />

          <button
            className={styles.burger}
            onClick={() => setOpen(!open)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className={styles.mobileMenu}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={`/${currentLang}/${link.path}`}
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className={styles.mobileInfo}>
            <p><strong>Email:</strong> info@homemaster.com</p>
            <p><strong>Address:</strong> Yerevan, Armenia</p>
            <p><strong>Working Days:</strong> Mon - Sat</p>
            <p><strong>Hours:</strong> 09:00 - 18:00</p>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;