import Container from "@/components/container/Container";
import Hero from "@/components/Home/Hero";
import Services from "@/components/Home/Services";
import RenovationServices from "@/components/RenovationServices/RenovationServices";
import { getTranslations, Lang } from "@/lib/getTranslations";

type Props = {
  params: {
    lang: Lang;
  };
};

export default async function Page({ params }: Props) {
  const data = await getTranslations(params.lang);
  const {hero, services, renovation_services} = data
  return (
    <Container>
      <Hero data={hero} />
      <Services data={services} />
      <RenovationServices data={renovation_services} />
    </Container>
  )
}