import { Network } from 'lucide-react';

export default function BrandMark({ compact = false, inverted = false }) {
  return (
    <div className="flex items-center gap-3">
      <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${inverted ? 'bg-white text-brand-600' : 'bg-brand-600 text-white'} shadow-sm`}>
        <Network size={22} />
      </div>
      {!compact && (
        <div>
          <p className={`text-xl font-semibold tracking-tight ${inverted ? 'text-white' : 'text-slate-950'}`}>
            UniMatch<span className={inverted ? 'text-blue-200' : 'text-brand-600'}>AI</span>
          </p>
          <p className={`text-xs font-medium ${inverted ? 'text-blue-100' : 'text-slate-500'}`}>Intelligent career matching</p>
        </div>
      )}
    </div>
  );
}
