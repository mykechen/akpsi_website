interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  centered = true,
  light = false,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      <h2
        className={`font-body text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide ${
          light ? "text-white" : "text-secondary-light"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg max-w-2xl ${centered ? "mx-auto" : ""} ${
            light ? "text-white/70" : "text-secondary/60"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
