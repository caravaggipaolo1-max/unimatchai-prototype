import { Building2, CalendarDays, GraduationCap, School } from 'lucide-react';
import BarChart from '../components/BarChart.jsx';
import ProgressBar from '../components/ProgressBar.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import StatCard from '../components/StatCard.jsx';
import { universityMetrics } from '../data/mockData.js';

export default function UniversityAdminPage() {
  return (
    <div className="space-y-6">
      {/* Sprint 4 POC view: useful for the story, but secondary to the MVP workflows. */}
      <SectionHeader eyebrow="University admin" title={`${universityMetrics.admin} career service overview`}>Monitor cohort readiness, employer demand, and placement progress with simulated university analytics.</SectionHeader>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={GraduationCap} label="Active students" value={universityMetrics.activeStudents} detail="Final-year profiles in platform" />
        <StatCard icon={Building2} label="Partner companies" value={universityMetrics.partnerCompanies} detail="Recruiters using talent tools" tone="mint" />
        <StatCard icon={CalendarDays} label="Interviews booked" value={universityMetrics.interviewsBooked} detail="Across this hiring cycle" tone="amber" />
        <StatCard icon={School} label="Cohort readiness" value={`${universityMetrics.cohortReadiness}%`} detail="Average employability score" />
      </div>
      <section className="grid gap-6 xl:grid-cols-2">
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"><h3 className="text-lg font-semibold text-slate-950">Placement pipeline</h3><div className="mt-5 space-y-5">{universityMetrics.placementPipeline.map((item) => <ProgressBar key={item.label} value={item.value} label={item.label} />)}</div></div>
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"><h3 className="text-lg font-semibold text-slate-950">Employer skill demand</h3><div className="mt-5"><BarChart data={universityMetrics.employerDemand} /></div></div>
      </section>
      <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-slate-950">Career service actions</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {['Invite students below 65% readiness to CV clinics', 'Create market research and stakeholder reporting workshops', 'Share anonymized talent pool summary with partner companies'].map((action) => (
            <div key={action} className="rounded-lg bg-slate-50 p-4 text-sm font-medium leading-6 text-slate-700">{action}</div>
          ))}
        </div>
      </section>
    </div>
  );
}
