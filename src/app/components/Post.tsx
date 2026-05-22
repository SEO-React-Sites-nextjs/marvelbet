import Image, { ImageProps } from "next/image";

import PageSwiper from "./PageSwiper";

type Paragraph =
  | {
      title: React.ReactNode;
      descArr: React.ReactNode[];
      breakLineDesc?: never;
      bg?: 0 | 1 | 2;
    }
  | {
      title: React.ReactNode;
      descArr?: never;
      breakLineDesc: string;
      bg?: 0 | 1 | 2;
    };

type PostProps = {
  title: {
    title: React.ReactNode;
    coverImg?: ImageProps;
    descArr: React.ReactNode[];
  };
  paragraph: Paragraph[];
  schema?: any[];
};

const bgClassNameArr = [
  "home-page2-wrapper",
  "home-page3-wrapper",
  "home-page5-wrapper ",
];

export default function Post({ title, paragraph, schema }: PostProps) {
  return (
    <main>
      <section className="page-info">
        <div className="container">
          <h1>{title.title}</h1>
          {title.coverImg && <Image alt="cover image" {...title.coverImg} />}
          {title.descArr.map((desc, index) => (
            <p key={index}>{desc}</p>
          ))}
        </div>
      </section>

      {paragraph.map(
        ({ title, descArr, breakLineDesc: autoFormateDesc, bg }, index) => {
          const defaultBcgClassNameIndex = index % bgClassNameArr.length;
          const bgcClassName = bgClassNameArr[bg ?? defaultBcgClassNameIndex];

          let formattedDescArr: React.ReactNode[] = descArr || [];

          if (autoFormateDesc) {
            formattedDescArr = autoFormateDesc
              .split("\n")
              .filter((line) => line.trim() !== "");
          }

          return (
            <section key={index} className={`section-block ${bgcClassName}`}>
              <div className="container">
                <h2>{title}</h2>
                {formattedDescArr.map((desc, index_d) => (
                  <p key={index_d}>{desc}</p>
                ))}
              </div>
            </section>
          );
        },
      )}
      <PageSwiper />
      {schema?.map((item, index) => {
        return (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
          />
        );
      })}
    </main>
  );
}

export type { PostProps };
