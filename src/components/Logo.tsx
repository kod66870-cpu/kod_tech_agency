import { siteConfig } from '@/config/site';

type LogoProps = {
  size?: number;
  className?: string;
};

export default function Logo({ size = 44, className = '' }: LogoProps) {
  return (
    <a href="#home" className={`inline-flex shrink-0 items-center ${className}`} aria-label="KOD_TECH — back to top">
      <img
        src={siteConfig.logo.src}
        alt={siteConfig.logo.alt}
        width={size}
        height={size}
        className="rounded-lg"
        style={{ width: size, height: size }}
      />
      <span className="ml-2.5 font-display text-lg font-bold tracking-tight text-current">
        KOD<span className="text-accent">_</span>TECH
      </span>
    </a>
  );
}
