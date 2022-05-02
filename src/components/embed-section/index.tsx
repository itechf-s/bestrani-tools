import { tw } from 'twind';
import style from '../style';

const EmbedSection = ({ data }: any) => {
  const codeTxt = data.embed.code.replace('<<url>>', data.meta.url + '?embed=yes');
  return (
    <section className={tw(`lg:py-1 pt-1`)}>
      <div className={tw`${style.twForm}`}>
        <div className={tw(`mb-2 text-center`)}>
          <h2 className={tw(`text-base text-indigo-600 font-semibold tracking-wide uppercase`)}>{data.embed.title}</h2>
          <h1 className={tw(`mt-2 pb-2 font-medium tracking-tight`)}>{data.embed.description}</h1>
          <textarea readOnly className={tw`${style.twInputText}`} name="embedCode" id="embedCode" defaultValue={codeTxt} cols={30} rows={8} />
          <br />
          <input type="button" onClick={
            (e) => {
              e.preventDefault;
              navigator.clipboard.writeText(codeTxt)
              e.currentTarget.value = 'Copied'
            }
          } className={tw`${style.twInputBtn}`} defaultValue="Copy Code" />
        </div>
      </div>
    </section>
  );
}

export default EmbedSection;
