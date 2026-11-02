import React, { useState } from 'react';
import { 
  X, 
  Download, 
  Check, 
  Volume2, 
  VolumeX, 
  Share2, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Type, 
  Eye, 
  Play, 
  Maximize2,
  Sparkles,
  BookOpen
} from 'lucide-react';
import { Article, Language, AppSettings } from '../types';
import { CATEGORY_LABELS, LOCATION_LABELS, UI_TEXT } from '../data/translations';

interface ArticleReaderModalProps {
  article: Article | null;
  onClose: () => void;
  language: Language;
  isDownloaded: boolean;
  onDownloadToggle: (article: Article) => void;
  isPlayingAudio: boolean;
  onAudioToggle: (article: Article) => void;
  settings: AppSettings;
  onUpdateSettings: (newSettings: Partial<AppSettings>) => void;
}

export const ArticleReaderModal: React.FC<ArticleReaderModalProps> = ({
  article,
  onClose,
  language,
  isDownloaded,
  onDownloadToggle,
  isPlayingAudio,
  onAudioToggle,
  settings,
  onUpdateSettings,
}) => {
  const [showTypographyControls, setShowTypographyControls] = useState(false);
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);

  if (!article) return null;

  const title = article.title[language] || article.title.en;
  const summary = article.summary[language] || article.summary.en;
  const paragraphs = article.content[language] || article.content.en || [];
  const bullets = article.bullets[language] || article.bullets.en || [];
  const categoryLabel = CATEGORY_LABELS[article.category]?.[language] || article.category;
  const locationLabel = LOCATION_LABELS[article.location]?.[language] || article.location;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Dooars Khabar: ${title}`,
          text: summary,
          url: window.location.href,
        });
      } catch {
        // Fallback
      }
    } else {
      navigator.clipboard?.writeText(`${title} - Dooars Khabar`);
    }
  };

  // Font size classes
  const fontSizes = {
    sm: 'text-sm leading-relaxed',
    base: 'text-base leading-relaxed',
    lg: 'text-lg leading-loose',
    xl: 'text-xl leading-loose',
  };

  const fontFamilyClass = settings.fontFamily === 'serif' ? 'font-serif' : 'font-sans';

  // Render bionic text if enabled
  const renderParagraph = (text: string) => {
    if (!settings.bionicReading) return text;
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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-0 md:p-6 animate-fade-in">
      <div className="relative w-full h-full md:h-auto md:max-h-[92vh] max-w-3xl rounded-none md:rounded-3xl bg-white dark:bg-slate-950 border-0 md:border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col overflow-hidden">
        
        {/* Sticky distraction-free top action bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-100 dark:border-slate-800/80">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-900">
              {categoryLabel}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 hidden sm:inline-flex items-center gap-1">
              <MapPin className="h-3 w-3 text-sky-500" />
              {locationLabel}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Audio read aloud */}
            <button
              onClick={() => onAudioToggle(article)}
              className={`p-2 rounded-xl transition cursor-pointer ${
                isPlayingAudio 
                  ? 'bg-sky-600 text-white shadow-sm' 
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
              title={isPlayingAudio ? 'Stop reading' : 'Listen aloud'}
            >
              {isPlayingAudio ? <VolumeX className="h-4 w-4 animate-pulse" /> : <Volume2 className="h-4 w-4" />}
            </button>

            {/* Offline download toggle */}
            <button
              onClick={() => onDownloadToggle(article)}
              className={`p-2 rounded-xl transition cursor-pointer ${
                isDownloaded 
                  ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800' 
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
              title={isDownloaded ? UI_TEXT.removeOffline[language] : UI_TEXT.downloadOffline[language]}
            >
              {isDownloaded ? <Check className="h-4 w-4 text-emerald-600" /> : <Download className="h-4 w-4" />}
            </button>

            {/* Typography / Reading controls toggle */}
            <button
              onClick={() => setShowTypographyControls(!showTypographyControls)}
              className={`p-2 rounded-xl transition cursor-pointer ${
                showTypographyControls 
                  ? 'bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300' 
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
              title="Reading controls"
            >
              <Type className="h-4 w-4" />
            </button>

            {/* Share */}
            <button
              onClick={handleShare}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
              title="Share story"
            >
              <Share2 className="h-4 w-4" />
            </button>

            {/* Close */}
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
              title="Close reader"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Dropdown reader typography controls */}
        {showTypographyControls && (
          <div className="bg-sky-50/70 dark:bg-slate-900 border-b border-sky-100 dark:border-slate-800 px-6 py-3.5 flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-700 dark:text-slate-300">Font Size:</span>
              {(['sm', 'base', 'lg', 'xl'] as const).map(size => (
                <button
                  key={size}
                  onClick={() => onUpdateSettings({ fontSize: size })}
                  className={`px-2.5 py-1 rounded-lg uppercase font-medium transition cursor-pointer ${
                    settings.fontSize === size 
                      ? 'bg-sky-600 text-white shadow-sm' 
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-sky-100'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="font-semibold text-slate-700 dark:text-slate-300">Style:</span>
                <button
                  onClick={() => onUpdateSettings({ fontFamily: 'serif' })}
                  className={`px-2.5 py-1 rounded-lg transition cursor-pointer font-serif ${
                    settings.fontFamily === 'serif' 
                      ? 'bg-sky-600 text-white' 
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  Serif
                </button>
                <button
                  onClick={() => onUpdateSettings({ fontFamily: 'sans' })}
                  className={`px-2.5 py-1 rounded-lg transition cursor-pointer font-sans ${
                    settings.fontFamily === 'sans' 
                      ? 'bg-sky-600 text-white' 
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  Sans
                </button>
              </div>

              <button
                onClick={() => onUpdateSettings({ bionicReading: !settings.bionicReading })}
                className={`flex items-center gap-1 px-3 py-1 rounded-lg font-medium transition cursor-pointer ${
                  settings.bionicReading 
                    ? 'bg-sky-600 text-white' 
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                }`}
              >
                <Eye className="h-3.5 w-3.5" />
                <span>Bionic Read</span>
              </button>
            </div>
          </div>
        )}

        {/* Scrollable distraction-free article body */}
        <div className="flex-1 overflow-y-auto px-6 md:px-12 py-8 space-y-6">
          
          {/* Article Header info */}
          <div className="space-y-3">
            <h1 className={`text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight ${fontFamilyClass}`}>
              {title}
            </h1>

            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400 pt-1">
              <span className="font-medium text-slate-800 dark:text-slate-200">{article.author}</span>
              <span>•</span>
              <span>{article.date}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {article.readTimeMin} {UI_TEXT.readTime[language]}
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium">
                <ShieldCheck className="h-3.5 w-3.5" />
                Verified & Fact-Checked
              </span>
            </div>
          </div>

          {/* Quick Summary Highlights Box */}
          {bullets && bullets.length > 0 && (
            <div className="p-4 rounded-2xl bg-sky-50/60 dark:bg-slate-900/60 border border-sky-100 dark:border-sky-950/80 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-800 dark:text-sky-300">
                <Sparkles className="h-4 w-4" />
                <span>{UI_TEXT.quickSummary[language]}</span>
              </div>
              <ul className="space-y-1.5 text-xs md:text-sm text-slate-700 dark:text-slate-300">
                {bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="h-2 w-2 rounded-full bg-sky-500 mt-1.5 shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Media Player / Carousel */}
          {article.media && article.media.length > 0 && (
            <div className="space-y-2">
              <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-black aspect-[16/9] relative flex items-center justify-center">
                {article.media[activeMediaIndex].type === 'video' ? (
                  <video
                    src={article.media[activeMediaIndex].url}
                    controls
                    playsInline
                    className="w-full h-full object-contain"
                    poster={article.media[activeMediaIndex].thumbnail}
                  />
                ) : (
                  <img
                    src={article.media[activeMediaIndex].url}
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                )}
                
                {isDownloaded && (
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-900/80 text-white text-[11px] font-medium backdrop-blur-md flex items-center gap-1">
                    <Check className="h-3 w-3 text-emerald-400" />
                    Media Cached Offline ({article.media[activeMediaIndex].sizeMb} MB)
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-1">
                <p className="italic">
                  {article.media[activeMediaIndex].caption[language] || article.media[activeMediaIndex].caption.en}
                </p>
                {article.media.length > 1 && (
                  <div className="flex gap-1.5 shrink-0">
                    {article.media.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveMediaIndex(i)}
                        className={`h-2 rounded-full transition-all cursor-pointer ${
                          activeMediaIndex === i ? 'w-6 bg-sky-600' : 'w-2 bg-slate-300 dark:bg-slate-700'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Full Article Content */}
          <div className={`space-y-5 text-slate-800 dark:text-slate-200 ${fontSizes[settings.fontSize]} ${fontFamilyClass}`}>
            {paragraphs.map((para, i) => (
              <p key={i} className="leading-relaxed">
                {renderParagraph(para)}
              </p>
            ))}
          </div>

          {/* Ad-Free Promise & Local Journalism Sign-off */}
          <div className="mt-10 pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-slate-50/70 dark:bg-slate-900/40 text-xs">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="font-bold text-slate-900 dark:text-white">Dooars Khabar Ad-Free Guarantee</p>
                <p className="text-slate-500 dark:text-slate-400">Zero banners, zero popups, zero sponsored clutter. Pure local news.</p>
              </div>
            </div>

            <button
              onClick={() => onDownloadToggle(article)}
              className={`shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition cursor-pointer ${
                isDownloaded
                  ? 'bg-emerald-600 text-white'
                  : 'bg-sky-600 hover:bg-sky-700 text-white shadow-sm'
              }`}
            >
              {isDownloaded ? <Check className="h-4 w-4" /> : <Download className="h-4 w-4" />}
              {isDownloaded ? 'Downloaded Offline' : 'Keep Story Offline'}
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
