import { Phone, MapPin, Clock } from "lucide-react";
import Container from "@/components/container/Container";
import { getTranslations } from "@/lib/getTranslations";
import Image from "next/image";
import React from "react";

type Props = {
  params: {
    lang: string;
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

  const contact = data.contact;

  return (
    <Container>
      <div className="flex items-center justify-center !p-4">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl text-center font-bold text-gray-800">
              {contact.title}
            </h1>
            <p className="text-lg text-center text-gray-700">
              {contact.description}
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <Image 
              src="/contact_us.jpg"
              width={400}
              height={400}
              alt="Contact us"
            />            
            <div className="flex flex-col gap-4">
              {contact.items.map((item: ContactItem, i: number) => {                const Icon = iconMap[item.type as keyof typeof iconMap];
                return (
                  <div key={i} className="flex gap-3 items-start">
                    <Icon className="text-gray-700" />

                    <div>
                      <p className="font-semibold !pb-1">{item.label}</p>

                      {Array.isArray(item.value) ? (
                        item.value.map((v: string, idx: number) => (
                          <p key={idx} className="text-gray-600">
                            {v}
                          </p>
                        ))
                      ) : (
                        <p className="text-gray-600">{item.value}</p>
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