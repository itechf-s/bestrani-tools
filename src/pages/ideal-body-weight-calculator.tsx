import Page from '@/components/page';
import IdealBodyWeight from '@/components/ibw-cal';
import ListSection from '@/components/list-section';
import Footer from '@/components/footer';
import content from '@/components/content/ibw-cal';
import QnaSection from '@/components/qna-section';
import MetaTags from '@/components/meta-tags';
import RelatedSection from '@/components/related-section';

export default function IBWCalHome() {
  return (
    <Page>
      <MetaTags data={content} />
      <main>
        <IdealBodyWeight />
        <RelatedSection />
        <ListSection data={content} />
        <QnaSection data={content} />
      </main>
      <Footer />
    </Page>
  );
}
