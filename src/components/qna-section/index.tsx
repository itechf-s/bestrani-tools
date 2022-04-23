import { tw } from 'twind';

const QnaSection = ({data}: any) => (
  <section className={tw(`lg:py-28 pt-28 overflow-hidden`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white`)}>
      <div className={tw(`mb-16 text-center`)}>
        <h2 className={tw(`text-base text-indigo-600 font-semibold tracking-wide uppercase`)}>{data.faq.title}</h2>
        <p className={tw(`mt-2 pb-4 font-medium tracking-tight`)}>{data.faq.description}</p>
      </div>
      <div className={tw(`flex flex-wrap -mx-8 items-center`)}>
        <div className={tw(`w-full lg:w-1/2 px-8`)}>
          <ul className={tw(`space-y-12`)}>
            {data.faq.faqList.map(({questionName, acceptedAnswerText}: any, index : number) => (
              <li className={tw(`flex -mx-4`)} key={index}>
                <div className={tw(`px-4`)}>
                  <span
                    className={tw(`flex w-16 h-16 mx-auto items-center
                      justify-center text-2xl font-bold rounded-full
                      bg-blue-50 text-blue-500`)}
                  >
                    {index + 1}
                  </span>
                </div>
                <div className={tw(`px-4`)}>
                  <h3 className={tw(`my-4 text-xl font-semibold`)}>{questionName}</h3>
                  <div className={tw(`text-gray-500 leading-loose`)} dangerouslySetInnerHTML={{ __html: acceptedAnswerText}} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default QnaSection;
