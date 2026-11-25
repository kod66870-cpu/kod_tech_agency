import { ArrowRight, BrainCircuit, Code2, Workflow, Check } from 'lucide-react';
import Reveal from '@/components/Reveal';

type Service = {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: typeof Code2;
  items: string[];
  cta: string;
  visual: 'web' | 'ai' | 'automation';
  platforms?: string[];
};

const services: Service[] = [
  {
    id: 'web',
    number: '01',
    title: 'Web Development & Design',
    description:
      'We design and develop modern, responsive websites that help businesses establish credibility, connect with customers, and grow their digital presence.',
    icon: Code2,
    cta: 'Explore Web Solutions',
    visual: 'web',
    items: [
      'Business Website Design',
      'Responsive Web Development',
      'Landing Page Development',
      'E-commerce Website Development',
      'Website Redesign',
      'UI/UX Design',
      'Website Performance Optimization',
      'SEO-Friendly Website Structure',
    ],
  },
  {
    id: 'ai',
    number: '02',
    title: 'AI Integration',
    description:
      'We help businesses unlock the power of artificial intelligence by integrating intelligent tools and AI-powered capabilities into their existing digital operations.',
    icon: BrainCircuit,
    cta: 'Explore AI Solutions',
    visual: 'ai',
    items: [
      'AI-Powered Chatbot Integration',
      'Customer Support Automation',
      'AI API Integration',
      'Business Knowledge Assistants',
      'AI-Powered Website Features',
      'Intelligent Data Processing',
      'AI Application Development',
      'AI-Powered Customer Experiences',
    ],
  },
  {
    id: 'automation',
    number: '03',
    title: 'Workflow Automation',
    description:
      'We streamline repetitive business processes by connecting applications, automating workflows, and reducing manual tasks through intelligent automation systems.',
    icon: Workflow,
    cta: 'Explore Automation Solutions',
    visual: 'automation',
    platforms: ['n8n', 'Make', 'Zapier'],
    items: [
      'Business Process Automation',
      'Workflow Design and Implementation',
      'CRM Automation',
      'Lead Capture and Follow-up Automation',
      'Email Automation',
      'Data Synchronization',
      'API Integrations',
      'AI-Powered Workflow Automation',
    ],
  },
];

function WebVisual() {
  return (
    <div className="relative flex h-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 p-6">
      <div className="absolute inset-0 bg-grid-light opacity-40" aria-hidden />
      <div className="relative w-full max-w-xs transition-transform duration-500 group-hover:scale-[1.04]">
        <div className="rounded-t-xl border-3 border-navy-800/0 bg-navy-700 p-1.5 pb-0 shadow-card-lg">
          <div className="flex items-center gap-1 px-1.5 pb-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          </div>
          <div className="overflow-hidden rounded-t-md bg-white">
            <div className="h-5 bg-brand-500" />
            <div className="space-y-1.5 p-3">
              <div className="h-2 w-3/4 rounded-full bg-navy-100" />
              <div className="h-2 w-1/2 rounded-full bg-navy-100" />
              <div className="mt-2 grid grid-cols-3 gap-1.5">
                <div className="h-8 rounded bg-brand-50" />
                <div className="h-8 rounded bg-brand-100" />
                <div className="h-8 rounded bg-brand-50" />
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto -mt-1 w-16 rounded-b-lg bg-navy-800 p-1.5">
          <div className="h-1 rounded-full bg-white/20" />
        </div>
        <div className="absolute -bottom-2 right-2 w-20 rotate-6 rounded-lg border-2 border-navy-700 bg-white p-1 shadow-card-lg transition-transform duration-500 group-hover:rotate-0">
          <div className="h-4 rounded-sm bg-brand-500" />
          <div className="mt-1 h-1.5 w-3/4 rounded-full bg-navy-100" />
          <div className="mt-1 h-1.5 w-1/2 rounded-full bg-navy-100" />
        </div>
      </div>
    </div>
  );
}

function AiVisual() {
  const nodes = [
    { x: '50%', y: '18%' },
    { x: '18%', y: '48%' },
    { x: '82%', y: '48%' },
    { x: '32%', y: '82%' },
    { x: '68%', y: '82%' },
  ];
  const links: [number, number][] = [
    [0, 1],
    [0, 2],
    [1, 3],
    [1, 4],
    [2, 4],
    [2, 3],
  ];
  return (
    <div className="relative flex h-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-navy-700 to-navy-900 p-6">
      <div className="absolute inset-0 bg-hero-radial opacity-80" aria-hidden />
      <svg viewBox="0 0 100 100" className="relative h-full max-h-52 w-full" preserveAspectRatio="none" aria-hidden>
        {links.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke="#00E0FF"
            strokeOpacity="0.35"
            strokeWidth="0.6"
            strokeDasharray="3 3"
            className="animate-dash-flow"
          />
        ))}
        {nodes.map((n, i) => (
          <circle key={i} cx={n.x} cy={n.y} r="2.6" fill="#00E0FF">
            <animate attributeName="opacity" values="1;0.4;1" dur={`${2 + i * 0.4}s`} repeatCount="indefinite" />
          </circle>
        ))}
      </svg>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/40 bg-navy-800/80 px-4 py-2 font-mono text-[11px] text-accent shadow-glow backdrop-blur-sm transition-transform duration-500 group-hover:scale-105">
        AI CORE
      </div>
    </div>
  );
}

function AutomationVisual() {
  const apps = ['CRM', 'Email', 'Sheets', 'Chat', 'Billing'];
  return (
    <div className="relative flex h-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-brand-500 to-navy-700 p-6">
      <div className="absolute inset-0 bg-grid-light opacity-30" aria-hidden />
      <div className="relative w-full max-w-xs space-y-2.5">
        <div className="flex items-center justify-between rounded-xl bg-navy-800/80 px-4 py-2.5 backdrop-blur-sm">
          <span className="font-mono text-[11px] text-accent">TRIGGER</span>
          <span className="text-xs font-semibold text-white">New lead captured</span>
        </div>
        <div className="flex justify-center">
          <span className="h-4 w-px bg-white/40" />
        </div>
        <div className="rounded-xl bg-white/10 px-4 py-2.5 backdrop-blur-sm">
          <span className="font-mono text-[11px] text-accent">WORKFLOW</span>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {apps.map((app) => (
              <span
                key={app}
                className="rounded-md bg-white px-2 py-1 text-[10px] font-semibold text-navy-700 shadow-sm transition-transform duration-300 hover:-translate-y-0.5"
              >
                {app}
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <span className="h-4 w-px bg-white/40" />
        </div>
        <div className="rounded-xl bg-navy-800/80 px-4 py-2.5 backdrop-blur-sm">
          <span className="font-mono text-[11px] text-accent">RESULT</span>
          <p className="mt-0.5 text-xs font-semibold text-white">
            Follow-up sent automatically <Check className="ml-1 inline h-3.5 w-3.5 text-accent" />
          </p>
        </div>
      </div>
    </div>
  );
}

const visuals: Record<Service['visual'], () => JSX.Element> = {
  web: WebVisual,
  ai: AiVisual,
  automation: AutomationVisual,
};

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 lg:py-28">
      <div className="container-site">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-label bg-brand-50 text-brand-600 ring-1 ring-brand-100">
              Our Services
            </p>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-navy-700 sm:text-4xl">
              Digital Solutions. Intelligent Possibilities.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-navy-500">
              From establishing your digital presence to transforming how your business operates, we
              provide technology solutions designed to move your business forward.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 space-y-8">
          {services.map((service, idx) => {
            const Visual = visuals[service.visual];
            const flip = idx % 2 === 1;
            return (
              <Reveal key={service.id} delay={idx * 80}>
                <article className="group grid overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-lg lg:grid-cols-2">
                  <div className={`p-8 sm:p-10 lg:p-12 ${flip ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center gap-4">
                      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-500 text-white shadow-brand-lg">
                        <service.icon className="h-6 w-6" />
                      </span>
                      <span className="font-mono text-sm font-medium text-navy-300">
                        SERVICE {service.number}
                      </span>
                    </div>
                    <h3 className="mt-6 font-display text-2xl font-bold text-navy-700">
                      {service.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-navy-500">{service.description}</p>
                    <ul className="mt-6 grid grid-cols-1 gap-x-4 gap-y-2.5 sm:grid-cols-2">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-navy-600">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    {service.platforms && (
                      <div className="mt-6 flex flex-wrap items-center gap-2">
                        <span className="font-mono text-[11px] uppercase tracking-widest text-navy-400">
                          Platforms
                        </span>
                        {service.platforms.map((p) => (
                          <span
                            key={p}
                            className="rounded-full border border-navy-100 bg-cloud px-3.5 py-1.5 text-xs font-semibold text-navy-600"
                          >
                            {p}
                          </span>
                        ))}
                      </div>
                    )}
                    <a
                      href="#contact"
                      className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-brand-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-glow"
                    >
                      {service.cta}
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </div>
                  <div className={`relative min-h-[280px] p-4 sm:p-6 lg:p-8 ${flip ? 'lg:order-1' : ''}`}>
                    <Visual />
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
