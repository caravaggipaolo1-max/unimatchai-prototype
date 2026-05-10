export default function SectionHeader({ eyebrow, title, children, action }) {
  return (
    // Shared page heading pattern for a presentation-ready academic/business interface.
    <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        {eyebrow && <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">{eyebrow}</p>}
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">{title}</h2>
        {children && <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">{children}</p>}
      </div>
      {action}
    </div>
  );
}
