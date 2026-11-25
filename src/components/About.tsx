import { ArrowRight, Compass, LineChart, Cpu, Workflow } from 'lucide-react';
import Reveal from '@/components/Reveal';

const principles = [
  {
    number: '01',
    title: 'Innovation',
    text: 'We embrace modern technologies to create smarter digital experiences.',
  },
  {
    number: '02',
    title: 'Practical Solutions',
    text: 'We focus on solving real business challenges with effective technology.',
  },
  {
    number: '03',
    title: 'Continuous Growth',
    text: 'We build scalable digital foundations that support long-term business growth.',
  },
];

function AboutVisual() {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      <div className="relative overflow-hidden rounded-3xl bg-navy-700 p-7 shadow-card-lg">
        <div className="absolute inset-0 bg-grid-light opacity-50" aria-hidden />
        <div className="relative">
          <div className="flex items-center justify-between">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/50">
              How we work
            </p>
            <span className="flex items-center gap-1.5 rounded-full bg-accent/15 px-3 py-1 font-mono text-[11px] text-accent">
              <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-accent" />
              Active
            </span>
          </div>
          <div className="mt-6 space-y-3.5">
            {[
              { icon: Compass, label: 'Understand the business', pct: '01', w: 'w-full' },
              { icon: LineChart, label: 'Design the strategy', pct: '02', w: 'w-4/5' },
              { icon: Cpu, label: 'Build & integrate', pct: '03', w: 'w-3/5' },
              { icon: Workflow, label: 'Automate & scale', pct: '04', w: 'w-2/5' },
            ].map(({ icon: Icon, label, pct, w }) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-3 text-sm font-medium text-white">
                    <Icon className="h-4 w-4 text-accent" />
                    {label}
                  </span>
                  <span className="font-mono text-xs text-white/40">{pct}</span>
                </div>
                <div className="mt-2.5 h-1 overflow-hidden rounded-full bg-white/10">
                  <div className={`h-full ${w} rounded-full bg-gradient-to-r from-brand-500 to-accent`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-brand-100 bg-white px-5 py-4 shadow-card-lg sm:block">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-navy-400">Approach</p>
        <p className="mt-1 font-display text-sm font-bold text-navy-700">
          Design. Integrate. Automate.
        </p>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-cloud py-20 lg:py-28">
      <div className="absolute inset-0 bg-grid-dark opacity-60 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" aria-hidden />
      <div className="container-site relative grid items-center gap-16 lg:grid-cols-2">
        <Reveal>
          <div>
            <p className="section-label bg-brand-50 text-brand-600 ring-1 ring-brand-100">
              About KOD_TECH
            </p>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-navy-700 sm:text-4xl">
              Technology That Moves Your Business Forward.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-navy-500">
              <p>
                At KOD_TECH, we believe technology should do more than make businesses look modern.
                It should create meaningful experiences, simplify operations, and unlock new
                opportunities.
              </p>
              <p>
                We partner with businesses to develop powerful digital platforms, integrate
                intelligent technologies, and create automated workflows that improve the way they
                operate.
              </p>
              <p>
                Our approach combines creativity, technical thinking, and practical problem-solving
                to deliver digital solutions built around real business needs.
              </p>
            </div>

            <div className="mt-10 space-y-6">
              {principles.map((p) => (
                <div key={p.number} className="group flex gap-5">
                  <span className="font-display text-sm font-bold text-brand-500 transition-colors group-hover:text-accent-deep">
                    {p.number} —
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold text-navy-700">{p.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-navy-500">{p.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#process"
              className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-brand-500 transition-colors hover:text-brand-600"
            >
              See how we work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <AboutVisual />
        </Reveal>
      </div>
    </section>
  );
}
