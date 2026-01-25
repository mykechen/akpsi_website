interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  eyebrow,
  centered = true,
  light = false,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      {eyebrow && (
        <span
          className={`
            inline-block text-sm font-medium tracking-[0.2em] uppercase mb-4
            ${light ? "text-white/70" : "text-accent"}
          `}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`
          font-display text-3xl md:text-4xl lg:text-5xl
          ${light ? "text-white" : "text-secondary-light"}
        `}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`
            mt-4 text-lg max-w-2xl leading-relaxed
            ${centered ? "mx-auto" : ""}
            ${light ? "text-white/70" : "text-secondary-dark/70"}
          `}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
