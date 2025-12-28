"use client";

import { useState, useEffect, ReactNode } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface QuestionProps {
  h2?: string;
  description?: ReactNode;
  list: FAQItem[];
  jsonLd?: boolean;
  customClass?: string;
  defaultOpen?: "first" | "all" | "none";
}

export default function QuestionSection({
  h2,
  description,
  list,
  jsonLd = true,
  customClass = "",
  defaultOpen = "first",
}: QuestionProps) {
  const [expandedQuestions, setExpandedQuestions] = useState<number[]>([]);

  /** 初始化預設展開 */
  useEffect(() => {
    if (defaultOpen === "all") {
      setExpandedQuestions(list.map((_, index) => index));
    } else if (defaultOpen === "first") {
      setExpandedQuestions(list.length ? [0] : []);
    } else {
      setExpandedQuestions([]);
    }
  }, [defaultOpen, list]);

  /** 每一題獨立 toggle */
  const toggleAnswer = (index: number) => {
    setExpandedQuestions((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  /** FAQ JSON-LD */
  useEffect(() => {
    if (!jsonLd) return;

    const faqJsonLd = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: list.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(faqJsonLd);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [list, jsonLd]);

  return (
    <div className={`question-wrapper ${customClass}`}>
      {h2 && <h2>{h2}</h2>}
      {description && <>{description}</>}

      <div className="question-wrap">
        {list.map((item, index) => {
          const isOpen = expandedQuestions.includes(index);

          return (
            <div
              className="question-item"
              key={index}
              onClick={() => toggleAnswer(index)}
            >
              <div className="item-top">
                <h3>{item.question}</h3>
                <div className={`arrow ${isOpen ? "rotated" : ""}`} />
              </div>

              {isOpen && <div className="item-bottom">{item.answer}</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
