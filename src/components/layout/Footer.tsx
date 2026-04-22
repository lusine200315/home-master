import styles from './Footer.module.scss';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles['contact-info']}>
          <p><strong>Address:</strong> 123 Main Street, Yerevan, Armenia</p>
          <p><strong>Phone:</strong> +374 00 000000</p>
          <div className={styles['working-hours']}>
            <p><strong>Working Days:</strong> Mon - Sat</p>
            <p><strong>Hours:</strong> 09:00 - 18:00</p>
          </div>
        </div>

        <div className={styles['social-icons']}>
          <Link href="https://www.facebook.com" target="_blank" aria-label="Facebook">
            <FaFacebookF />
          </Link>
          <Link href="https://www.instagram.com" target="_blank" aria-label="Instagram">
            <FaInstagram />
          </Link>
        </div>
      </div>

      <div className={styles.copyright}>
        © {new Date().getFullYear()} HomeMaster. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;