// index.ts

import Post from "./Post";
import type { PostProps } from "./Post";

import { buildMetaDataAndArticleSchema, extractFirstSentence } from "./utils";

export default Post;
export { buildMetaDataAndArticleSchema, extractFirstSentence };

export type { PostProps };
