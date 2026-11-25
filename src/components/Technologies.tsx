import { Bot, Braces, Database, FileCode2, Layers, Link2, MessageSquare, Workflow } from 'lucide-react';
import Reveal from '@/components/Reveal';

const groups = [
  {
    label: 'Web Development',
    items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS'],
  },
  {
    label: 'AI Integration',
    items: [
      'OpenAI APIs',
      'Large Language Models',
      'Retrieval-Augmented Generation (RAG)',
      'AI Chatbots',
      'API Integrations',
    ],
  },
  {
    label: 'Automation',
    items: ['n8n', 'Make', 'Zapier'],
  },
];

const groupIcons = [FileCode2, Bot, Workflow];

export default function Technologies() {
  return (
    <section className="bg-cloud py-20 lg:py-28" aria-labelledby="tech-heading">
      <div className="container-site">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-label bg-brand-50 text-brand-600 ring-1 ring-brand-100">
              Technology & Tools
            </p>
            <h2 id="tech-heading" className="mt-5 font-display text-3xl font-bold leading-tight text-navy-700 sm:text-4xl">
              Powered by Modern Technology.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-navy-400">
              Technologies and platforms we work with across development, AI, and automation.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {groups.map((group, gi) => {
            const GroupIcon = groupIcons[gi];
            return (
              <Reveal key={group.label} delay={gi * 100}>
                <div className="h-full rounded-3xl border border-navy-100 bg-white p-7 shadow-card">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-700 text-accent">
                      <GroupIcon className="h-5 w-5" />
                    </span>
                    <h3 className="font-display text-base font-bold text-navy-700">{group.label}</h3>
                  </div>
                  <ul className="mt-6 flex flex-wrap gap-2.5">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-navy-100 bg-cloud px-4 py-2 text-sm font-medium text-navy-600 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-600"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={150}>
          <p className="mx-auto mt-8 flex max-w-2xl items-center justify-center gap-2 text-center font-mono text-xs text-navy-400">
            <Braces className="h-3.5 w-3.5 shrink-0" />
            <Database className="h-3.5 w-3.5 shrink-0" />
            <Link2 className="h-3.5 w-3.5 shrink-0" />
            <Layers className="h-3.5 w-3.5 shrink-0" />
            <MessageSquare className="h-3.5 w-3.5 shrink-0" />
          </p>
        </Reveal>
      </div>
    </section>
  );
}
