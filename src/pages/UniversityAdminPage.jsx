import { Building2, FileText, GraduationCap, MessageSquareText, School, Star, TrendingUp, Users } from 'lucide-react';
import BarChart from '../components/BarChart.jsx';
import ProgressBar from '../components/ProgressBar.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import StatCard from '../components/StatCard.jsx';
import { universityMetrics } from '../data/mockData.js';

export default function UniversityAdminPage() {
  return (
    <div className="space-y-6">
      {/* University users see aggregate platform analytics across students and companies. */}
      <SectionHeader eyebrow="University analytics" title={`${universityMetrics.admin} career service overview`}>
        Aggregated view across the UniMatchAI platform: student readiness, company activity, usage rates, and skill gaps without individual student rankings.
      </SectionHeader>

      <div className="rounded-lg border border-brand-100 bg-brand-50 p-4">
        <p className="text-sm font-semibold text-brand-700">University privacy scope</p>
        <p className="mt-2 text-sm leading-6 text-slate-700">This dashboard shows platform-wide statistics only. It does not expose company-specific leaderboards or individual student profile details.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={GraduationCap} label="Total active students" value={universityMetrics.totalActiveStudents} detail="Students using the platform" />
        <StatCard icon={FileText} label="CVs uploaded" value={universityMetrics.cvsUploaded} detail="CV improvement usage base" tone="mint" />
        <StatCard icon={MessageSquareText} label="Mock interviews" value={universityMetrics.mockInterviewsCompleted} detail="Completed practice sessions" tone="amber" />
        <StatCard icon={School} label="Avg readiness" value={`${universityMetrics.averageCareerReadiness}/100`} detail="Career readiness score" />
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={TrendingUp} label="Matches generated" value={universityMetrics.totalMatchesGenerated.toLocaleString()} detail="Across students and roles" />
        <StatCard icon={Users} label="Avg match score" value={`${universityMetrics.averageMatchScore}%`} detail="Across generated matches" tone="mint" />
        <StatCard icon={Building2} label="Partner companies" value={universityMetrics.activePartnerCompanies} detail="Active company accounts" />
        <StatCard icon={Building2} label="Published offers" value={universityMetrics.publishedJobOffers} detail="Open company postings" tone="amber" />
      </div>

      <section className="grid gap-6 xl:grid-cols-2">
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-950">Top career interests</h3>
          <div className="mt-5"><BarChart data={universityMetrics.topCareerInterests} /></div>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-950">Most common skill gaps</h3>
          <div className="mt-5"><BarChart data={universityMetrics.mostCommonSkillGaps} /></div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-950">Platform usage rates</h3>
          <div className="mt-5 space-y-5">
            <ProgressBar value={universityMetrics.cvImprovementUsageRate} label="CV improvement usage rate" tone="mint" />
            <ProgressBar value={universityMetrics.mockInterviewCompletionRate} label="Mock interview completion rate" />
            {universityMetrics.placementPipeline.map((item) => <ProgressBar key={item.label} value={item.value} label={item.label} />)}
          </div>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-950">Company and satisfaction analytics</h3>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-slate-50 p-4">
              <p className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700"><Star size={17} /> Student satisfaction</p>
              <p className="mt-2 text-3xl font-semibold text-slate-950">{universityMetrics.averageStudentSatisfaction}/5</p>
            </div>
            <div className="rounded-lg bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-700">NPS</p>
              <p className="mt-2 text-3xl font-semibold text-mint-700">+{universityMetrics.nps}</p>
            </div>
          </div>
          <div className="mt-5 grid gap-3">
            {universityMetrics.companyAnalytics.map((item) => (
              <div key={item.skill} className="flex items-center justify-between rounded-lg bg-slate-50 p-4 text-sm">
                <span className="font-medium text-slate-600">{item.skill}</span>
                <span className="font-semibold text-slate-950">{item.value}{item.skill.includes('score') ? '%' : ''}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
