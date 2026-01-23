"use client";

import { useEffect } from "react";
import Image from "next/image";
import type { Member } from "@/types";

interface MemberModalProps {
  readonly member: Member | null;
  readonly isOpen: boolean;
  readonly onClose: () => void;
}

export default function MemberModal({
  member,
  isOpen,
  onClose,
}: MemberModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !member) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
      onKeyDown={(e) => e.key === "Escape" && onClose()}
      role="dialog"
      aria-modal="true"
      aria-labelledby="member-modal-title"
    >
      <div
        className="relative bg-primary rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-secondary/10 hover:bg-secondary/20 rounded-full text-secondary-light transition-colors z-10"
          aria-label="Close modal"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Content */}
        <div className="p-8">
          {/* Photo and Basic Info */}
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <div className="relative w-32 h-32 md:w-40 md:h-40 shrink-0 rounded-xl overflow-hidden">
              <Image
                src={member.photo}
                alt={member.name}
                fill
                className="object-cover"
                unoptimized
              />
            </div>

            <div className="flex-1">
              <h2
                id="member-modal-title"
                className="font-display text-2xl md:text-3xl font-bold text-secondary-light mb-2"
              >
                {member.name}
              </h2>
              {member.role && (
                <p className="text-accent font-medium mb-2">{member.role}</p>
              )}
              {member.major && (
                <p className="text-secondary/70 text-sm mb-1">{member.major}</p>
              )}
              {member.pledgeClass && (
                <p className="text-secondary/60 text-sm">
                  {member.pledgeClass}
                </p>
              )}
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-accent hover:text-accent-light transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <span className="text-sm">LinkedIn</span>
                </a>
              )}
            </div>
          </div>

          {/* Description/Bio */}
          {member.description && (
            <div className="pt-6 border-t border-secondary/10">
              <p className="text-secondary/80 leading-relaxed">
                {member.description}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
