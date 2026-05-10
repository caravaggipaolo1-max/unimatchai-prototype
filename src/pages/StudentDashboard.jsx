import { Award, BookOpenCheck, BriefcaseBusiness, CalendarCheck, FileText, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import BarChart from '../components/BarChart.jsx';
import JobCard from '../components/JobCard.jsx';
import ProgressBar from '../components/ProgressBar.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import StatCard from '../components/StatCard.jsx';
import { accessPlans, cvSuggestions, jobs, learningProgress, learningResources, premiumStudentSimulations, studentProfile, targetRoleOptions } from '../data/mockData.js';

export default function StudentDashboard({ setCurrentPage }) {
  const [targetRole, setTargetRole] = useState(targetRoleOptions[0].role);
  const [resourceType, setResourceType] = useState('All');
  const activeRole = targetRoleOptions.find((item) => item.role === targetRole) || targetRoleOptions[0];
  const filteredResources = learningResources.filter((resource) => resourceType === 'All' || resource.type === resourceType);

  return (
    <div className="space-y-8">
      {/* StudentDashboard collects the MVP student workflows into a single demo home. */}
      <SectionHeader eyebrow="Student dashboard" title={`Welcome back, ${studentProfile.name}`}>Your profile, readiness score, suggested job matches, and AI guidance are updated from simulated academic and career data.</SectionHeader>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={Award} label="Career readiness" value={`${studentProfile.readiness}%`} detail="Interview-ready for analyst roles" tone="mint" />
        <StatCard icon={BriefcaseBusiness} label="Top match" value="95%" detail="Marketing Analyst Intern at BrandWave Srl" />
        <StatCard icon={FileText} label="CV priorities" value="3" detail="High-impact improvements detected" tone="brand" />
        <StatCard icon={CalendarCheck} label="Next action" value="2 mocks" detail="Recommended before applying" />
      </div>
      <section className="surface-card p-5">
        <div className="mb-4 flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold text-slate-950">Free student tools</h3>
          <span className="rounded-full bg-mint-50 px-3 py-1 text-xs font-semibold text-mint-700">FREE</span>
        </div>
        <div className="grid gap-2 md:grid-cols-3">
          {accessPlans.studentFree.map((item) => <p key={item} className="rounded-lg bg-slate-50 p-3 text-sm font-medium text-slate-700">{item}</p>)}
        </div>
      </section>
      <section className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="surface-card p-6">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h3 className="text-lg font-semibold text-slate-950">Current User profile summary</h3>
            <span className="rounded-full bg-mint-50 px-3 py-1 text-xs font-semibold text-mint-700">FREE</span>
          </div>
          <dl className="mt-5 grid gap-4 text-sm">
            {[['Degree', studentProfile.degree], ['University', studentProfile.university], ['Faculty', studentProfile.faculty], ['Profile type', studentProfile.profileType], ['Graduation', studentProfile.graduation], ['GPA', studentProfile.gpa], ['Location', studentProfile.location]].map(([label, value]) => (
              <div key={label} className="flex justify-between gap-4 border-b border-slate-100 pb-3">
                <dt className="font-medium text-slate-500">{label}</dt>
                <dd className="text-right font-semibold text-slate-900">{value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-5"><ProgressBar value={studentProfile.readiness} label="Career readiness score" tone="mint" /></div>
        </div>
        <div className="surface-card p-6">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-slate-950">Target role skill-gap analysis</h3>
              <p className="mt-1 text-sm text-slate-500">FREE: updates automatically when the target role changes.</p>
            </div>
            <BookOpenCheck className="text-brand-600" size={22} />
          </div>
          <label className="text-sm font-semibold text-slate-700">Target role</label>
          <select value={targetRole} onChange={(event) => setTargetRole(event.target.value)} className="focus-ring mt-2 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm">
            {targetRoleOptions.map((item) => <option key={item.role}>{item.role}</option>)}
          </select>
          <div className="mt-5">
            <BarChart data={activeRole.missingSkills.map((item) => ({ skill: item.skill, gap: item.gap }))} />
          </div>
          <div className="mt-5 space-y-3">
            {activeRole.missingSkills.map((gap) => (
              <div key={gap.skill} className="flex items-center justify-between gap-3 rounded-lg bg-slate-50 p-3 text-sm text-slate-600">
                <span><span className="font-semibold text-slate-900">#{gap.priority} {gap.skill}</span> missing skill</span>
                <span className="font-semibold text-brand-700">{gap.gap}% gap</span>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-lg bg-brand-50 p-4">
            <p className="text-sm font-semibold text-brand-900">Match score recalculation</p>
            <p className="mt-1 text-sm text-brand-900/75">Completing recommended learning can raise this role match to {activeRole.updatedMatch}% in demo mode.</p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1fr_0.75fr]">
        <div className="surface-card p-6">
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-slate-950">Learning resource recommendations</h3>
              <p className="mt-1 text-sm text-slate-500">FREE: recommended from the selected target role gaps.</p>
            </div>
            <select value={resourceType} onChange={(event) => setResourceType(event.target.value)} className="focus-ring rounded-lg border border-slate-200 px-3 py-2 text-sm">
              {['All', 'Course', 'Material', 'Practice'].map((type) => <option key={type}>{type}</option>)}
            </select>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {filteredResources.map((resource) => (
              <div key={resource.title} className="rounded-lg border border-slate-100 p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-semibold text-slate-950">{resource.title}</p>
                  <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-600">{resource.type}</span>
                </div>
                <p className="mt-2 text-sm text-slate-600">{resource.skill} • {resource.duration} • {resource.relevance} relevance</p>
              </div>
            ))}
          </div>
        </div>
        <div className="surface-card p-6">
          <h3 className="text-lg font-semibold text-slate-950">Progress tracking</h3>
          <p className="mt-1 text-sm text-slate-500">FREE: learning progress over time.</p>
          <div className="mt-5 space-y-4">
            {learningProgress.map((item) => <ProgressBar key={item.skill} value={item.value} label={item.skill} tone={item.value > 65 ? 'mint' : 'brand'} />)}
          </div>
        </div>
      </section>
      <section className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <div>
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-slate-950">Current User AI job matches</h3>
              <p className="mt-1 text-sm text-slate-500">Personal view only: no full candidate leaderboard or other student details are shown.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button onClick={() => setCurrentPage('quiz')} className="focus-ring rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700">Take quiz</button>
              <button onClick={() => setCurrentPage('jobs')} className="focus-ring rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">View all</button>
            </div>
          </div>
          <div className="grid gap-4">{jobs.map((job) => <JobCard key={job.id} job={job} compact />)}</div>
        </div>
        <div className="space-y-6">
          <div className="surface-card p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-950">CV improvement suggestions</h3>
              <span className="rounded-full bg-mint-50 px-3 py-1 text-xs font-semibold text-mint-700">FREE</span>
            </div>
            <div className="mt-4 space-y-3">
              {cvSuggestions.map((suggestion) => (
                <div key={suggestion.title} className="rounded-lg border border-slate-100 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-semibold text-slate-900">{suggestion.title}</p>
                    <span className="rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-brand-700">{suggestion.impact}</span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{suggestion.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-brand-100 bg-brand-50 p-6">
            <div className="flex items-start gap-3">
              <TrendingUp className="mt-1 text-brand-700" size={22} />
              <div>
                <h3 className="font-semibold text-brand-900">Current User interview preparation</h3>
                <p className="mt-2 text-sm leading-6 text-brand-900/75">Recommended next: complete one marketing mock interview and one consulting case to raise readiness above 88%.</p>
                <button onClick={() => setCurrentPage('interview')} className="focus-ring mt-4 rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700">Start practice</button>
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-blue-100 bg-blue-50 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-semibold text-slate-950">Student Premium upgrade</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">Unlock company-specific interview questions, business cases, AI feedback, and Career Passport sharing.</p>
              </div>
              <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-700">PREMIUM</span>
            </div>
            <button onClick={() => setCurrentPage('premium')} className="focus-ring mt-4 rounded-lg bg-brand-900 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700">View premium</button>
          </div>
          <div className="surface-card p-6">
            <h3 className="text-lg font-semibold text-slate-950">Premium preparation preview</h3>
            <div className="mt-4 space-y-3">
              {premiumStudentSimulations.map((item) => (
                <div key={item.title} className="rounded-lg border border-slate-100 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-semibold text-slate-900">{item.title}</p>
                    <span className="rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-brand-700">{item.status}</span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.type}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
