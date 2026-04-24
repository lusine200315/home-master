'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaChevronDown } from 'react-icons/fa';
import styles from './LanguageSwitcher.module.scss';

type Lang = {
  code: string;
  label: string;
  flag: string;
};

const LANGUAGES: Lang[] = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'hy', label: 'Հայերեն', flag: '🇦🇲' },
  { code: 'ru', label: 'Русский', flag: '🇷🇺' },
];

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('click', handleOutside);
    return () => document.removeEventListener('click', handleOutside);
  }, []);

  // --- language logic ---
  const segments = pathname.split('/');

  const hasLang = LANGUAGES.some(l => l.code === segments[1]);

  const currentLang = hasLang ? segments[1] : 'en';

  const pathWithoutLang = hasLang
    ? segments.slice(2).join('/')
    : segments.slice(1).join('/');

  const current = LANGUAGES.find(l => l.code === currentLang);

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      <button
        className={styles.trigger}
        onClick={(e) => {
          e.stopPropagation();
          setOpen(prev => !prev);
        }}
      >
        <div className='flex gap-2'>
          <span>{current?.flag}</span>
          <span>{current?.code.toUpperCase()}</span>
        </div>
        <FaChevronDown />
      </button>

      {open && (
        <div
          className={styles.dropdown}
          onClick={(e) => e.stopPropagation()}
        >
          {LANGUAGES.map((lang) => {
            const href = pathWithoutLang
              ? `/${lang.code}/${pathWithoutLang}`
              : `/${lang.code}`;

            return (
              <Link
                key={lang.code}
                href={href}
                className={styles.item}
                onClick={() => setOpen(false)}
              >
                <span>{lang.flag}</span>
                <span>{lang.label}</span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}