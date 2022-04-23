import { ArticleJsonLd, BreadcrumbJsonLd, FAQPageJsonLd, NextSeo } from "next-seo";

const MetaTags = ({ data }: any) => {

  return (
    <>
      <NextSeo title={data.meta.title}
        description={data.meta.description}
        twitter={{ cardType: 'summary_large_image', site: '@bestrani' }}
        canonical={data.meta.url}
        openGraph={
          {
            type: 'article',
            article: { modifiedTime: data.meta.modified_time, publishedTime: data.meta.published_time, tags: data.meta.tags }
          }
        }
      />
      <FAQPageJsonLd mainEntity={data.faq.faqList} />
      <ArticleJsonLd title={data.meta.title}
        description={data.meta.description}
        url={data.meta.url} images={data.meta.images}
        datePublished={data.meta.published_time}
        authorName={data.meta.author}
        publisherName='BestRani'
        publisherLogo='https://bestrani.com/images/Bestrani-logo.webp'
      />
      <BreadcrumbJsonLd itemListElements={data.breadcrumbListElements} />
    </>
  );
};

export default MetaTags;
