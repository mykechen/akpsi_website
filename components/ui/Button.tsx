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
  const baseStyles = `
    inline-flex items-center justify-center font-medium rounded-full
    transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2
    disabled:opacity-50 disabled:pointer-events-none
  `;

  const variants = {
    primary: `
      bg-accent text-white
      hover:bg-accent-dark hover:-translate-y-0.5
      hover:shadow-[0_8px_24px_-4px_rgba(37,99,235,0.4)]
      active:translate-y-0 active:shadow-none
    `,
    secondary: `
      bg-secondary-light text-white
      hover:bg-secondary hover:-translate-y-0.5
      hover:shadow-[0_8px_24px_-4px_rgba(15,23,42,0.3)]
      active:translate-y-0 active:shadow-none
    `,
    outline: `
      bg-transparent border-2 border-secondary/20 text-secondary-light
      hover:border-accent hover:text-accent hover:-translate-y-0.5
      active:translate-y-0
    `,
    ghost: `
      bg-transparent text-secondary-dark
      hover:bg-secondary/5 hover:text-secondary-light
    `,
  };

  const sizes = {
    sm: "px-4 py-2 text-sm gap-1.5",
    md: "px-6 py-2.5 text-sm gap-2",
    lg: "px-8 py-3.5 text-base gap-2",
  };

  const styles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={styles} disabled={disabled}>
      {children}
    </button>
  );
}
