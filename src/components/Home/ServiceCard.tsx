"use client";

import Image from "next/image";
import styles from "./ServiceCard.module.scss";

type ServiceItem = {
  title: string;
  description: string[];
  image: string;
};

type Props = {
  item: ServiceItem;
  isReverse: boolean;
};

export default function ServiceCard({ item, isReverse }: Props) {
  return (
    <div
      className={`${styles.card} ${isReverse ? styles.reverse : ""}`}
    >
      {item.image && (
        <div className={styles.imageWrapper}>
          <Image
            width={350}
            height={350}
            src={item.image}
            alt={item.title}
          />
        </div>
      )}

      <div className={styles.content}>
        <h3>{item.title}</h3>

        <ul>
          {item.description.map((desc, i) => (
            <li key={i}>{desc}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}