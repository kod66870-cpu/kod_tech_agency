import { Gauge, Lightbulb, Rocket, Target } from 'lucide-react';
import Reveal from '@/components/Reveal';

const values = [
  { icon: Lightbulb, label: 'Digital-First Thinking' },
  { icon: Gauge, label: 'Intelligent Technology' },
  { icon: Target, label: 'Business-Focused Solutions' },
  { icon: Rocket, label: 'Built for Growth' },
];

export default function ValueStrip() {
  return (
    <section className="border-b border-navy-100 bg-cloud" aria-label="Our values">
      <div className="container-site grid grid-cols-1 gap-x-8 gap-y-5 py-9 sm:grid-cols-2 lg:grid-cols-4">
        {values.map(({ icon: Icon, label }, i) => (
          <Reveal key={label} delay={i * 90}>
            <div className="flex items-center gap-3.5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-500 ring-1 ring-brand-100">
                <Icon className="h-5 w-5" />
              </span>
              <p className="text-sm font-semibold text-navy-700">{label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
