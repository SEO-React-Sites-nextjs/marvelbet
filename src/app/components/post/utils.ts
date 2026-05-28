// utils.ts

import { config } from "@/config";

import type { Metadata } from "next";
import type { StaticImageData } from "next/image";

const { baseUrl, siteName, articleAuthor, publisher, locale, language } =
  config;

const buildMetaDataAndArticleSchema = ({
  title,
  articleBody,
  imgAlt,

  description,
  keywords,
  pageUrl,
  postTime,
  img,
}: {
  title: string; // article.title.title as string
  articleBody: string; // article.title.descArr as string
  imgAlt?: string; // article.title.coverImg?.alt

  description: string;
  keywords?: string[];
  pageUrl: string;
  /** ISOString */
  postTime: string;
  img?: StaticImageData;
}) => {
  const wholePageUrl = (() => {
    try {
      return pageUrl.startsWith("http")
        ? new URL(pageUrl).href
        : new URL(pageUrl, baseUrl).href;
    } catch {
      console.error({
        // function: "buildMetaDataAndArticleSchema",
        message: "Invalid pageUrl",
        pageUrl: pageUrl,
      });
      return undefined;
    }
  })();

  const openGraphImages = img && [
    {
      url: img.src,
      width: img.width,
      height: img.height,
      alt: imgAlt || title,
    },
  ];

  const schemaImage = img && {
    "@type": "ImageObject",
    url: img.src,
    width: img.width,
    height: img.height,
  };

  const metadata: Metadata = {
    title,
    description,
    keywords,
    authors: [{ name: siteName }],
    alternates: {
      canonical: wholePageUrl,
    },
    openGraph: {
      type: "article",
      locale: locale,
      url: wholePageUrl,
      siteName: siteName,
      title,
      description,
      publishedTime: postTime,
      modifiedTime: postTime,
      images: openGraphImages,
    },
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    url: wholePageUrl,
    headline: title,
    description,
    articleBody,
    keywords: keywords?.join(", "),
    inLanguage: language,
    image: schemaImage,
    author: {
      "@type": "Organization",
      name: articleAuthor,
      url: baseUrl,
    },
    publisher: {
      "@type": "Organization",
      name: publisher,
      url: baseUrl,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": wholePageUrl,
    },
    datePublished: postTime,
    dateModified: postTime,
  };

  return {
    metadata,
    articleSchema,
  };
};

const extractFirstSentence = (
  text: string,
  { cutPoint = "." }: { cutPoint?: string } = {},
): string => {
  const periodIndex = text.indexOf(cutPoint);
  if (periodIndex === -1) {
    return text; // 如果沒有句點，返回整個文本
  }
  return text.substring(0, periodIndex + 1);
};

export { buildMetaDataAndArticleSchema, extractFirstSentence };
