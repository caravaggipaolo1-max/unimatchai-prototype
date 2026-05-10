export default function StatCard({ icon: Icon, label, value, detail, tone = 'brand' }) {
  const toneMap = {
    brand: 'bg-brand-50 text-brand-700',
    mint: 'bg-mint-50 text-mint-700',
    amber: 'bg-blue-50 text-brand-700'
  };

  return (
    // StatCard keeps KPI tiles consistent across student, HR, and university views.
    <div className="surface-card p-5 transition hover:-translate-y-0.5 hover:shadow-soft">
      <div className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl ${toneMap[tone]}`}>
        <Icon size={21} />
      </div>
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</p>
      <p className="mt-1 text-2xl font-semibold tracking-tight text-slate-950">{value}</p>
      <p className="mt-2 text-sm text-slate-500">{detail}</p>
    </div>
  );
}
