import ActionSection from '@/components/homepage/ActionSection';
import ContactForm from '@/components/homepage/ContactForm';
import FeatureSection from '@/components/homepage/FeatureSection';
import HomeBanner from '@/components/homepage/HomeBanner';
import TestimonialSection from '@/components/homepage/TestimonialSection';
import Image from 'next/image';
import { Connect_Db } from '@/helper/db';
Connect_Db();

export const metadata = {
  title: 'Home: work Manager'
};

export default function Home() {
  return (
    <main className="flex min-h flex-col">
      <HomeBanner />
      <FeatureSection />
      <ActionSection />
      <TestimonialSection />
      <ContactForm />
    </main>
  );
}
