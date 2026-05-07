import { CheckCircle2, FileUp, WandSparkles } from 'lucide-react';
import { useState } from 'react';
import SectionHeader from '../components/SectionHeader.jsx';
import { cvSuggestions } from '../data/mockData.js';

export default function CVImprovementPage() {
  const [uploaded, setUploaded] = useState(false);
  return (
    <div className="space-y-6">
      {/* MVP flow: simulate a CV upload, then show believable AI review outputs. */}
      <SectionHeader eyebrow="CV improvement" title="Mario Rossi AI-guided CV review">The upload and analysis flow is mocked, but the recommendations reflect the type of feedback a real AI service would generate.</SectionHeader>
      <section className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-lg border border-dashed border-brand-200 bg-white p-8 text-center shadow-sm">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-lg bg-brand-50 text-brand-700"><FileUp size={26} /></div>
          <h3 className="mt-5 text-lg font-semibold text-slate-950">Upload Mario Rossi CV</h3>
          <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-600">Mock upload area for PDF or DOCX files. This POC only changes the UI state; no file is stored or processed.</p>
          <button onClick={() => setUploaded(true)} className="focus-ring mt-6 rounded-lg bg-brand-600 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-700">{uploaded ? 'CV uploaded for demo' : 'Select mock CV'}</button>
          {uploaded && <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-mint-700"><CheckCircle2 size={17} /> mario-rossi-cv.pdf ready for analysis</p>}
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-slate-950">AI suggestions panel</h3>
            <WandSparkles className="text-brand-600" size={22} />
          </div>
          <div className="mt-5 space-y-3">
            {cvSuggestions.map((suggestion) => (
              <div key={suggestion.title} className="rounded-lg bg-slate-50 p-4">
                <p className="font-semibold text-slate-950">{suggestion.title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{suggestion.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-950">Before</h3>
          <p className="mt-4 rounded-lg bg-slate-50 p-4 text-sm leading-7 text-slate-600">Completed a market segmentation project for a university course. Analyzed consumer behavior and presented recommendations to the class.</p>
        </div>
        <div className="rounded-lg border border-mint-500/20 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-950">After</h3>
          <p className="mt-4 rounded-lg bg-mint-50 p-4 text-sm leading-7 text-slate-700">Mario Rossi completed a market segmentation project for a simulated consumer brand, identifying three priority customer segments and translating insights into positioning, channel, and pricing recommendations.</p>
        </div>
      </section>
      <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-slate-950">Job-specific recommendations</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {['Marketing Analyst Intern', 'Junior Strategy Intern', 'Market Intelligence Intern'].map((role) => (
            <div key={role} className="rounded-lg border border-slate-100 p-4">
              <p className="font-semibold text-slate-900">{role}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">Add a tailored summary, emphasize matching keywords, and reorder projects by relevance to this role.</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
