import Page from '@/components/page';
import LoveCal from '@/components/love-cal';
import ListSection from '@/components/list-section';
import Footer from '@/components/footer';
import content from '@/components/content/love-cal';
import MetaTags from '@/components/meta-tags';
import QnaSection from '@/components/qna-section';
import RelatedSection from '@/components/related-section';
import TitleSection from '@/components/title-section';
import { useRouter } from 'next/router';
import EmbedSection from '@/components/embed-section';

export default function LoveCalHome() {
  const router = useRouter()
  const { embed } = router.query
  if (embed) {
    return (
      <div>
        <MetaTags data={content} />
        <main>
          <TitleSection data={content} />
          <LoveCal />
        </main>
      </div>
    );
  } else {
    return (
      <Page>
        <MetaTags data={content} />
        <main>
          <TitleSection data={content} />
          <LoveCal />
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
