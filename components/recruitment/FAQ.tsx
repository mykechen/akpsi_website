"use client";

import { useState } from "react";
import faq from "@/data/faq.json";
import type { FAQ as FAQType } from "@/types";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const faqData: FAQType[] = faq;

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);
  const { ref, isRevealed } = useScrollReveal<HTMLElement>();

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section ref={ref} className="py-24 md:py-40 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div
          className={`
            text-center mb-12 md:mb-16
            transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
            ${isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
        >
          <span className="inline-block text-sm font-medium tracking-[0.2em] uppercase text-accent mb-4">
            Got Questions?
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-secondary-light mb-4 uppercase">
            Frequently Asked Questions
          </h2>
          <p className="text-secondary-dark/70 text-lg">
            Everything you need to know about joining Alpha Zeta
          </p>
        </div>

        <div className="space-y-3">
          {faqData.map((item, index) => (
            <div
              key={item.id}
              className={`
                bg-cloud-50/50 border border-secondary/5 rounded-2xl overflow-hidden
                transition-[opacity,transform,background-color,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
                hover:border-secondary/10
                ${openId === item.id ? "bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] border-accent/20" : ""}
                ${isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
              `}
              style={{
                transitionDelay: isRevealed
                  ? `${index * 50}ms, ${index * 50}ms, 0ms, 0ms, 0ms`
                  : "0ms",
              }}
            >
              <button
                onClick={() => toggleFAQ(item.id)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left"
                aria-expanded={openId === item.id}
              >
                <span className="font-body text-base md:text-lg font-medium text-secondary-light pr-4">
                  {item.question}
                </span>
                <span
                  className={`
                    flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full
                    border transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
                    ${
                      openId === item.id
                        ? "rotate-45 bg-accent border-accent text-white"
                        : "border-secondary/20 text-secondary-dark/50 hover:border-accent/30 hover:text-accent"
                    }
                  `}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </span>
              </button>

              <div
                className={`
                  overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
                  ${openId === item.id ? "max-h-96" : "max-h-0"}
                `}
              >
                <div className="px-5 md:px-6 pb-5 md:pb-6 text-secondary-dark/70 leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
