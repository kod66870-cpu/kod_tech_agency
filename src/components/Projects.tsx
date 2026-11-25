import { ArrowRight, Globe, MessageSquare, Workflow } from 'lucide-react';
import Reveal from '@/components/Reveal';

const projects = [
  {
    icon: Globe,
    category: 'Web Design & Development',
    title: 'Business Website Development',
    description:
      'A modern, responsive digital presence designed to showcase a business, communicate its value, and generate customer enquiries.',
    gradient: 'from-brand-500 to-brand-700',
    label: 'Web Presence',
  },
  {
    icon: MessageSquare,
    category: 'AI Integration',
    title: 'AI Customer Support Assistant',
    description:
      'An intelligent customer support experience designed to help businesses respond to customer enquiries and provide useful information.',
    gradient: 'from-navy-700 to-navy-900',
    label: 'AI Assistant',
  },
  {
    icon: Workflow,
    category: 'Workflow Automation',
    title: 'Automated Business Workflow',
    description:
      'A connected automation workflow designed to streamline lead management, notifications, and repetitive business tasks.',
    gradient: 'from-brand-600 to-navy-700',
    label: 'Automation',
  },
];

function CardArt({ gradient, icon: Icon, label }: { gradient: string; icon: typeof Globe; label: string }) {
  return (
    <div className={`relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br ${gradient}`}>
      <div className="absolute inset-0 bg-grid-light opacity-40 transition-transform duration-700 group-hover:scale-110" aria-hidden />
      <div className="relative flex flex-col items-center gap-3 text-white">
        <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/25 bg-white/10 backdrop-blur-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
          <Icon className="h-7 w-7 text-accent" />
        </span>
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/70">
          {label}
        </span>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="bg-white py-20 lg:py-28">
      <div className="container-site">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-label bg-brand-50 text-brand-600 ring-1 ring-brand-100">
              Our Work
            </p>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-navy-700 sm:text-4xl">
              Digital Experiences Built With Purpose.
            </h2>
            <p className="mt-4 leading-relaxed text-navy-500">
              Explore examples of the digital experiences and intelligent solutions we aim to
              create.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ icon, category, title, description, gradient, label }, i) => (
            <Reveal key={title} delay={i * 100}>
              <article className="group h-full overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-lg">
                <CardArt gradient={gradient} icon={icon} label={label} />
                <div className="p-7">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600">
                      {category}
                    </span>
                    <span className="rounded-full border border-navy-100 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-navy-400">
                      Concept Project
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-navy-700">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-500">{description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <div className="mt-12 text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-navy-700 px-8 py-4 text-sm font-semibold text-white shadow-card-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-500 hover:shadow-brand-lg"
            >
              Have a Project in Mind? Let&apos;s Build It.
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
