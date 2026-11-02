import React, { useState } from 'react';
import { 
  X, 
  Sun, 
  Moon, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  Play, 
  Pause, 
  Clock, 
  Share2, 
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { DailySummary, Language } from '../types';
import { DAILY_SUMMARIES } from '../data/newsData';
import { UI_TEXT } from '../data/translations';

interface DailyBriefingModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  onPlaySpeech: (text: string, id: string) => void;
  onStopSpeech: () => void;
  activeSpeechId: string | null;
}

export const DailyBriefingModal: React.FC<DailyBriefingModalProps> = ({
  isOpen,
  onClose,
  language,
  onPlaySpeech,
  onStopSpeech,
  activeSpeechId,
}) => {
  const [selectedEdition, setSelectedEdition] = useState<'morning' | 'evening'>('morning');

  if (!isOpen) return null;

  const currentSummary = DAILY_SUMMARIES.find(s => s.edition === selectedEdition) || DAILY_SUMMARIES[0];
  const headline = currentSummary.headline[language] || currentSummary.headline.en;
  const script = currentSummary.audioScript[language] || currentSummary.audioScript.en;
  const points = currentSummary.points[language] || currentSummary.points.en || [];

  const isPlaying = activeSpeechId === `summary-${currentSummary.id}`;

  const toggleSpeech = () => {
    if (isPlaying) {
      onStopSpeech();
    } else {
      onPlaySpeech(script, `summary-${currentSummary.id}`);
    }
  };

  const titles = {
    morning: UI_TEXT.morningBriefingTitle[language],
    evening: UI_TEXT.eveningBriefingTitle[language],
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 md:p-6 animate-fade-in">
      <div className="relative w-full max-w-2xl rounded-3xl bg-white dark:bg-slate-950 border border-sky-100 dark:border-sky-950 shadow-2xl overflow-hidden flex flex-col">
        
        {/* Header with edition switcher */}
        <div className="bg-gradient-to-r from-sky-600 via-sky-700 to-slate-900 p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 rounded-full p-1.5 text-white/80 hover:text-white hover:bg-white/10 transition"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-200">
            <Sparkles className="h-4 w-4" />
            <span>Ad-Free 60-Second Daily Summary</span>
          </div>

          <h2 className="text-xl md:text-2xl font-bold text-white mt-1">
            {titles[selectedEdition]}
          </h2>

          <p className="text-xs text-sky-100/80 mt-1">
            {currentSummary.date} • Curated for Dooars & North Bengal
          </p>

          {/* Morning vs Evening switcher */}
          <div className="flex items-center gap-2 mt-5 bg-black/25 p-1 rounded-xl max-w-xs">
            <button
              onClick={() => setSelectedEdition('morning')}
              className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg text-xs font-semibold transition ${
                selectedEdition === 'morning'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-sky-100 hover:text-white'
              }`}
            >
              <Sun className="h-3.5 w-3.5 text-amber-500" />
              Morning Edition
            </button>
            <button
              onClick={() => setSelectedEdition('evening')}
              className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg text-xs font-semibold transition ${
                selectedEdition === 'evening'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-sky-100 hover:text-white'
              }`}
            >
              <Moon className="h-3.5 w-3.5 text-indigo-400" />
              Evening Digest
            </button>
          </div>
        </div>

        {/* Audio Player Card */}
        <div className="p-6 bg-sky-50/50 dark:bg-slate-900/40 border-b border-sky-100 dark:border-slate-800">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                onClick={toggleSpeech}
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-600 hover:bg-sky-500 active:scale-95 text-white shadow-md shadow-sky-600/30 transition cursor-pointer"
              >
                {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6 ml-0.5" />}
              </button>
              <div>
                <p className="font-bold text-slate-900 dark:text-white text-sm">
                  {isPlaying ? 'Playing Audio Briefing...' : 'Listen to 60-Second Audio Briefing'}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-0.5">
                  <Clock className="h-3 w-3 text-sky-500" />
                  Duration: {currentSummary.audioDuration} • Synthesized Local Narration
                </p>
              </div>
            </div>

            {isPlaying && (
              <div className="flex items-center gap-1">
                <span className="h-4 w-1 bg-sky-500 animate-pulse rounded-full" />
                <span className="h-6 w-1 bg-sky-600 animate-pulse rounded-full delay-75" />
                <span className="h-3 w-1 bg-sky-400 animate-pulse rounded-full delay-150" />
              </div>
            )}
          </div>
        </div>

        {/* 3 Key Takeaways */}
        <div className="p-6 space-y-5 overflow-y-auto">
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              {headline}
            </h3>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-800 dark:text-sky-300 flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-sky-600" />
              Essential Points for Today
            </h4>
            
            <div className="space-y-2.5">
              {points.map((pt, i) => (
                <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 text-xs font-bold">
                    {i + 1}
                  </span>
                  <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {pt}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Full script text toggle / preview */}
          <div className="p-4 rounded-xl bg-slate-100/60 dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            <span className="font-semibold text-slate-800 dark:text-slate-200 block mb-1">
              Audio Transcript:
            </span>
            &ldquo;{script}&rdquo;
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <ShieldCheck className="h-4 w-4 text-sky-600" />
            <span>Ad-free, calm summary delivered twice daily</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
