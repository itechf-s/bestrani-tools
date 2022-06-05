import Page from '@/components/page';
import BasalMetabolicRate from '@/components/bmr-cal';
import ListSection from '@/components/list-section';
import Footer from '@/components/footer';
import content from '@/components/content/bmr-cal';
import QnaSection from '@/components/qna-section';
import MetaTags from '@/components/meta-tags';
import RelatedSection from '@/components/related-section';
import TitleSection from '@/components/title-section';
import { useRouter } from 'next/router';
import EmbedSection from '@/components/embed-section';

export default function BMRCalHome() {
  const router = useRouter()
  const { embed } = router.query
  if (embed) {
    return (
      <div>
        <MetaTags data={content} />
        <main>
          <TitleSection data={content} />
          <BasalMetabolicRate />
        </main>
      </div>
    );
  } else {
    return (
      <Page>
        <MetaTags data={content} />
        <main>
          <TitleSection data={content} />
          <BasalMetabolicRate />
          <RelatedSection />
          <EmbedSection data={content} />
          <ListSection data={content} />
          <QnaSection data={content} />
        </main>
        <Footer />
      </Page>
    );
  }
}
