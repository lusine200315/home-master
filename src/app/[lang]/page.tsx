import Container from "@/components/container/Container";
import Hero from "@/components/Home/Hero";
import Services from "@/components/Home/Services";
import { getTranslations, Lang } from "@/lib/getTranslations";

type Props = {
  params: {
    lang: Lang;
  };
};

export default async function Page({ params }: Props) {
  const { lang } = params;
  const data = await getTranslations(lang);
  const {hero, services} = data
  return (
    <Container>
      <Hero data={hero} />
      <Services data={services} />
    </Container>
  )
}