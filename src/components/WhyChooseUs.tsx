import { Handshake, Puzzle, Scale, Target, Users } from 'lucide-react';
import Reveal from '@/components/Reveal';

const benefits = [
  {
    number: '01',
    icon: Target,
    title: 'Business-First Approach',
    text: 'We start with understanding your business objectives before recommending the right technology.',
  },
  {
    number: '02',
    icon: Puzzle,
    title: 'Modern Technology',
    text: 'We leverage modern development tools, AI capabilities, and automation platforms to create effective solutions.',
  },
  {
    number: '03',
    icon: Users,
    title: 'User-Centered Design',
    text: 'We prioritize usability, accessibility, performance, and experiences that make sense to your customers.',
  },
  {
    number: '04',
    icon: Scale,
    title: 'Scalable Solutions',
    text: 'We develop digital foundations that can evolve alongside your business.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-navy-700 py-20 lg:py-28">
      <div className="absolute inset-0 bg-hero-radial opacity-60" aria-hidden />
      <div className="absolute inset-0 bg-grid-light opacity-40 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]" aria-hidden />
      <div className="container-site relative">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-label border border-accent/30 bg-accent/10 text-accent">
              <Handshake className="h-3.5 w-3.5" />
              Why KOD_TECH
            </p>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
              More Than Digital Services. A Technology Partner.
            </h2>
            <p className="mt-4 leading-relaxed text-white/70">
              We combine design, development, and intelligent technology to help businesses solve
              problems, improve efficiency, and create better digital experiences.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ number, icon: Icon, title, text }, i) => (
            <Reveal key={number} delay={i * 90}>
              <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.06] p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:bg-white/[0.09]">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500 text-white shadow-brand-lg transition-shadow duration-300 group-hover:shadow-glow">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-display text-2xl font-bold text-white/15 transition-colors duration-300 group-hover:text-accent/40">
                    {number}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-white">{title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-white/65">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
