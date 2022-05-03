import Page from '@/components/page';
import IdealBodyWeight from '@/components/ibw-cal';
import ListSection from '@/components/list-section';
import Footer from '@/components/footer';
import content from '@/components/content/water-intake-cal';
import QnaSection from '@/components/qna-section';
import MetaTags from '@/components/meta-tags';
import RelatedSection from '@/components/related-section';
import TitleSection from '@/components/title-section';
import { useRouter } from 'next/router';
import EmbedSection from '@/components/embed-section';
import WaterIntake from '@/components/water-intake-cal';

export default function IBWCalHome() {
  const router = useRouter()
  const { embed } = router.query
  if (embed) {
    return (
      <div>
        <MetaTags data={content} />
        <main>
          <TitleSection data={content} />
          <WaterIntake />
        </main>
      </div>
    );
  } else {
    return (
      <Page>
        <MetaTags data={content} />
        <main>
          <TitleSection data={content} />
          <WaterIntake />
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
