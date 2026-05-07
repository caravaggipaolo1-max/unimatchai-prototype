import { BarChart3, BriefcaseBusiness, FileText, GraduationCap, Home, LayoutDashboard, LockKeyhole, MessageSquareText, School, ShieldCheck, SlidersHorizontal, Users } from 'lucide-react';

const navItems = [
  { id: 'landing', label: 'Home', icon: Home, scope: 'POC' },
  { id: 'student', label: 'Student dashboard', icon: LayoutDashboard, scope: 'MVP' },
  { id: 'jobs', label: 'Job matching', icon: BriefcaseBusiness, scope: 'MVP' },
  { id: 'quiz', label: 'Preferences quiz', icon: SlidersHorizontal, scope: 'MVP' },
  { id: 'cv', label: 'CV improvement', icon: FileText, scope: 'MVP' },
  { id: 'interview', label: 'Mock interview', icon: MessageSquareText, scope: 'MVP' },
  { id: 'hr', label: 'HR shortlist', icon: Users, scope: 'MVP' },
  { id: 'university', label: 'University admin', icon: School, scope: 'Sprint 4' },
  { id: 'passport', label: 'Career passport', icon: ShieldCheck, scope: 'POC' },
  { id: 'premium', label: 'Future premium', icon: LockKeyhole, scope: 'Future' }
];

export default function AppShell({ currentPage, setCurrentPage, children }) {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* AppShell owns the global navigation so each page can stay simple and focused. */}
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <button onClick={() => setCurrentPage('landing')} className="focus-ring flex items-center gap-3 rounded-lg">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-600 text-white">
              <GraduationCap size={22} />
            </div>
            <div className="text-left">
              <p className="text-lg font-semibold leading-5 text-slate-950">UniMatchAI</p>
              <p className="text-xs font-medium text-slate-500">University-to-work intelligence</p>
            </div>
          </button>
          <div className="hidden items-center gap-2 md:flex">
            <button onClick={() => setCurrentPage('student')} className="focus-ring rounded-lg px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100">Student</button>
            <button onClick={() => setCurrentPage('hr')} className="focus-ring rounded-lg px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100">Company</button>
            <button onClick={() => setCurrentPage('university')} className="focus-ring rounded-lg px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100">University</button>
            <button onClick={() => setCurrentPage('passport')} className="focus-ring rounded-lg bg-slate-950 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">Career Passport</button>
          </div>
        </div>
      </header>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[260px_minmax(0,1fr)] lg:px-8">
        {currentPage !== 'landing' && (
          <aside className="lg:sticky lg:top-24 lg:h-[calc(100vh-7rem)]">
            <nav className="flex gap-2 overflow-x-auto rounded-lg border border-slate-200 bg-white p-2 shadow-sm lg:flex-col lg:overflow-visible">
              {navItems.slice(1).map((item) => {
                const Icon = item.icon;
                const active = currentPage === item.id;
                return (
                  <button key={item.id} onClick={() => setCurrentPage(item.id)} className={`focus-ring flex min-w-max items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold transition ${active ? 'bg-brand-50 text-brand-700' : 'text-slate-600 hover:bg-slate-50'}`}>
                    <Icon size={18} />
                    <span className="flex-1 text-left">{item.label}</span>
                    <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${item.scope === 'Future' ? 'bg-amber-50 text-amber-500' : 'bg-slate-100 text-slate-500'}`}>{item.scope}</span>
                  </button>
                );
              })}
              <div className="hidden border-t border-slate-200 pt-3 lg:block">
                <div className="rounded-lg bg-slate-950 p-4 text-white">
                  <BarChart3 size={20} />
                  <p className="mt-3 text-sm font-semibold">Demo mode</p>
                  <p className="mt-1 text-xs leading-5 text-slate-300">All AI scores, rankings, and exports are simulated for presentation.</p>
                </div>
              </div>
            </nav>
          </aside>
        )}
        <main className={currentPage === 'landing' ? 'lg:col-span-2' : ''}>{children}</main>
      </div>
    </div>
  );
}
