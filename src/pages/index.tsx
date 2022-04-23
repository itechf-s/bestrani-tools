import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import ListSection from '@/components/list-section';
import FeatureSection from '@/components/feature-section';
import Footer from '@/components/footer';
import content from '@/components/content/home';
import VideoSection from '@/components/video-section';
import MetaTags from '@/components/meta-tags';
import QnaSection from '@/components/qna-section';

export default function Home() {
 
  return (
    <Page>
      <MetaTags data={content} />
      <main>
        <FeatureSection data={content} />
        <VideoSection id={content.video} />
        <ListSection data={content} />
        <QnaSection data={content} />
      </main>
      <Footer />
    </Page>
  );
}
