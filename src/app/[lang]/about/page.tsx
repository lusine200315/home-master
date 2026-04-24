import React from "react";
import styles from "./About.module.scss";
import { getTranslations, Lang } from "@/lib/getTranslations";
import Container from "@/components/container/Container";

type Props = {
  params: {
    lang: Lang;
  };
};

export default async function About({ params }: Props) {
  const data = await getTranslations(params.lang);
  const advantages = data.advantages;

  return (
    <Container>
      <div className={styles.container}>
        <h1 className={styles.title}>{advantages.title}</h1>

        <div className={styles.accordion}>
          {advantages.items.map((item: any, index: number) => (
            <details key={index} className={styles.item}>
              <summary className={styles.summary}>
                {item.title}
              </summary>
              <div className={styles.content}>
                <p>{item.description}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </Container>
  );
}