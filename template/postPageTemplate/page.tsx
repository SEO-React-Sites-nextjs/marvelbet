// for copy and paste

import { Metadata } from "next";

import { config } from "@/config";

import Post, { PostProps } from "@/src/app/components/Post";

import coverImg from "@/public/staticPostImage/jeta33.webp";

export default function Page() {
  return <Post {...props}></Post>;
}

const article: Omit<PostProps, "schema"> = {
  title: {
    title: ``,
    descArr: [``],
    coverImg: {
      src: coverImg,
      alt: "img alt",
    },
  },
  paragraph: [
    {
      title: ``,
      // descArr: [``],
      breakLineDesc: ``,
    },
  ],
};

const { baseUrl, siteName, articleAuthor, publisher, locale, language } =
  config;

// MARK: ********* CUSTOMIZE HERE *********
// MARK: ********* CUSTOMIZE HERE *********
const postTime = new Date("post time").toISOString();
const pageUrl = `${baseUrl}/path to this page`;
const description = "";
const keywords = [
  "keyword",
  "keyword",
  "keyword",
  "keyword",
  "keyword",
  "keyword",
]; // five to ten keywords
// MARK: ********* CUSTOMIZE HERE *********
// MARK: ********* CUSTOMIZE HERE *********

const img = {
  url: coverImg.src,
  width: 1200,
  height: 675,
  alt: article.title.coverImg?.alt,
};

export const metadata: Metadata = {
  title: article.title.title as string,
  description,
  keywords,
  authors: [{ name: siteName }],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    locale: locale,
    url: pageUrl,
    siteName: siteName,
    title: article.title.title as string,
    description,
    publishedTime: postTime,
    modifiedTime: postTime,
    images: [img],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  url: pageUrl,
  headline: article.title.title,
  description,
  articleBody: article.title.descArr[0],
  keywords: keywords.join(", "),
  inLanguage: language,
  image: {
    "@type": "ImageObject",
    url: img.url,
    width: img.width,
    height: img.height,
  },
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
    "@id": pageUrl,
  },
  datePublished: postTime,
  dateModified: postTime,
};

const props: PostProps = {
  ...article,
  schema: [schema],
};
