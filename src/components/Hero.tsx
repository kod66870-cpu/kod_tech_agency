import { ArrowRight, Sparkles } from 'lucide-react';
import Reveal from '@/components/Reveal';

function CodePanel() {
  return (
    <div className="rounded-2xl border border-white/10 bg-navy-700/80 shadow-card-lg backdrop-blur-sm">
      <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3.5">
        <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
        <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
        <span className="h-3 w-3 rounded-full bg-[#28C840]" />
        <span className="ml-3 font-mono text-xs text-white/40">kod_tech — build.dart</span>
      </div>
      <div className="px-5 py-4 font-mono text-[13px] leading-6">
        <p><span className="text-accent">const</span> <span className="text-white">agency</span> <span className="text-white/50">=</span> <span className="text-white/70">{'{'}</span></p>
        <p className="pl-5"><span className="text-white/80">design</span><span className="text-white/50">:</span> <span className="text-[#8ECBFF]">&quot;premium &amp; responsive&quot;</span><span className="text-white/50">,</span></p>
        <p className="pl-5"><span className="text-white/80">ai</span><span className="text-white/50">:</span> <span className="text-[#8ECBFF]">&quot;integrated intelligence&quot;</span><span className="text-white/50">,</span></p>
        <p className="pl-5"><span className="text-white/80">automation</span><span className="text-white/50">:</span> <span className="text-[#8ECBFF]">&quot;business workflows&quot;</span><span className="text-white/50">,</span></p>
        <p className="pl-5"><span className="text-accent">status</span><span className="text-white/50">:</span> <span className="text-[#7CFFC0]">&quot;building the future&quot;</span></p>
        <p><span className="text-white/70">{'}'}</span><span className="text-white/50">;</span><span className="ml-1 inline-block h-4 w-2 animate-pulse-glow bg-accent align-middle" /></p>
      </div>
    </div>
  );
}

function NodeChip({ label, icon, className, delay }: { label: string; icon: string; className: string; delay: string }) {
  return (
    <div
      className={`absolute flex animate-float items-center gap-2 rounded-xl border border-white/15 bg-navy-600/90 px-3.5 py-2.5 text-xs font-semibold text-white shadow-card-lg backdrop-blur-sm ${className}`}
      style={{ animationDelay: delay }}
    >
      <span aria-hidden>{icon}</span>
      {label}
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-brand-500 pt-32 lg:pt-36">
      <div className="absolute inset-0 bg-hero-radial" aria-hidden />
      <div className="absolute inset-0 bg-grid-light opacity-60 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_30%,black,transparent)]" aria-hidden />
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border border-accent/20 animate-spin-slow"
        aria-hidden
      >
        <span className="absolute -top-1 left-1/2 h-2 w-2 rounded-full bg-accent shadow-glow" />
      </div>

      <div className="container-site relative grid items-center gap-14 pb-20 pt-6 lg:grid-cols-[1.05fr_0.95fr] lg:pb-28">
        <div>
          <Reveal>
            <p className="section-label border border-white/25 bg-white/10 text-white">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Building the Future of Digital Business
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.12] text-white sm:text-5xl xl:text-[3.6rem]">
              Transforming Ideas Into Powerful{' '}
              <span className="relative whitespace-nowrap text-accent">
                Digital Solutions
                <svg
                  className="absolute -bottom-2 left-0 w-full text-accent/60"
                  viewBox="0 0 300 12"
                  fill="none"
                  aria-hidden
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 9C60 3 150 2 298 7"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="animate-dash-flow [stroke-dasharray:10_14]"
                  />
                </svg>
              </span>
              .
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
              We design high-performing websites, integrate intelligent AI solutions, and automate
              business workflows to help ambitious businesses grow, operate smarter, and stay ahead.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row">
              <a href="#contact" className="btn-primary bg-white !text-brand-600 hover:!bg-cloud">
                Start a Project
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#services" className="btn-secondary">
                Explore Our Services
              </a>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <p className="mt-9 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-navy-700/40 px-5 py-2.5 font-mono text-xs font-medium tracking-wide text-white/80">
              <Sparkles className="h-4 w-4 text-accent" />
              Web Development | AI Integration | Workflow Automation
            </p>
          </Reveal>
        </div>

        <Reveal delay={250} className="relative">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-navy-700/50 via-transparent to-accent/20 blur-2xl" aria-hidden />
            <CodePanel />
            <NodeChip label="AI Assistant" icon="🧠" className="-left-4 top-10 sm:-left-8" delay="0s" />
            <NodeChip label="n8n Workflow" icon="⚡" className="-right-3 top-1/3 sm:-right-6" delay="1.4s" />
            <NodeChip label="Live Website" icon="🌐" className="-left-2 bottom-8 sm:-left-6" delay="2.6s" />
          </div>
        </Reveal>
      </div>

      <div className="h-8 rounded-t-[2rem] bg-cloud sm:h-10" aria-hidden />
    </section>
  );
}
