import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import AgeCal from '@/components/age-cal';
import ListSection from '@/components/list-section';
import Footer from '@/components/footer';
import content from '@/components/content/love-cal';

export default function Home() {
  return (
    <Page>
      <NextSeo
        title="Bestrani the faishon Blog"
        description="Bestrani blog in your way that includes everything you need to build amazing landing page!"
      />
      <main>
        <AgeCal />
        <ListSection data={content} />
      </main>
      <Footer />
    </Page>
  );
}
