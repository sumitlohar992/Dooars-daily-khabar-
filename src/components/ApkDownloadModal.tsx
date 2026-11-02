import React, { useState } from 'react';
import { 
  X, 
  Download, 
  Smartphone, 
  Apple, 
  CheckCircle2, 
  ShieldCheck, 
  Share, 
  PlusSquare, 
  FileCode2, 
  Sparkles,
  QrCode,
  Radio
} from 'lucide-react';
import { Language } from '../types';
import { downloadApkFile } from '../services/apkGenerator';
import { usePWAInstall } from '../hooks/usePWAInstall';

interface ApkDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const ApkDownloadModal: React.FC<ApkDownloadModalProps> = ({
  isOpen,
  onClose,
  language,
}) => {
  const [activeTab, setActiveTab] = useState<'android' | 'ios' | 'developer'>('android');
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const { isInstallable, isInstalled, install } = usePWAInstall();

  if (!isOpen) return null;

  const handleDownloadApk = () => {
    downloadApkFile('DooarsKhabar-v1.0.0.apk');
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 5000);
  };

  const handleInstallPwa = async () => {
    if (isInstallable) {
      await install();
    }
  };

  const labels = {
    en: {
      title: 'Download Dooars Khabar App',
      subtitle: 'Available on both Android (APK & WebAPK) and iOS (Apple PWA)',
      tabAndroid: 'Android APK',
      tabIos: 'iOS (iPhone / iPad)',
      tabDev: 'Capacitor / Source',
      downloadApkBtn: 'Download DooarsKhabar-v1.0.0.apk',
      downloadApkDesc: 'Direct APK installation package for Android 7.0+',
      installWebApkBtn: 'Instant Install (WebAPK)',
      installWebApkDesc: 'Instant native launcher shortcut with zero APK file prompt',
      iosTitle: 'Install on Apple iOS Safari',
      iosStep1: 'Open this app inside Safari on your iPhone or iPad.',
      iosStep2: 'Tap the Share icon (square with arrow pointing up) at bottom bar.',
      iosStep3: 'Scroll down and tap "Add to Home Screen".',
      iosStep4: 'Launch from home screen for ad-free standalone reading.',
      securityTitle: 'Ad-Free & Privacy Assured',
      securityDetail: 'Zero tracking, zero ads, offline data stored locally on your device.',
      close: 'Close',
      downloadSuccessMsg: 'APK package downloaded! Open Downloads to install.',
    },
    bn: {
      title: 'ডুয়ার্স খবর অ্যাপ ডাউনলোড',
      subtitle: 'অ্যান্ড্রয়েড (APK) এবং আইওএস (iPhone/iPad) উভয়ের জন্য উপলব্ধ',
      tabAndroid: 'অ্যান্ড্রয়েড APK',
      tabIos: 'অ্যাপল আইওএস (iOS)',
      tabDev: 'সোর্স কোড',
      downloadApkBtn: 'DooarsKhabar-v1.0.0.apk ডাউনলোড',
      downloadApkDesc: 'অ্যান্ড্রয়েডের জন্য সরাসরি ইনস্টলেশন ফাইল',
      installWebApkBtn: 'তাৎক্ষণিক ইনস্টল (WebAPK)',
      installWebApkDesc: 'ব্রাউজার থেকে সরাসরি হোমস্ক্রিনে অ্যাপের মতো যুক্ত করুন',
      iosTitle: 'আইফোন বা আইপ্যাডে ইনস্টল করার নিয়ম',
      iosStep1: 'আইফোনের Safari ব্রাউজারে অ্যাপটি খুলুন।',
      iosStep2: 'নিচের Share আইকনে (উপরমুখী তীর চিহ্ন) ট্যাপ করুন।',
      iosStep3: 'তালিকা থেকে "Add to Home Screen" নির্বাচন করুন।',
      iosStep4: 'হোমস্ক্রিনের আইকন থেকে শান্ত ও বিজ্ঞাপনহীন খবর পড়ুন।',
      securityTitle: 'বিজ্ঞাপনমুক্ত ও নিরাপদ',
      securityDetail: 'কোনো বিজ্ঞাপন বা ট্র্যাকিং নেই, অফলাইন ডেটা আপনার ফোনেই সংরক্ষিত থাকে।',
      close: 'বন্ধ করুন',
      downloadSuccessMsg: 'APK ফাইল ডাউনলোড সম্পন্ন হয়েছে! ইনস্টল করতে ডাউনলোড ফোল্ডার দেখুন।',
    },
    hi: {
      title: 'डूवर्स खबर ऐप डाउनलोड करें',
      subtitle: 'एंड्रॉयड (APK व WebAPK) तथा एप्पल iOS दोनों पर उपलब्ध',
      tabAndroid: 'एंड्रॉयड APK',
      tabIos: 'एप्पल iOS (iPhone)',
      tabDev: 'सोर्स कोड',
      downloadApkBtn: 'DooarsKhabar-v1.0.0.apk डाउनलोड करें',
      downloadApkDesc: 'एंड्रॉयड 7.0+ हेतु सीधे इंस्टॉलेशन फाइल',
      installWebApkBtn: 'सीधा इंस्टॉल (WebAPK)',
      installWebApkDesc: 'बिना फाइल डाउनलोड किए 1-क्लिक में ऐप जोड़ें',
      iosTitle: 'iPhone / iPad पर स्थापित करने के चरण',
      iosStep1: 'अपने iPhone पर सफारी (Safari) ब्राउज़र में यह वेब ऐप खोलें।',
      iosStep2: 'नीचे दिए गए शेयर (Share) आइकन पर टैप करें।',
      iosStep3: 'सूची में से "Add to Home Screen" चुनें।',
      iosStep4: 'होम स्क्रीन से बिना विज्ञापन के शांत पठन का आनंद लें।',
      securityTitle: '100% विज्ञापन-मुक्त व सुरक्षित',
      securityDetail: 'कोई विज्ञापन या ट्रैकिंग नहीं, ऑफलाइन डेटा आपके फोन में सुरक्षित है।',
      close: 'बंद करें',
      downloadSuccessMsg: 'APK फाइल डाउनलोड हो गई है! इंस्टॉल करने के लिए डाउनलोड्स खोलें।',
    },
    ne: {
      title: 'डुवर्स खबर एप डाउनलोड गर्नुहोस्',
      subtitle: 'एन्ड्रोइड (APK) र एप्पल iOS दुवै प्लेटफर्ममा उपलब्ध',
      tabAndroid: 'एन्ड्रोइड APK',
      tabIos: 'एप्पल iOS',
      tabDev: 'सोर्स कोड',
      downloadApkBtn: 'DooarsKhabar-v1.0.0.apk डाउनलोड',
      downloadApkDesc: 'एन्ड्रोइडको लागि प्रत्यक्ष इन्स्टलेसन फाइल',
      installWebApkBtn: 'प्रत्यक्ष इन्स्टल (WebAPK)',
      installWebApkDesc: 'ब्राउजरबाट सिधै होम स्क्रिनमा थप्नुहोस्',
      iosTitle: 'iPhone / iPad मा इन्स्टल गर्ने तरिका',
      iosStep1: 'आफ्नो iPhone को Safari ब्राउजरमा यो एप खोल्नुहोस्।',
      iosStep2: 'तल रहेको Share बटन (बाकसमा माथिल्लो तीर) थिच्नुहोस्।',
      iosStep3: '"Add to Home Screen" विकल्प रोज्नुहोस्।',
      iosStep4: 'होम स्क्रिनबाट शान्त र विज्ञापनरहित समाचार पढ्नुहोस्।',
      securityTitle: 'विज्ञापनरहित तथा सुरक्षित',
      securityDetail: 'कुनै विज्ञापन छैन, अफलाइन डाटा तपाईंको डिभाइसमै सुरक्षित रहन्छ।',
      close: 'बन्द गर्नुहोस्',
      downloadSuccessMsg: 'APK फाइल डाउनलोड भयो! कृपया डाउनलोड फोल्डर खोल्नुहोस्।',
    },
  };

  const t = labels[language] || labels.en;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg rounded-2xl bg-white dark:bg-slate-900 border border-sky-100 dark:border-sky-950 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Sky blue & deep blue header */}
        <div className="bg-gradient-to-r from-sky-600 via-sky-700 to-slate-900 p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 rounded-full p-1.5 text-white/80 hover:text-white hover:bg-white/10 transition"
          >
            <X className="h-5 w-5" />
          </button>
          
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 backdrop-blur-md border border-white/20 text-white shadow-inner">
              <Smartphone className="h-6 w-6 text-sky-200" />
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-tight text-white">{t.title}</h2>
              <p className="text-xs text-sky-100/90 mt-0.5">{t.subtitle}</p>
            </div>
          </div>

          {/* Platform Switcher Tabs */}
          <div className="flex items-center gap-2 mt-5 bg-black/20 p-1 rounded-xl">
            <button
              onClick={() => setActiveTab('android')}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold transition ${
                activeTab === 'android'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-sky-100 hover:text-white hover:bg-white/5'
              }`}
            >
              <Smartphone className="h-3.5 w-3.5" />
              {t.tabAndroid}
            </button>
            <button
              onClick={() => setActiveTab('ios')}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold transition ${
                activeTab === 'ios'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-sky-100 hover:text-white hover:bg-white/5'
              }`}
            >
              <Apple className="h-3.5 w-3.5" />
              {t.tabIos}
            </button>
            <button
              onClick={() => setActiveTab('developer')}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold transition ${
                activeTab === 'developer'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-sky-100 hover:text-white hover:bg-white/5'
              }`}
            >
              <FileCode2 className="h-3.5 w-3.5" />
              {t.tabDev}
            </button>
          </div>
        </div>

        {/* Content body */}
        <div className="p-6 overflow-y-auto space-y-5">
          {downloadSuccess && (
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 text-xs font-medium">
              <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
              <span>{t.downloadSuccessMsg}</span>
            </div>
          )}

          {activeTab === 'android' && (
            <div className="space-y-4">
              {/* Primary APK Download Card */}
              <div className="rounded-xl border-2 border-sky-500/40 bg-sky-50/50 dark:bg-sky-950/30 p-4 relative overflow-hidden">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-sky-600 text-white uppercase tracking-wider">
                      Direct APK Package
                    </span>
                    <h3 className="font-bold text-slate-900 dark:text-white text-base mt-1.5">
                      Dooars Khabar APK v1.0.0
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                      {t.downloadApkDesc}
                    </p>
                  </div>
                  <div className="text-right text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                    <div>Size: ~12 KB</div>
                    <div>Target: API 34</div>
                  </div>
                </div>

                <button
                  onClick={handleDownloadApk}
                  className="mt-4 w-full flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800 text-white font-semibold text-sm shadow-md shadow-sky-600/20 active:scale-[0.99] transition cursor-pointer"
                >
                  <Download className="h-4 w-4" />
                  {t.downloadApkBtn}
                </button>
              </div>

              {/* Instant WebAPK Install Option */}
              <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-sky-600 dark:text-sky-400">
                      <Sparkles className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white text-sm">
                        {t.installWebApkBtn}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {t.installWebApkDesc}
                      </p>
                    </div>
                  </div>
                  {isInstalled ? (
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                      Installed
                    </span>
                  ) : (
                    <button
                      onClick={handleInstallPwa}
                      disabled={!isInstallable}
                      className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-sky-600 hover:bg-sky-700 disabled:opacity-50 text-white transition cursor-pointer"
                    >
                      Install
                    </button>
                  )}
                </div>
              </div>

              {/* Android Sideload Instructions */}
              <div className="text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/50 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1.5">
                <div className="font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-sky-500" />
                  Android Installation Tip:
                </div>
                <p>
                  After downloading the APK, tap it in your notifications or Downloads folder. If prompted with &ldquo;Install unknown apps&rdquo;, toggle Allow for your browser. The app runs 100% ad-free!
                </p>
              </div>
            </div>
          )}

          {activeTab === 'ios' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-sky-50/60 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-900">
                <h4 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
                  <Apple className="h-4 w-4 text-sky-600" />
                  {t.iosTitle}
                </h4>
                <div className="mt-3.5 space-y-3 text-xs text-slate-700 dark:text-slate-300">
                  <div className="flex items-start gap-2.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-600 text-[11px] font-bold text-white">1</span>
                    <p>{t.iosStep1}</p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-600 text-[11px] font-bold text-white">2</span>
                    <div className="flex items-center gap-1.5">
                      <p>{t.iosStep2}</p>
                      <Share className="h-3.5 w-3.5 text-sky-600 inline" />
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-600 text-[11px] font-bold text-white">3</span>
                    <div className="flex items-center gap-1.5">
                      <p>{t.iosStep3}</p>
                      <PlusSquare className="h-3.5 w-3.5 text-sky-600 inline" />
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-600 text-[11px] font-bold text-white">4</span>
                    <p>{t.iosStep4}</p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400">
                <p className="font-semibold text-slate-800 dark:text-slate-200 mb-1">
                  Offline Storage on iOS:
                </p>
                <p>
                  iOS Safari automatically caches downloaded stories, audio summaries, and images into local app storage.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'developer' && (
            <div className="space-y-4">
              <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 p-4 space-y-2">
                <h4 className="font-semibold text-slate-900 dark:text-white text-sm">
                  Capacitor / Android Studio Build Command
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  You can compile this repository into a signed Google Play store release bundle:
                </p>
                <pre className="p-3 rounded-lg bg-slate-900 text-sky-300 text-xs font-mono overflow-x-auto">
{`npm run build
npx @capacitor/cli add android
npx @capacitor/cli copy
npx cap open android`}
                </pre>
              </div>

              <button
                onClick={handleDownloadApk}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs transition"
              >
                <Download className="h-4 w-4" />
                Download Android Manifest & Package Bundle
              </button>
            </div>
          )}

          {/* Privacy & Ad-Free Guarantee */}
          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-100 dark:bg-slate-800/60 text-xs">
            <ShieldCheck className="h-5 w-5 text-sky-600 shrink-0" />
            <div>
              <div className="font-semibold text-slate-800 dark:text-slate-200">{t.securityTitle}</div>
              <div className="text-slate-500 dark:text-slate-400 text-[11px]">{t.securityDetail}</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition cursor-pointer"
          >
            {t.close}
          </button>
        </div>

      </div>
    </div>
  );
};
