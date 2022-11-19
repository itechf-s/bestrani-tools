import Head from 'next/head';
import Navigation from '@/components/navigation';
import { tw } from 'twind';
import content from '@/components/content/home';

interface IProps {
  children: React.ReactNode;
}

const Page = ({ children }: IProps) => (
  <div>
    <Head>
      <link rel="icon" href={content.meta.favicon} />
    </Head>
    <div className={tw(`min-h-screen flex flex-col`)}>
      <Navigation />
      {children}
    </div>
  </div>
);

export default Page;
