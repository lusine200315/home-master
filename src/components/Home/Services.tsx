"use client";

import styles from "./Services.module.scss";
import ServiceCard from "./ServiceCard";

type ServiceItem = {
  title: string;
  description: string[];
  image: string;
};

type ServicesType = {
  title: string;
  items: ServiceItem[];
};

type Props = {
  data: ServicesType;
};

export default function Services({ data }: Props) {
  return (
    <section className={styles.services}>
      <h2>{data.title}</h2>

      <div className={styles.list}>
        {Object.entries(data.items).map(([key, item], index) => (
          <ServiceCard
            key={key}
            item={item}
            isReverse={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
}