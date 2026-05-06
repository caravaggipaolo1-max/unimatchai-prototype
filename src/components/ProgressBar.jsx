export default function ProgressBar({ value, tone = 'brand', label }) {
  const colors = {
    brand: 'bg-brand-600',
    mint: 'bg-mint-500',
    amber: 'bg-amber-500'
  };

  return (
    // ProgressBar visualizes readiness, match quality, and skill strength throughout the POC.
    <div>
      {label && (
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="font-medium text-slate-700">{label}</span>
          <span className="font-semibold text-slate-900">{value}%</span>
        </div>
      )}
      <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">
        <div className={`h-full rounded-full ${colors[tone]}`} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}
