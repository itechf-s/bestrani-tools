import Page from '@/components/page';
import BmiCal from '@/components/bmi-cal';
import ListSection from '@/components/list-section';
import Footer from '@/components/footer';
import content from '@/components/content/bmi-ical';
import MetaTags from '@/components/meta-tags';
import QnaSection from '@/components/qna-section';
import RelatedSection from '@/components/related-section';
import { useRouter } from 'next/router'
import TitleSection from '@/components/title-section';
import EmbedSection from '@/components/embed-section';

export default function AgeHome() {
  const router = useRouter()
  const { embed } = router.query
  if (embed) {
    return (
      <div>
        <MetaTags data={content} />
        <main>
          <TitleSection data={content} />
          <BmiCal />
        </main>
      </div>
    );
  } else {
    return (
      <Page>
        <MetaTags data={content} />
        <main>
          <TitleSection data={content} />
          <BmiCal />
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
