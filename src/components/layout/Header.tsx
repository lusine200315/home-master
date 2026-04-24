'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { FaBars, FaTimes } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

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
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [open]);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href='/' className="cursor-pointer">
          <Image src='/logo.png' alt='Home Master' width={140} height={40} />
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

        {/* Right side */}
        <div className={styles.actions}>
          <LanguageSwitcher />

          <button
            className={styles.burger}
            onClick={() => setOpen(!open)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* FULL SCREEN OVERLAY MENU */}
      {open && (
        <div className={styles.overlay}>
          <div className={styles.mobileMenu}>
            {/* Nav links */}
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

            {/* Contact info */}
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