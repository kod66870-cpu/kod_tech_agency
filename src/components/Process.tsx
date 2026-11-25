import { ClipboardList, Rocket, Search, PenTool } from 'lucide-react';
import Reveal from '@/components/Reveal';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Discovery',
    text: 'We learn about your business, goals, challenges, and requirements.',
  },
  {
    number: '02',
    icon: ClipboardList,
    title: 'Strategy & Planning',
    text: 'We define the right approach, technologies, features, and project roadmap.',
  },
  {
    number: '03',
    icon: PenTool,
    title: 'Design & Development',
    text: 'We design, develop, integrate, and build your solution with attention to detail.',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Launch & Support',
    text: 'We deploy your solution, test its performance, and provide ongoing support where agreed.',
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-cloud py-20 lg:py-28">
      <div className="container-site">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-label bg-brand-50 text-brand-600 ring-1 ring-brand-100">
              Our Process
            </p>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-navy-700 sm:text-4xl">
              From Idea to Implementation.
            </h2>
            <p className="mt-4 leading-relaxed text-navy-500">
              Every successful digital solution starts with a clear process.
            </p>
          </div>
        </Reveal>

        <div className="relative mt-16">
          <div
            className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-brand-200 via-brand-400 to-accent lg:block"
            aria-hidden
          />
          <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map(({ number, icon: Icon, title, text }, i) => (
              <Reveal key={number} delay={i * 110}>
                <li className="group relative flex flex-col items-center text-center lg:items-start lg:text-left">
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-brand-500 ring-2 ring-brand-200 shadow-card transition-all duration-300 group-hover:bg-brand-500 group-hover:text-white group-hover:shadow-brand-lg">
                    <Icon className="h-6 w-6" />
                    <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-navy-700 font-mono text-[10px] font-bold text-accent ring-2 ring-cloud">
                      {number}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-navy-700">{title}</h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-navy-500">{text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
