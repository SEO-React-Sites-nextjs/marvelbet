import Image from "next/image";
import { fetchArticleBySlug } from "./query";
import robots from "@/app/robots";

// This function generates metadata for the article page
export async function generateMetadata({ params }) {
  const data = await fetchArticleBySlug(params?.article);
  // console.log(data);
  if (!data || data === undefined) {
    return {
      title: "Page Not Found",
      description: "The article is not available.",
    };
  }

  return {
    title: data.metaTile || "Article",
    description: data.metaDescription || "Read this amazing article.",
    openGraph: {
      title: data.metaTile || "Article",
      description: data.metaDescription || "Read this amazing article.",
      locale: "en_US",
      type: "website",
      url: "/",
      siteName: data.metaTile,
    },
    robots: { index: true, follow: true },
  };
}

export default async function Page({ params }) {
  const articledata = await fetchArticleBySlug(params?.article);
  return (
    <div>
      <div className="container mx-auto">
        <div className="breadcrumbs">
          <nav className="relative text-white text-base font-semibold text-left pt-6 m-2 md:m-0">
            <ul className="flex">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li className="mx-1">/</li>
              <li className="mx-1">{articledata.title}</li>
            </ul>
          </nav>
        </div>
        <div className="articleContent text-white md:mx-2 ">
          <p className=" text-2xl text-center pb-2">Welcome to MarvelBet</p>
          {articledata && articledata.description && (
            <>
              <div
                className="first description"
                dangerouslySetInnerHTML={{
                  __html: articledata.description.html,
                }}
              ></div>

              <div
                className="description"
                dangerouslySetInnerHTML={{
                  __html: articledata.description2.html,
                }}
              ></div>
            </>
          )}
        </div>
      </div>
    </div>
  );

  // return <div>padasda</div>;
}
