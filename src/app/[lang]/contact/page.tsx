import { Phone, MapPin, Clock } from "lucide-react";
import Container from "@/components/container/Container";
import { getTranslations, Lang } from "@/lib/getTranslations";
import Image from "next/image";
import React from "react";
import styles from './Contact.module.scss';

type Props = {
  params: {
    lang: Lang;
  };
};

const iconMap = {
  phone: Phone,
  address: MapPin,
  hours: Clock,
};

type ContactItem = {
  type: 'phone' | 'address' | 'hours';
  label: string;
  value: string | string[];
};

export default async function Contact({ params }: Props) {
  const data = await getTranslations(params.lang);
  const { contact } = data;

  return (
    <Container>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          
          <div className={styles.header}>
            <h1 className={styles.title}>
              {contact.title}
            </h1>
            <p className={styles.description}>
              {contact.description}
            </p>
          </div>

          <div className={styles.content}>
            <Image 
              src="/contact_us_new.jpg"
              width={400}
              height={400}
              alt="Contact us"
              className={styles.image}
            />

            <div className={styles.items}>
              {contact.items.map((item: ContactItem, i: number) => {                
                const Icon = iconMap[item.type];

                return (
                  <div key={i} className={styles.item}>
                    <Icon className={styles.icon} />

                    <div className={styles.textBlock}>
                      <p className={styles.label}>{item.label}</p>

                      {Array.isArray(item.value) ? (
                        item.value.map((v: string, idx: number) => (
                          <p key={idx} className={styles.value}>
                            {v}
                          </p>
                        ))
                      ) : (
                        <p className={styles.value}>{item.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </Container>
  );
}