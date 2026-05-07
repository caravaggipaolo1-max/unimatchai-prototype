import { ArrowRight, Building2, CheckCircle2, GraduationCap, School, Sparkles } from 'lucide-react';
import SectionHeader from '../components/SectionHeader.jsx';
import { mvpFeatures, partnerCompanies, pocSprints } from '../data/mockData.js';

const benefits = [
  { icon: GraduationCap, title: 'For students', text: 'Discover suitable roles, improve applications, close skill gaps, and prepare with AI-guided practice.' },
  { icon: Building2, title: 'For companies', text: 'Shortlist final-year talent faster with transparent match reasoning and readiness signals.' },
  { icon: School, title: 'For universities', text: 'Track employability progress, career readiness, and skills demand across cohorts.' }
];

export default function LandingPage({ setCurrentPage }) {
  return (
    <div className="space-y-16 pb-10">
      {/* Landing page frames the prototype as a polished POC, not a production product. */}
      <section className="relative overflow-hidden rounded-none bg-slate-950 px-6 py-16 text-white sm:px-10 lg:px-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(36,119,255,0.28),transparent_34%),linear-gradient(135deg,rgba(18,183,106,0.14),transparent_42%)]" />
        <div className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm font-medium text-slate-200">
              <Sparkles size={16} /> 4-sprint POC for university-to-work matching
            </div>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-normal sm:text-5xl lg:text-6xl">UniMatchAI</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              A university-to-work platform that connects student potential with employer demand through explainable job matching, CV guidance, interview preparation, and recruiter-ready career signals.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={() => setCurrentPage('student')} className="focus-ring inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-100">Student Login <ArrowRight size={17} /></button>
              <button onClick={() => setCurrentPage('hr')} className="focus-ring inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">Company Login <ArrowRight size={17} /></button>
            </div>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/10 p-5 shadow-soft backdrop-blur">
            <div className="rounded-lg bg-white p-5 text-slate-950">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-500">Mario Rossi AI match preview</p>
                  <p className="mt-1 text-xl font-semibold">BrandWave Srl Marketing Analyst Intern</p>
                </div>
                <span className="rounded-full bg-mint-50 px-3 py-1 text-sm font-semibold text-mint-700">94%</span>
              </div>
              <div className="mt-5 space-y-3">
                {['95% personal match for Mario Rossi', 'Rank #1 for the BrandWave role', 'Two skill gaps detected before interview'].map((item) => (
                  <div key={item} className="rounded-lg bg-slate-50 p-3 text-sm font-medium text-slate-700">{item}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <SectionHeader eyebrow="MVP scope" title="Focused on the six core demo workflows">The prototype prioritizes the highest-value POC features and keeps premium ideas separate as future-release concepts.</SectionHeader>
        <div className="grid gap-3 md:grid-cols-3">
          {mvpFeatures.map((feature) => (
            <div key={feature} className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
              <CheckCircle2 className="shrink-0 text-mint-700" size={20} />
              <p className="text-sm font-semibold text-slate-800">{feature}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionHeader eyebrow="4-sprint POC" title="Simple delivery roadmap for the demo">Each sprint maps to the features a student project team can explain, test, and present without a real backend.</SectionHeader>
        <div className="grid gap-4 lg:grid-cols-4">
          {pocSprints.map((item) => (
            <article key={item.sprint} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-semibold text-brand-700">{item.sprint}</p>
                <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-600">{item.status}</span>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-700">{item.focus}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <SectionHeader eyebrow="Platform" title="One workspace for career readiness">UniMatchAI brings together the workflows universities, students, and hiring teams usually manage in separate systems.</SectionHeader>
        <div className="grid gap-4 md:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <article key={benefit.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-50 text-brand-700"><Icon size={24} /></div>
                <h3 className="text-lg font-semibold text-slate-950">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{benefit.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-4">
        {[['6', 'Mario Rossi job matches'], ['82%', 'Mario Rossi readiness'], ['18', 'partner companies'], ['1,284', 'matches generated']].map(([value, label]) => (
          <div key={label} className="rounded-lg border border-slate-200 bg-white p-6 text-center shadow-sm">
            <p className="text-3xl font-semibold text-brand-700">{value}</p>
            <p className="mt-2 text-sm font-medium text-slate-500">{label}</p>
          </div>
        ))}
      </section>

      <section>
        <SectionHeader eyebrow="Demo companies" title="Realistic fake partner data">Partner companies are fictional but modeled after common graduate hiring needs in analytics, consulting, and digital product teams.</SectionHeader>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {partnerCompanies.map((company) => (
            <article key={company.name} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-lg font-semibold text-slate-950">{company.name}</p>
              <p className="mt-1 text-sm font-medium text-slate-500">{company.industry}</p>
              <p className="mt-4 text-sm leading-6 text-slate-600">{company.hiringGoal}</p>
              <p className="mt-4 text-sm font-semibold text-brand-700">{company.openRoles} open demo roles</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
