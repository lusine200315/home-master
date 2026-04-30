import styles from "./Hero.module.scss";

type HeroProp = {
  slogan: string;
  description: string;
};

type Props = {
  data: HeroProp;
};

export default function Hero({ data }: Props) {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>{data.slogan}</h1>
      <p className={styles.subtitle}>{data.description}</p>
    </section>
  );
}