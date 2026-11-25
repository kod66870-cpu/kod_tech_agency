import Logo from '@/components/Logo';
import { siteConfig } from '@/config/site';

const quickLinks = siteConfig.navLinks;

const serviceLinks = [
  { label: 'Web Development', href: '#services' },
  { label: 'AI Integration', href: '#services' },
  { label: 'Workflow Automation', href: '#services' },
];

function ConnectLink({ label, href }: { label: string; href: string }) {
  return (
    <li>
      <a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className="text-sm text-white/60 transition-colors hover:text-accent"
      >
        {label}
      </a>
    </li>
  );
}

export default function Footer() {
  const email = siteConfig.contact.email;
  const linkedin = siteConfig.socials.linkedin;
  const instagram = siteConfig.socials.instagram;

  return (
    <footer className="bg-navy-700 text-white">
      <div className="container-site grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:py-20">
        <div>
          <div className="text-white">
            <Logo size={48} />
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
            Building digital experiences and intelligent solutions that help businesses move
            forward.
          </p>
          <p className="mt-5 font-mono text-xs text-white/40">
            {siteConfig.tagline}
          </p>
        </div>

        <nav aria-label="Quick links">
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
            Quick Links
          </h3>
          <ul className="mt-5 space-y-3">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-white/60 transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Services">
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
            Services
          </h3>
          <ul className="mt-5 space-y-3">
            {serviceLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-white/60 transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
            Connect
          </h3>
          <ul className="mt-5 space-y-3">
            {email ? (
              <ConnectLink label="Email" href={`mailto:${email}`} />
            ) : (
              <li className="text-sm text-white/40">Email — coming soon</li>
            )}
            {linkedin ? (
              <ConnectLink label="LinkedIn" href={linkedin} />
            ) : (
              <li className="text-sm text-white/40">LinkedIn — coming soon</li>
            )}
            {instagram ? (
              <ConnectLink label="Instagram" href={instagram} />
            ) : (
              <li className="text-sm text-white/40">Instagram — coming soon</li>
            )}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-xs text-white/50">© 2026 KOD_TECH. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#home" className="text-xs text-white/50 transition-colors hover:text-accent">
              Privacy Policy
            </a>
            <a href="#home" className="text-xs text-white/50 transition-colors hover:text-accent">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
