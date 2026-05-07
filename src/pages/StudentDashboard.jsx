import { Award, BookOpenCheck, BriefcaseBusiness, CalendarCheck, FileText, TrendingUp } from 'lucide-react';
import BarChart from '../components/BarChart.jsx';
import JobCard from '../components/JobCard.jsx';
import ProgressBar from '../components/ProgressBar.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import StatCard from '../components/StatCard.jsx';
import { cvSuggestions, jobs, skillGaps, studentProfile } from '../data/mockData.js';

export default function StudentDashboard({ setCurrentPage }) {
  return (
    <div className="space-y-8">
      {/* StudentDashboard collects the MVP student workflows into a single demo home. */}
      <SectionHeader eyebrow="Student dashboard" title={`Welcome back, ${studentProfile.name}`}>Your profile, readiness score, suggested job matches, and AI guidance are updated from simulated academic and career data.</SectionHeader>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={Award} label="Career readiness" value={`${studentProfile.readiness}%`} detail="Interview-ready for analyst roles" tone="mint" />
        <StatCard icon={BriefcaseBusiness} label="Top match" value="95%" detail="Marketing Analyst Intern at BrandWave Srl" />
        <StatCard icon={FileText} label="CV priorities" value="3" detail="High-impact improvements detected" tone="amber" />
        <StatCard icon={CalendarCheck} label="Next action" value="2 mocks" detail="Recommended before applying" />
      </div>
      <section className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-950">Mario Rossi profile summary</h3>
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
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-slate-950">Skill gap analysis</h3>
            <BookOpenCheck className="text-brand-600" size={22} />
          </div>
          <BarChart data={skillGaps} />
          <div className="mt-5 space-y-3">
            {skillGaps.slice(0, 2).map((gap) => (
              <div key={gap.skill} className="rounded-lg bg-slate-50 p-3 text-sm text-slate-600"><span className="font-semibold text-slate-900">{gap.skill}:</span> {gap.recommendation}</div>
            ))}
          </div>
        </div>
      </section>
      <section className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <div>
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-slate-950">Mario Rossi AI job matches</h3>
              <p className="mt-1 text-sm text-slate-500">Personal view only: no full candidate leaderboard or other student details are shown.</p>
            </div>
            <button onClick={() => setCurrentPage('jobs')} className="focus-ring rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">View all</button>
          </div>
          <div className="grid gap-4">{jobs.map((job) => <JobCard key={job.id} job={job} compact />)}</div>
        </div>
        <div className="space-y-6">
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-950">CV improvement suggestions</h3>
            <div className="mt-4 space-y-3">
              {cvSuggestions.map((suggestion) => (
                <div key={suggestion.title} className="rounded-lg border border-slate-100 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-semibold text-slate-900">{suggestion.title}</p>
                    <span className="rounded-full bg-amber-50 px-2 py-1 text-xs font-semibold text-amber-500">{suggestion.impact}</span>
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
                <h3 className="font-semibold text-brand-900">Mario Rossi interview preparation</h3>
                <p className="mt-2 text-sm leading-6 text-brand-900/75">Recommended next: complete one marketing mock interview and one consulting case to raise readiness above 88%.</p>
                <button onClick={() => setCurrentPage('interview')} className="focus-ring mt-4 rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700">Start practice</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
