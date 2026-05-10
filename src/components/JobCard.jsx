import { Bookmark, BriefcaseBusiness, MapPin } from 'lucide-react';
import ProgressBar from './ProgressBar.jsx';

export default function JobCard({ job, compact = false }) {
  return (
    // JobCard is reused on the dashboard and matching page to keep the MVP flow consistent.
    <article className="surface-card p-5 transition hover:-translate-y-0.5 hover:shadow-soft">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-lg font-semibold text-slate-950">{job.title}</h3>
            <span className="badge-free">{job.status}</span>
          </div>
          <div className="mt-2 flex flex-wrap gap-3 text-sm text-slate-500">
            <span className="inline-flex items-center gap-1.5"><BriefcaseBusiness size={15} />{job.company}</span>
            <span className="inline-flex items-center gap-1.5"><MapPin size={15} />{job.location}</span>
            <span>{job.type}</span>
            <span>{job.salary}</span>
          </div>
        </div>
        <div className="min-w-28 rounded-xl bg-blue-50 p-3 text-center">
          <p className="text-2xl font-semibold text-brand-700">{job.match}%</p>
          <p className="text-xs font-medium text-slate-500">AI match</p>
        </div>
      </div>
      {job.rankLabel && (
        <div className="mt-4 inline-flex rounded-full bg-brand-900 px-3 py-1 text-xs font-semibold text-white">
          {job.rankLabel}
        </div>
      )}
      <div className="mt-4"><ProgressBar value={job.match} /></div>
      {!compact && <p className="mt-4 text-sm leading-6 text-slate-600">{job.why}</p>}
      <div className="mt-4 flex flex-wrap gap-2">
        {job.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600">{tag}</span>
        ))}
      </div>
      {!compact && (
        <div className="mt-5 flex flex-wrap gap-3">
          <button className="focus-ring inline-flex items-center gap-2 rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-700">
            <Bookmark size={16} /> Save job
          </button>
          <button className="focus-ring rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">Apply later</button>
        </div>
      )}
    </article>
  );
}
