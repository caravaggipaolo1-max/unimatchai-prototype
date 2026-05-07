import { Filter, Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import JobCard from '../components/JobCard.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { jobs } from '../data/mockData.js';

export default function JobMatchingPage({ setCurrentPage }) {
  const [query, setQuery] = useState('');
  const [type, setType] = useState('All');
  const filteredJobs = useMemo(() => jobs.filter((job) => {
    const matchesQuery = `${job.title} ${job.company} ${job.tags.join(' ')}`.toLowerCase().includes(query.toLowerCase());
    const matchesType = type === 'All' || job.type === type;
    return matchesQuery && matchesType;
  }), [query, type]);

  return (
    <div>
      {/* MVP flow: users can search, filter, and inspect explainable AI match reasons. */}
      <SectionHeader
        eyebrow="Job matching"
        title="Mario Rossi AI-ranked opportunities"
        action={<button onClick={() => setCurrentPage('quiz')} className="focus-ring rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700">Refine with quiz</button>}
      >
        Explore Mario Rossi matched offers with personal match percentages and personal rank labels only. Other candidate rankings remain hidden in the student view.
      </SectionHeader>
      <div className="mb-6 grid gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm md:grid-cols-[1fr_220px]">
        <label className="flex items-center gap-3 rounded-lg border border-slate-200 px-3 py-2">
          <Search size={18} className="text-slate-400" />
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search roles, companies, or skills" className="w-full bg-transparent text-sm outline-none" />
        </label>
        <label className="flex items-center gap-3 rounded-lg border border-slate-200 px-3 py-2">
          <Filter size={18} className="text-slate-400" />
          <select value={type} onChange={(event) => setType(event.target.value)} className="w-full bg-transparent text-sm outline-none">
            {['All', 'Hybrid', 'Remote', 'On-site'].map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
      </div>
      <div className="grid gap-4">{filteredJobs.map((job) => <JobCard key={job.id} job={job} />)}</div>
    </div>
  );
}
