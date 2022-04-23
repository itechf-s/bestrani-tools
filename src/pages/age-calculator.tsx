import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import AgeCal from '@/components/age-cal';
import ListSection from '@/components/list-section';
import Footer from '@/components/footer';
import content from '@/components/content/age-cal';
import MetaTags from '@/components/meta-tags';

export default function Home() {
  return (
    <Page>
      <MetaTags data={content} />
      <main>
        <AgeCal />
        <ListSection data={content} />
      </main>
      <Footer />
    </Page>
  );
}
