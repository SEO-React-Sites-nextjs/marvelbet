// postPageTemplate

import Post, {
  type PostProps,
  buildMetaDataAndArticleSchema,
  extractFirstSentence,
} from "@/src/app/components/post";

import coverImg from "@/public/staticPostImage/jeta33.webp";

// MARK: ********* CUSTOMIZE HERE *********
// MARK: ********* CUSTOMIZE HERE *********
// /foo or foo  are both fine
// invalid url will be transformed to undefined
const pageUrl = `path to this page`;
const postTime = new Date("post time").toISOString();

// MARK: ********* CUSTOMIZE HERE *********
// MARK: ********* CUSTOMIZE HERE *********

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

const { metadata, articleSchema } = buildMetaDataAndArticleSchema({
  title: article.title.title as string, // article.title.title may be ReactNode
  description: extractFirstSentence(article.title.descArr[0] as string), // article.title.descArr[0] may be ReactNode
  articleBody: article.title.descArr[0] as string, // article.title.descArr[0] may be ReactNode
  imgAlt: article.title.coverImg?.alt,

  pageUrl,
  postTime,
  img: coverImg,
});

const props: PostProps = {
  ...article,
  schema: [articleSchema],
};

export { metadata };
