import React from 'react';
import { 
  Sparkles, 
  Search, 
  Download, 
  Globe, 
  Sun, 
  Moon, 
  SlidersHorizontal,
  ShieldCheck,
  Radio,
  WifiOff
} from 'lucide-react';
import { Language, AppSettings } from '../types';
import { LANGUAGES, UI_TEXT } from '../data/translations';

interface HeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onOpenFeedCustomizer: () => void;
  onOpenDailyBriefing: () => void;
  onOpenApkModal: () => void;
  settings: AppSettings;
  unreadAlertsCount: number;
  offlineCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  onLanguageChange,
  searchQuery,
  onSearchChange,
  onOpenFeedCustomizer,
  onOpenDailyBriefing,
  onOpenApkModal,
  settings,
  unreadAlertsCount,
  offlineCount,
}) => {
  return (
    <header className="sticky top-0 z-30 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-sky-100 dark:border-slate-800/80 shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Main top bar */}
        <div className="flex items-center justify-between h-16 gap-3">
          
          {/* Logo & Brand Identity */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 via-sky-600 to-slate-900 text-white shadow-md shadow-sky-600/20 font-black text-sm tracking-wider">
              DK
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-black tracking-tight text-slate-900 dark:text-white">
                  {UI_TEXT.appName[language]}
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-sky-50 dark:bg-sky-950 text-sky-700 dark:text-sky-300 border border-sky-200/60 dark:border-sky-900">
                  <ShieldCheck className="h-3 w-3 text-sky-600" />
                  Ad-Free
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 hidden sm:block truncate max-w-xs">
                {UI_TEXT.tagline[language]}
              </p>
            </div>
          </div>

          {/* Search bar on desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => onSearchChange(e.target.value)}
                placeholder={UI_TEXT.searchPlaceholder[language]}
                className="w-full pl-9 pr-4 py-2 rounded-xl text-xs bg-slate-100/80 dark:bg-slate-900 border border-transparent focus:border-sky-500 focus:bg-white dark:focus:bg-slate-950 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none transition"
              />
            </div>
          </div>

          {/* Quick Action buttons */}
          <div className="flex items-center gap-2">
            
            {/* Daily Briefing quick trigger */}
            <button
              onClick={onOpenDailyBriefing}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-50 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300 border border-sky-200/80 dark:border-sky-900 text-xs font-semibold hover:bg-sky-100 transition cursor-pointer"
              title="Open 60-Second Daily Summary"
            >
              <Sparkles className="h-3.5 w-3.5 text-sky-600 animate-spin-slow" />
              <span className="hidden sm:inline">60s Briefing</span>
            </button>

            {/* Language Quick Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:bg-slate-200 transition cursor-pointer"
                title="Change language"
              >
                <Globe className="h-3.5 w-3.5 text-sky-600" />
                <span className="uppercase">{language}</span>
              </button>

              <div className="absolute right-0 top-full mt-1.5 w-44 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl py-1.5 hidden group-hover:block animate-fade-in z-50">
                {LANGUAGES.map(lang => (
                  <button
                    key={lang.code}
                    onClick={() => onLanguageChange(lang.code)}
                    className={`w-full px-3.5 py-2 text-left text-xs font-medium flex items-center justify-between transition ${
                      language === lang.code
                        ? 'bg-sky-50 dark:bg-sky-950 text-sky-700 dark:text-sky-300 font-bold'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    <span>{lang.nativeName}</span>
                    <span className="text-[10px] text-slate-400 uppercase">{lang.code}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Install APK / Native App */}
            <button
              onClick={onOpenApkModal}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800 text-white text-xs font-bold shadow-sm transition cursor-pointer"
              title="Download Android APK & Install PWA"
            >
              <Download className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Get APK / App</span>
              <span className="sm:hidden">APK</span>
            </button>

          </div>

        </div>

        {/* Mobile search bar if needed */}
        <div className="md:hidden pb-3">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => onSearchChange(e.target.value)}
              placeholder={UI_TEXT.searchPlaceholder[language]}
              className="w-full pl-8 pr-3 py-1.5 rounded-xl text-xs bg-slate-100/90 dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none"
            />
          </div>
        </div>

      </div>
    </header>
  );
};
