export default function BarChart({ data }) {
  return (
    // Lightweight bar chart for demo analytics without adding a charting dependency.
    <div className="space-y-4">
      {data.map((item) => (
        <div key={item.skill}>
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="font-medium text-slate-700">{item.skill}</span>
            <span className="font-semibold text-slate-950">{item.value || item.gap}%</span>
          </div>
          <div className="h-3 overflow-hidden rounded-full bg-slate-100">
            <div className="h-full rounded-full bg-gradient-to-r from-brand-600 to-mint-500" style={{ width: `${item.value || item.gap}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}
