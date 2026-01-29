"use client";

import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const sizes = {
    sm: "px-5 py-2.5 text-sm gap-1.5",
    md: "px-7 py-3 text-sm gap-2",
    lg: "px-9 py-4 text-base gap-2",
  };

  const baseClassName = `
    group relative inline-flex items-center justify-center font-medium rounded-full
    transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2
    disabled:opacity-50 disabled:pointer-events-none
    overflow-hidden
    ${sizes[size]}
    ${className}
  `;

  // Variant-specific styles
  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return {
          background: "linear-gradient(135deg, #2563eb 0%, #3b82f6 50%, #2563eb 100%)",
          backgroundSize: "200% 200%",
          boxShadow: "0 4px 16px -2px rgba(37, 99, 235, 0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
        };
      case "secondary":
        return {
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
          backgroundSize: "200% 200%",
          boxShadow: "0 4px 16px -2px rgba(15, 23, 42, 0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
        };
      case "outline":
        return {
          background: "linear-gradient(145deg, rgba(255,255,255,0.7) 0%, rgba(248,250,252,0.5) 100%)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          boxShadow: "0 4px 16px -4px rgba(37, 99, 235, 0.1), inset 0 1px 0 rgba(255,255,255,0.8)",
        };
      case "ghost":
        return {
          background: "transparent",
        };
      default:
        return {};
    }
  };

  const content = (
    <>
      {/* Gradient border for outline variant */}
      {variant === "outline" && (
        <span
          className="absolute inset-0 rounded-full pointer-events-none transition-opacity duration-300 opacity-70 group-hover:opacity-100"
          style={{
            padding: "1.5px",
            background: "linear-gradient(135deg, rgba(37, 99, 235, 0.4) 0%, rgba(255,255,255,0.6) 50%, rgba(37, 99, 235, 0.3) 100%)",
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
          }}
        />
      )}

      {/* Shimmer effect on hover for primary/secondary */}
      {(variant === "primary" || variant === "secondary") && (
        <span
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)",
            transform: "translateX(-100%)",
            animation: "shimmer 2s infinite",
          }}
        />
      )}

      {/* Glow effect on hover */}
      {variant !== "ghost" && (
        <span
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: variant === "outline"
              ? "radial-gradient(ellipse at 50% 0%, rgba(37, 99, 235, 0.15) 0%, transparent 70%)"
              : "radial-gradient(ellipse at 50% 100%, rgba(255,255,255,0.2) 0%, transparent 70%)",
          }}
        />
      )}

      {/* Text content */}
      <span className={`relative z-10 ${variant === "primary" || variant === "secondary" ? "text-white" : ""} ${variant === "outline" ? "text-secondary-light group-hover:text-accent" : ""} ${variant === "ghost" ? "text-secondary-dark group-hover:text-secondary-light" : ""}`}>
        {children}
      </span>
    </>
  );

  const interactiveStyles = `
    hover:-translate-y-1 hover:scale-[1.02]
    active:translate-y-0 active:scale-100
  `;

  const hoverShadow = variant === "primary"
    ? "hover:shadow-[0_12px_28px_-4px_rgba(37,99,235,0.5)]"
    : variant === "secondary"
    ? "hover:shadow-[0_12px_28px_-4px_rgba(15,23,42,0.4)]"
    : variant === "outline"
    ? "hover:shadow-[0_12px_28px_-4px_rgba(37,99,235,0.15)]"
    : "";

  if (href) {
    return (
      <Link
        href={href}
        className={`${baseClassName} ${interactiveStyles} ${hoverShadow}`}
        style={getVariantStyles()}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClassName} ${interactiveStyles} ${hoverShadow}`}
      style={getVariantStyles()}
      disabled={disabled}
    >
      {content}
    </button>
  );
}
