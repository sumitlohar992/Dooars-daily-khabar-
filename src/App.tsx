/**
 * Dooars Khabar - Minimalist, Ad-Free News App for the Dooars & North Bengal
 * Supports offline articles, photos, videos, daily audio summaries, and personalized alerts.
 * Available on Android (APK/WebAPK) and iOS (PWA).
 */

import React, { useState, useEffect, useMemo } from 'react';
import { 
  Sparkles, 
  MapPin, 
  Filter, 
  WifiOff, 
  Download, 
  AlertTriangle, 
  ShieldCheck, 
  ChevronRight, 
  Layers,
  ArrowUpDown,
  Smartphone
} from 'lucide-react';
import { Article, DailySummary, NotificationAlert, Language, AppSettings, OfflineArticleRecord } from './types';
import { INITIAL_ARTICLES, INITIAL_ALERTS, DAILY_SUMMARIES } from './data/newsData';
import { StorageService, DEFAULT_SETTINGS } from './services/storageService';
import { SpeechService } from './services/speechService';
import { Header } from './components/Header';
import { Navigation, NavTab } from './components/Navigation';
import { ArticleCard } from './components/ArticleCard';
import { ArticleReaderModal } from './components/ArticleReaderModal';
import { DailyBriefingModal } from './components/DailyBriefingModal';
import { AlertsCenter } from './components/AlertsCenter';
import { OfflineManager } from './components/OfflineManager';
import { FeedCustomizer } from './components/FeedCustomizer';
import { PreferencesView } from './components/PreferencesView';
import { ApkDownloadModal } from './components/ApkDownloadModal';
import { OfflineIndicator } from './components/OfflineIndicator';
import { CATEGORY_LABELS, LOCATION_LABELS, UI_TEXT } from './data/translations';

export default function App() {
  // App state
  const [settings, setSettings] = useState<AppSettings>(() => StorageService.getSettings());
  const [articles, setArticles] = useState<Article[]>(INITIAL_ARTICLES);
  const [offlineRecords, setOfflineRecords] = useState<OfflineArticleRecord[]>(() => StorageService.getOfflineArticles());
  const [alerts, setAlerts] = useState<NotificationAlert[]>(() => StorageService.getAlerts());
  
  // Navigation & modals
  const [currentTab, setCurrentTab] = useState<NavTab>('feed');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isDailyBriefingOpen, setIsDailyBriefingOpen] = useState(false);
  const [isFeedCustomizerOpen, setIsFeedCustomizerOpen] = useState(false);
  const [isApkModalOpen, setIsApkModalOpen] = useState(false);
  
  // Filter & Search
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('all');
  const [activeLocationFilter, setActiveLocationFilter] = useState<string>('all');
  
  // Audio Speech state
  const [activeSpeechId, setActiveSpeechId] = useState<string | null>(null);

  // Sync settings theme to document
  useEffect(() => {
    if (settings.theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    StorageService.saveSettings(settings);
  }, [settings]);

  // Handle settings update
  const handleUpdateSettings = (newSettings: Partial<AppSettings>) => {
    setSettings(prev => {
      const updated = { ...prev, ...newSettings };
      StorageService.saveSettings(updated);
      return updated;
    });
  };

  // Offline download toggle
  const handleDownloadToggle = (article: Article) => {
    const isSaved = offlineRecords.some(r => r.article.id === article.id);
    if (isSaved) {
      StorageService.removeArticleOffline(article.id);
      setOfflineRecords(StorageService.getOfflineArticles());
    } else {
      StorageService.saveArticleOffline(article);
      setOfflineRecords(StorageService.getOfflineArticles());
    }
  };

  // Audio Speech handling
  const handlePlaySpeech = (text: string, id: string) => {
    if (activeSpeechId === id) {
      SpeechService.stop();
      setActiveSpeechId(null);
    } else {
      setActiveSpeechId(id);
      SpeechService.speak(
        text,
        settings.language,
        () => setActiveSpeechId(null),
        () => setActiveSpeechId(null)
      );
    }
  };

  const handleStopSpeech = () => {
    SpeechService.stop();
    setActiveSpeechId(null);
  };

  // Alert management
  const handleMarkAlertRead = (id: string) => {
    const updated = StorageService.markAlertAsRead(id);
    setAlerts(updated);
  };

  const handleTriggerSimulatedAlert = () => {
    const newAlert: NotificationAlert = {
      id: `alt-${Date.now()}`,
      category: 'wildlife',
      location: 'madarihat',
      timestamp: 'Just now',
      severity: 'warning',
      isRead: false,
      title: {
        en: 'Live Alert: Elephant Movement Spotted Near Binnaguri Tea Ridge',
        bn: 'সরাসরি সতর্কবার্তা: বিন্নাগুড়ি চা বাগান সংলগ্ন সড়কে হাতির দল পরিলক্ষিত',
        hi: 'लाइव अलर्ट: बिन्नागुड़ी चाय बागान के पास हाथियों का झुंड देखा गया',
        ne: 'प्रत्यक्ष सतर्कता: बिन्नागुड़ी चिया बगान नजिकै हात्तीको बथान देखिएको छ',
      },
      message: {
        en: 'A tusker and four females were observed traversing from Moraghat forest range into Binnaguri. Forest patrol has deployed spotters.',
        bn: 'মোড়াঘাট বন থেকে ৪টি হাতি বিন্নাগুড়ির দিকে এগিয়ে আসছে। বনকর্মীরা নজরদারি চালাচ্ছেন।',
        hi: 'मोराघाट जंगल से हाथियों का दल आगे बढ़ रहा है। वन विभाग के गश्ती दल तैनात हैं।',
        ne: 'मोराघाट जङ्गलबाट हात्तीहरूको समूह अघि बढिरहेको छ। वन रक्षकहरू निगरानीमा छन्।',
      },
    };

    if (settings.soundEnabled) {
      SpeechService.playAlertChime();
    }

    const updated = StorageService.addAlert(newAlert);
    setAlerts(updated);
  };

  // Unread alerts count
  const unreadAlertsCount = useMemo(() => {
    return alerts.filter(a => !a.isRead).length;
  }, [alerts]);

  // Filtered articles
  const filteredArticles = useMemo(() => {
    return articles.filter(art => {
      // 1. Category settings preference filter
      if (!settings.selectedCategories.includes(art.category)) {
        return false;
      }

      // 2. Location settings preference filter
      if (
        !settings.selectedLocations.includes('all') &&
        !settings.selectedLocations.includes(art.location)
      ) {
        return false;
      }

      // 3. Quick tab category filter
      if (activeCategoryFilter !== 'all' && art.category !== activeCategoryFilter) {
        return false;
      }

      // 4. Quick location filter
      if (activeLocationFilter !== 'all' && art.location !== activeLocationFilter) {
        return false;
      }

      // 5. Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const t = (art.title[settings.language] || art.title.en).toLowerCase();
        const s = (art.summary[settings.language] || art.summary.en).toLowerCase();
        const author = art.author.toLowerCase();
        return t.includes(q) || s.includes(q) || author.includes(q);
      }

      return true;
    });
  }, [articles, settings, activeCategoryFilter, activeLocationFilter, searchQuery]);

  return (
    <div className={`min-vh-100 flex flex-col bg-[#f8fafc] dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200 ${settings.fontFamily === 'serif' ? 'font-serif' : 'font-sans'}`}>
      
      {/* Top Header */}
      <Header
        language={settings.language}
        onLanguageChange={(lang) => handleUpdateSettings({ language: lang })}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onOpenFeedCustomizer={() => setIsFeedCustomizerOpen(true)}
        onOpenDailyBriefing={() => setIsDailyBriefingOpen(true)}
        onOpenApkModal={() => setIsApkModalOpen(true)}
        settings={settings}
        unreadAlertsCount={unreadAlertsCount}
        offlineCount={offlineRecords.length}
      />

      {/* Navigation Bar (Desktop top subnav & Mobile bottom bar) */}
      <Navigation
        currentTab={currentTab}
        onTabChange={setCurrentTab}
        language={settings.language}
        unreadAlertsCount={unreadAlertsCount}
        offlineCount={offlineRecords.length}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-6 pb-24 md:pb-12">
        
        {/* TAB 1: NEWS FEED */}
        {currentTab === 'feed' && (
          <div className="space-y-6 animate-fade-in">
            
            {/* Minimalist Top Hero: Daily Briefing & Alert banner */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              {/* Daily 60-Sec Briefing Card */}
              <div 
                onClick={() => setIsDailyBriefingOpen(true)}
                className="md:col-span-2 rounded-3xl bg-gradient-to-r from-sky-600 via-sky-700 to-slate-900 text-white p-5 sm:p-6 shadow-md hover:shadow-lg transition cursor-pointer relative overflow-hidden group"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md text-white border border-white/20">
                    <Sparkles className="h-3.5 w-3.5 text-sky-200" />
                    {UI_TEXT.quickSummary[settings.language]}
                  </span>
                  <span className="text-xs text-sky-100 font-medium">
                    Sunrise & Sunset Editions
                  </span>
                </div>

                <h2 className="text-lg sm:text-xl font-bold mt-3 text-white group-hover:text-sky-200 transition-colors">
                  {DAILY_SUMMARIES[0].headline[settings.language] || DAILY_SUMMARIES[0].headline.en}
                </h2>

                <p className="mt-1.5 text-xs sm:text-sm text-sky-100/90 line-clamp-2">
                  {DAILY_SUMMARIES[0].points[settings.language]?.[0] || DAILY_SUMMARIES[0].points.en[0]}
                </p>

                <div className="mt-4 flex items-center justify-between pt-3 border-t border-white/15 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                    <span className="font-semibold">Tap to listen 60s audio summary</span>
                  </div>
                  <span className="flex items-center gap-1 font-bold group-hover:translate-x-1 transition-transform">
                    <span>Listen</span>
                    <ChevronRight className="h-4 w-4" />
                  </span>
                </div>
              </div>

              {/* Corridor & Quick Wildlife Alert Widget */}
              <div 
                onClick={() => setCurrentTab('alerts')}
                className="rounded-3xl bg-white dark:bg-slate-900 border border-amber-200 dark:border-amber-900/60 p-5 shadow-sm hover:shadow-md transition cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                      <AlertTriangle className="h-3 w-3 text-amber-500" />
                      Live Alert
                    </span>
                    <span className="text-[11px] text-slate-400">{alerts[0]?.timestamp || 'Recent'}</span>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white text-sm mt-2.5 line-clamp-2">
                    {alerts[0]?.title[settings.language] || alerts[0]?.title.en}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                    {alerts[0]?.message[settings.language] || alerts[0]?.message.en}
                  </p>
                </div>

                <div className="mt-4 pt-2.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-amber-700 dark:text-amber-400 font-semibold">
                  <span>View All Corridor Bulletins</span>
                  <ChevronRight className="h-4 w-4" />
                </div>
              </div>

            </div>

            {/* Category and Location Filter Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
              {/* Category Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
                <button
                  onClick={() => setActiveCategoryFilter('all')}
                  className={`px-3 py-1.5 rounded-xl font-semibold transition shrink-0 cursor-pointer ${
                    activeCategoryFilter === 'all'
                      ? 'bg-slate-900 dark:bg-sky-600 text-white shadow-sm'
                      : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100'
                  }`}
                >
                  {UI_TEXT.allStories[settings.language]}
                </button>
                {settings.selectedCategories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategoryFilter(cat)}
                    className={`px-3 py-1.5 rounded-xl font-semibold transition shrink-0 cursor-pointer ${
                      activeCategoryFilter === cat
                        ? 'bg-sky-600 text-white shadow-sm'
                        : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    {CATEGORY_LABELS[cat]?.[settings.language] || cat}
                  </button>
                ))}
              </div>

              {/* Feed Customizer trigger */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => setIsFeedCustomizerOpen(true)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-sky-400 text-xs font-semibold transition cursor-pointer"
                >
                  <Filter className="h-3.5 w-3.5 text-sky-600" />
                  <span>{UI_TEXT.customizeFeed[settings.language]}</span>
                </button>
              </div>
            </div>

            {/* Articles Stream */}
            {filteredArticles.length === 0 ? (
              <div className="p-12 text-center rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 space-y-3">
                <p className="font-bold text-slate-800 dark:text-slate-200 text-base">
                  No stories found for the selected filter.
                </p>
                <p className="text-xs text-slate-500">
                  Try adjusting your search or tailoring your preferences.
                </p>
                <button
                  onClick={() => {
                    setActiveCategoryFilter('all');
                    setActiveLocationFilter('all');
                    setSearchQuery('');
                  }}
                  className="mt-2 px-4 py-2 rounded-xl bg-sky-600 text-white text-xs font-semibold"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArticles.map(article => (
                  <ArticleCard
                    key={article.id}
                    article={article}
                    language={settings.language}
                    isDownloaded={offlineRecords.some(r => r.article.id === article.id)}
                    onDownloadToggle={handleDownloadToggle}
                    onSelect={setSelectedArticle}
                    activeSpeechId={activeSpeechId}
                    onAudioToggle={(art) => {
                      const text = `${art.title[settings.language] || art.title.en}. ${art.summary[settings.language] || art.summary.en}`;
                      handlePlaySpeech(text, art.id);
                    }}
                    bionicMode={settings.bionicReading}
                  />
                ))}
              </div>
            )}

          </div>
        )}

        {/* TAB 2: DAILY BRIEFING */}
        {currentTab === 'briefing' && (
          <div className="space-y-6 max-w-4xl mx-auto animate-fade-in">
            <div className="p-6 rounded-3xl bg-gradient-to-r from-sky-600 to-slate-900 text-white shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/20 text-white border border-white/20">
                  <Sparkles className="h-3.5 w-3.5" />
                  60-Second Dooars Digest
                </span>
                <h2 className="text-2xl font-bold mt-2 text-white">Daily Curated Summaries</h2>
                <p className="text-xs text-sky-100/90 mt-1 max-w-md">
                  Delivering sunrise and evening key takeaways in a distraction-free, ad-free format.
                </p>
              </div>
              <button
                onClick={() => setIsDailyBriefingOpen(true)}
                className="px-5 py-2.5 rounded-xl bg-white text-slate-900 font-bold text-xs shadow hover:bg-sky-50 transition cursor-pointer shrink-0"
              >
                Open Audio Player
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {DAILY_SUMMARIES.map(summary => (
                <div
                  key={summary.id}
                  onClick={() => setIsDailyBriefingOpen(true)}
                  className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-sm hover:border-sky-300 transition cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs mb-3">
                      <span className="font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-sky-50 dark:bg-sky-950 text-sky-700 dark:text-sky-300 text-[11px]">
                        {summary.edition === 'morning' ? 'Sunrise Edition' : 'Evening Digest'}
                      </span>
                      <span className="text-slate-400 font-mono text-[11px]">{summary.date}</span>
                    </div>

                    <h3 className="font-bold text-slate-900 dark:text-white text-base leading-snug">
                      {summary.headline[settings.language] || summary.headline.en}
                    </h3>

                    <ul className="mt-4 space-y-2 text-xs text-slate-600 dark:text-slate-300">
                      {(summary.points[settings.language] || summary.points.en).map((pt, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-sky-500 mt-1.5 shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-sky-600 dark:text-sky-400 font-semibold">
                    <span>Listen to {summary.audioDuration} briefing</span>
                    <ChevronRight className="h-4 w-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: SAVED & OFFLINE */}
        {currentTab === 'offline' && (
          <OfflineManager
            offlineRecords={offlineRecords}
            language={settings.language}
            onSelectArticle={setSelectedArticle}
            onRemoveOffline={(id) => {
              StorageService.removeArticleOffline(id);
              setOfflineRecords(StorageService.getOfflineArticles());
            }}
            onPlaySpeech={handlePlaySpeech}
            activeSpeechId={activeSpeechId}
          />
        )}

        {/* TAB 4: ALERTS */}
        {currentTab === 'alerts' && (
          <AlertsCenter
            alerts={alerts}
            language={settings.language}
            settings={settings}
            onUpdateSettings={handleUpdateSettings}
            onMarkRead={handleMarkAlertRead}
            onTriggerSimulatedAlert={handleTriggerSimulatedAlert}
          />
        )}

        {/* TAB 5: PREFERENCES */}
        {currentTab === 'settings' && (
          <PreferencesView
            settings={settings}
            onUpdateSettings={handleUpdateSettings}
            onOpenApkModal={() => setIsApkModalOpen(true)}
            language={settings.language}
          />
        )}

      </main>

      {/* Floating Offline Indicator & Simulated Offline mode */}
      <OfflineIndicator
        language={settings.language}
        simulatedOffline={settings.simulatedOffline}
        onToggleSimulatedOffline={() => handleUpdateSettings({ simulatedOffline: !settings.simulatedOffline })}
      />

      {/* Full-Screen Distraction-Free Article Reader */}
      <ArticleReaderModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        language={settings.language}
        isDownloaded={selectedArticle ? offlineRecords.some(r => r.article.id === selectedArticle.id) : false}
        onDownloadToggle={handleDownloadToggle}
        isPlayingAudio={selectedArticle ? activeSpeechId === selectedArticle.id : false}
        onAudioToggle={(art) => {
          const text = `${art.title[settings.language] || art.title.en}. ${(art.content[settings.language] || art.content.en).join(' ')}`;
          handlePlaySpeech(text, art.id);
        }}
        settings={settings}
        onUpdateSettings={handleUpdateSettings}
      />

      {/* Daily Briefing Modal */}
      <DailyBriefingModal
        isOpen={isDailyBriefingOpen}
        onClose={() => setIsDailyBriefingOpen(false)}
        language={settings.language}
        onPlaySpeech={handlePlaySpeech}
        onStopSpeech={handleStopSpeech}
        activeSpeechId={activeSpeechId}
      />

      {/* Feed Customizer Drawer */}
      <FeedCustomizer
        isOpen={isFeedCustomizerOpen}
        onClose={() => setIsFeedCustomizerOpen(false)}
        settings={settings}
        onUpdateSettings={handleUpdateSettings}
        language={settings.language}
      />

      {/* Android APK Download & Native Install Hub */}
      <ApkDownloadModal
        isOpen={isApkModalOpen}
        onClose={() => setIsApkModalOpen(false)}
        language={settings.language}
      />

    </div>
  );
}
