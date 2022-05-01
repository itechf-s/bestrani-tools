import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';
import content from '@/components/content/home';

const RelatedSection = () => (
  <section className={tw(`bg-white pb-1`)}>
    <div className={tw(`max-w-7xl mx-auto p-2 sm:p-6 lg:p-8`)}>
      <div className={tw(`container mx-auto px-6 p-6 bg-white`)}>
        <div className={tw(`mb-16 text-center`)}>
          <h4 className={tw(`text-base text-indigo-600 font-semibold tracking-wide uppercase`)}>RELATED CALCULATORS</h4>
        </div>
        <div className={tw(`flex flex-wrap my-2`)}>
          {content.toolsList.listing.map(({title, desc, link, url} : any, index: any) => (
          <div className={tw(`w-full border md:w-1/2 md:border-r lg:w-1/3 p-8`)} key={index}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl hover:font-medium`)}><a href={url}>{title}</a></div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  </section>
);

export default RelatedSection;
