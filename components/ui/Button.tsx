import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'ghost';
  className?: string;
  type?: 'button' | 'submit';
  external?: boolean;
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
  external = false,
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-manrope text-[13px] uppercase tracking-[0.15em] font-medium transition-all duration-300 px-8 py-4 rounded-[2px]';

  const variants = {
    primary:
      'border border-gold text-warm-white hover:bg-gold hover:text-bg-primary focus-visible:bg-gold focus-visible:text-bg-primary',
    ghost:
      'text-gold hover:text-gold-highlight',
  };

  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={styles}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={styles}>
      {children}
    </button>
  );
}
