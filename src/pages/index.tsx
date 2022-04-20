import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import VideoSection from '@/components/video-section';
import ListSection from '@/components/list-section';
import FeatureSection from '@/components/feature-section';
import CasesSection from '@/components/cases-section';
import SocialProof from '@/components/social-proof';
import PricingTable from '@/components/pricing-table';
import Footer from '@/components/footer';
import home from '@/components/content/home';

export default function Home() {
  return (
    <Page>
      <NextSeo
        title="Bestrani the faishon Blog"
        description="Bestrani blog in your way that includes everything you need to build amazing landing page!"
      />
      <main>
        <FeatureSection data={home.toolsList} />
        <VideoSection />
        <ListSection data={home.content} />
      </main>
      <Footer />
    </Page>
  );
}
