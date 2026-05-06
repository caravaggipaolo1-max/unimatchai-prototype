import { BriefcaseBusiness, LockKeyhole, MessageSquareText, Star, Trophy } from 'lucide-react';
import SectionHeader from '../components/SectionHeader.jsx';

const features = [
  { icon: MessageSquareText, title: 'Company-specific interview questions', text: 'Future release: generate practice questions tuned to a partner employer, role family, and previous assessment style.' },
  { icon: BriefcaseBusiness, title: 'Business case challenge', text: 'Premium-only concept: timed case prompt with structured answer canvas, AI scoring, and recruiter-facing completion record.' },
  { icon: Trophy, title: 'Priority employer insights', text: 'Future release: compare your profile with successful applicants and identify the fastest readiness improvements.' }
];

export default function PremiumFeaturesPage() {
  return (
    <div className="space-y-6">
      {/* Premium concepts are intentionally isolated from MVP screens for clean POC scope. */}
      <SectionHeader eyebrow="Future release / premium-only" title="Locked employer-oriented tools">These screens are not part of the MVP. They show where future paid or partner-specific capabilities could live.</SectionHeader>
      <div className="rounded-lg border border-amber-200 bg-amber-50 p-5">
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-amber-500"><Star size={18} /> Marked as future release and premium-only</p>
        <p className="mt-2 text-sm leading-6 text-slate-700">Upgrade controls, billing, access rules, and partner entitlements are intentionally non-functional in this proof of concept.</p>
      </div>
      <section className="grid gap-4 md:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <article key={feature.title} className="relative rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <div className="absolute right-4 top-4 rounded-full bg-slate-100 p-2 text-slate-500"><LockKeyhole size={17} /></div>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-50 text-brand-700"><Icon size={23} /></div>
              <h3 className="pr-8 text-lg font-semibold text-slate-950">{feature.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{feature.text}</p>
              <button className="focus-ring mt-5 inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-500"><LockKeyhole size={15} /> Premium-only</button>
            </article>
          );
        })}
      </section>
    </div>
  );
}
