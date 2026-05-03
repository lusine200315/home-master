import styles from './Footer.module.scss';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';
import { getTranslations, Lang } from '@/lib/getTranslations';

type Props = {
  lang: Lang;
};

const Footer = async ({ lang }: Props) => {
  const data = await getTranslations(lang);
  const { footer } = data;

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        <div className={styles.contactInfo}>
          <p><strong>{footer.addressLabel}:</strong> {footer.address}</p>
          <p><strong>{footer.phoneLabel}:</strong> {footer.phone}</p>

          <div className={styles.workingHours}>
            <p><strong>{footer.workingDaysLabel}:</strong> {footer.workingDays}</p>
            <p><strong>{footer.hoursLabel}:</strong> {footer.hours}</p>
          </div>
        </div>

        <div className={styles.socialIcons}>
          <Link href="https://www.facebook.com" target="_blank" aria-label="Facebook">
            <FaFacebookF />
          </Link>

          <Link href="https://www.instagram.com" target="_blank" aria-label="Instagram">
            <FaInstagram />
          </Link>
        </div>

      </div>

      <div className={styles.copyright}>
        © {new Date().getFullYear()} {footer.copyright}.
      </div>
    </footer>
  );
};

export default Footer;