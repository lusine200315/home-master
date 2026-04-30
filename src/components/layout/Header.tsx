'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';

import styles from './Header.module.scss';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

const Header = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const currentLang = pathname.split('/')[1] || 'en';

  const navLinks = [
    { name: 'Home', path: '' },
    { name: 'About', path: 'about' },
    { name: 'Contact', path: 'contact' },
  ];

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [open]);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        
        <Link href={`/${currentLang}`}>
          <Image
            src="/logo.png"
            alt="Home Master"
            width={140}
            height={40}
          />
        </Link>

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

        {/* Actions */}
        <div className={styles.actions}>
          <LanguageSwitcher />

          <button
            className={styles.burger}
            onClick={() => setOpen(prev => !prev)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className={styles.overlay}>
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
        </div>
      )}
    </header>
  );
};

export default Header;