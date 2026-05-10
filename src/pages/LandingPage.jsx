import { ArrowRight, Building2, CheckCircle2, GraduationCap, LineChart, School, ShieldCheck, Sparkles } from 'lucide-react';
import BrandMark from '../components/BrandMark.jsx';
import SectionHeader from '../components/SectionHeader.jsx';

const audiences = [
  { icon: GraduationCap, title: 'Students', text: 'Discover relevant roles, understand skill gaps, track learning progress, and prepare with AI-supported guidance.' },
  { icon: Building2, title: 'Companies', text: 'Review candidate skill-fit for owned roles and unlock deeper premium insights for structured hiring decisions.' },
  { icon: School, title: 'Universities', text: 'Monitor aggregate career outcomes, platform usage, skill gaps, and partner company activity from one governance view.' }
];

const steps = [
  ['Build your profile', 'Start from academic background, skills, CV signals, and privacy-safe student preferences.'],
  ['Refine your match', 'Use target roles, learning progress, and preference quiz answers to improve role recommendations.'],
  ['Unlock smarter insights', 'Premium tools add company-specific preparation, simulations, feedback, and Career Passport sharing.']
];

export default function LandingPage({ setCurrentPage }) {
  const freeFeatures = ['profile-based matching', 'skill-gap analysis', 'resource recommendations', 'progress tracking', 'basic company-side skill-fit view'];
  const premiumFeatures = ['company-specific interview prep', 'business case simulations', 'AI feedback', 'Career Passport', 'advanced company review tools'];

  return (
    <div className="space-y-20 pb-12">
      <section className="relative overflow-hidden rounded-2xl border border-blue-100 bg-white px-6 py-10 shadow-card sm:px-10 lg:px-14 lg:py-14">
        <div className="absolute inset-x-0 top-0 h-1 bg-brand-600" />
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <BrandMark />
            <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-brand-700">
              <Sparkles size={16} /> University career intelligence platform
            </div>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              AI-powered career matching for students, companies, and universities
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              BrAInHUB helps students discover the right opportunities, supports companies in identifying stronger candidates, and gives universities clearer career insights through intelligent matching.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={() => setCurrentPage('student')} className="focus-ring inline-flex items-center gap-2 rounded-lg bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700">
                Explore Student Demo <ArrowRight size={17} />
              </button>
              <button onClick={() => setCurrentPage('hr')} className="focus-ring inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-white px-5 py-3 text-sm font-semibold text-brand-700 hover:bg-blue-50">
                Explore Company Demo <ArrowRight size={17} />
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-soft">
            <div className="rounded-xl bg-white p-5 shadow-card">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">Product preview</p>
                  <p className="mt-1 text-xl font-semibold text-slate-950">Student match workspace</p>
                </div>
                <span className="badge-free">FREE</span>
              </div>
              <div className="grid gap-3">
                {[
                  ['Marketing Analyst Intern', '95%', 'Rank #1 for this role'],
                  ['Junior Strategy Intern', '92%', 'Top 3 candidate'],
                  ['Market Intelligence Intern', '90%', 'Rank #2 for this role']
                ].map(([role, score, label]) => (
                  <div key={role} className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-semibold text-slate-950">{role}</p>
                      <span className="text-lg font-semibold text-brand-700">{score}</span>
                    </div>
                    <div className="mt-3 h-2 rounded-full bg-blue-100">
                      <div className="h-2 rounded-full bg-brand-600" style={{ width: score }} />
                    </div>
                    <p className="mt-2 text-xs font-semibold text-slate-500">{label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-xl bg-brand-900 p-4 text-white">
                <p className="text-sm font-semibold">Premium preview</p>
                <p className="mt-1 text-sm text-blue-100">Company-specific cases, AI feedback, and Career Passport sharing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <SectionHeader eyebrow="How it works" title="A simple path from profile to career insight">
          BrAInHUB combines student inputs, role requirements, and learning progress into a clearer career-readiness workflow.
        </SectionHeader>
        <div className="grid gap-4 md:grid-cols-3">
          {steps.map(([title, text], index) => (
            <article key={title} className="surface-card p-6">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-brand-700">{index + 1}</div>
              <h3 className="text-lg font-semibold text-slate-950">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <SectionHeader eyebrow="Who it is for" title="Built for the full university-to-work ecosystem">
          Each audience has a focused view, with privacy boundaries kept clear across the prototype.
        </SectionHeader>
        <div className="grid gap-4 md:grid-cols-3">
          {audiences.map((audience) => {
            const Icon = audience.icon;
            return (
              <article key={audience.title} className="surface-card p-6">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-brand-700"><Icon size={24} /></div>
                <h3 className="text-lg font-semibold text-slate-950">{audience.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{audience.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section>
        <SectionHeader eyebrow="Free vs premium" title="Clear product tiers for the demo">
          Free mode covers core matching and readiness workflows. Premium mode unlocks advanced preparation, export, and company review tools.
        </SectionHeader>
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="surface-card p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-slate-950">Free</h3>
              <span className="badge-free">CORE ACCESS</span>
            </div>
            <div className="mt-5 space-y-3">
              {freeFeatures.map((feature) => (
                <p key={feature} className="flex items-center gap-3 rounded-xl bg-slate-50 p-3 text-sm font-medium text-slate-700">
                  <CheckCircle2 size={17} className="text-brand-600" /> {feature}
                </p>
              ))}
            </div>
          </article>
          <article className="surface-card border-brand-100 p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-slate-950">Premium</h3>
              <span className="badge-premium">ADVANCED</span>
            </div>
            <div className="mt-5 space-y-3">
              {premiumFeatures.map((feature) => (
                <p key={feature} className="flex items-center gap-3 rounded-xl bg-blue-50 p-3 text-sm font-medium text-brand-900">
                  <ShieldCheck size={17} className="text-brand-600" /> {feature}
                </p>
              ))}
            </div>
            <button onClick={() => setCurrentPage('premium')} className="focus-ring mt-5 rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-700">View premium tools</button>
          </article>
        </div>
      </section>

      <section className="rounded-2xl border border-blue-100 bg-brand-900 p-8 text-white shadow-card sm:p-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-blue-100">
              <LineChart size={16} /> Presentation-ready POC
            </div>
            <h2 className="text-3xl font-semibold tracking-tight">Make career matching more intelligent, measurable, and personalized.</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-blue-100">Open the demo to explore the student, company, university, and premium workflows inside the existing prototype.</p>
          </div>
          <button onClick={() => setCurrentPage('student')} className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-brand-700 shadow-sm hover:bg-blue-50">
            Open the Demo <ArrowRight size={17} />
          </button>
        </div>
      </section>
    </div>
  );
}
