export default function StatCard({ icon: Icon, label, value, detail, tone = 'brand' }) {
  const toneMap = {
    brand: 'bg-brand-50 text-brand-700',
    mint: 'bg-mint-50 text-mint-700',
    amber: 'bg-amber-50 text-amber-500'
  };

  return (
    // StatCard keeps KPI tiles consistent across student, HR, and university views.
    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg ${toneMap[tone]}`}>
        <Icon size={21} />
      </div>
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <p className="mt-1 text-2xl font-semibold text-slate-950">{value}</p>
      <p className="mt-2 text-sm text-slate-500">{detail}</p>
    </div>
  );
}
