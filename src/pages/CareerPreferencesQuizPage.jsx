import { ArrowLeft, ArrowRight, CheckCircle2, RotateCcw, ShieldCheck, SlidersHorizontal } from 'lucide-react';
import { useMemo, useState } from 'react';
import ProgressBar from '../components/ProgressBar.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { careerQuiz } from '../data/mockData.js';

export default function CareerPreferencesQuizPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState(careerQuiz.defaultAnswers);
  const [completed, setCompleted] = useState(false);
  const currentQuestion = careerQuiz.questions[step];
  const progress = Math.round(((step + 1) / careerQuiz.questions.length) * 100);
  const selectedAnswer = answers[currentQuestion.id];

  const answerSummary = useMemo(
    () => careerQuiz.questions.map((item) => ({ question: item.question, answer: answers[item.id] })),
    [answers]
  );

  function selectAnswer(option) {
    setAnswers((current) => ({ ...current, [currentQuestion.id]: option }));
  }

  function nextStep() {
    if (step === careerQuiz.questions.length - 1) {
      setCompleted(true);
      return;
    }
    setStep((current) => current + 1);
  }

  function retakeQuiz() {
    setStep(0);
    setAnswers(careerQuiz.defaultAnswers);
    setCompleted(false);
  }

  return (
    <div className="space-y-6">
      {/* Student-side quiz uses generic labels and never exposes other candidate identities. */}
      <SectionHeader eyebrow="Student preferences" title={careerQuiz.title}>
        {careerQuiz.subtitle}
      </SectionHeader>

      <div className="rounded-lg border border-mint-500/20 bg-mint-50 p-4">
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-mint-700"><ShieldCheck size={18} /> Privacy-safe personal view</p>
        <p className="mt-2 text-sm leading-6 text-slate-700">This quiz stores mock preferences for the Current User only. It does not show leaderboards, comparison tables, or other candidate identities.</p>
      </div>

      {!completed ? (
        <section className="grid gap-6 xl:grid-cols-[1fr_0.75fr]">
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-brand-700">Question {step + 1} of {careerQuiz.questions.length}</p>
                <h3 className="mt-1 text-xl font-semibold text-slate-950">{currentQuestion.question}</h3>
              </div>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">{careerQuiz.privacyLabel}</span>
            </div>
            <ProgressBar value={progress} label="Quiz progress" />
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {currentQuestion.options.map((option) => {
                const active = selectedAnswer === option;
                return (
                  <button
                    key={option}
                    onClick={() => selectAnswer(option)}
                    className={`focus-ring flex items-center justify-between rounded-lg border p-4 text-left text-sm font-semibold transition ${
                      active ? 'border-brand-600 bg-brand-50 text-brand-700' : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {option}
                    {active && <CheckCircle2 size={18} />}
                  </button>
                );
              })}
            </div>
            <div className="mt-6 flex flex-wrap justify-between gap-3">
              <button
                onClick={() => setStep((current) => Math.max(0, current - 1))}
                disabled={step === 0}
                className="focus-ring inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 disabled:cursor-not-allowed disabled:opacity-45"
              >
                <ArrowLeft size={16} /> Back
              </button>
              <button onClick={nextStep} className="focus-ring inline-flex items-center gap-2 rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700">
                {step === careerQuiz.questions.length - 1 ? 'Refine matches' : 'Next question'} <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <aside className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-700"><SlidersHorizontal size={21} /></div>
              <div>
                <h3 className="font-semibold text-slate-950">Current User preferences</h3>
                <p className="text-sm text-slate-500">Mock answers selected so far</p>
              </div>
            </div>
            <div className="mt-5 space-y-3">
              {answerSummary.slice(0, step + 1).map((item) => (
                <div key={item.question} className="rounded-lg bg-slate-50 p-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{item.question}</p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">{item.answer}</p>
                </div>
              ))}
            </div>
          </aside>
        </section>
      ) : (
        <section className="space-y-6">
          <div className="rounded-lg border border-mint-500/20 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="inline-flex items-center gap-2 text-sm font-semibold text-mint-700"><CheckCircle2 size={18} /> Preferences saved</p>
                <h3 className="mt-2 text-2xl font-semibold text-slate-950">Refined job matches for Current User</h3>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">Matching now combines CV signals with interests, role goals, mobility, travel openness, and preferred work model.</p>
              </div>
              <button onClick={retakeQuiz} className="focus-ring inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                <RotateCcw size={16} /> Retake quiz
              </button>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {careerQuiz.refinedMatches.map((match) => (
              <article key={match.role} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-950">{match.role}</h3>
                    <p className="mt-1 text-sm font-medium text-slate-500">{match.company}</p>
                  </div>
                  <span className="rounded-full bg-mint-50 px-3 py-1 text-sm font-semibold text-mint-700">Improved</span>
                </div>
                <div className="mt-5 rounded-lg bg-slate-50 p-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-slate-500">Before quiz</span>
                    <span className="font-semibold text-slate-900">{match.before}%</span>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-sm">
                    <span className="font-medium text-slate-500">After quiz</span>
                    <span className="text-xl font-semibold text-brand-700">{match.after}%</span>
                  </div>
                  <div className="mt-4"><ProgressBar value={match.after} /></div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {match.reasons.map((reason) => (
                    <span key={reason} className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600">{reason}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-950">Final preference summary</h3>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {answerSummary.map((item) => (
                <div key={item.question} className="rounded-lg bg-slate-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{item.question}</p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
