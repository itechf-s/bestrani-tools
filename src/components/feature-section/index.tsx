import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';

const FeatureSection = ({data}:any) => (
  <section className={tw(`bg-white pb-6`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`)}>
      <div className={tw(`container mx-auto px-6 p-6 bg-white`)}>
        <div className={tw(`mb-16 text-center`)}>
          <h4 className={tw(`text-base text-indigo-600 font-semibold tracking-wide uppercase`)}>{data.toolsList.keyword}</h4>
          <div className={tw(`tracking-wide text-4xl font-medium p-2 bg-gradient-to-t from-gray-100 to-gray-50 rounded-2xl mt-2 mb-2`)}>
          <Check width={20} height={20} fill="currentColor" className={tw(`text-indigo-500`)} />
            {data.toolsList.title}</div>
          <img src={data.toolsList.img} alt={data.toolsList.keyword} className={tw(`tracking-tight rounded-2xl flex mt-2`)} />
        </div>
        <div className={tw(`flex flex-wrap my-12`)}>
          {data.toolsList.listing.map(({title, desc, link, url} : any, index: any) => (
          <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8`)} key={index}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl hover:font-medium`)}><a href={url}>{title}</a></div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>{desc}</p>
            <a href={url}>{link}</a>
          </div>
        ))}
        </div>
      </div>
    </div>
  </section>
);

export default FeatureSection;
