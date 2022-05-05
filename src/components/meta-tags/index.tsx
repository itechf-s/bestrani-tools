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
            article: { modifiedTime: data.meta.modified_time, publishedTime: data.meta.published_time, tags: data.meta.tags },
            images : [
              {
                url: data.meta.images[0],
                width: 1200,
                height: 680,
                alt: data.meta.title,
              },
            ]
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
