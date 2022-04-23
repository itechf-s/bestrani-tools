import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import ListSection from '@/components/list-section';
import FeatureSection from '@/components/feature-section';
import Footer from '@/components/footer';
import home from '@/components/content/home';
import VideoSection from '@/components/video-section';

export default function Home() {
 
  return (
    <Page>
      <NextSeo
        title="Bestrani the faishon Blog"
        description="Bestrani blog in your way that includes everything you need to build amazing landing page!"
      />
      <main>
        <FeatureSection data={home.toolsList} />
        <VideoSection id={home.content.video} />
        <ListSection data={home.content} />
      </main>
      <Footer />
    </Page>
  );
}
