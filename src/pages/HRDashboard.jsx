import { Download, SlidersHorizontal, UsersRound } from 'lucide-react';
import { useMemo, useState } from 'react';
import BarChart from '../components/BarChart.jsx';
import ProgressBar from '../components/ProgressBar.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { aggregateSkillGaps, candidates, demoUsers } from '../data/mockData.js';

export default function HRDashboard() {
  const [skillFilter, setSkillFilter] = useState('All');
  const [readinessFilter, setReadinessFilter] = useState('All');
  const skills = ['All', ...new Set(candidates.flatMap((candidate) => candidate.skills))];
  const filtered = useMemo(() => candidates.filter((candidate) => {
    const skillMatch = skillFilter === 'All' || candidate.skills.includes(skillFilter);
    const readinessMatch = readinessFilter === 'All' || candidate.readiness >= Number(readinessFilter);
    return skillMatch && readinessMatch;
  }), [skillFilter, readinessFilter]);

  return (
    <div className="space-y-6">
      {/* MVP recruiter flow: shortlist, rank, and filter candidates with fake company data. */}
      <SectionHeader eyebrow="HR candidate shortlist" title={`${demoUsers.recruiter} recruiter screening workspace`} action={<button className="focus-ring inline-flex items-center gap-2 rounded-lg bg-slate-950 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"><Download size={16} /> Export shortlist</button>}>
        Review ranked students, readiness indicators, and aggregate applicant skill gaps with simulated recruiter tooling.
      </SectionHeader>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"><p className="text-sm font-medium text-slate-500">Shortlisted</p><p className="mt-1 text-3xl font-semibold text-slate-950">12</p></div>
        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"><p className="text-sm font-medium text-slate-500">Average AI match</p><p className="mt-1 text-3xl font-semibold text-brand-700">85%</p></div>
        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"><p className="text-sm font-medium text-slate-500">Interview ready</p><p className="mt-1 text-3xl font-semibold text-mint-700">7</p></div>
      </div>
      <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
        <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-700"><SlidersHorizontal size={17} /> Recruiter filters</div>
        <div className="grid gap-3 md:grid-cols-3">
          <select value={skillFilter} onChange={(event) => setSkillFilter(event.target.value)} className="focus-ring rounded-lg border border-slate-200 px-3 py-2 text-sm">{skills.map((skill) => <option key={skill}>{skill}</option>)}</select>
          <select value={readinessFilter} onChange={(event) => setReadinessFilter(event.target.value)} className="focus-ring rounded-lg border border-slate-200 px-3 py-2 text-sm">
            <option value="All">All readiness levels</option>
            <option value="70">70% and above</option>
            <option value="80">80% and above</option>
          </select>
          <select className="focus-ring rounded-lg border border-slate-200 px-3 py-2 text-sm"><option>Sort by AI match</option><option>Sort by GPA</option><option>Sort by readiness</option></select>
        </div>
      </div>
      <section className="grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
        <div className="rounded-lg border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 p-5"><h3 className="flex items-center gap-2 text-lg font-semibold text-slate-950"><UsersRound size={21} /> Candidate ranking</h3></div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left text-sm">
              <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                <tr><th className="px-5 py-3">Candidate</th><th className="px-5 py-3">Target role</th><th className="px-5 py-3">Skills</th><th className="px-5 py-3">GPA</th><th className="px-5 py-3">Match</th><th className="px-5 py-3">Reviewer</th><th className="px-5 py-3">Stage</th></tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filtered.map((candidate) => (
                  <tr key={candidate.id} className="hover:bg-slate-50">
                    <td className="px-5 py-4 font-semibold text-slate-950">{candidate.name}</td>
                    <td className="px-5 py-4 text-slate-600">{candidate.role}</td>
                    <td className="px-5 py-4"><div className="flex flex-wrap gap-1.5">{candidate.skills.map((skill) => <span key={skill} className="rounded-full bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600">{skill}</span>)}</div></td>
                    <td className="px-5 py-4 text-slate-600">{candidate.gpa}</td>
                    <td className="px-5 py-4 font-semibold text-brand-700">{candidate.match}%</td>
                    <td className="px-5 py-4 text-slate-600">{candidate.reviewer}</td>
                    <td className="px-5 py-4"><span className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700">{candidate.stage}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"><h3 className="text-lg font-semibold text-slate-950">Aggregated skill gaps</h3><div className="mt-5"><BarChart data={aggregateSkillGaps} /></div></div>
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"><h3 className="text-lg font-semibold text-slate-950">Interview readiness summary</h3><div className="mt-5 space-y-4"><ProgressBar value={74} label="Structured answers" /><ProgressBar value={69} label="Business communication" tone="amber" /><ProgressBar value={81} label="Technical clarity" tone="mint" /></div></div>
        </div>
      </section>
    </div>
  );
}
