import { tw } from 'twind';

const TitleSection = ({data}: any) => (
  <section className={tw(`lg:py-1 pt-1`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white`)}>
      <div className={tw(`mb-2 text-center`)}>
        <h2 className={tw(`text-base text-indigo-600 font-semibold tracking-wide uppercase`)}>{data.meta.keyword}</h2>
        <h1 className={tw(`mt-2 pb-2 font-medium tracking-tight`)}>{data.meta.title}</h1>
      </div>
    </div>
  </section>
);

export default TitleSection;
