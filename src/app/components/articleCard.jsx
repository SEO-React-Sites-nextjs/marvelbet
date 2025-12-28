import React from "react";
import { graphQLClient, ArticlesQuery } from "../article/query";
import Image from "next/image";
import Link from "next/link";

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, options);
};

export default async function articleCard() {
  const data = await graphQLClient.request(ArticlesQuery);
  const dataCards = data?.articles;
  const targetDate = new Date("2025-04-11T23:59:59Z");
  return (
    <div className="text-black">
      <div className="flex flex-wrap">
        {dataCards.map((dataCard, index) => (
          <div className="p-4 md:w-1/3" key={index}>
            <div className="h-full border-2 rounded-lg overflow-hidden">
              <a
                href={
                  new Date(dataCard.publishedAt) > targetDate
                    ? `/${dataCard.slug}`
                    : `/article/${dataCard.slug}`
                }
              >
                <Image
                  className="bg-cover object-cover object-center h-52"
                  width={dataCard.image.width}
                  height={dataCard.image.height}
                  src={dataCard.image.url}
                  alt="welcometomarelbet"
                />
              </a>
              <div>
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    JeetWin Guide | {formatDate(dataCard.date)}
                  </h2>
                  <div className="text-black ">
                    <h1 className="title-font text-2xl font-semibold mb-3 underline decoration-blue-600">
                      <Link
                        href={
                          new Date(dataCard.publishedAt) > targetDate
                            ? `/${dataCard.slug}`
                            : `/article/${dataCard.slug}`
                        }
                      >
                        {dataCard.title}
                      </Link>
                    </h1>
                    {dataCard && dataCard.description && (
                      <div
                        className="leading-relaxed mb-3 "
                        dangerouslySetInnerHTML={{
                          __html: dataCard.description.html,
                        }}
                      ></div>
                    )}
                  </div>
                  <div className="flex items-center flex-wrap">
                    <a
                      className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                      href={
                        new Date(dataCard.publishedAt) > targetDate
                          ? `/${dataCard.slug}`
                          : `/article/${dataCard.slug}`
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
}
