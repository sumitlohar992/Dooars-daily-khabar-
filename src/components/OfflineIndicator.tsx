import React, { useEffect, useState } from 'react';
import { WifiOff, Radio } from 'lucide-react';
import { Language } from '../types';

interface OfflineIndicatorProps {
  language: Language;
  simulatedOffline: boolean;
  onToggleSimulatedOffline: () => void;
}

export function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(
    typeof navigator !== 'undefined' ? navigator.onLine : true
  );

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return isOnline;
}

export const OfflineIndicator: React.FC<OfflineIndicatorProps> = ({
  language,
  simulatedOffline,
  onToggleSimulatedOffline,
}) => {
  const isRealOnline = useOnlineStatus();
  const isOffline = !isRealOnline || simulatedOffline;

  const messages: Record<Language, { label: string; offlineBadge: string; simulatedBadge: string; returnOnline: string }> = {
    en: {
      label: 'Offline Mode Active',
      offlineBadge: 'No Internet Connection — Serving Cached Stories & Media',
      simulatedBadge: 'Simulated Offline Test Active',
      returnOnline: 'Go Online',
    },
    bn: {
      label: 'অফলাইন মোড সক্রিয়',
      offlineBadge: 'ইন্টারনেট বিচ্ছিন্ন — সংরক্ষিত খবর ও ছবি প্রদর্শিত হচ্ছে',
      simulatedBadge: 'অফলাইন টেস্ট চালু রয়েছে',
      returnOnline: 'অনলাইন করুন',
    },
    hi: {
      label: 'ऑफलाइन मोड सक्रिय',
      offlineBadge: 'इंटरनेट अनुपलब्ध — सेव की गई खबरें व फोटो उपलब्ध हैं',
      simulatedBadge: 'ऑफलाइन परीक्षण चालू है',
      returnOnline: 'ऑनलाइन जाएं',
    },
    ne: {
      label: 'अफलाइन मोड सक्रिय',
      offlineBadge: 'इन्टरनेट छैन — सुरक्षित गरिएका समाचार र भिडियो उपलब्ध छन्',
      simulatedBadge: 'अफलाइन परीक्षण जारी छ',
      returnOnline: 'अनलाइन जानुहोस्',
    },
  };

  const t = messages[language] || messages.en;

  if (!isOffline) {
    return null;
  }

  return (
    <div className="fixed bottom-20 md:bottom-6 left-4 right-4 md:left-auto md:right-6 z-40 max-w-md animate-fade-in">
      <div className="flex items-center justify-between gap-3 rounded-xl bg-slate-900/95 border border-sky-500/40 px-4 py-3 text-white shadow-2xl backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-500/20 text-sky-400">
            <WifiOff className="h-5 w-5 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-sky-300">
                {simulatedOffline ? t.simulatedBadge : t.label}
              </span>
              <span className="inline-block h-2 w-2 rounded-full bg-amber-400 animate-ping" />
            </div>
            <p className="text-xs text-slate-300 line-clamp-1">
              {t.offlineBadge}
            </p>
          </div>
        </div>

        {simulatedOffline && (
          <button
            onClick={onToggleSimulatedOffline}
            className="shrink-0 rounded-lg bg-sky-600 hover:bg-sky-500 px-3 py-1.5 text-xs font-semibold text-white transition shadow-sm"
          >
            {t.returnOnline}
          </button>
        )}
      </div>
    </div>
  );
};
