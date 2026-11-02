import React, { useState } from 'react';
import { 
  Bell, 
  AlertTriangle, 
  Info, 
  Check, 
  Volume2, 
  VolumeX, 
  MapPin, 
  ShieldAlert, 
  Sparkles, 
  Send,
  CheckCircle2,
  SlidersHorizontal,
  Compass
} from 'lucide-react';
import { NotificationAlert, Language, AppSettings } from '../types';
import { LOCATION_LABELS } from '../data/translations';

interface AlertsCenterProps {
  alerts: NotificationAlert[];
  language: Language;
  settings: AppSettings;
  onUpdateSettings: (newSettings: Partial<AppSettings>) => void;
  onMarkRead: (id: string) => void;
  onTriggerSimulatedAlert: () => void;
}

export const AlertsCenter: React.FC<AlertsCenterProps> = ({
  alerts,
  language,
  settings,
  onUpdateSettings,
  onMarkRead,
  onTriggerSimulatedAlert,
}) => {
  const [showConfig, setShowConfig] = useState(false);
  const [testAlertSent, setTestAlertSent] = useState(false);

  const handleSimulate = () => {
    onTriggerSimulatedAlert();
    setTestAlertSent(true);
    setTimeout(() => setTestAlertSent(false), 4000);
  };

  const labels = {
    en: {
      title: 'Personalized Alerts & Bulletins',
      subtitle: 'Real-time wildlife corridors, weather advisories & tea market alerts',
      configureBtn: 'Preferences',
      simulateBtn: 'Trigger Test Corridor Alert',
      elephantAlerts: 'Elephant & Wildlife Movement Corridors',
      weatherAlerts: 'Teesta / Torsa Flash River & Storm Advisories',
      teaAlerts: 'Tea Garden Wages & Auction Price Bulletins',
      breakingAlerts: 'General Breaking Dooars News',
      soundNotice: 'Play calm notification sound on urgent alerts',
      empty: 'No pending alerts. All corridors are currently peaceful.',
      markAsRead: 'Mark as read',
    },
    bn: {
      title: 'ব্যক্তিগত সতর্কবার্তা ও বুলেটিন',
      subtitle: 'বন্যহাতি চলাচল, আবহাওয়া ও চা নিলামের তাজা আপডেট',
      configureBtn: 'সেটিংস',
      simulateBtn: 'হাতি চলাচলের সতর্কবার্তা পরীক্ষা করুন',
      elephantAlerts: 'বন্যহাতি ও বন্যপ্রাণী করিডোর সতর্কবার্তা',
      weatherAlerts: 'তিস্তা-তোর্ষা নদী ও ঝড়-বৃষ্টির সতর্কতা',
      teaAlerts: 'চা বাগান মজুরি ও চা নিলাম বুলেটিন',
      breakingAlerts: 'জরুরি ডুয়ার্স ব্রেকিং খবর',
      soundNotice: 'জরুরি সতর্কবার্তায় মিষ্টি নোটিফিকেশন রিংটোন বাজান',
      empty: 'আপাতত কোনো জরুরি সতর্কবার্তা নেই। ডুয়ার্সের পরিবেশ শান্ত।',
      markAsRead: 'পঠিত হিসেবে চিহ্নিত করুন',
    },
    hi: {
      title: 'निजीकृत अलर्ट्स व बुलेटिन',
      subtitle: 'वन्यजीव कॉरिडोर, मौसम व चाय बाजार की त्वरित जानकारी',
      configureBtn: 'प्राथमिकताएं',
      simulateBtn: 'हाथी कॉरिडोर अलर्ट टेस्ट करें',
      elephantAlerts: 'हाथी व वन्यजीव आवागमन अलर्ट',
      weatherAlerts: 'तीस्ता व तोर्षा नदी जलस्तर व मौसम चेतावनी',
      teaAlerts: 'चाय बागान न्यूनतम मूल्य व नीलामी बुलेटिन',
      breakingAlerts: 'डूवर्स की महत्वपूर्ण ब्रेकिंग खबरें',
      soundNotice: 'अलर्ट पर शांत ध्वनि बजाएं',
      empty: 'कोई नया अलर्ट नहीं है। सभी मार्ग व क्षेत्र शांत हैं।',
      markAsRead: 'पढ़ा हुआ चिन्हित करें',
    },
    ne: {
      title: 'व्यक्तिगत सूचना तथा बुलेटिन',
      subtitle: 'वन्यजन्तु आवतजावत, मौसम र चिया बगानका ताजा सूचनाहरू',
      configureBtn: 'सेटिङहरू',
      simulateBtn: 'हात्ती करिडोर अलर्ट परीक्षण गर्नुहोस्',
      elephantAlerts: 'हात्ती र वन्यजन्तु हिँड्ने बाटोको सतर्कता',
      weatherAlerts: 'तिस्ता र तोर्षा नदी बाढी तथा मौसम चेतावनी',
      teaAlerts: 'चिया बगान ज्याला र लिलामी बुलेटिन',
      breakingAlerts: 'डुवर्सका प्रमुख ताजा अपडेटहरू',
      soundNotice: 'अलर्ट आउँदा मधुर ध्वनि बजाउनुहोस्',
      empty: 'हाल कुनै नयाँ अलर्ट छैन। सबै क्षेत्रहरू शान्त छन्।',
      markAsRead: 'पढेको चिन्ह लगाउनुहोस्',
    },
  };

  const t = labels[language] || labels.en;

  return (
    <div className="space-y-6 max-w-4xl mx-auto animate-fade-in">
      
      {/* Top Banner */}
      <div className="rounded-2xl bg-gradient-to-r from-sky-700 via-sky-800 to-slate-900 text-white p-6 shadow-md relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-200 uppercase tracking-wider">
              <ShieldAlert className="h-4 w-4" />
              <span>Dooars Verified Warning System</span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold mt-1 text-white">{t.title}</h2>
            <p className="text-xs md:text-sm text-sky-100/80 mt-1 max-w-xl">{t.subtitle}</p>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => setShowConfig(!showConfig)}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold backdrop-blur-sm border border-white/15 transition cursor-pointer"
            >
              <SlidersHorizontal className="h-3.5 w-3.5" />
              {t.configureBtn}
            </button>
            <button
              onClick={handleSimulate}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-white text-xs font-semibold shadow-md shadow-sky-900/30 transition cursor-pointer"
            >
              <Send className="h-3.5 w-3.5" />
              {t.simulateBtn}
            </button>
          </div>
        </div>

        {testAlertSent && (
          <div className="mt-4 p-2.5 rounded-lg bg-emerald-500/20 border border-emerald-400/40 text-emerald-200 text-xs flex items-center gap-2 animate-fade-in">
            <CheckCircle2 className="h-4 w-4 text-emerald-300 shrink-0" />
            <span>Simulated corridor alert dispatched! Check the feed below.</span>
          </div>
        )}
      </div>

      {/* Alert Preferences Drawer/Box */}
      {showConfig && (
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-sky-100 dark:border-slate-800 shadow-sm space-y-4 animate-fade-in">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4 text-sky-600" />
            Personalize Your Notification Topics
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <label className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 cursor-pointer hover:border-sky-300">
              <span className="font-medium text-slate-800 dark:text-slate-200">{t.elephantAlerts}</span>
              <input
                type="checkbox"
                checked={settings.alertCorridors}
                onChange={e => onUpdateSettings({ alertCorridors: e.target.checked })}
                className="h-4 w-4 accent-sky-600 rounded"
              />
            </label>

            <label className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 cursor-pointer hover:border-sky-300">
              <span className="font-medium text-slate-800 dark:text-slate-200">{t.weatherAlerts}</span>
              <input
                type="checkbox"
                checked={settings.alertWeather}
                onChange={e => onUpdateSettings({ alertWeather: e.target.checked })}
                className="h-4 w-4 accent-sky-600 rounded"
              />
            </label>

            <label className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 cursor-pointer hover:border-sky-300">
              <span className="font-medium text-slate-800 dark:text-slate-200">{t.teaAlerts}</span>
              <input
                type="checkbox"
                checked={settings.alertTeaAuction}
                onChange={e => onUpdateSettings({ alertTeaAuction: e.target.checked })}
                className="h-4 w-4 accent-sky-600 rounded"
              />
            </label>

            <label className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 cursor-pointer hover:border-sky-300">
              <span className="font-medium text-slate-800 dark:text-slate-200">{t.breakingAlerts}</span>
              <input
                type="checkbox"
                checked={settings.alertBreaking}
                onChange={e => onUpdateSettings({ alertBreaking: e.target.checked })}
                className="h-4 w-4 accent-sky-600 rounded"
              />
            </label>
          </div>

          <div className="pt-2 flex items-center justify-between border-t border-slate-100 dark:border-slate-800 text-xs">
            <span className="text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
              <Volume2 className="h-4 w-4 text-sky-600" />
              {t.soundNotice}
            </span>
            <input
              type="checkbox"
              checked={settings.soundEnabled}
              onChange={e => onUpdateSettings({ soundEnabled: e.target.checked })}
              className="h-4 w-4 accent-sky-600 rounded cursor-pointer"
            />
          </div>
        </div>
      )}

      {/* Alerts Stream */}
      <div className="space-y-3">
        {alerts.length === 0 ? (
          <div className="p-8 text-center rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-slate-500 text-sm">
            {t.empty}
          </div>
        ) : (
          alerts.map(alert => {
            const title = alert.title[language] || alert.title.en;
            const message = alert.message[language] || alert.message.en;
            const locationLabel = LOCATION_LABELS[alert.location]?.[language] || alert.location;

            const isUrgent = alert.severity === 'warning' || alert.severity === 'urgent';

            return (
              <div
                key={alert.id}
                className={`p-4 md:p-5 rounded-2xl border transition-all ${
                  alert.isRead
                    ? 'bg-white/80 dark:bg-slate-900/60 border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400'
                    : isUrgent
                    ? 'bg-amber-50/60 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900 shadow-sm'
                    : 'bg-sky-50/60 dark:bg-sky-950/20 border-sky-200 dark:border-sky-900 shadow-sm'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div
                      className={`p-2 rounded-xl shrink-0 mt-0.5 ${
                        isUrgent
                          ? 'bg-amber-500/15 text-amber-600 dark:text-amber-400'
                          : 'bg-sky-500/15 text-sky-600 dark:text-sky-400'
                      }`}
                    >
                      {isUrgent ? (
                        <AlertTriangle className="h-5 w-5" />
                      ) : (
                        <Info className="h-5 w-5" />
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-black/10 dark:bg-white/10 text-slate-700 dark:text-slate-300">
                          {alert.category}
                        </span>
                        <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                          <MapPin className="h-3 w-3 text-sky-500" />
                          {locationLabel}
                        </span>
                        <span className="text-xs text-slate-400">• {alert.timestamp}</span>
                      </div>
                      
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm md:text-base leading-snug">
                        {title}
                      </h4>
                      <p className="mt-1 text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {message}
                      </p>
                    </div>
                  </div>

                  {!alert.isRead && (
                    <button
                      onClick={() => onMarkRead(alert.id)}
                      className="shrink-0 p-1.5 rounded-lg text-slate-400 hover:text-sky-600 hover:bg-sky-50 dark:hover:bg-slate-800 transition"
                      title={t.markAsRead}
                    >
                      <Check className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>

    </div>
  );
};
