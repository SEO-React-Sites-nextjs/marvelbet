import { gql, GraphQLClient } from "graphql-request";
import dotenv from "dotenv";

dotenv.config();
const endpoint = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT;

const graphQLClient = new GraphQLClient(endpoint, {
  method: "GET",
  jsonSerializer: {
    parse: JSON.parse,
    stringify: JSON.stringify,
  },
  next: {
    revalidate: 0,
  },
});

export const ArticleQuery = gql`
  query articleCardData($slug: String!) {
    articleCard(where: { slug: $slug }) {
      slug
      metaDescription
      metaTile
      image {
        url
        width
        height
      }
      description {
        html
        markdown
      }
      description2 {
        html
        markdown
      }
      title
    }
  }
`;
export const fetchArticleBySlug = async (slug) => {
  try {
    const data = await graphQLClient.request(ArticleQuery, { slug });

    return data.articleCard;
  } catch (error) {
    console.error("Error fetching article data:", error);
    throw error;
  }
};
