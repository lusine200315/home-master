import { Lang } from '@/lib/getTranslations';
import styles from './RenovationServices.module.scss';
import Container from '../container/Container';

type RenovationServicesType = {
  title: string;
  items: string[];
};

type Props = {
    data: RenovationServicesType;
};

export default async function RenovationServices({ data }: Props) {
  return (
    <Container>
        <section className={styles.renovationServices}>
        <div className="container">
            <h2>{data.title}</h2>

            <ul className={styles.list}>
            {data.items.map((item: string, index: number) => (
                <li key={index}>{item}</li>
            ))}
            </ul>
        </div>
        </section>
    </Container>
  );
}