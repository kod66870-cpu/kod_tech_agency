import { ArrowRight, MessagesSquare, Sparkles } from 'lucide-react';
import Reveal from '@/components/Reveal';

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-brand-500 py-20 lg:py-24">
      <div className="absolute inset-0 bg-hero-radial" aria-hidden />
      <div className="absolute inset-0 bg-grid-light opacity-50" aria-hidden />
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full border border-accent/25 animate-spin-slow"
        aria-hidden
      >
        <span className="absolute right-6 top-4 h-2 w-2 rounded-full bg-accent shadow-glow" />
      </div>
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-navy-700/40 blur-3xl"
        aria-hidden
      />

      <div className="container-site relative">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-label border border-white/25 bg-white/10 text-white">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              Ready When You Are
            </p>
            <h2 className="mt-6 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
              Your Next Big Idea Deserves the Right Technology.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-white/85">
              Whether you need a powerful website, intelligent AI integration, or automated business
              workflows, KOD_TECH is ready to help you take the next step.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3.5 sm:flex-row">
              <a href="#contact" className="btn-primary bg-white !text-brand-600 hover:!bg-cloud">
                Start Your Project
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="btn-secondary">
                <MessagesSquare className="h-4 w-4" />
                Discuss Your Idea
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
