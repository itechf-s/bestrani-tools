import Page from '@/components/page';
import AgeCal from '@/components/age-cal';
import ListSection from '@/components/list-section';
import Footer from '@/components/footer';
import content from '@/components/content/age-cal';
import MetaTags from '@/components/meta-tags';
import QnaSection from '@/components/qna-section';

export default function AgeHome() {
  return (
    <Page>
      <MetaTags data={content} />
      <main>
        <AgeCal />
        <ListSection data={content} />
        <QnaSection data={content} />
      </main>
      <Footer />
    </Page>
  );
}
