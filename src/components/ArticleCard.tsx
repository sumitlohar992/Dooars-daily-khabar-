import React, { useState } from 'react';
import { 
  Download, 
  Check, 
  Clock, 
  Volume2, 
  VolumeX, 
  MapPin, 
  Sparkles, 
  Share2, 
  ShieldCheck,
  ChevronRight,
  Eye
} from 'lucide-react';
import { Article, Language } from '../types';
import { CATEGORY_LABELS, LOCATION_LABELS, UI_TEXT } from '../data/translations';

interface ArticleCardProps {
  article: Article;
  language: Language;
  isDownloaded: boolean;
  onDownloadToggle: (article: Article) => void;
  onSelect: (article: Article) => void;
  activeSpeechId: string | null;
  onAudioToggle: (article: Article) => void;
  bionicMode: boolean;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  language,
  isDownloaded,
  onDownloadToggle,
  onSelect,
  activeSpeechId,
  onAudioToggle,
  bionicMode,
}) => {
  const [downloading, setDownloading] = useState(false);
  const [copied, setCopied] = useState(false);

  const title = article.title[language] || article.title.en;
  const summary = article.summary[language] || article.summary.en;
  const bullets = article.bullets[language] || article.bullets.en;
  const categoryLabel = CATEGORY_LABELS[article.category]?.[language] || article.category;
  const locationLabel = LOCATION_LABELS[article.location]?.[language] || article.location;

  const isPlayingAudio = activeSpeechId === article.id;

  const handleDownload = (e: React.MouseEvent) => {
    e.stopPropagation();
    setDownloading(true);
    setTimeout(() => {
      onDownloadToggle(article);
      setDownloading(false);
    }, 450);
  };

  const handleShare = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Dooars Khabar: ${title}`,
          text: summary,
          url: window.location.href,
        });
      } catch {
        // Fallback to copy
      }
    } else {
      navigator.clipboard?.writeText(`${title} - Dooars Khabar: ${window.location.href}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Render bionic reading preview
  const renderBionicText = (text: string) => {
    if (!bionicMode) return text;
    const words = text.split(' ');
    return words.map((w, idx) => {
      const mid = Math.ceil(w.length * 0.45);
      const lead = w.slice(0, mid);
      const rest = w.slice(mid);
      return (
        <span key={idx}>
          <span className="font-bold text-sky-800 dark:text-sky-300">{lead}</span>
          <span>{rest}</span>{' '}
        </span>
      );
    });
  };

  return (
    <article 
      onClick={() => onSelect(article)}
      className="group relative rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 shadow-sm hover:shadow-md hover:border-sky-300 dark:hover:border-sky-800/60 transition-all duration-200 overflow-hidden cursor-pointer flex flex-col justify-between"
    >
      <div>
        {/* Top bar with location, category & breaking badge */}
        <div className="flex items-center justify-between px-5 pt-4 pb-2 border-b border-slate-50 dark:border-slate-800/40">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded-full bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-200/50 dark:border-sky-900">
              {categoryLabel}
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-500 dark:text-slate-400">
              <MapPin className="h-3 w-3 text-sky-500" />
              {locationLabel}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {article.isBreaking && (
              <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-amber-500 text-white animate-pulse">
                Breaking
              </span>
            )}
            <span className="text-[11px] text-slate-400 dark:text-slate-500 flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {article.readTimeMin} {UI_TEXT.readTime[language]}
            </span>
          </div>
        </div>

        {/* Hero image preview if present */}
        {article.media && article.media[0] && (
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
            <img 
              src={article.media[0].url} 
              alt={title} 
              loading="lazy"
              className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
            />
            {article.media[0].type === 'video' && (
              <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/75 text-[10px] font-semibold text-white backdrop-blur-sm">
                Video Clip ({article.media[0].duration})
              </div>
            )}
            {isDownloaded && (
              <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-600/90 text-white text-[10px] font-semibold backdrop-blur-sm shadow">
                <Check className="h-3 w-3" />
                Saved Offline
              </div>
            )}
          </div>
        )}

        {/* Content body */}
        <div className="p-5">
          <h2 className="text-lg md:text-xl font-bold tracking-tight text-slate-900 dark:text-white leading-snug group-hover:text-sky-700 dark:group-hover:text-sky-300 transition-colors">
            {title}
          </h2>

          <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            {renderBionicText(summary)}
          </p>

          {/* Minimal 3-bullet takeaway preview */}
          {bullets && bullets.length > 0 && (
            <div className="mt-3.5 space-y-1.5 p-3 rounded-xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/60">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-sky-800 dark:text-sky-300 flex items-center gap-1">
                <Sparkles className="h-3 w-3" />
                {UI_TEXT.quickSummary[language]}
              </div>
              <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-300">
                {bullets.slice(0, 2).map((pt, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-500 mt-1.5 shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Footer action toolbar: Audio listen, Download offline, Share, Read button */}
      <div className="px-5 py-3 bg-slate-50/50 dark:bg-slate-800/20 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          {/* Audio read-aloud button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAudioToggle(article);
            }}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition cursor-pointer ${
              isPlayingAudio 
                ? 'bg-sky-600 text-white shadow-sm' 
                : 'text-slate-600 dark:text-slate-300 hover:bg-sky-50 dark:hover:bg-slate-800 hover:text-sky-600'
            }`}
            title={isPlayingAudio ? 'Stop reading' : 'Listen to story'}
          >
            {isPlayingAudio ? (
              <>
                <VolumeX className="h-3.5 w-3.5 animate-pulse" />
                <span>{UI_TEXT.stopListening[language]}</span>
              </>
            ) : (
              <>
                <Volume2 className="h-3.5 w-3.5 text-sky-600" />
                <span>{UI_TEXT.listenArticle[language]}</span>
              </>
            )}
          </button>

          {/* Download for offline toggle */}
          <button
            onClick={handleDownload}
            disabled={downloading}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition cursor-pointer ${
              isDownloaded 
                ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800' 
                : 'text-slate-600 dark:text-slate-300 hover:bg-sky-50 dark:hover:bg-slate-800 hover:text-sky-600'
            }`}
            title={isDownloaded ? UI_TEXT.removeOffline[language] : UI_TEXT.downloadOffline[language]}
          >
            {downloading ? (
              <span className="h-3.5 w-3.5 border-2 border-sky-600 border-t-transparent rounded-full animate-spin" />
            ) : isDownloaded ? (
              <>
                <Check className="h-3.5 w-3.5 text-emerald-600" />
                <span>{UI_TEXT.downloaded[language]}</span>
              </>
            ) : (
              <>
                <Download className="h-3.5 w-3.5 text-sky-600" />
                <span>{UI_TEXT.downloadOffline[language]}</span>
              </>
            )}
          </button>
        </div>

        <div className="flex items-center gap-2">
          {/* Share button */}
          <button
            onClick={handleShare}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
            title="Share story"
          >
            <Share2 className="h-3.5 w-3.5" />
          </button>

          {/* Full story chevron */}
          <span className="inline-flex items-center text-xs font-semibold text-sky-600 dark:text-sky-400 group-hover:translate-x-0.5 transition-transform">
            <ChevronRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </article>
  );
};
