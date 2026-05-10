import { MessageCircleQuestion, Mic, Sparkles } from 'lucide-react';
import { useMemo, useState } from 'react';
import ProgressBar from '../components/ProgressBar.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { interviewQuestions } from '../data/mockData.js';

export default function MockInterviewPage() {
  const [industry, setIndustry] = useState('Analytics');
  const questions = useMemo(() => interviewQuestions[industry], [industry]);
  return (
    <div className="space-y-6">
      {/* MVP flow: generated questions and feedback are mocked to demonstrate the UX. */}
      <SectionHeader eyebrow="Mock interview" title="Current User practice with simulated AI feedback">Select an interview track and review generated questions, scoring, and improvement tips.</SectionHeader>
      <div className="surface-card p-4">
        <label className="text-sm font-semibold text-slate-700">Industry focus</label>
        <div className="mt-3 flex flex-wrap gap-2">
          {Object.keys(interviewQuestions).map((item) => (
            <button key={item} onClick={() => setIndustry(item)} className={`focus-ring rounded-lg px-4 py-2 text-sm font-semibold ${industry === item ? 'bg-brand-600 text-white' : 'border border-slate-200 text-slate-700 hover:bg-slate-50'}`}>{item}</button>
          ))}
        </div>
      </div>
      <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="surface-card p-6">
          <div className="mb-5 flex items-center gap-3">
            <MessageCircleQuestion className="text-brand-600" size={24} />
            <h3 className="text-lg font-semibold text-slate-950">AI-generated questions</h3>
          </div>
          <div className="space-y-3">
            {questions.map((question, index) => (
              <div key={question} className="rounded-lg bg-slate-50 p-4">
                <p className="text-sm font-semibold text-brand-700">Question {index + 1}</p>
                <p className="mt-2 font-medium text-slate-900">{question}</p>
              </div>
            ))}
          </div>
          <button className="focus-ring mt-5 inline-flex items-center gap-2 rounded-lg bg-brand-900 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700"><Mic size={16} /> Start mock recording</button>
        </div>
        <div className="space-y-6">
          <div className="surface-card p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-950">Current User mock feedback</h3>
              <Sparkles className="text-brand-600" size={22} />
            </div>
            <div className="mt-5 space-y-4">
              <ProgressBar value={84} label="Readiness score" tone="mint" />
              <ProgressBar value={78} label="Structure" />
              <ProgressBar value={73} label="Business clarity" tone="brand" />
            </div>
          </div>
          <div className="surface-card p-6">
            <h3 className="text-lg font-semibold text-slate-950">Improvement tips</h3>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
              <li className="rounded-lg bg-slate-50 p-3">Use a clearer Situation, Action, Result structure for behavioral answers.</li>
              <li className="rounded-lg bg-slate-50 p-3">Add one business implication after each technical explanation.</li>
              <li className="rounded-lg bg-slate-50 p-3">Prepare one example about working with incomplete or messy data.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
