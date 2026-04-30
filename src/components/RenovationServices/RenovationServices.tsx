import styles from './RenovationServices.module.scss';
import Container from '../container/Container';

type RenovationServicesType = {
  title: string;
  items: string[];
};

type Props = {
  data: RenovationServicesType;
};

export default function RenovationServices({ data }: Props) {
  return (
    <section className={styles.renovationServices}>
      <Container>
        <div className={styles.inner}>
          <h2 className={styles.title}>{data.title}</h2>

          <ul className={styles.list}>
            {data.items.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}