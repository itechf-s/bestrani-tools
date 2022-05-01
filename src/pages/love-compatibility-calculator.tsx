import Page from '@/components/page';
import LoveCal from '@/components/love-cal';
import ListSection from '@/components/list-section';
import Footer from '@/components/footer';
import content from '@/components/content/love-cal';
import MetaTags from '@/components/meta-tags';
import QnaSection from '@/components/qna-section';
import RelatedSection from '@/components/related-section';

export default function LoveCalHome() {
  return (
    <Page>
      <MetaTags data={content} />
      <main>
        <LoveCal />
        <RelatedSection />
        <ListSection data={content} />
        <QnaSection data={content} />
      </main>
      <Footer />
    </Page>
  );
}
