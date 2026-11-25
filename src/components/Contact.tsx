import { useState, type FormEvent } from 'react';
import { CheckCircle2, Loader2, Send, AlertCircle } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { siteConfig } from '@/config/site';
import Reveal from '@/components/Reveal';

type FormState = {
  fullName: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  details: string;
};

type Status = 'idle' | 'submitting' | 'success' | 'error';

const initialForm: FormState = {
  fullName: '',
  email: '',
  company: '',
  service: '',
  budget: '',
  details: '',
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputClass =
  'w-full rounded-xl border border-navy-100 bg-white px-4 py-3 text-sm text-navy-700 placeholder:text-navy-300 shadow-sm transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200';

const labelClass = 'mb-1.5 block text-sm font-semibold text-navy-700';

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<Status>('idle');

  const set = (key: keyof FormState) => (value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.fullName.trim()) next.fullName = 'Please enter your full name.';
    if (!form.email.trim()) next.email = 'Please enter your email address.';
    else if (!emailPattern.test(form.email)) next.email = 'Please enter a valid email address.';
    if (!form.service) next.service = 'Please select a service.';
    if (!form.details.trim()) next.details = 'Please tell us about your project.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === 'submitting') return;
    if (!validate()) return;
    setStatus('submitting');
    const { error } = await supabase.from('contact_enquiries').insert({
      full_name: form.fullName.trim(),
      email: form.email.trim(),
      company: form.company.trim() || null,
      service: form.service,
      budget: form.budget || null,
      details: form.details.trim(),
    });
    if (error) {
      setStatus('error');
      return;
    }
    setStatus('success');
    setForm(initialForm);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-cloud py-20 lg:py-28">
      <div className="absolute inset-0 bg-grid-dark opacity-50 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_100%,black,transparent)]" aria-hidden />
      <div className="container-site relative grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <div>
            <p className="section-label bg-brand-50 text-brand-600 ring-1 ring-brand-100">
              Contact
            </p>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-navy-700 sm:text-4xl">
              Let&apos;s Build Something Great.
            </h2>
            <p className="mt-4 leading-relaxed text-navy-500">
              Tell us about your business, your challenges, and what you want to achieve. Let&apos;s
              explore how technology can help.
            </p>

            <div className="mt-10 space-y-5">
              {[
                { step: '01', text: 'Tell us about your project' },
                { step: '02', text: 'We review and respond with next steps' },
                { step: '03', text: 'We scope the right solution together' },
              ].map(({ step, text }) => (
                <div key={step} className="flex items-center gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-500 font-mono text-xs font-bold text-white">
                    {step}
                  </span>
                  <p className="text-sm font-medium text-navy-600">{text}</p>
                </div>
              ))}
            </div>

            <p className="mt-10 rounded-2xl border border-brand-100 bg-white p-5 text-sm leading-relaxed text-navy-500 shadow-card">
              Prefer email? Direct email and phone details will appear here once official KOD_TECH
              contact information is configured.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-3xl border border-navy-100 bg-white p-7 shadow-card-lg sm:p-9">
            {status === 'success' ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-500">
                  <CheckCircle2 className="h-8 w-8" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-navy-700">
                  Enquiry Sent Successfully
                </h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-navy-500">
                  Thank you for reaching out. We have received your project details and will get
                  back to you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="mt-7 rounded-full border border-navy-200 px-6 py-2.5 text-sm font-semibold text-navy-700 transition-colors hover:border-brand-500 hover:text-brand-500"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="fullName" className={labelClass}>
                      Full Name <span className="text-brand-500">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      autoComplete="name"
                      className={inputClass}
                      placeholder="Jane Cooper"
                      value={form.fullName}
                      onChange={(e) => set('fullName')(e.target.value)}
                      aria-required="true"
                      aria-invalid={!!errors.fullName}
                    />
                    {errors.fullName && <p className="mt-1.5 text-xs text-red-500">{errors.fullName}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email Address <span className="text-brand-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      className={inputClass}
                      placeholder="jane@company.com"
                      value={form.email}
                      onChange={(e) => set('email')(e.target.value)}
                      aria-required="true"
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="company" className={labelClass}>
                      Company / Business Name
                    </label>
                    <input
                      id="company"
                      type="text"
                      autoComplete="organization"
                      className={inputClass}
                      placeholder="Your company (optional)"
                      value={form.company}
                      onChange={(e) => set('company')(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className={labelClass}>
                      Service Required <span className="text-brand-500">*</span>
                    </label>
                    <select
                      id="service"
                      className={`${inputClass} ${form.service ? '' : 'text-navy-300'}`}
                      value={form.service}
                      onChange={(e) => set('service')(e.target.value)}
                      aria-required="true"
                      aria-invalid={!!errors.service}
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      {siteConfig.services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    {errors.service && <p className="mt-1.5 text-xs text-red-500">{errors.service}</p>}
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="budget" className={labelClass}>
                      Project Budget <span className="text-navy-400">(optional)</span>
                    </label>
                    <select
                      id="budget"
                      className={`${inputClass} ${form.budget ? '' : 'text-navy-300'}`}
                      value={form.budget}
                      onChange={(e) => set('budget')(e.target.value)}
                    >
                      <option value="" disabled>
                        Select a budget range
                      </option>
                      {siteConfig.budgets.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="details" className={labelClass}>
                      Project Details <span className="text-brand-500">*</span>
                    </label>
                    <textarea
                      id="details"
                      rows={5}
                      className={`${inputClass} resize-y`}
                      placeholder="Describe your project, goals, and challenges..."
                      value={form.details}
                      onChange={(e) => set('details')(e.target.value)}
                      aria-required="true"
                      aria-invalid={!!errors.details}
                    />
                    {errors.details && <p className="mt-1.5 text-xs text-red-500">{errors.details}</p>}
                  </div>
                </div>

                {status === 'error' && (
                  <div className="mt-5 flex items-start gap-2.5 rounded-xl bg-red-50 p-4 text-sm text-red-600" role="alert">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                    Something went wrong while sending your enquiry. Please try again in a moment.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-primary mt-7 w-full disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Project Enquiry
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
