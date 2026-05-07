import { BriefcaseBusiness, Download, ShieldCheck, UsersRound } from 'lucide-react';
import { useMemo, useState } from 'react';
import ProgressBar from '../components/ProgressBar.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { companyRankings, demoUsers } from '../data/mockData.js';

export default function HRDashboard() {
  const [selectedCompany, setSelectedCompany] = useState(companyRankings[0].company);
  const selectedPosting = useMemo(
    () => companyRankings.find((posting) => posting.company === selectedCompany) || companyRankings[0],
    [selectedCompany]
  );
  const topCandidates = selectedPosting.ranking.slice(0, 3);

  return (
    <div className="space-y-6">
      {/* Company users see full rankings only for their own published job posting. */}
      <SectionHeader
        eyebrow="Company view"
        title={`${demoUsers.recruiter} candidate ranking workspace`}
        action={<button className="focus-ring inline-flex items-center gap-2 rounded-lg bg-slate-950 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"><Download size={16} /> Export shortlist</button>}
      >
        Full candidate rankings are shown only for the selected company posting. This simulates company-scoped visibility rather than platform-wide access.
      </SectionHeader>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-medium text-slate-500">Selected company</p>
          <p className="mt-1 text-2xl font-semibold text-slate-950">{selectedPosting.company}</p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-medium text-slate-500">Published role</p>
          <p className="mt-1 text-2xl font-semibold text-brand-700">{selectedPosting.role}</p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-medium text-slate-500">Visible candidates</p>
          <p className="mt-1 text-2xl font-semibold text-mint-700">{selectedPosting.ranking.length}</p>
        </div>
      </div>

      <div className="rounded-lg border border-mint-500/20 bg-mint-50 p-4">
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-mint-700"><ShieldCheck size={18} /> Company privacy scope</p>
        <p className="mt-2 text-sm leading-6 text-slate-700">The recruiter can inspect the full ranking for this company-owned job offer only. Other company postings are selectable here for demo purposes, but each view remains scoped to one published role.</p>
      </div>

      <section className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
        <label className="text-sm font-semibold text-slate-700">Company-specific job posting</label>
        <select value={selectedCompany} onChange={(event) => setSelectedCompany(event.target.value)} className="focus-ring mt-3 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm md:max-w-md">
          {companyRankings.map((posting) => <option key={posting.company}>{posting.company}</option>)}
        </select>
        <div className="mt-4 flex flex-wrap gap-2">
          {selectedPosting.requirements.map((requirement) => (
            <span key={requirement} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">{requirement}</span>
          ))}
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
        <div className="rounded-lg border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 p-5">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-950"><UsersRound size={21} /> Full ranking for {selectedPosting.role}</h3>
            <p className="mt-1 text-sm text-slate-500">Company view: candidate IDs and Mario Rossi are visible for this owned job posting.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[840px] text-left text-sm">
              <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="px-5 py-3">Rank</th>
                  <th className="px-5 py-3">Candidate</th>
                  <th className="px-5 py-3">Match</th>
                  <th className="px-5 py-3">Strengths</th>
                  <th className="px-5 py-3">Skill gaps</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {selectedPosting.ranking.map((candidate) => (
                  <tr key={candidate.candidate} className="hover:bg-slate-50">
                    <td className="px-5 py-4 font-semibold text-slate-950">#{candidate.rank}</td>
                    <td className="px-5 py-4 font-semibold text-slate-950">{candidate.candidate}</td>
                    <td className="px-5 py-4 font-semibold text-brand-700">{candidate.match}%</td>
                    <td className="px-5 py-4 text-slate-600">{candidate.strengths.join(', ')}</td>
                    <td className="px-5 py-4 text-slate-600">{candidate.gaps.join(', ')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-950"><BriefcaseBusiness size={20} /> Shortlist cards</h3>
            <div className="mt-5 space-y-4">
              {topCandidates.map((candidate) => (
                <div key={candidate.candidate} className="rounded-lg border border-slate-100 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-semibold text-slate-950">#{candidate.rank} {candidate.candidate}</p>
                    <span className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700">{candidate.match}%</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">Strengths: {candidate.strengths.join(', ')}</p>
                  <p className="mt-1 text-sm text-slate-500">Gaps: {candidate.gaps.join(', ')}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-950">Match distribution</h3>
            <div className="mt-5 space-y-4">
              {topCandidates.map((candidate) => <ProgressBar key={candidate.candidate} value={candidate.match} label={candidate.candidate} tone={candidate.rank === 1 ? 'mint' : 'brand'} />)}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
