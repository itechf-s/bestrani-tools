import { NextSeo } from "next-seo";

const MetaTags = ({data} : any) => {

  return (
    <NextSeo title={data.meta.title}/>
  );
};

export default MetaTags;
