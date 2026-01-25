"use client";

import { useState } from "react";
import faq from "@/data/faq.json";
import type { FAQ as FAQType } from "@/types";
import SectionHeader from "@/components/ui/SectionHeader";

const faqData: FAQType[] = faq;

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about joining Alpha Zeta"
        />

        <div className="mt-12 space-y-4">
          {faqData.map((item) => (
            <div
              key={item.id}
              className="border border-secondary/10 rounded-xl overflow-hidden transition-colors hover:border-secondary/20"
            >
              <button
                onClick={() => toggleFAQ(item.id)}
                className="w-full flex items-center justify-between p-6 text-left"
                aria-expanded={openId === item.id}
              >
                <span className="font-body text-lg text-secondary-light pr-4">
                  {item.question}
                </span>
                <span
                  className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border border-white/20 text-secondary/60 transition-transform duration-300 ${
                    openId === item.id
                      ? "rotate-45 bg-accent border-accent text-white"
                      : ""
                  }`}
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
                className={`overflow-hidden transition-all duration-300 ${
                  openId === item.id ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6 text-secondary/70 leading-relaxed">
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
