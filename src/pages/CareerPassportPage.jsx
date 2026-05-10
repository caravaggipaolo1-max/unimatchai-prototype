import { BadgeCheck, Download, ShieldCheck } from 'lucide-react';
import ProgressBar from '../components/ProgressBar.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { premiumPassportSharing, studentProfile } from '../data/mockData.js';

export default function CareerPassportPage() {
  return (
    <div className="space-y-6">
      {/* Career Passport is a POC presentation artifact, not a real credential export. */}
      <SectionHeader eyebrow="Premium Career Passport" title="Current User verified employability profile" action={<button className="focus-ring inline-flex items-center gap-2 rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700"><Download size={16} /> Export demo PDF</button>}>
        Premium summary of academic profile, skills, career readiness, saved simulation results, and selective sharing controls.
      </SectionHeader>
      <section className="surface-card p-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-brand-50 text-brand-700"><ShieldCheck size={28} /></div>
              <div><h3 className="text-2xl font-semibold text-slate-950">{studentProfile.name}</h3><p className="text-sm font-medium text-slate-500">{studentProfile.degree}</p></div>
            </div>
            <div className="mt-6 grid gap-4 text-sm sm:grid-cols-2">
              {[['University', studentProfile.university], ['Graduation', studentProfile.graduation], ['GPA', studentProfile.gpa], ['Verified credits', `${studentProfile.verifiedCredits} ECTS`]].map(([label, value]) => (
                <div key={label} className="rounded-lg bg-slate-50 p-4"><p className="font-medium text-slate-500">{label}</p><p className="mt-1 font-semibold text-slate-950">{value}</p></div>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-mint-500/20 bg-mint-50 p-4 text-mint-700"><p className="inline-flex items-center gap-2 text-sm font-semibold"><BadgeCheck size={18} /> University verified</p></div>
        </div>
      </section>
      <section className="rounded-lg border border-blue-100 bg-blue-50 p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <h3 className="text-lg font-semibold text-slate-950">Premium export and selective sharing</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">Choose which profile sections are included when sharing the Career Passport in demo mode.</p>
          </div>
          <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-700">PREMIUM</span>
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {premiumPassportSharing.map((item) => (
            <div key={item.label} className="flex items-center justify-between rounded-lg bg-white p-3 text-sm">
              <span className="font-medium text-slate-700">{item.label}</span>
              <span className={`rounded-full px-2 py-1 text-xs font-semibold ${item.enabled ? 'bg-mint-50 text-mint-700' : 'bg-slate-100 text-slate-500'}`}>{item.enabled ? 'Included' : 'Hidden'}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="surface-card p-6"><h3 className="text-lg font-semibold text-slate-950">Key skills</h3><div className="mt-5 space-y-4">{studentProfile.skills.map((skill) => <ProgressBar key={skill.name} value={skill.level} label={skill.name} />)}</div></div>
        <div className="surface-card p-6">
          <h3 className="text-lg font-semibold text-slate-950">Career readiness summary</h3>
          <div className="mt-5"><ProgressBar value={studentProfile.readiness} label="Overall readiness" tone="mint" /></div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {studentProfile.targetRoles.map((role) => <div key={role} className="rounded-lg border border-slate-100 p-4"><p className="font-semibold text-slate-950">{role}</p><p className="mt-2 text-sm leading-6 text-slate-600">Recommended match based on academic work, project evidence, and skills profile.</p></div>)}
          </div>
        </div>
      </section>
    </div>
  );
}
