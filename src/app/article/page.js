import React from "react";
import Image from "next/image";
import ArticleData from "./constants";
export const metadata = {
  title: "MarvelBet: Next Js",
  description:
    "Attention cricket fans! Bet on cricket with the best odds at Marvel bet casino and join the ranks of winners! Play cricket every day and earn huge bonuses!",
  alternates: {
    canonical: "https://www.marvel365bet.com/",
  },
  openGraph: {
    title: "MarvelBet: Next Js",
    description:
      "Attention cricket fans! Bet on cricket with the best odds at Marvel bet casino and join the ranks of winners! Play cricket every day and earn huge bonuses!",
    locale: "en_BD",
    type: "website",
    url: "/",
    images: [
      {
        url: "/articles-og.jpg",
        width: 1200,
        height: 630,
        alt: "news",
        type: "image/jpg",
      },
    ],
  },
};

const fetchDataAndLog = async () => {
  try {
    const data = await ArticleData();
    return data.articleCards;
  } catch (error) {
    console.error("Error fetching articles:", error);
    return [];
  }
};

const Page = async () => {
  const articles = await fetchDataAndLog();
  const targetDate = new Date("2025-04-11");

  return (
    <div className="container mx-auto">
      <nav className="relative text-white text-base font-semibold text-left pt-6 m-2 md:m-0">
        <ul className="flex">
          <li>
            <a href="/" className="hover:underline">
              Home
            </a>
          </li>
          <li className="mx-1">/</li>
          <li>
            <a href="/article/" className="hover:underline">
              Article
            </a>
          </li>
        </ul>
      </nav>

      <div className="flex flex-wrap">
        {articles.map((article, index) => (
          <div className="p-4 md:w-1/3" key={index}>
            <div className="h-full border-2 rounded-lg overflow-hidden">
              <a
                href={
                  new Date(article.date) > targetDate
                    ? `/${article.slug}`
                    : `/article/${article.slug}`
                }
              >
                <Image
                  className="bg-cover object-center"
                  width={article.image.width}
                  height={article.image.height}
                  src={article.image.url}
                  alt="welcometomarelbet"
                />
              </a>
              <div>
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    JeetWin Guide | {article.date}
                  </h2>
                  <div className="text-white">
                    <h1 className="title-font text-2xl font-semibold mb-3">
                      {article.title}
                    </h1>
                    {article && article.description && (
                      <div
                        className="leading-relaxed mb-3 truncate-height truncate"
                        dangerouslySetInnerHTML={{
                          __html: article.description.html,
                        }}
                      ></div>
                    )}
                  </div>
                  <div className="flex items-center flex-wrap">
                    <a
                      className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                      href={
                        new Date(article.date) > targetDate
                          ? `/${article.slug}`
                          : `/article/${article.slug}`
                      }
                    >
                      Read More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
export const revalidate = 60;
