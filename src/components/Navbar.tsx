import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '@/components/Logo';
import { siteConfig } from '@/config/site';
import { useActiveSection } from '@/hooks/useActiveSection';

const sectionIds = siteConfig.navLinks.map((link) => link.href.replace('#', ''));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'bg-navy-700/95 shadow-card-lg backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-site flex h-[72px] items-center justify-between py-3" aria-label="Main navigation">
        <div className="text-white">
          <Logo />
        </div>

        <ul className="hidden items-center gap-1 lg:flex">
          {siteConfig.navLinks.map((link) => {
            const isActive = active === link.href.replace('#', '');
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive ? 'text-white' : 'text-white/70 hover:text-white'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-accent transition-all duration-300 ${
                      isActive ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-2.5 text-sm font-semibold text-white shadow-brand-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-glow"
          >
            Let&apos;s Talk
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`overflow-hidden bg-navy-700/95 backdrop-blur-md transition-[max-height,opacity] duration-500 ease-in-out lg:hidden ${
          open ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="container-site flex flex-col gap-1 pb-6 pt-2">
          {siteConfig.navLinks.map((link, i) => (
            <li
              key={link.href}
              className={`transition-all duration-300 ${
                open ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
              }`}
              style={{ transitionDelay: `${open ? 80 + i * 50 : 0}ms` }}
            >
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block rounded-xl px-4 py-3 text-base font-medium ${
                  active === link.href.replace('#', '')
                    ? 'bg-brand-500/20 text-accent'
                    : 'text-white/80 hover:bg-white/10 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-3">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center rounded-full bg-brand-500 px-6 py-3.5 text-sm font-semibold text-white shadow-brand-lg"
            >
              Let&apos;s Talk
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
