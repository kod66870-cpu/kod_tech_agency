export const siteConfig = {
  name: 'KOD_TECH',
  tagline: 'Building Digital Experiences. Engineering Intelligent Solutions.',
  taglineAlt: 'Your Partner in Digital Transformation.',
  logo: {
    src: 'https://res.cloudinary.com/ete815od/image/upload/v1795522211/KOD_TECH_icon.png',
    alt: 'KOD_TECH logo',
  },
  // NOTE: no real email or phone has been supplied yet — leave these as
  // empty strings and the UI will show configurable placeholders instead
  // of inventing contact details.
  contact: {
    email: '',
    phone: '',
    location: '',
  },
  socials: {
    linkedin: '',
    instagram: '',
  },
  navLinks: [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Our Process', href: '#process' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ],
  services: [
    'Web Development & Design',
    'AI Integration',
    'Workflow Automation',
    'Multiple Services',
    'Other',
  ] as const,
  budgets: [
    'Under $500',
    '$500–$1,000',
    '$1,000–$3,000',
    '$3,000–$5,000',
    '$5,000+',
  ] as const,
};

export type SiteConfig = typeof siteConfig;
