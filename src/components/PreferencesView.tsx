import React from 'react';
import { 
  Globe, 
  Moon, 
  Sun, 
  Type, 
  Eye, 
  Volume2, 
  ShieldCheck, 
  Download, 
  WifiOff, 
  Smartphone,
  Check,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { AppSettings, Language } from '../types';
import { LANGUAGES, UI_TEXT } from '../data/translations';

interface PreferencesViewProps {
  settings: AppSettings;
  onUpdateSettings: (newSettings: Partial<AppSettings>) => void;
  onOpenApkModal: () => void;
  language: Language;
}

export const PreferencesView: React.FC<PreferencesViewProps> = ({
  settings,
  onUpdateSettings,
  onOpenApkModal,
  language,
}) => {
  const labels = {
    en: {
      title: 'App Preferences & Language',
      subtitle: 'Customize reading aesthetic, languages, and offline test mode',
      languageSection: 'Language Preference',
      languageDesc: 'All headlines, daily summaries, audio and stories switch automatically',
      appearanceSection: 'Calm Aesthetic & Theme',
      themeLight: 'Day Calm (Sky Blue)',
      themeDark: 'Night Deep Blue',
      typographySection: 'Reading Comfort & Typography',
      fontSize: 'Text Size',
      fontFamily: 'Typography Font',
      bionic: 'Bionic Reading Mode',
      bionicDesc: 'Bolds initial word letters to speed up reading comprehension and focus',
      offlineTestSection: 'Offline Capabilities Test',
      offlineTestTitle: 'Simulate Offline Mode',
      offlineTestDesc: 'Simulates zero internet connectivity so you can test reading cached articles, viewing photos, and playing audio.',
      apkSection: 'Android APK & Mobile Installation',
      apkDesc: 'Install native standalone app or download direct APK package for Android and iOS.',
      apkBtn: 'Open APK Download & Install Center',
    },
    bn: {
      title: 'অ্যাপ সেটিংস ও ভাষা পছন্দ',
      subtitle: 'পঠন শৈলী, আঞ্চলিক ভাষা এবং অফলাইন মোড নিয়ন্ত্রণ করুন',
      languageSection: 'ভাষা নির্বাচন (Language Preference)',
      languageDesc: 'শিরোনাম, দৈনিক সারসংক্ষেপ, অডিও ও পূর্ণাঙ্গ সংবাদ নির্বাচিত ভাষায় প্রদর্শিত হবে',
      appearanceSection: 'থিম ও রং নির্বাচন',
      themeLight: 'আকাশি শান্ত মোড (Sky Blue)',
      themeDark: 'গভীর নীল নাইট মোড (Deep Blue)',
      typographySection: 'পাঠ্য ফন্ট ও পাঠের স্বাচ্ছন্দ্য',
      fontSize: 'অক্ষরের আকার',
      fontFamily: 'ফন্ট শৈলী',
      bionic: 'বায়োনিক রিডিং মোড',
      bionicDesc: 'দ্রুত ও সহজে পড়ার জন্য শব্দের প্রথম কয়েকটি অক্ষর গাঢ় করে প্রদর্শন করে',
      offlineTestSection: 'অফলাইন মোড পরীক্ষা',
      offlineTestTitle: 'অফলাইন মোড চালু করুন',
      offlineTestDesc: 'ইন্টারনেট ছাড়াই সংরক্ষিত সংবাদ ও ছবি পড়ার অভিজ্ঞতা পরীক্ষা করুন।',
      apkSection: 'অ্যান্ড্রয়েড APK ও মোবাইল ইনস্টলেশন',
      apkDesc: 'অ্যান্ড্রয়েড ফোনের জন্য APK ফাইল ডাউনলোড করুন বা আইওএসে হোমস্ক্রিনে যুক্ত করুন।',
      apkBtn: 'APK ডাউনলোড ও ইনস্টল কেন্দ্র খুলুন',
    },
    hi: {
      title: 'ऐप प्राथमिकताएं व भाषा सेटिंग',
      subtitle: 'शांत पाठन शैली, क्षेत्रीय भाषाएं व ऑफलाइन विकल्प',
      languageSection: 'भाषा चयन (Language Preference)',
      languageDesc: 'सभी शीर्षक, दैनिक सारांश, ऑडियो व समाचार तुरंत चुनी गई भाषा में बदलेंगे',
      appearanceSection: 'थीम व रंग रूप',
      themeLight: 'शांत स्काई ब्लू (Day)',
      themeDark: 'गहरा नीला नाइट मोड (Deep Blue)',
      typographySection: 'पाठन सहजता व फॉन्ट',
      fontSize: 'अक्षर आकार',
      fontFamily: 'फॉन्ट शैली',
      bionic: 'बायोनिक रीडिंग मोड',
      bionicDesc: 'शब्दों के शुरुआती अक्षरों को गहरा कर पढ़ने की गति और ध्यान बढ़ाता है',
      offlineTestSection: 'ऑफलाइन सुविधा परीक्षण',
      offlineTestTitle: 'ऑफलाइन मोड सिमुलेट करें',
      offlineTestDesc: 'बिना इंटरनेट के सेव की गई खबरें व फोटो देखने का अनुभव टेस्ट करें।',
      apkSection: 'एंड्रॉयड APK व मोबाइल ऐप',
      apkDesc: 'अपने एंड्रॉयड डिवाइस के लिए डायरेक्ट APK फाइल डाउनलोड करें या PWA इंस्टॉल करें।',
      apkBtn: 'APK डाउनलोड व इंस्टॉल सेंटर खोलें',
    },
    ne: {
      title: 'एप सेटिङ तथा भाषा प्राथमिकता',
      subtitle: 'शान्त पठन शैली, क्षेत्रीय भाषाहरू र अफलाइन परीक्षण',
      languageSection: 'भाषा चयन (Language Preference)',
      languageDesc: 'सबै समाचार, दैनिक संक्षेप, अडियो र सूचनाहरू तुरुन्त छानिएको भाषामा परिवर्तन हुनेछन्',
      appearanceSection: 'थिम र रङ रूप',
      themeLight: 'आकाशी शान्त मोड (Sky Blue)',
      themeDark: 'गाढा निलो नाइट मोड (Deep Blue)',
      typographySection: 'पठन सहजता र फन्ट',
      fontSize: 'फन्टको आकार',
      fontFamily: 'फन्टको शैली',
      bionic: 'बायोनिक रिडिङ मोड',
      bionicDesc: 'छिटो र एकाग्र भएर पढ्न मद्दत पुर्‍याउँछ',
      offlineTestSection: 'अफलाइन सुविधा परीक्षण',
      offlineTestTitle: 'अफलाइन मोड परीक्षण गर्नुहोस्',
      offlineTestDesc: 'इन्टरनेट नहुँदा पनि सुरक्षित गरिएका समाचार र तस्बिरहरू पढ्न सकिन्छ।',
      apkSection: 'एन्ड्रोइड APK तथा मोबाइल इन्स्टलेसन',
      apkDesc: 'एन्ड्रोइडको लागि सिधै APK फाइल डाउनलोड गर्नुहोस् वा iOS मा होमस्क्रिनमा थप्नुहोस्।',
      apkBtn: 'APK डाउनलोड तथा इन्स्टल केन्द्र खोल्नुहोस्',
    },
  };

  const t = labels[language] || labels.en;

  return (
    <div className="space-y-6 max-w-3xl mx-auto animate-fade-in pb-12">
      
      {/* Top Header */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-sky-600 to-slate-900 text-white shadow-lg">
        <h2 className="text-xl md:text-2xl font-bold">{t.title}</h2>
        <p className="text-xs md:text-sm text-sky-100/90 mt-1">{t.subtitle}</p>
      </div>

      {/* 1. Language Preference Settings */}
      <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300">
            <Globe className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              {t.languageSection}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {t.languageDesc}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {LANGUAGES.map(lang => {
            const isSelected = settings.language === lang.code;
            return (
              <button
                key={lang.code}
                onClick={() => onUpdateSettings({ language: lang.code })}
                className={`p-4 rounded-2xl border text-left transition flex items-center justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-sky-50 dark:bg-sky-950/60 border-sky-500 shadow-sm ring-1 ring-sky-500/30'
                    : 'bg-slate-50/50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 hover:border-sky-300'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900 dark:text-white text-base">
                      {lang.nativeName}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      ({lang.name})
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    {lang.region}
                  </p>
                </div>
                {isSelected && (
                  <div className="h-6 w-6 rounded-full bg-sky-600 text-white flex items-center justify-center shrink-0">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Theme & Aesthetic */}
      <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm">
        <h3 className="font-bold text-slate-900 dark:text-white text-base flex items-center gap-2">
          <Sun className="h-5 w-5 text-sky-600" />
          {t.appearanceSection}
        </h3>

        <div className="grid grid-cols-2 gap-3 text-xs">
          <button
            onClick={() => onUpdateSettings({ theme: 'light' })}
            className={`p-3.5 rounded-2xl border text-center transition cursor-pointer flex flex-col items-center gap-2 ${
              settings.theme === 'light'
                ? 'bg-sky-50 dark:bg-sky-950/60 border-sky-500 font-bold text-sky-900 dark:text-sky-200'
                : 'bg-slate-50/50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
            }`}
          >
            <Sun className="h-5 w-5 text-sky-600" />
            <span>{t.themeLight}</span>
          </button>
          <button
            onClick={() => onUpdateSettings({ theme: 'dark' })}
            className={`p-3.5 rounded-2xl border text-center transition cursor-pointer flex flex-col items-center gap-2 ${
              settings.theme === 'dark'
                ? 'bg-slate-900 border-sky-500 font-bold text-sky-300'
                : 'bg-slate-50/50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
            }`}
          >
            <Moon className="h-5 w-5 text-indigo-400" />
            <span>{t.themeDark}</span>
          </button>
        </div>
      </div>

      {/* 3. Typography & Reading Mode */}
      <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm">
        <h3 className="font-bold text-slate-900 dark:text-white text-base flex items-center gap-2">
          <Type className="h-5 w-5 text-sky-600" />
          {t.typographySection}
        </h3>

        <div className="space-y-4 text-xs">
          {/* Font size */}
          <div className="flex items-center justify-between">
            <span className="font-semibold text-slate-700 dark:text-slate-300">{t.fontSize}</span>
            <div className="flex gap-1.5">
              {(['sm', 'base', 'lg', 'xl'] as const).map(size => (
                <button
                  key={size}
                  onClick={() => onUpdateSettings({ fontSize: size })}
                  className={`px-3 py-1.5 rounded-xl font-bold uppercase transition cursor-pointer ${
                    settings.fontSize === size
                      ? 'bg-sky-600 text-white shadow-sm'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Font family */}
          <div className="flex items-center justify-between">
            <span className="font-semibold text-slate-700 dark:text-slate-300">{t.fontFamily}</span>
            <div className="flex gap-1.5">
              <button
                onClick={() => onUpdateSettings({ fontFamily: 'serif' })}
                className={`px-3.5 py-1.5 rounded-xl font-serif transition cursor-pointer ${
                  settings.fontFamily === 'serif'
                    ? 'bg-sky-600 text-white font-bold'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                }`}
              >
                Serif (Editorial)
              </button>
              <button
                onClick={() => onUpdateSettings({ fontFamily: 'sans' })}
                className={`px-3.5 py-1.5 rounded-xl font-sans transition cursor-pointer ${
                  settings.fontFamily === 'sans'
                    ? 'bg-sky-600 text-white font-bold'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                }`}
              >
                Sans-Serif (Modern)
              </button>
            </div>
          </div>

          {/* Bionic reading toggle */}
          <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800">
            <div>
              <p className="font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                <Eye className="h-4 w-4 text-sky-600" />
                {t.bionic}
              </p>
              <p className="text-[11px] text-slate-500 max-w-sm mt-0.5">{t.bionicDesc}</p>
            </div>
            <input
              type="checkbox"
              checked={settings.bionicReading}
              onChange={e => onUpdateSettings({ bionicReading: e.target.checked })}
              className="h-5 w-5 accent-sky-600 rounded cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* 4. Offline Simulator Setting */}
      <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600">
              <WifiOff className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                {t.offlineTestTitle}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mt-0.5">
                {t.offlineTestDesc}
              </p>
            </div>
          </div>
          <input
            type="checkbox"
            checked={settings.simulatedOffline}
            onChange={e => onUpdateSettings({ simulatedOffline: e.target.checked })}
            className="h-5 w-5 accent-sky-600 rounded cursor-pointer"
          />
        </div>
      </div>

      {/* 5. Android APK & Mobile Install Button */}
      <div className="p-6 rounded-3xl bg-sky-50/80 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-900 space-y-3 shadow-sm">
        <div className="flex items-center gap-2.5">
          <Smartphone className="h-5 w-5 text-sky-600" />
          <h4 className="font-bold text-slate-900 dark:text-white text-base">
            {t.apkSection}
          </h4>
        </div>
        <p className="text-xs text-slate-600 dark:text-slate-400">
          {t.apkDesc}
        </p>
        <button
          onClick={onOpenApkModal}
          className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs shadow-md shadow-sky-600/20 transition cursor-pointer"
        >
          <Download className="h-4 w-4" />
          {t.apkBtn}
        </button>
      </div>

      {/* Version badge */}
      <div className="text-center text-xs text-slate-400 dark:text-slate-500 pt-4">
        <p className="font-bold text-slate-600 dark:text-slate-300">Dooars Khabar • Version 1.0.0 (Ad-Free Edition)</p>
        <p className="text-[11px] mt-0.5">Serving Dooars, Terai, tea gardens and North Bengal with calm journalism.</p>
      </div>

    </div>
  );
};
