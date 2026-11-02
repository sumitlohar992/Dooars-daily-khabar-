import React from 'react';
import { 
  X, 
  Check, 
  MapPin, 
  Sparkles, 
  Filter, 
  SlidersHorizontal,
  RotateCcw
} from 'lucide-react';
import { Category, LocationId, Language, AppSettings } from '../types';
import { CATEGORY_LABELS, LOCATION_LABELS, LANGUAGES } from '../data/translations';

interface FeedCustomizerProps {
  isOpen: boolean;
  onClose: () => void;
  settings: AppSettings;
  onUpdateSettings: (newSettings: Partial<AppSettings>) => void;
  language: Language;
}

export const FeedCustomizer: React.FC<FeedCustomizerProps> = ({
  isOpen,
  onClose,
  settings,
  onUpdateSettings,
  language,
}) => {
  if (!isOpen) return null;

  const allCategories: Category[] = [
    'tea',
    'wildlife',
    'weather',
    'governance',
    'culture',
    'sports',
    'national',
  ];

  const allLocations: LocationId[] = [
    'all',
    'alipurduar',
    'madarihat',
    'jalpaiguri',
    'malbazar',
    'jaigaon',
    'birpara',
    'siliguri',
    'coochbehar',
  ];

  const toggleCategory = (cat: Category) => {
    let next: Category[];
    if (settings.selectedCategories.includes(cat)) {
      if (settings.selectedCategories.length === 1) return; // Keep at least one
      next = settings.selectedCategories.filter(c => c !== cat);
    } else {
      next = [...settings.selectedCategories, cat];
    }
    onUpdateSettings({ selectedCategories: next });
  };

  const toggleLocation = (loc: LocationId) => {
    let next: LocationId[];
    if (loc === 'all') {
      next = ['all'];
    } else {
      const withoutAll = settings.selectedLocations.filter(l => l !== 'all');
      if (withoutAll.includes(loc)) {
        next = withoutAll.filter(l => l !== loc);
        if (next.length === 0) next = ['all'];
      } else {
        next = [...withoutAll, loc];
      }
    }
    onUpdateSettings({ selectedLocations: next });
  };

  const resetFilters = () => {
    onUpdateSettings({
      selectedCategories: allCategories,
      selectedLocations: allLocations,
    });
  };

  const labels = {
    en: {
      title: 'Customize Your News Feed',
      subtitle: 'Tailor stories by your Dooars tea interests, wildlife alerts, and hometown',
      topicSection: 'Topics & Industries',
      locationSection: 'Locations in Dooars & North Bengal',
      reset: 'Reset to All',
      done: 'Apply Preferences',
    },
    bn: {
      title: 'সংবাদ ফিড পছন্দমতো সাজান',
      subtitle: 'ডুয়ার্সের চা বাগান, বন্যপ্রাণী ও আপনার এলাকার খবর নির্বাচন করুন',
      topicSection: 'বিষয় ও ক্ষেত্রসমূহ',
      locationSection: 'ডুয়ার্স ও উত্তরবঙ্গের অঞ্চলসমূহ',
      reset: 'সব নির্বাচন করুন',
      done: 'সংরক্ষণ করুন',
    },
    hi: {
      title: 'अपनी न्यूज़ फीड अनुकूलित करें',
      subtitle: 'चाय उद्योग, वन्यजीव व अपने नजदीकी शहर के अनुसार खबरें चुनें',
      topicSection: 'विषय व उद्योग',
      locationSection: 'डूवर्स व उत्तर बंगाल के क्षेत्र',
      reset: 'रीसेट करें',
      done: 'लागू करें',
    },
    ne: {
      title: 'आफ्नो समाचार फिड छनौट गर्नुहोस्',
      subtitle: 'चिया बगान, वन्यजन्तु र आफ्नो क्षेत्र अनुसार समाचार छान्न सक्नुहुन्छ',
      topicSection: 'विषय र उद्योगहरू',
      locationSection: 'डुवर्स र उत्तर बंगालका स्थानहरू',
      reset: 'रिसेट गर्नुहोस्',
      done: 'लागु गर्नुहोस्',
    },
  };

  const t = labels[language] || labels.en;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
      <div className="relative w-full max-w-xl rounded-3xl bg-white dark:bg-slate-900 border border-sky-100 dark:border-sky-950 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-sky-600 to-slate-900 p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 rounded-full p-1.5 text-white/80 hover:text-white hover:bg-white/10 transition"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-2 text-xs font-semibold text-sky-200 uppercase tracking-wider">
            <SlidersHorizontal className="h-4 w-4" />
            <span>Feed Tailoring</span>
          </div>
          <h2 className="text-xl font-bold mt-1 text-white">{t.title}</h2>
          <p className="text-xs text-sky-100/80 mt-0.5">{t.subtitle}</p>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Categories */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-sky-600" />
              {t.topicSection}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {allCategories.map(cat => {
                const isSelected = settings.selectedCategories.includes(cat);
                const label = CATEGORY_LABELS[cat]?.[language] || cat;
                return (
                  <button
                    key={cat}
                    onClick={() => toggleCategory(cat)}
                    className={`flex items-center justify-between p-3 rounded-xl border transition cursor-pointer ${
                      isSelected
                        ? 'bg-sky-50 dark:bg-sky-950/60 border-sky-400 text-sky-900 dark:text-sky-200 font-semibold'
                        : 'bg-white dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    <span>{label}</span>
                    {isSelected && <Check className="h-4 w-4 text-sky-600 dark:text-sky-400" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-sky-600" />
              {t.locationSection}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
              {allLocations.map(loc => {
                const isSelected = settings.selectedLocations.includes(loc);
                const label = LOCATION_LABELS[loc]?.[language] || loc;
                return (
                  <button
                    key={loc}
                    onClick={() => toggleLocation(loc)}
                    className={`flex items-center justify-between p-2.5 rounded-xl border transition cursor-pointer text-left ${
                      isSelected
                        ? 'bg-sky-50 dark:bg-sky-950/60 border-sky-400 text-sky-900 dark:text-sky-200 font-semibold'
                        : 'bg-white dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    <span className="truncate">{label}</span>
                    {isSelected && <Check className="h-3.5 w-3.5 text-sky-600 shrink-0 ml-1" />}
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <button
            onClick={resetFilters}
            className="flex items-center gap-1 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-sky-600 cursor-pointer"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            {t.reset}
          </button>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-semibold bg-sky-600 hover:bg-sky-700 text-white shadow-md shadow-sky-600/20 transition cursor-pointer"
          >
            {t.done}
          </button>
        </div>

      </div>
    </div>
  );
};
