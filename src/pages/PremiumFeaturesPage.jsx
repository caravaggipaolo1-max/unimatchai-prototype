import { BriefcaseBusiness, CheckCircle2, CreditCard, LockKeyhole, MessageSquareText, ShieldCheck, Trophy, Users } from 'lucide-react';
import { useState } from 'react';
import SectionHeader from '../components/SectionHeader.jsx';
import { accessPlans, premiumCompanySeats, premiumPassportSharing, premiumStudentSimulations } from '../data/mockData.js';

const premiumCards = [
  { icon: MessageSquareText, title: 'Company-specific interview questions', text: 'Tailored preparation questions for selected company roles.' },
  { icon: BriefcaseBusiness, title: 'Business case challenges', text: 'Role-specific case simulations with structured answer guidance.' },
  { icon: Trophy, title: 'AI feedback on simulations', text: 'Mock feedback on structure, business reasoning, and communication.' }
];

export default function PremiumFeaturesPage() {
  const [studentActive, setStudentActive] = useState(false);
  const [companyActive, setCompanyActive] = useState(false);

  return (
    <div className="space-y-6">
      {/* Premium screen separates paid student and company concepts while keeping payment mocked. */}
      <SectionHeader eyebrow="Free vs premium" title="Premium unlock center">
        Simulate premium activation for students and companies. No payment is processed; this is a stable demo flow for the product backlog.
      </SectionHeader>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="surface-card p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-slate-500">Student Premium</p>
              <h3 className="mt-1 text-2xl font-semibold text-slate-950">Advanced preparation tools</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">Unlock company-specific interviews, business cases, saved simulation results, and Career Passport generation.</p>
            </div>
            <span className={`rounded-full px-3 py-1 text-xs font-semibold ${studentActive ? 'bg-mint-50 text-mint-700' : 'bg-brand-900 text-white'}`}>{studentActive ? 'ACTIVE' : 'LOCKED'}</span>
          </div>
          <div className="mt-5 grid gap-2">
            {accessPlans.studentPremium.map((item) => <p key={item} className="rounded-lg bg-slate-50 p-3 text-sm font-medium text-slate-700">{item}</p>)}
          </div>
          <button onClick={() => setStudentActive(true)} className="focus-ring mt-5 inline-flex items-center gap-2 rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700">
            <CreditCard size={16} /> {studentActive ? 'Premium activated' : 'Mock student upgrade'}
          </button>
        </div>

        <div className="surface-card p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-slate-500">Company Premium</p>
              <h3 className="mt-1 text-2xl font-semibold text-slate-950">Advanced candidate review</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">Unlock richer candidate comparisons, premium simulation insights, and multi-seat company access.</p>
            </div>
            <span className={`rounded-full px-3 py-1 text-xs font-semibold ${companyActive ? 'bg-mint-50 text-mint-700' : 'bg-brand-900 text-white'}`}>{companyActive ? 'ACTIVE' : 'LOCKED'}</span>
          </div>
          <div className="mt-5 grid gap-2">
            {accessPlans.companyPremium.map((item) => <p key={item} className="rounded-lg bg-slate-50 p-3 text-sm font-medium text-slate-700">{item}</p>)}
          </div>
          <button onClick={() => setCompanyActive(true)} className="focus-ring mt-5 inline-flex items-center gap-2 rounded-lg bg-brand-900 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700">
            <Users size={16} /> {companyActive ? 'Company premium active' : 'Mock company upgrade'}
          </button>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {premiumCards.map((feature) => {
          const Icon = feature.icon;
          return (
            <article key={feature.title} className="relative surface-card p-6">
              <div className="absolute right-4 top-4 rounded-full bg-brand-50 p-2 text-brand-700"><LockKeyhole size={17} /></div>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-50 text-brand-700"><Icon size={23} /></div>
              <h3 className="pr-8 text-lg font-semibold text-slate-950">{feature.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{feature.text}</p>
              <span className="mt-5 inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-brand-700">PREMIUM</span>
            </article>
          );
        })}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1fr_0.8fr]">
        <div className="surface-card p-6">
          <h3 className="text-lg font-semibold text-slate-950">Saved premium simulation results</h3>
          <div className="mt-4 space-y-3">
            {premiumStudentSimulations.map((item) => (
              <div key={item.title} className="rounded-lg border border-slate-100 p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-semibold text-slate-900">{item.title}</p>
                  <span className="rounded-full bg-mint-50 px-2 py-1 text-xs font-semibold text-mint-700">Saved to profile</span>
                </div>
                <p className="mt-2 text-sm text-slate-500">{item.type}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">AI feedback: {item.feedback}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="surface-card p-6">
          <h3 className="text-lg font-semibold text-slate-950">Career Passport sharing</h3>
          <p className="mt-1 text-sm text-slate-500">Mock export and selective sharing controls.</p>
          <div className="mt-4 space-y-3">
            {premiumPassportSharing.map((item) => (
              <div key={item.label} className="flex items-center justify-between rounded-lg bg-slate-50 p-3 text-sm">
                <span className="font-medium text-slate-700">{item.label}</span>
                <span className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold ${item.enabled ? 'bg-mint-50 text-mint-700' : 'bg-slate-200 text-slate-500'}`}>
                  {item.enabled && <CheckCircle2 size={13} />} {item.enabled ? 'Shared' : 'Hidden'}
                </span>
              </div>
            ))}
          </div>
          <button className="focus-ring mt-5 inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
            <ShieldCheck size={16} /> Export demo passport
          </button>
        </div>
      </section>

      <section className="surface-card p-6">
        <h3 className="text-lg font-semibold text-slate-950">Multi-seat company premium access</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {premiumCompanySeats.map((seat) => <span key={seat} className="rounded-full bg-brand-50 px-3 py-1 text-sm font-semibold text-brand-700">{seat}</span>)}
        </div>
      </section>
    </div>
  );
}
