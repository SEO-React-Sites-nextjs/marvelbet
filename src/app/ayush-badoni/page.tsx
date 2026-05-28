import { Metadata } from "next";

import { config } from "@/config";

import Post, { PostProps } from "@/src/app/components/post";

import coverImg from "@/public/staticPostImage/ayush-badoni.webp";

export default function Page() {
  return <Post {...props}></Post>;
}

const article: Omit<PostProps, "schema"> = {
  title: {
    title: `Ayush Badoni Leads Lucknow Super Giants to a Thrilling Last-Ball Victory`,
    descArr: [
      `On April 9, 2026, Ayush Badoni once again demonstrated why he is considered one of the most dependable finishers in the IPL. In a high-stakes clash against the Kolkata Knight Riders, Badoni scored a crucial 54 runs off just 34 balls, guiding Lucknow Super Giants to a last-ball victory. The match had tension from the start, as wickets kept falling at regular intervals, putting immense pressure on the LSG middle order. Badoni, however, remained calm and composed, rotating the strike intelligently and launching boundaries at key moments. His unbeaten knock not only sealed the win but also highlighted his ability to thrive in high-pressure scenarios, earning him praise from teammates and cricket analysts alike. His role as LSG’s “Crisis Man” was on full display, turning a potentially precarious chase into a moment of brilliance.
`,
    ],
    coverImg: {
      src: coverImg,
      alt: "ayush badoni leads lucknow super giants to last-ball victory",
    },
  },
  paragraph: [
    {
      title: `Consistent Performances in the 2026 IPL Season`,
      breakLineDesc: `The 2026 season has already seen Badoni deliver several impactful performances for LSG. On April 5, he contributed a quick 12 runs off 9 balls against Sunrisers Hyderabad, helping his team chase a competitive total successfully. Although his outing against the Delhi Capitals on April 1 resulted in a duck, Badoni’s overall strike rate and consistency remain impressive. Over the course of the season, he has shown remarkable adaptability, pacing his innings according to match situations. Fans and commentators have repeatedly highlighted his 360-degree range of shots, innovative stroke play, and fearless approach, drawing comparisons with AB de Villiers, hence his popular nickname “baby AB.” His ability to accelerate the innings when needed and stabilize it when wickets fall makes him a versatile and invaluable asset for LSG.
`,
    },
    {
      title: `Career Milestones and Leadership Credentials`,
      breakLineDesc: `The innings against KKR also marked a personal milestone for Badoni, as he reached 1,000 career runs in the IPL. Retained by Lucknow Super Giants for ₹4 Crore ahead of the 2026 season following a successful 2025 campaign, his growing influence on the team cannot be overstated. Beyond the IPL, Badoni has proven his leadership abilities as captain of India A during ICC Men’s T20 World Cup warm-up matches against the USA and Namibia. Domestically, representing Delhi, he has already recorded a first-class double century of 205 not out, showcasing his ability to dominate longer formats while maintaining adaptability in T20 cricket. This combination of leadership and consistent performance at multiple levels underscores why Badoni is regarded as one of India’s rising cricket stars.`,
    },
    {
      title: `Ayush Badoni as Finisher Extraordinaire: Technique and Temperament`,
      breakLineDesc: `Badoni’s biggest strength lies in his temperament and finishing abilities. Against KKR, he rebuilt the innings alongside his partners, balancing aggression with strategic shot selection. He picked the gaps expertly, cleared the boundaries when required, and maintained a positive intent throughout the chase. Analysts have praised his ability to read the game situation and adapt his style accordingly, which is crucial for a finisher. The confidence he brings to the team during critical moments elevates the overall morale and allows his teammates to perform freely. With each innings, Badoni is not only scoring runs but also demonstrating the mental toughness and cricketing intelligence that separates good players from great ones.

Ayush Badoni’s journey reflects the rise of a player capable of handling high-pressure situations and delivering consistently, which could define his role in Indian cricket for years to come. With leadership experience, strong technique, and a fearless approach, the young cricketer has the potential to become one of the defining figures in modern T20 cricket.
`,
    },
  ],
};

const { baseUrl, siteName, articleAuthor, publisher, locale, language } =
  config;

// MARK: ********* CUSTOMIZE HERE *********
// MARK: ********* CUSTOMIZE HERE *********
const postTime = new Date("2026-05-05").toISOString();
const pageUrl = `${baseUrl}/ayush-badoni`;
const description =
  "Ayush Badoni showcased his exceptional finishing skills in the 2026 IPL, leading Lucknow Super Giants to a thrilling last-ball victory over Kolkata Knight Riders. His calm temperament, adaptability, and leadership have established him as one of India’s most promising cricket stars.";
const keywords = [
  "Ayush Badoni",
  "Lucknow Super Giants",
  "IPL 2026",
  "Kolkata Knight Riders",
  "cricket finisher",
  "Indian cricket rising star",
  "LSG vs KKR",
  "T20 cricket",
  "cricket match highlights",
  "Ayush Badoni achievements",
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
